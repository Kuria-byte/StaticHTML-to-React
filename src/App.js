import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

// Components
import Header from './components/Headers/Header-demo'
import HomePage from './components/Pages/homePage';
import Footer from './components/Footer/Footer'
//Utils
import { selectCurrentUser } from './Redux/User/user.selector';
// Styling and Plugins
import './assets/vendor/line-awesome/line-awesome/line-awesome/css/line-awesome.min.css'
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
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {

    return (

      <div className='App'>
        <div class='page-wrapper'>
          <Header />
          <Switch>
          <Route exact path="/" component={HomePage} />
            <Footer />
          </Switch>
        </div>
      </div>

    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default connect(mapStateToProps)(App);
