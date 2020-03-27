'use strict'

import React from 'react'

const Title = ({ name, lastname }) => {
  return <h1>Olá {`${name} ${lastname}`}</h1>
}

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sem sobrenome'
}
/* const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Desconhecido',
      lastname: 'Sem sobrenome'
    }
    - getDefaultProps: propriedade padrão se a propriedade não for passada;
  },
  render: function () {
    return (
      <h1>Olá {this.props.name + ' ' + this.props.lastname.first + this.props.lastname.last}!</h1>
    )
  }
}) */

export default Title
