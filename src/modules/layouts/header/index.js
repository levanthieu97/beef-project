import React, {useRef ,useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useOnClickOutSide from 'use-onclickoutside';
import { Link } from 'react-router-dom';
import {isSmallLayout} from '../../../store/actions/GlobalAction';

const Header = (props) => {
    const {numberProduct} = useSelector(state => state.cartSlice);
    const [onTop, setOnTop] = useState(props.location.pathname === '/' ? true : false);
    const [searchOpen, setSearchOpen] = useState(false);
    // apply to mobile
    const [menuOpen, setMenuOpen] = useState(false);
    const dispatch = useDispatch();
    const navRef = useRef(null);
    const searchRef = useRef(null);
    const ref = useRef({
        innerWidth: 0,
    })

    const isOnTopHeader = () => {
        if(window.pageYOffset === 0) {
            setOnTop(true);
        } else {
            setOnTop(false);
        }
    }

    useEffect(() => {
        if(props.location.pathname !== '/') {
            return;
        } 
        window.listenEvent("scroll", isOnTopHeader);
        return () => {
            window.stopListenEvent("scroll", isOnTopHeader);
        }
    },[]);

    useEffect(() => {
        window.listenEvent("resize", resize);
        return () => {
            window.stopListenEvent("resize", resize);
        }
    },[])

    const resize = () => {
        if(ref.current.innerWidth !== window.innerWidth) {
            ref.current.innerWidth = window.innerWidth;
            if(window.innerWidth <= 767) {
                dispatch(isSmallLayout(true));
            } else {
                dispatch(isSmallLayout(false))
            }
        }
    }

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
                    <img className="site-logo" src="/beef/images/logo-main.png"/>
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
                            {numberProduct > 0 && <span className="btn-cart__count">
                                {numberProduct}
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