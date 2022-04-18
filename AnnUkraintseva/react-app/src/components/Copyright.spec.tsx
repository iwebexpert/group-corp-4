import React from "react"
import Copyright from "./Copyright"
import Link from '@mui/material/Link'

import * as renderer from 'react-test-renderer'
import {test, expect} from '@jest/globals'

import {shallow, mount} from 'enzyme'

test('Copyright should be renderer', ()=>{
  // const a=3
  // expect(a).toBe(3)

  const testRenderer = renderer.create(<Copyright sx={{mt:1}}/>)
  const treeJson = testRenderer.toJSON()
  expect(treeJson). toMatchSnapshot()

  const testInstance = testRenderer.root
  expect(testInstance. findByType(Link). props.href). toBe('https://mui.com/')

})

test('Copyright should be renderer as ForwardRef(Link)', ()=>{
  const tree = shallow(<Copyright sx={{mt:1}}/>)
  const aTag = tree.find('ForwardRef(Link)')

  expect(aTag.length).toBe(1)
})

test('Copyright should be renderer as link', ()=>{
  const tree = mount(<Copyright sx={{mt:1}}/>)
  const aTag = tree.find('a')

  expect(aTag.length).toBe(1)
})