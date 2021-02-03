import React from 'react'

const SearchBar = () => {
    return (
        <div>
            <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                <a href="/" className="search-toggle" role="button"><i className="icon-search"></i></a>
                <form action="#" method="get">
                    <div className="header-search-wrapper search-wrapper-wide">
                        <label for="q" className="sr-only">Search</label>
                        <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                        <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBar
