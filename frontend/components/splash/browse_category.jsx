import React from 'react';
import { withRouter } from "react-router";
import coffee  from '../../../app/assets/images/categories/coffee-cup.png';
import iceCream  from '../../../app/assets/images/categories/ice-cream.png';
import restaurant  from '../../../app/assets/images/categories/restaurant.png';
import tea  from '../../../app/assets/images/categories/tea.png';

class BrowseCategory extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: "",
        }
        this.searchBusinesses = this.searchBusinesses.bind(this);
      }
    
    
    //fetches the business by category
    //then pushes to the new url
    //must fetch the business {name: category}
      searchBusinesses(category){
        return (e) => {
            e.preventDefault();
            this.setState({name: category});
            this.props.fetchBusinesses(this.state)
                .then(() => this.props.history.push({pathname:'/businesses', search: `?name=${this.state.name}`}))
                .then(() => window.scrollTo(0,0));
        }
      }
    
      render() {
        return (
            <div className="browse-category"> 
                <h2>Browse Businesses by Category</h2>
                <div className="browse-category-container">
                    
                    <div className="splash-category-index" onClick={this.searchBusinesses('coffee & tea')}>
                        <img src= { coffee } className="splash-category-images"></img>
                        <h4>Coffee & Tea</h4>
                    </div>

                    <div className="splash-category-index" onClick={this.searchBusinesses('dessert')}>
                        <img src = { iceCream } className="splash-category-images"></img>
                        <h4>Desserts</h4>
                    </div>

                    <div className="splash-category-index" onClick={this.searchBusinesses('cafe')}>
                        <img src = { restaurant } className="splash-category-images"></img>
                        <h4>Cafe</h4>
                    </div>

                    <div className="splash-category-index" onClick={this.searchBusinesses('bubble tea')}>
                        <img src = { tea } className="splash-category-images"></img>
                        <h4>Bubble tea</h4>
                    </div>
                </div>
            </div>
        );
      }
    
}

export default withRouter(BrowseCategory);