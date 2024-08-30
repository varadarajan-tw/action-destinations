import { createTestIntegration } from '@segment/actions-core'
import Destination from '../../index'
import { assert } from 'console'

const testDestination = createTestIntegration(Destination)

describe('ActionsBotTestDestination.testAction', () => {
  it('should have the correct name', () => {
    assert(testDestination.name === 'Actions Bot Test Destination')
  })
})
