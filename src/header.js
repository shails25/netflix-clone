import { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const scrollHandle = () => {
            window.scrollY > 100 ? setShow(true) : setShow(false)
        }
        
        window.addEventListener("scroll", scrollHandle);

        return () => {
            window.removeEventListener("scroll", scrollHandle);
        }
    }, []);
    return ( 
        <header className={`header ${show&&"header_black"}`}>
            <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png" alt="netflix logo" />
            <img className="header_avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix logo" />
        </header>
     );
}
 
export default Header;