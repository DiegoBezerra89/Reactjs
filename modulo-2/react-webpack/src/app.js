'use strict'

import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial',
      checked: false
    }
  }

  render () {
    return (
      <form>
        <input
          type='text' value={this.state.value} onChange={(e) => {
            this.setState({ value: e.target.value })
          }}
        />
        <label>
          <input
            type='checkbox'
            value='my-checkbox'
            checked={this.state.checked}
            onChange={(e) => this.setState({ checked: e.target.checked })}
          />
          Checkbox
        </label>
      </form>
    )
  }
}

export default App
/* return (
    <div className='Container'>
      <Square color={this.state.color} />
      {['red', 'blue', 'green'].map((color) => (
        <Button
          key={color}
          handleClick={() => this.setState({ color })}
        >{color}
        </Button>
      ))}
    </div>
  )
*/

/* const App = React.createClass(
    {
      render: function () {
        return (
          <div id='1'>
            <Title name='Diego' />
          </div>
        )
      }
    }
  ) */

/*
  Atributos HTML via props
  - atributos data e aria são escritos normalmente
  - atributos utilizados em camelCase
  <div id='1'>
  <div className='exemplo'> class == className
  <label htmlFor = 'exemplo'> for == htmlFor

  - atributos com valores JS precisam vir sobre {}
      lastname={false}
      lastname={Number={}}
*/

/*
  - FUNÇÕES PURAS:
      - sempre retornam os mesmos valores, sempre que vc passar os mesmos parâmetros {
        function pura ( a, b ) {
          return a + b
        }
        pura( 1, 2 )
        3
        pura( 1, 2 )
        3
        pura( 1, 2 )
        3
        pura( 1, 2 )
        3
        Sempre retorna os mesmos valores ao passar os mesmos parâmetros;
      - impura {
        var obj = { a: 1, b: 2 }
        obj
        { a: 1, b: 2 }

        function impura( a, b ) {
          obj.a = a + b
          return a + b
        }

        impura(1,2)
        3
        impura(1,2)
        3
        impura(1,2)
        3
        obj
        { a: 3, b: 2 }

        - Modifica algo ao serem inserido os mesmos parâmetros
      }

      const Title = ({ name, lastname }) => {
        return <h1>Olá {`${name} ${lastname}`}</h1>
      }
    }

*/
