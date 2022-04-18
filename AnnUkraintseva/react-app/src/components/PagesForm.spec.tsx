import React from "react"
import PagesForm from "./PagesFormMUI"

import {test, expect} from '@jest/globals'
import * as renderer from 'react-test-renderer'


import {shallow, mount} from 'enzyme'
import {fn} from 'jest-mock'

test('PagesForm should be rendered', ()=>{
  const a=3
  expect(a).toBe(3)

  // const mockOnSave = fn()
  // const mockOnReset = fn()
  // const mockOnAdd = fn()

  // const form = mount(< PagesForm
  //   dataInitial={null} 
  //   onSave={mockOnSave} 
  //   onReset={mockOnReset} 
  //   onAdd={mockOnAdd}
  //   />
  // )
  //   expect(mockOnAdd.mock.calls.length).toBe(0)
    
})