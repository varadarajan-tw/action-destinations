import type { ActionDefinition } from '@segment/actions-core'
import type { Settings } from '../generated-types'
import type { Payload } from './generated-types'

const action: ActionDefinition<Settings, Payload> = {
  title: 'Test Action',
  description: 'Test Action Description',
  fields: {
    testField: {
      label: 'Test Field',
      description: 'This is a test field',
      type: 'string',
      required: true
    }
  },
  perform: (_request, _data) => {
    // Make your partner api request here!
    // return request('https://example.com', {
    //   method: 'post',
    //   json: data.payload
    // })
  }
}

export default action
