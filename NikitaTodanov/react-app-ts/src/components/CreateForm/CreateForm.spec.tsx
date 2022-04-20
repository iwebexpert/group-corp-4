import React from 'react'

import { test, expect } from '@jest/globals'
import { fn } from 'jest-mock'

import { mount } from 'enzyme'
import {CreateForm} from './CreateForm'
import { JoinLeftSharp } from '@mui/icons-material'


test('DrillingEquipmentForm should be rendered', () => {
  const mockOnAdd = fn()
  const mockOnReset = fn()
  const mockOnSave = fn()
  const form = mount(
    <CreateForm
      dataInitial={null}
      onAdd={mockOnAdd}
      onReset={mockOnReset}
      onSave={mockOnSave}
    />,
  )
  expect(mockOnAdd.mock.calls.length).toBe(0)
  form.find('button.btn-create').simulate('click')

  expect(mockOnAdd.mock.calls.length).toBe(1)
  expect(mockOnAdd).toBeCalled()
  expect(mockOnAdd).toHaveBeenCalled()

  expect(mockOnAdd.mock.calls[0][0]).toMatchObject({
    url: '/',
    title: "",
    content: "",
    userId: "1",
  })

})