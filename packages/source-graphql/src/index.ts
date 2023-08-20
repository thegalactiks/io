import * as core from '@contentlayer/core'
import { processArgs } from '@contentlayer/core'
import { pipe, S, T } from '@contentlayer/utils/effect'
import type { DocumentTypes } from 'contentlayer/source-files'

import { fetchData } from './fetchData/index.js'
import { provideSchema } from './schema/provideSchema.js'
import type { PluginOptions } from './types.js'

export * from './types.js'
export * from './schema/defs/index.js'

export type Args = {
  documentTypes: DocumentTypes
  url: string
}

export const makeSourcePlugin: core.MakeSourcePlugin<Args & PluginOptions> = (args) => async () => {
  const {
    options,
    extensions,
    restArgs: {
      documentTypes,
      url,
    },
  } = await processArgs(args, undefined)

  const documentTypeDefs = (Array.isArray(documentTypes) ? documentTypes : Object.values(documentTypes)).map((_) =>
    _.def(),
  )

  return {
    type: 'graphql',
    extensions: extensions ?? {},
    options,
    provideSchema: () => pipe(
      provideSchema({ url, documentTypeDefs, options }),
      T.mapError(error => new core.SourceProvideSchemaError({ error }))
    ),
    fetchData: ({ schemaDef }) =>
      pipe(
        S.fromEffect(
          pipe(
            fetchData({
              url,
              coreSchemaDef: schemaDef,
              options,
              documentTypeDefs,
            }),
            T.either,
          ),
        ),
      ),
  }
}
