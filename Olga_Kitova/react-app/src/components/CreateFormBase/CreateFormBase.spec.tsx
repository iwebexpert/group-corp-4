import React from 'react'
import * as renderer from 'react-test-renderer'
import { test, expect } from '@jest/globals'
import CreateFormBase from './CreateFormBase'

const arrayFieldTest = [
  { key: '1', label: 'string_label', name: 'string_name', type: 'text', value: 'test' },
  { key: '2', label: 'string_label2', name: 'string_name2', type: 'text', value: 'test2' },
]
test('Testing with snapshots (CreateFormBase)', () => {
  const testRenderer = renderer.create(<CreateFormBase arrayField={arrayFieldTest} />)
  const treeJson = testRenderer.toJSON()
  expect(treeJson).toMatchSnapshot()
})
