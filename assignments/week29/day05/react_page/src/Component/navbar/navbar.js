

function Navbar(props){

    // https://png.pngtree.com/element_our/png_detail/20180807/simple-coffee-elemental-design-png_54845.jpg
    return(
        <main>
            <nav class="navbar fixed-top navbar-light bg-secondary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="googel.com">
                        <img src="https://png.pngtree.com/element_our/png_detail/20180807/simple-coffee-elemental-design-png_54845.jpg" alt="logo" width="50" height="50" />
                    </a>
                    <div>
                        <select className="mx-5 border" name="" id="">
                            <option value="Products">Products</option>
                        </select>
                        <div className="px-3">
                            Enterprice
                        </div>
                        <div className="px-3">
                            Free Trials
                        </div>
                        <div className="px-3">
                            Pricing
                        </div>
                        <div className="px-3">
                            Support & Learning
                        </div>
                        <div className="px-3">
                            About Us
                        </div>
                        <div className="px-3">
                            <img src="../image/search.png" alt="searchlogo"  />
                        </div>
                        <div className="px-3">
                            Your Account 
                        </div>
                        <div className="px-3">
                            Telerik Platform
                        </div>
                    </div>
                </div>
            </nav>

        </main>
    )
}

export {Navbar}


