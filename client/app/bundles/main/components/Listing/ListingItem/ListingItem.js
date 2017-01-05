import React from 'react'

const ListingItem = (props) => {
  const { place } = props

  const onMouseOver = (event) => {
    props.emitter.emit( 'LISTING_ITEM_HOVERED', {place} )
  }

  return (
    <tr
      className="ListingItem"
      onMouseOver={onMouseOver}
    >
      <td>
        <p>
          {`${place.street} ${place.city} ${place.state} ${place.zip}`}
        </p>
      </td>
    </tr>
  )
}

export default ListingItem
