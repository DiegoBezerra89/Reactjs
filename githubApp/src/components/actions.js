'use strict'

import React, { PropTypes } from 'react'

const Actions = ({ getRepos, getStarred }) => ( // recebe props de app-content, que são na vdd funções
  <div className='actions'>
    <button onClick={getRepos}>Ver repositórios</button>{/* getRepos é uma prop, que possui uma funcao chamada getRepos (getStarred={this.getRepos('repos')) */}
    <button onClick={getStarred}>Ver favoritos</button>{/* getStarred é uma prop que possui uma função chamada getRepos (getStarred={this.getRepos('starred')) */}
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Actions
