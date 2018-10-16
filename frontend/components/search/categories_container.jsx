import React from 'react';
import { connect } from 'react-redux';
import { fetchBusinesses } from '../../actions/business_actions';
import CategoriesIndex from './categories_index';

const mapStateToProps = (state) => {
  return { name: "" }
}


const mapDispatchToProps = (dispatch) => {
  return { fetchBusinesses: (business) => dispatch(fetchBusinesses(business))}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesIndex)
