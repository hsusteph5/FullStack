import { connect } from 'react-redux';
import { fetchBusinesses, fetchBusiness } from '../../../actions/business_actions';
import MapIndex from './map_index';

const mapStateToProps = (state) => {
  return {
    businesses: Object.values(state.entities.businesses),
    reviews: state.entities.reviews
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchBusinesses: (business) => dispatch(fetchBusinesses(business)),
    fetchBusiness: (id) => dispatch(fetchBusiness(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapIndex)