import type { DestinationDefinition } from '@segment/actions-core'
import type { Settings } from './generated-types'

import testAction from './testAction'

const destination: DestinationDefinition<Settings> = {
  name: 'Actions Bot Test Destination - 4',
  slug: 'actions-actions-bot-test-destination-4',
  mode: 'cloud',
  actions: {
    testAction
  }
}

export default destination
