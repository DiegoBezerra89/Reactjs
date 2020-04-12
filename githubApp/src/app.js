'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: {
        username: 'Diego Bezerra',
        photo: 'https://avatars1.githubusercontent.com/u/33640684?v=4',
        login: 'diegobezerra89',
        repos: 19,
        followers: 1,
        following: 3
      },
      repos: [{
        name: 'Repositório',
        link: '#'
      }],
      starred: [{
        name: 'Repositório',
        link: '#'
      }]
    }
  }

  render () {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
