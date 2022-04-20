import React from "react"
import PagesTable from "./PagesTableMUI"
import {test, expect} from '@jest/globals'
import * as renderer from 'react-test-renderer'


import {shallow, mount} from 'enzyme'
import {fn} from 'jest-mock'

test('Pagestable should be rendered', ()=>{
  const a=3
  expect(a).toBe(3)
  const mockOnDelete = fn()
  const mockOnChange = fn()
  const mockOnForOpen = fn()

  const form = mount(<PagesTable 
    pages={null} 
    onDeletePages={mockOnDelete} 
    getElemForChange={mockOnChange} 
    getElemForOpen={mockOnForOpen}
    />
  )
    expect(mockOnDelete.mock.calls.length).toBe(0)
    // form.find('.btn-delete').simulate('click')

    
})