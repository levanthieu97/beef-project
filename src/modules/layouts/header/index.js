import React, {useRef ,useEffect, useState} from 'react';
import useOnClickOutSide from 'use-onclickoutside';
import { useLocation , Link } from 'react-router-dom';
import Logo from '../../../assets/icons/logo';

const Header = (props) => {
    const location = useLocation();
    console.log(location);
    const [onTop, setOnTop] = useState(location.pathname === '/' ? true : false);
    const [searchOpen, setSearchOpen] = useState(false);
    // apply to mobile
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const searchRef = useRef(null);

    const isOnTopHeader = () => {
        if(window.pageYOffset === 0) {
            console.log(onTop);
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    }

    useEffect(() => {
        if(location.pathname !== '/') return;
        isOnTopHeader();
        console.log(onTop);
        window.onscroll = () => { isOnTopHeader(); };
    },[]);

    const closeMenu = () => {
        setMenuOpen(false);
    }

    const closeSearch = () => {
        setSearchOpen(false);
    }

    useOnClickOutSide(navRef, closeMenu);
    useOnClickOutSide(searchRef, closeSearch);

    return (
        <header className={`site-header ${!onTop ? 'site-header--fixed' : ''}`} >
            <div className="container">
                <Link to='/'>
                    {/* <span className='site-logo'><Logo/></span>  */}
                    <h1 className='site-logo'>NOW DELI</h1>
                </Link>
                <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
                    <Link to='/collections'>Collections</Link>
                    <Link to='#'>Sale</Link>
                    <Link to='/'>Home</Link>
                    <Link to='#'>About</Link>
                    <Link to='#'>FAQ</Link>
                </nav>
                <div className='site-header__actions'>
                    <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
                        <form className='search-form'>
                            <i className='icon-cancel' onClick={() => setSearchOpen(!searchOpen)}/>
                            <input text='text' name='search' placeholder='Enter the product are looking for'/>
                        </form>
                        <i onClick={() => setSearchOpen(!searchOpen)} className='icon-search'/>
                    </button>
                    <Link to="#">
                        <button className='btn-cart'>
                            <i className='icon-cart'/>
                        </button>
                    </Link>
                    <Link to='#'>
                        <button className='site-header__btn-avatar'><i className='icon-avatar'/></button>
                    </Link>
                    <button
                        onClick={() => setMenuOpen(true)}
                        className='site-header__btn-menu'>
                        <i className='btn-hamburger'><span></span></i>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default React.memo(Header);