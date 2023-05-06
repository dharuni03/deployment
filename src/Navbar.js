import { useRef } from "react";
import "./App.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <nav ref={navRef}>
                <a href="/#">Google</a>
                <a href="/#">Yahoo</a>
                <a href="/#">Wikipedia</a>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
            </button>
        </header>
    );
}

export default Navbar
   