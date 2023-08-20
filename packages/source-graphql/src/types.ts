import type { DocumentContentType } from './schema/defs/index.js'

export type PluginOptions = {
  fieldOptions?: FieldOptions
}

export type GraphQLDocument = Record<string, any> & { _raw: RawDocumentData; _id: string }

type DocumentDefName = string
export type ContentGraphQLFieldMap = Record<DocumentDefName, string>

export type RawDocumentData = {
  /** Relative to `contentDirPath` */
  sourceFilePath: string
  sourceFileName: string
  /** Relative to `contentDirPath` */
  sourceFileDir: string
  contentType: DocumentContentType
  /** A path e.g. useful as URL paths based on `sourceFilePath` with file extension removed and `/index` removed. */
  flattenedPath: string
}

export type FieldOptions = {
  /**
   * Name of the field containing the body/content extracted when `contentType` is `markdown` or `mdx`.
   * @default "body"
   */
  bodyFieldName?: string
  /**
   * Name of the field containing the name of the document type (or nested document type).
   * @default "type"
   */
  typeFieldName?: string
}
