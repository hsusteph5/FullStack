import React from 'react';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import BusinessesIndex from './businesses_index'

const mapStateToProps = (state) => {
  return { businesses: Object.values(state.entities.businesses)}
}


const mapDispatchToProps = (dispatch) => {
  return { fetchBusinesses: (business) => dispatch(fetchBusinesses(business))}
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessesIndex)
