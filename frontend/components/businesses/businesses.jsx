import React from 'react';
import BusinessesIndex from './businesses_index';


class Businesses extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchBusinesses({name: 'tea'});
  }


  render() {
    let businessName = this.props.businesses.map(
      business => <BusinessesIndex key={business.id} business={business}/>
    );
    return (
      <div>
          { businessName }
      </div>
    );
  }
}

export default Businesses;
