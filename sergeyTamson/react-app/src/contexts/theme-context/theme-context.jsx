import React, { Component } from 'react'
import { createContext } from 'react'

const { Provider, Consumer } = createContext()

class ThemeContext extends Component {
  state = {
    theme: 'light',
  }

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' })
  }

  render() {
    return (
      <Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { ThemeContext as ThemeContextProvider, Consumer as ThemeContextConsumer }
