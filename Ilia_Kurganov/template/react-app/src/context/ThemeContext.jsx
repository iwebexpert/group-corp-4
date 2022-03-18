import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

class ThemeContext extends Component {
  state = {
    theme: 'light',
  }

  changeTheme = () => {
    this.setState({ theme: this.state.theme === 'light' ? 'dark' : 'light' })
  }

  render() {
    return (
      <Provider value={{ theme: this.state.theme, changeTheme: this.changeTheme }}>
        {this.props.children}
      </Provider>
    )
  }
}

export { ThemeContext , Consumer };