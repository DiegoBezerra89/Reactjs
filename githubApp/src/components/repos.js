'use strict'

import React, { PropTypes } from 'react'

const Repos = ({ className, title, repos }) => ( // recebe 3 props
  <div className={className}> {/* recebe a prop className e determina como um nome de classe (repos ou starred) */}
    <h2>{title}</h2> {/* title neste caso é 'favoritos' ou repositórios */}
    <ul>
      {repos.map((repo, index) => ( // itera sobre o array e formata os li seguintes
        <li key={index}> {/* key é necessario para que o React saiba de qual componente está se tratando, como se fosse um id */}
          <a href={repo.link} target='_blank' rel='noopener noreferrer'>{repo.name}</a> {/* repos.link e repo.name são propriedades do objeto iterado repos */}
        </li>
      ))}
    </ul>
  </div>
)

Repos.defaultProps = {
  className: '' // className recebe '' por padrão
}

Repos.propTypes = { // tipos de props de Repos
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array
}

export default Repos
