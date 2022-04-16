import React from 'react'
import * as renderer from 'react-test-renderer'
import { test, expect } from '@jest/globals'
import CopyrightMUI from './CopyrightMUI'

test('Testing with snapshots (CopyrightMUI)', () => {
  const testRenderer = renderer.create(<CopyrightMUI />)
  const treeJson = testRenderer.toJSON()
  expect(treeJson).toMatchSnapshot()
})
