// Components
import Header from './components/Headers/Header-demo'
import HomeSlider from './components/HomeSlider/Home-Slider'
import CollectionPreview from './components/Collections/CollectionPreview'


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


function App () {
  return (
    <div className='App'>
      <div class='page-wrapper'>
        <Header/>
         <HomeSlider/>
        <CollectionPreview/>
      </div>
    </div>

  )
}

export default App
