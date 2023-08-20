import { OT, pipe, T } from '@contentlayer/utils/effect'
import { GraphQLClient } from 'graphql-request'

import { IntrospectionQuery } from '../graphql/IntrospectionQuery.js'
import { UnknownGraphQLError } from '../errors.js'

export type GraphQLType = {
  kind: string
  name: string
  ofType?: GraphQLType | null
}
export type GraphQLIntrospectionSchema = {
  types: Array<GraphQLType & {
    fields: Array<{
      name: string
      type: GraphQLType
      isDeprecated?: boolean
    }> | null
  }>
}

export const executeQuery = <T>({ query, client }: { query: string, client: GraphQLClient }): T.Effect<OT.HasTracer, UnknownGraphQLError, T> =>
  pipe(
    T.tryCatchPromise(
      () => client.request<T>(query),
      (error) => new UnknownGraphQLError({ error })
    ),
    OT.withSpan('@withmoons/source-graphql/graphql:getClient'),
  )

export const getSchema = ({ client }: { client: GraphQLClient }): T.Effect<OT.HasTracer, UnknownGraphQLError, GraphQLIntrospectionSchema> =>
  executeQuery<GraphQLIntrospectionSchema>({ client, query: IntrospectionQuery })

export const getClient = ({ url }: { url: string }): T.Effect<OT.HasTracer, UnknownGraphQLError, GraphQLClient> => {
  return pipe(
    T.try(() => new GraphQLClient(url)),
    OT.withSpan('@withmoons/source-graphql/graphql:getClient'),
    T.mapError((error) => new UnknownGraphQLError({ error })),
  )
}
