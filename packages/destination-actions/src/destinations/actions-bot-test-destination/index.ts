import type { DestinationDefinition } from '@segment/actions-core'
import type { Settings } from './generated-types'

import testAction from './testAction'

const destination: DestinationDefinition<Settings> = {
  name: 'Actions Bot Test Destination - 1',
  slug: 'actions-actions-bot-test-destination-1',
  mode: 'cloud',
  actions: {
    testAction
  }
}

export default destination
