import React from 'react';
import { connect } from 'react-redux';
import { fetchBusiness, fetchBusinesses } from '../../actions/business_actions';
import BusinessShow from './business_show'

const mapStateToProps = (state, ownProps) => {
  let int = parseInt(ownProps.match.params.businessId);
  return { business: state.entities.businesses[int]}
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusiness: (id) => dispatch(fetchBusiness(id)),
    fetchBusinesses: (business) => dispatch(fetchBusinesses(business))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessShow)
