import type * as core from '@contentlayer/core'
import type { RelativePosixFilePath } from '@contentlayer/utils'
import type { Has } from '@contentlayer/utils/effect'
import { T, tag } from '@contentlayer/utils/effect'
import type { DocumentContentType, RawDocumentData } from 'contentlayer/source-files'

import type { RawContent } from './types.js'

/** `DocumentContext` is meant as a "container object" that provides useful information when processing a document */
export interface DocumentContext {
  readonly rawContent: RawContent
  readonly relativeFilePath: RelativePosixFilePath
  readonly rawDocumentData: RawDocumentData
  readonly documentTypeDef: core.DocumentTypeDef
}

export const DocumentContext = tag<DocumentContext>(Symbol.for('@contentlayer/source-files/DocumentContext'))

export const getFromDocumentContext = <K extends keyof DocumentContext>(key: K) =>
  T.accessService(DocumentContext)((_) => _[key])

export const getDocumentContext = T.accessService(DocumentContext)((_) => _)

export type HasDocumentContext = Has<DocumentContext>
