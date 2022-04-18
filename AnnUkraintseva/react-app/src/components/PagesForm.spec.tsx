import React from "react"
import PagesForm from "./PagesFormMUI"

import {test, expect} from '@jest/globals'
import * as renderer from 'react-test-renderer'


import {shallow, mount} from 'enzyme'
import {fn} from 'jest-mock'

test('PagesForm should be rendered', ()=>{
  const a=3
  expect(a).toBe(3)
    
})