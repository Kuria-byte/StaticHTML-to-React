import banner1 from '../../assets/images/demos/demo-6/banners/banner-1.jpg'
import banner2 from '../../assets/images/demos/demo-6/banners/banner-2.jpg'

function CollectionPreview() {
    return (
      
        <div class="pt-2 pb-3" style={{display: "block"}}>
            <div class="container">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="banner banner-overlay">
                                <a href="/">
                                    <img src={banner1} alt="Banner"/>
                                </a>

                                <div class="banner-content banner-content-center">
                                    <h4 class="banner-subtitle text-white"><a href="/">New in</a></h4>
                                    <h3 class="banner-title text-white"><a href="/"><strong>Womens</strong></a></h3>
                                    <a href="/" class="btn btn-outline-white banner-link underline">Shop Now</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-6">
                            <div class="banner banner-overlay">
                                <a href="/">
                                    <img src={banner2} alt="Banner"/>
                                </a>

                                <div class="banner-content banner-content-center">
                                    <h4 class="banner-subtitle text-white"><a href="/">New in</a></h4>
                                    <h3 class="banner-title text-white"><a href="/"><strong>Men’s</strong></a></h3>
                                    <a href="/" class="btn btn-outline-white banner-link underline">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="mt-0 mb-0"/>
                </div>
            </div>
           
            
    )
}

export default CollectionPreview
