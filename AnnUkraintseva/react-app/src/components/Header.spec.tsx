import React from "react"
import Header from "./LoadedForm"

import * as renderer from 'react-test-renderer'
import {test, expect} from '@jest/globals'

import {shallow, mount} from 'enzyme'

test('Copyright should be renderer', ()=>{
  const testRenderer = renderer.create(<Header/>)
  const treeJson = testRenderer.toJSON()
  expect(treeJson). toMatchSnapshot()

})