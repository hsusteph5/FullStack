import React from 'react';
import BusinessesIndexItems from './businesses_index_items';


class BusinessesIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.fetchBusinesses({name: 'tea'});
  }


  render() {
    let businessName = this.props.businesses.map(
      business => <BusinessesIndexItems key={business.id} business={business}/>
    );
    return (
      <div>
          { businessName }
      </div>
    );
  }
}

export default BusinessesIndex;
