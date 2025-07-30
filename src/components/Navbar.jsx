import { Link } from "react-router-dom";



function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Link class="nav-link active" aria-current="page" to={"/"}>logo</Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="//#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">

                                <Link class="nav-link active" aria-current="page" to={"/"}>Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default Navbar;  