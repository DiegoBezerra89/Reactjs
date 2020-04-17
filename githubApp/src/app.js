'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax' // lib para requisições Ajax
import AppContent from './components/app-content'

class App extends Component {
  constructor () { // estado da aplicação
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
    this.handleSearch = this.handleSearch.bind(this) // transforma o this do handleSearch no this do componente, evitando utilizar uma arrow function
  }

  handleSearch (e) { // manipula a pesquisa e seta o estado da aplicação de acordo com o response
    const value = e.target.value // pega o valor do elemento do evento
    const keyCode = e.which || e.keyCode // pega toda tecla digitada, e o seu codigo
    const ENTER = 13 // determina que o ENTER será de valor 13, que é o mesmo valor da tecla ENTER
    // const target = e.target // determina q target receberá o target do evento <input type="search" placeholder="pesquisar">
    if (keyCode === ENTER) { // se o keycode for igual a ENTER
      // target.disabled = true // target possui propriedade, pois é um objeto React, desabilita o campo de busca
      this.setState({
        userinfo: null,
        repos: [],
        starred: [],
        isFetching: true
      })
      // console.log(target) // <input type="search" placeholder="pesquisar">
      ajax().get(`https://api.github.com/users/${value}`) // utiliza a lib ajax para fazer um requisição, substitui o nome do usuario pela variavel value
        .then((result) => { // recebe o response do request
          this.setState({ // seta o estado da aplicação
            userinfo: { // propriedade userinfo, que é um objeto
              username: result.name, // result é o parametro do objeto resultante do Request, possui diversas propriedades, verificar em https://api.github.com/users/${value}
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [], // seta os estados como vazios para que por enquanto não apareçam
            starred: []
          })
        })
        .always(() => { // always é um método da lib ajax, que sempre é executado
          this.setState({
            isFetching: false
          }) // habilita o campo de busca assim que o response for recebido
        })
    }
  }

  getGitHubApiUrl (username, type) { // facilita a manipulação da url do github
    const internalType = type ? `/${type}` : '' // type existe? sim, internalType = '/repos'. não, internalType = ''
    const internalUsername = username ? `/${username}` : '' // username existe? sim, internalUsername = '/diegobezerra89'. não, internalUsername = ''
    return `https://api.github.com/users${internalUsername}${internalType}` // retorna https://api.github.com/users/diegobezerra89/repos
  }

  getRepos (type) { // pega os repositorios
    return (e) => { // evento normalizado do React
      const username = this.state.userinfo.login // define username como a propriedade login de userinfo no estado atual da aplicação 'result.login' em handleSearch
      ajax().get(this.getGitHubApiUrl(username, type)) // faz uma requisição ajax utilizando como url o retorno da função getGithubApiUrl(diegobezerra89, repos)
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => ({ // [type]: dessa maneira é possível setar uma propriedade de um objeto corretamente por meio de um parametro, como repos é um array de objetos, é possível aplicar a .map(), que itera sobre cada posição do array, repo trata-se do objeto em si, traz consigo todas as propriedades do array iterado
              name: repo.name, // seta a propriedade name, de repos ou starred, de acordo com o parametro passado
              link: repo.html_url // seta a propriedade html_url, de repos ou starred, de acordo com o parametro passado
            }))
          })
        })
    }
  }

  render () { // método responsável por renderizar o componente
    return (
      <AppContent // componente AppContent
        {...this.state}
        handleSearch={this.handleSearch} // propriedade que possui uma função de evento, pode ser um clique, no caso é a tecla enter
        getRepos={this.getRepos('repos')} // propriedade que executa a função getRepos com o parametro 'repos'
        getStarred={this.getRepos('starred')} // propriedade que executa a funcao getRepos com o parametro 'starred'
        isFetching={this.state.isFetching}
      />
    )
  }
}

export default App
