import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

// Components
import Header from './components/Headers/Header-demo'
import HomePage from './components/Pages/homePage';
import checkoutPage from './components/Pages/checkout-page'
import ShopPage from './components/Pages/shoppage'
//Utils
import { selectCurrentUser } from './Redux/User/user.selector';
import { fetchCollectionStart } from './Redux/Shop/shop.actions'
import { selectIsCollectionFetching } from './Redux/Shop/shop.selector'
// Styling and Plugins
import './assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css'
import 'react-toastify/dist/ReactToastify.min.css';
//  <!-- Plugins CSS File -->
import './assets/css/bootstrap.min.css'
import './assets/css/plugins/owl-carousel/owl.carousel.css'
import './assets/css/plugins/magnific-popup/magnific-popup.css'
import './assets/css/plugins/jquery.countdown.css'
// <!-- Main CSS File -->
import './assets/css/style.css'
import './assets/css/skins/skin-demo-6.css'
import './assets/css/demos/demo-6.css'





class App extends React.Component {

  unsubscribeFromAuth = null;
  componentDidMount() {
    const { fetchCollectionStart } = this.props;
    fetchCollectionStart();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    const { isCollectionFetching } = this.props;

    return (

      <div className='App'>
        <div class='page-wrapper'>
          <Header />
          <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/" render={props => (<HomePage isLoading={isCollectionFetching} {...props} />)} />
          <Route exact path="/checkout" component={checkoutPage} />
          <Route exact path="/shop" component={ShopPage} />
          {/* <Route exact path="/" render={props => (<ShopPage isLoading={isCollectionFetching} {...props} />)} /> */}
          </Switch>
         
        </div>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCollectionFetching: selectIsCollectionFetching,

});


export default connect(mapStateToProps,mapDispatchToProps)(App);
