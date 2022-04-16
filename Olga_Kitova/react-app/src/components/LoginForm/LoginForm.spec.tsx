import React from 'react'
import * as renderer from 'react-test-renderer'
import { test, expect } from '@jest/globals'
import LoginForm from './LoginForm'

test('Testing with snapshots (LoginForm)', () => {
  const testRenderer = renderer.create(<LoginForm handleSuccessAuth={() => {}} />)
  const treeJson = testRenderer.toJSON()
  expect(treeJson).toMatchSnapshot()
})
