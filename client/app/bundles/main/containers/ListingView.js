import React from 'react'
import { connect }          from 'react-redux'
import { EventEmitter }     from 'fbemitter'

import actions from '../actions'

// Components
import MapComponent from '../components/MapComponent/MapComponent'
import Listing      from '../components/Listing/Listing'

class ListingView extends React.Component {
  render() {
    return (
      <div className="columns">
        <div className="column" style={{ padding: 0 }}>

          <Listing
            {...this.props}
            emitter={this.emitter}
          />

        </div>
        <div className="column" style={{ padding: 0 }}>

          <MapComponent
            {...this.props}
            emitter={this.emitter}
          />

        </div>
      </div>
    )
  }


  // ---
  // LIFECYCLE HOOKS
  // ---


  // https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
  // http://qiita.com/mizchi/items/6a3500e598ec36746509
  componentWillMount() {
    // Create a emitter for this container.
    this.emitter = new EventEmitter()

    this.emitter.addListener('MAP_MARKER_HOVERED', payload => {
      console.log(`MAP_MARKER_HOVERED`)

      this.props.dispatch(
        actions.place.setCurrentPlace(payload.place)
      )
    })

    this.emitter.addListener('MAP_MOVED', payload => {
      console.log(`MAP_MOVED`)

      this.props.dispatch(
        actions.map.update(payload)
      )
    })

    this.emitter.addListener('MARKER_CLICKED', payload => {
      console.log(`MARKER_CLICKED`)

      const { place } = payload

      this.props.dispatch(
        actions.place.setCurrentPlace(place)
      )
    })

    this.emitter.addListener('MARKER_HOVERED', payload => {
      console.log(`MARKER_HOVERED`)

      const { place } = payload

      this.props.dispatch(
        actions.place.setCurrentPlace(place)
      )
    })

    this.emitter.addListener('MAP_ZOOM_CHANGED', payload => {
      console.log(`MAP_ZOOM_CHANGED`)

      this.props.dispatch(
        actions.map.update(payload)
      )
    })

    this.emitter.addListener('LISTING_ITEM_HOVERED', payload => {
      console.log(`LISTING_ITEM_HOVERED`)

      const { place } = payload

      this.props.dispatch(
        actions.place.setCurrentPlace(place)
      )
    })
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(
      actions.place.fetchAllPlaces()
    )
  }

  componentWillUnmount() {
    this.emitter.removeAllListeners()
  }
} // end class



// ---
// CONNECT TO STORE
// ---


const mapStateToProps = function(store) {
  const { places, currentPlace } = store.place
  const { bounds, center, zoom } = store.map

  return {
    places,
    currentPlace,
    bounds,
    center,
    zoom,
  }
}

const mapDispatchToProps = null

export default connect( mapStateToProps, mapDispatchToProps )( ListingView )
