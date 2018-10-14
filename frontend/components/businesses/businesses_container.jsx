import React from 'react';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import Businesses from './businesses'

const mapStateToProps = (state) => {
  return { businesses: Object.values(state.entities.businesses)}
}


const mapDispatchToProps = (dispatch) => {
  return { fetchBusinesses: (business) => dispatch(fetchBusinesses(business))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Businesses)
