import banner1 from '../../assets/images/demos/demo-6/banners/banner-1.jpg'
import banner2 from '../../assets/images/demos/demo-6/banners/banner-2.jpg'

function CollectionPreview() {
    return (
      
        <div className="pt-2 pb-3" style={{display: "block"}}>
            <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="banner banner-overlay">
                                <a href="/">
                                    <img src={banner1} alt="Banner"/>
                                </a>

                                <div className="banner-content banner-content-center">
                                    <h4 className="banner-subtitle text-white"><a href="/">New in</a></h4>
                                    <h3 className="banner-title text-white"><a href="/"><strong>Womens</strong></a></h3>
                                    <a href="/" className="btn btn-outline-white banner-link underline">Shop Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">
                            <div className="banner banner-overlay">
                                <a href="/">
                                    <img src={banner2} alt="Banner"/>
                                </a>

                                <div className="banner-content banner-content-center">
                                    <h4 className="banner-subtitle text-white"><a href="/">New in</a></h4>
                                    <h3 className="banner-title text-white"><a href="/"><strong>Men’s</strong></a></h3>
                                    <a href="/" className="btn btn-outline-white banner-link underline">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-0 mb-0"/>
                </div>
            </div>
           
            
    )
}

export default CollectionPreview
