'use strict'

import React, { PropTypes } from 'react'

const Search = ({ handleSearch, isDisabled }) => ( // recebe de app-content a prop handleSearch, para Search, esta prop não significa uma função, ele não sabe do que se trata
  <div className='search'>
    <input
      type='search'
      placeholder='Pesquisar'
      onKeyUp={handleSearch} // aqui a handleSearch é atribuída a um evento, neste caso o aperto de uma tecla, em handleSearch essa tecla é ENTER(13)
      disabled={isDisabled}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired, // Search possui uma prop do tipo função e é obrigatória
  isDisabled: PropTypes.bool.isRequired
}

export default Search
