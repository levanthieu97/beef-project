import React, {useRef ,useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutSide from 'use-onclickoutside';
import { useLocation , Link } from 'react-router-dom';

const Header = (props) => {
    const location = useLocation();
    const {cartItems} = useSelector(state => state.cartSlice);
    const [onTop, setOnTop] = useState(location.pathname === '/' ? true : false);
    const [searchOpen, setSearchOpen] = useState(false);
    // apply to mobile
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);
    const searchRef = useRef(null);

    const isOnTopHeader = () => {
        if(window.pageYOffset === 0) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    }

    useEffect(() => {
        if(location.pathname !== '/') return;
        isOnTopHeader();
        window.onscroll = () => { isOnTopHeader(); };
        return () => {
            isOnTopHeader();
        }
    },[location.pathname]);

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
            <div className="component-container">
                <Link to='/'>
                    {/* <span className='site-logo'><Logo/></span>  */}
                    <h1 className='site-logo'>NOW DELI</h1>
                </Link>
                <nav ref={navRef} className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
                    <Link to='/collections'>COLLECTIONS</Link>
                    <Link to='#'>GIFT CENTER</Link>
                    <Link to='/'>SUBSCRIPTIONS</Link>
                    <Link to='#'>GEAR</Link>
                    <Link to='#'>WE ARE ND</Link>
                </nav>
                <div className='site-header__actions'>
                    <button ref={searchRef} className={`search-form-wrapper ${searchOpen ? 'search-form--active' : ''}`}>
                        <form className='search-form'>
                            <i className='icon-cancel' onClick={() => setSearchOpen(!searchOpen)}/>
                            <input text='text' name='search' placeholder='Enter the product are looking for'/>
                        </form>
                        <i onClick={() => setSearchOpen(!searchOpen)} className='icon-search'/>
                    </button>
                    <Link to="/cart">
                        <button className='btn-cart'>
                            <i className='icon-cart'/>
                            {cartItems.length > 0 && <span className="btn-cart__count">
                                {cartItems.length}
                            </span>}
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