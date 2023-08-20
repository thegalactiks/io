import { makeSourcePlugin, defineDocumentType } from '@withmoons/source-graphql'
import { ContentLayerArticleFields, ContentLayerWebsiteFields, ContentLayerOrganizationFields, ContentLayerPageFields, ContentLayerPersonFields } from '@withmoons/explorer'

const Article = defineDocumentType(() => ({
  ...ContentLayerArticleFields,
  graphqlField: 'articles',
  contentType: 'mdx',
}))

const Page = defineDocumentType(() => ({
  ...ContentLayerPageFields,
  graphqlField: 'pages',
  contentType: 'mdx',
}))

const Person = defineDocumentType(() => ({
  ...ContentLayerPersonFields,
  graphqlField: 'persons',
  contentType: 'mdx',
}))

const Organization = defineDocumentType(() => ({
  ...ContentLayerOrganizationFields,
  graphqlField: 'organizations',
  contentType: 'mdx',
}))

const Website = defineDocumentType(() => ({
  ...ContentLayerWebsiteFields,
  graphqlField: 'websites',
  contentType: 'mdx',
}))

export default makeSourcePlugin({
  url: 'http://localhost:8080/v1/graphql',
  documentTypes: [Article, Organization, Page, Person, Website],
  mdx: {},
  disableImportAliasWarning: true,
})
