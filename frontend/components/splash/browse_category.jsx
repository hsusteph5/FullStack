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
                    
                    <div className="splash-category-index">
                        <img src= { coffee } className="splash-category-images" onClick={this.searchBusinesses('coffee & tea')}></img>
                        <h4>Coffee & Tea</h4>
                    </div>

                    <div className="splash-category-index">
                        <img src = { iceCream } className="splash-category-images" onClick={this.searchBusinesses('dessert')}></img>
                        <h4>Desserts</h4>
                    </div>

                    <div className="splash-category-index">
                        <img src = { restaurant } className="splash-category-images" onClick={this.searchBusinesses('cafe')}></img>
                        <h4>Cafe</h4>
                    </div>

                    <div className="splash-category-index">
                        <img src = { tea } className="splash-category-images" onClick={this.searchBusinesses('bubble tea')}></img>
                        <h4>Bubble tea</h4>
                    </div>
                </div>
            </div>
        );
      }
    
}

/* <div className="background-search-icons">
            <div className="search-icons-container" onClick={this.searchBusinesses('coffee & tea')}>
              <i className="fas fa-coffee"></i>
              <button className="search-icon-button">Coffee & Tea</button>
            </div>
            <div className="search-icons-container" onClick={this.searchBusinesses('cafe')}>
              <i className="fas fa-store"></i>
              <button className="search-icon-button">Cafe</button>
            </div>
    
            <div className="search-icons-container" onClick={this.searchBusinesses('dessert')}>
              <i className="fas fa-birthday-cake"></i>
              <button className="search-icon-button">Dessert</button>
            </div>
    
</div> */

export default withRouter(BrowseCategory);


// constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//     }
//     this.searchBusinesses = this.searchBusinesses.bind(this);
// }


// searchBusinesses(category){
//     return (e) => {
//       e.preventDefault();
//       this.setState({name: category});
//       this.props.fetchBusinesses(this.state)
//       .then(() => this.props.history.push({pathname:'/businesses', search: `?name=${this.state.name}`}));
//     }
// }

// render() {
//     return(
//         <div className="browse-category"> 
//             <h2>Browse Businesses by Category</h2>
//             <div className="browse-category-container">
                
//                 <div className="splash-category-index">
//                     <img src = { coffee } style={{width: 50, height: 50, objectFit: 'cover'}} onClick={this.searchBusinesses('coffee & tea')}></img>
//                     <h4>Coffee & Tea</h4>
//                 </div>

//                 <div className="splash-category-index">
//                     <img src = { iceCream } style={{width: 50, height: 50, objectFit: 'cover'}} onClick={this.searchBusinesses('dessert')}></img>
//                     <h4>Desserts</h4>
//                 </div>

//                 <div className="splash-category-index">
//                     <img src = { restaurant } style={{width: 50, height: 50, objectFit: 'cover'}} onClick={this.searchBusinesses('cafe')}></img>
//                     <h4>Cafe</h4>
//                 </div>

//                 <div className="splash-category-index">
//                     <img src = { tea } style={{width: 50, height: 50, objectFit: 'cover'}} onClick={this.searchBusinesses('bubble tea')}></img>
//                     <h4>Bubble tea</h4>
//                 </div>
//             </div>

//         </div>
//     );
// }