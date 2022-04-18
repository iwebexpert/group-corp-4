import React from 'react'

import { CopyRight } from './CopyRight'

import * as renderer from 'react-test-renderer'
import { test, expect } from '@jest/globals'
import  Link  from '@mui/material/Link'
import { shallow, mount } from 'enzyme'


test('Copyright should be rendere', () => {
  // const a = 3
  // expect(a).toBe(3)

  const testRenderer = renderer.create(<CopyRight />)
  const treeJson = testRenderer.toJSON()
  expect(treeJson).toMatchSnapshot()

  const testInstance = testRenderer.root
  expect(testInstance.findByType(Link).props.href).toBe('https://mui.com/')
})

test('Copyright should be rendere with enzyme', () => {

  // const tree = shallow(<CopyRight />)
  // const a = tree.find('ForwardRef(Typography)')

  const tree = mount(<CopyRight />)
  const a = tree.find('a')

  // console.log(tree.debug())

  expect(a.length).toBe(1)
})
