import React from 'react'

const SearchBar = (props) =>  {
  const { emitter } = props

  let textInput = ''

  return (
      <div className="columns">
        <input
          id="q"
          className="column"
          type="text"
          placeholder="Search"
          ref={ input => { textInput = input }}
        />
        <button
          className="column"
          type="button"
          onClick={event => {
            emitter.emit( 'SEARCH_BAR_SUBMIT', { q: textInput.value } )
            textInput.value = ''
          }}>
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>

  )
} // end component

export default SearchBar
