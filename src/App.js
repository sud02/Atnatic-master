import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';  // Import the new component

function App() {
    const [isSideNavOpen, setSideNavOpen] = useState(false);
    const headerRef = useRef(null);
    const heroTextRef = useRef(null);
    const location = useLocation();

    const toggleSideNav = () => {
        setSideNavOpen(prevState => !prevState);
    };

    const closeSideNav = () => {
        setSideNavOpen(false);
    };

    const handleScroll = () => {
        const header = headerRef.current;
        const heroText = heroTextRef.current;
        const threshold = header ? header.offsetHeight : 0;
    
        if (header) {
            if (window.scrollY > threshold) {
                header.classList.add('visible');
                header.classList.remove('pre-scroll'); // Remove pre-scroll class after scrolling
            } else {
                header.classList.remove('visible');
                header.classList.add('pre-scroll'); // Add pre-scroll class before scrolling
            }
        }
    
        if (heroText) {
            if (window.scrollY >= threshold) {
                heroText.classList.add('sticky');
            } else {
                heroText.classList.remove('sticky');
            }
        }
    };
    

    useEffect(() => {
        headerRef.current.classList.add('pre-scroll'); // Add pre-scroll class initially
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        if (location.pathname === '/') {
            window.scrollTo(0, 0);
            handleScroll(); 
        }
    }, [location.pathname]);

    return (
        <div className="App">
            <Header toggleSideNav={toggleSideNav} ref={headerRef} />
            <SideNav isOpen={isSideNavOpen} closeSideNav={closeSideNav} />
            <Routes>
                <Route path="/" element={
                    <>
                        <HeroSection ref={heroTextRef} />
                        <ProductSection /> {/* Add the ProductSection here */}
                    </>
                } />
            </Routes>
        </div>
    );
}

export default App;
