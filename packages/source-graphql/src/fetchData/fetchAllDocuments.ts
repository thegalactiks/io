import * as core from '@contentlayer/core'
import { OT, pipe, T } from '@contentlayer/utils/effect'
import * as gql from 'gql-query-builder'
import type { GraphQLClient } from 'graphql-request'

import { executeQuery, getClient } from './graphql.js'
import type { RawContent } from './types'
import type { ContentGraphQLFieldMap } from '../types.js'
import type { FetchDataError } from '../errors/index.js'

export const fetchAllDocuments = ({
  url,
  schemaDef,
  contentTypeMap,
  options,
}: {
  url: string
  schemaDef: core.SchemaDef
  contentTypeMap: ContentGraphQLFieldMap
  options: core.PluginOptions
}): T.Effect<OT.HasTracer, core.SourceFetchDataError, core.DataCache.Cache> =>
  pipe(
    T.gen(function* ($) {
      const client = yield* $(getClient({ url }))

      const documents = yield* $(
        T.forEachParDict_(Object.entries(contentTypeMap), {
          mapValue: ([, graphqlField]) => processRawContent({ graphqlField, client }),
          mapKey: ([key]) => T.succeed(key)
        })
      )

      // const cacheItemsMap = Object.fromEntries(Object.entries(documents).map((_) => [_._id, _]))
      const cacheItemsMap = {}

      return { cacheItemsMap }
    }),
    OT.withSpan('@contentlayer/source-graphql/fetchData:fetchAllDocuments', {
      attributes: { schemaDef: JSON.stringify(schemaDef) },
    }),
    T.mapError((error) => new core.SourceFetchDataError({ error, alreadyHandled: false })),
  )

const processRawContent = ({
  graphqlField,
  client
}: {
  graphqlField: string,
  client: GraphQLClient
}) => {
  const gqlQuery = gql.query({
    operation: graphqlField,
    fields: ['id']
  })

  const document = pipe(
    executeQuery<RawContent>({ client, ...gqlQuery }),
    OT.withSpan('@contentlayer/source-graphql/fetchData:processRawContent'),
  )
  
  // const computedValues = yield* $(
  //   getComputedValues({ documentTypeDef, document }),
  // )
  // if (computedValues) {
  //   Object.entries(computedValues).forEach(([fieldName, value]) => {
  //     document[fieldName] = value
  //   })
  // }

  return document
}

// const getComputedValues = ({
//   document,
//   documentTypeDef,
// }: {
//   documentTypeDef: core.DocumentTypeDef
//   document: core.Document
// }): T.Effect<unknown, FetchDataError.ComputedValueError, undefined | Record<string, any>> => {
//   if (documentTypeDef.computedFields === undefined) {
//     return T.succeed(undefined)
//   }

//   return pipe(
//     documentTypeDef.computedFields,
//     T.forEachParDict({
//       mapKey: (field) => T.succeed(field.name),
//       mapValue: (field) =>
//         T.tryCatchPromise(
//           async () => field.resolve(document),
//           (error) => new FetchDataError.ComputedValueError({ error, documentTypeDef }),
//         ),
//     }),
//   )
// }
