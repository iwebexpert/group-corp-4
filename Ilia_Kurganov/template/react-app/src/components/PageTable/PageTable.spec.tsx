import React from 'react'
import * as renderer from 'react-test-renderer'
import { test, expect } from '@jest/globals'
import { shallow, mount } from 'enzyme'
import PageTable from './PageTable'
import { fn } from 'jest-mock'
import { MemoryRouter } from 'react-router-dom'
import { tableRowClasses } from '@mui/material'

test('PageTable have same snapshot', () => {
  const row = [
    {
      id: '442423423423',
      url: 'page2',
      title: 'Page2',
      content: 'Some content...',
      userId: '3',
    },
    {
      id: '321312',
      url: 'page2',
      title: 'Page2',
      content: 'Some content...',
      userId: '4',
    },
  ]
  const mockDelitePage = fn()
  const mockEditPage = fn()
  const mockSavePage = fn()
  const mockChangeField = fn()
  const table = renderer.create(
    <MemoryRouter>
      <PageTable
        tableRows={row}
        delitePage={mockDelitePage}
        editPage={mockEditPage}
        savePage={mockSavePage}
        changeField={mockChangeField}
        role="admin"
      />
    </MemoryRouter>,
  )
  const treeJson = table.toJSON()
  expect(treeJson).toMatchSnapshot()
})

test('PageTable should be rendered', () => {
  const row = [
    {
      id: '442423423423',
      url: 'page2',
      title: 'Page2',
      content: 'Some content...',
      userId: '3',
      isEdit:true
    },
  ]
  const mockDelitePage = fn()
  const mockEditPage = fn()
  const mockSavePage = fn()
  const mockChangeField = fn()
  const table = mount(
    <MemoryRouter>
      <PageTable
        tableRows={row}
        delitePage={mockDelitePage}
        editPage={mockEditPage}
        savePage={mockSavePage}
        changeField={mockChangeField}
        role="admin"
      />
    </MemoryRouter>,
  )

  // console.log(table.debug())

    table.find('svg.edit-svg').simulate('click')
    // table.find({type:'svg'}).at(2).simulate('click')
  //   table.find('svg').simulate('click')
  //   expect(mockEditPage.mock.calls.length).toBe(1)
    expect(mockEditPage).toBeCalled()
  //   expect(mockEditPage).toHaveBeenCalled()

  //   expect(mockEditPage.mock.calls[0][0]).toEqual('442423423423')


  table.find("#content").at(0).simulate('change', {target:{value:'12345'}})
  table.find('svg.save-svg').simulate('click')

  expect(mockEditPage.mock.calls[0][0]).toEqual('442423423423')
})
