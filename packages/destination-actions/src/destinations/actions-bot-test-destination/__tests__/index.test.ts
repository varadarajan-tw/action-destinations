import { createTestIntegration } from '@segment/actions-core'
import Definition from '../index'
import { assert } from 'console'

const testDestination = createTestIntegration(Definition)

describe('Actions Bot Test Destination', () => {
  it('should have the correct name', () => {
    assert(testDestination.name === 'Actions Bot Test Destination')
  })
})
