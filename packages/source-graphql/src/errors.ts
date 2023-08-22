import { errorToString } from '@contentlayer/utils'
import { Tagged } from '@effect-ts/core/Case'

export class UnknownGraphQLError extends Tagged('UnknownGraphQLError')<{ readonly error: unknown }> {
  toString = () => `UnknownGraphQLError: ${errorToString(this.error)}`
}
