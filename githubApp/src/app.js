'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input type='search' placeholder='Pesquisar' />
    </div>
    <div className='user__photo'>
      <img src='https://avatars1.githubusercontent.com/u/33640684?v=4' />
    </div>
    <div className='user__info'>
      <h1>
        <a href='https://github.com/DiegoBezerra89' target='_blank'>Diego Bezerra</a>
      </h1>
      <ul>
        <li>Repositórios: 19</li>
        <li>Seguidores: 01</li>
        <li>Seguindo: 03</li>
      </ul>
    </div>
    <div className='actions'>
      <button>Ver repositórios</button>
      <button>Ver favoritos</button>
    </div>
    <div className='repositorios'>
      <h2>Repositórios</h2>
      <ul>
        <li>
          <a href='#'>Nome do Repositório</a>
        </li>
      </ul>
    </div>
    <div className='favoritos'>
      <h2>Favoritos</h2>
      <ul>
        <li>
          <a href='#'>Nome do Favorito</a>
        </li>
      </ul>
    </div>
  </div>
)

export default App
