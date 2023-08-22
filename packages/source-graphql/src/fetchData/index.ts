import * as core from '@contentlayer/core'
import { pipe, type OT, type T } from '@contentlayer/utils/effect'

import { fetchAllDocuments } from './fetchAllDocuments.js'
import type * as LocalSchema from '../schema/defs/index.js'
import type { ContentGraphQLFieldMap } from '../types.js'

export const fetchData = ({
  coreSchemaDef,
  documentTypeDefs,
  options,
  url,
}: {
  coreSchemaDef: core.SchemaDef
  documentTypeDefs: LocalSchema.DocumentTypeDef[]
  options: core.PluginOptions,
  url: string
}): T.Effect<OT.HasTracer, core.SourceFetchDataError, core.DataCache.Cache> => {
  const contentTypeMap = makeContentTypeMap(documentTypeDefs)

  return pipe(
    fetchAllDocuments({
      schemaDef: coreSchemaDef,
      options,
      url,
      contentTypeMap,
    }),
  )
}

const makeContentTypeMap = (documentTypeDefs: LocalSchema.DocumentTypeDef[]): ContentGraphQLFieldMap =>
  Object.fromEntries(
    documentTypeDefs.filter((_) => _.graphqlField).map((documentDef) => [documentDef.name, documentDef.graphqlField!]),
  )
