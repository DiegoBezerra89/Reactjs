'use strict' // app-content possui toda a estrutura dos oomponentes da aplicação, evitando assim mexer no app.js

import React, { PropTypes } from 'react' // { PropTypes } diz respeito aos tipos das propriedades do componente
import Search from './search' // importando o componente Search
import UserInfo from './user-info' // '' UserInfo
import Actions from './actions' // '' Actions
import Repos from './repos' // '' Repos

const AppContent = ({ // recebendo as props determinadas em app.js
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className='app'> {/* div com a classe app, será renderizada no nosso html */}
    <Search handleSearch={handleSearch} isDisabled={isFetching} /> {/* handleSearch  recebe aqui a prop handleSearch, que é uma função definida em app.js */}
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />} {/* !!userinfo, testa o estado booleano de userinfo, se true, renderiza <UserInfo /> com a prop userinfo={passando a prop recebida userinfo} */}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />} {/* renderiza o componente Actions com as propriedades getRepos={passando a prop recebida getRepos(que é uma função executada em app.js)} | e getRepos={passando a prop recebida getStarred(que é uma função executada em app.js)} */}
    {!!repos.length && // repos.length é true, != 0 ? então renderiza Repos  obs: comentario nao precisa de chaves pois trata-se de js
      <Repos // enviando as props className, title e repos, para Repos
        className='repos'
        title='Repositórios'
        repos={repos}
      />}
    {!!starred.length && // starred.length é true? então é renderizado Repos
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
      />}
  </div>
)

AppContent.propTypes = { // define os tipos de propriedades recebidas pelo AppContent
  userinfo: PropTypes.object, // userinfo é uma prop do tipo objeto
  repos: PropTypes.array.isRequired, // repos é uma prop do tipo array, e é obrigatória
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired // starred é uma propriedade do tipo array e é obrigatoria
}

export default AppContent
