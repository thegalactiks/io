import type { Thunk } from '@contentlayer/utils'
import type { DocumentTypeDef as SFDocumentTypeDef } from 'contentlayer/source-files'

export type { ComputedFields, DocumentContentType, NestedUnnamedTypeDef, NestedType, FieldDef, FieldDefs, NestedTypeDef, ListFieldDefItem } from 'contentlayer/source-files'
export {
  isNestedTypeDef,
  isNestedUnnamedTypeDef,
  defineNestedType,
  defineFields,
  defineComputedFields,
  isListPolymorphicFieldDef,
  isNestedPolymorphicFieldDef,
  isReferencePolymorphicFieldDef
} from 'contentlayer/source-files'

export type DocumentTypeDef<DefName extends string = string> = SFDocumentTypeDef<DefName> & {
  graphqlField?: string
}

export type DocumentType<DefName extends string = string> = { type: 'document'; def: Thunk<DocumentTypeDef<DefName>> }

// `<any>` cast here is needed here to flip variance (see https://github.com/contentlayerdev/contentlayer/issues/33)
export type DocumentTypes = DocumentType<any>[] | Record<string, DocumentType<any>>

export const defineDocumentType = <DefName extends string>(
  def: Thunk<DocumentTypeDef<DefName>>,
  // NOTE we're not using the generic `DefName` here because it causes problems with when using the defined document type
): DocumentType => ({
  type: 'document',
  def,
})
