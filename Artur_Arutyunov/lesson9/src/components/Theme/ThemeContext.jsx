import React, { Component, useState } from 'react'
import CustomTheme from './CustomTheme'
const { Provider, Consumer } = React.createContext()

class ThemeContext extends Component {
  state = {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  }

  handleTheme = (prop) => {
    localStorage.setItem('theme', prop)
  }
  toggleTheme = () => {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' })
    localStorage.getItem('theme') === 'light' ? this.handleTheme('dark') : this.handleTheme('light')
  }

  render() {
    return (
      <Provider
        value={{
          theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
          toggleTheme: this.toggleTheme,
        }}
      >
        <CustomTheme themeStyle={this.state.theme}>{this.props.children}</CustomTheme>
      </Provider>
    )
  }
}

export { ThemeContext as ThemeContextProvider, Consumer as ThemeContextConsumer }
