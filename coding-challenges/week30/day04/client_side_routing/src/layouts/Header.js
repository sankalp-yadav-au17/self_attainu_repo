import { BrowserRouter, Route, Link } from "react-router-dom";


 function Header(){

    return(
        <main>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand active text-decoration-none">
                        <Link to='/'>Navbar</Link>
                    </div>
                    
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <div className="nav-link text-decoration-none">
                                <Link to='/users'>Users</Link>
                            </div>
                        </li>
                        <li class="nav-item">
                        <div className="nav-link text-decoration-none">
                            <Link to='/comments'>Comments</Link>
                        </div>
                            
                        </li>
                    </ul>
                </div>
            </nav>
        </main>
    )
 }

 export {Header}