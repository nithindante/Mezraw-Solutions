import React, { useRef, useEffect } from 'react';
import '../styles/Header.css';
import hamburgerIcon from '../assets/hamburger.svg';
import closeIcon from '../assets/close.svg';
import { useMediaQuery } from 'react-responsive';
import FadeinSection from './FadeinSection';
import { Link } from 'react-router';

function Header() {
        const headerItems = [
        { name: 'Home', path: '/' },
        { name: 'About us', path: '/about' },
        { name: 'Fresh', path: '/fresh' },
        { name: 'Brands', path: '/brands' },
        { name:'Dehydrated Vegetables', path: '/dehydrated-vegetables' },
        { name:'Spices', path: '/spices' },
        { name:"Processed",path:'/processed'},
        { name: 'Contact us', path: '/contact' }
    ];
    const isSmallScreen = useMediaQuery({ maxWidth: 1024 });
    const [displayItems, setDisplayItems] = React.useState(false);
    const menuRef = useRef(null);
    function showDisplayItems() {
        setDisplayItems(!displayItems);
    }
    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {

            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setDisplayItems(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);



    return (
        <div className="relative w-full" ref={menuRef}>
            <div className="header-container grid [grid-template-columns:1fr_0.2fr] lg:[grid-template-columns:0.5fr_1fr]">
                <Link to={'/'} className="cursor-pointer !no-underline !hover:no-underline flex items-center"><h3 className='!no-underline hover:!no-underline font-sans justify-center flex-auto header-div text-white'>Mezraw Solutions</h3></Link>
                
                {isSmallScreen ? (
                    <div className='flex justify-center items-center'>
                        <span onClick={() => showDisplayItems(event)} className="cursor-pointer" >
                            <img src={displayItems ? closeIcon: hamburgerIcon} alt="Menu" className="w-8 h-8 cursor-pointer"  />
                            
                        </span>
                    </div>
                ) : null}
                <div className='hidden lg:flex gap-12 justify-center items-center flex-wrap'>
                    {headerItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className='cursor-pointer text-white no-underline hover:!text-green-500 transition-colors duration-300 whitespace-nowrap text-base font-bold'
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Top-Down Sliding Menu */}
            <div

                className={`fixed top-15 left-0 w-full bg-[#444040] z-50 flex flex-col gap-4 py-8 px-6 
                    transform transition-all duration-300 ease-in-out
                    ${displayItems ? 'translate-y-0' : '-translate-y-full'}`}
            >
                {/* Close button */}
                <button
                    onClick={showDisplayItems}
                    className="absolute top-4 right-4 text-white text-2xl"
                >
                    &times;
                </button>

                {/* Menu items */}
                <div className="flex flex-col items-center mt-8">
                    {headerItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className='cursor-pointer text-white text-lg py-3 w-full text-right border-b border-gray-700 hover:!text-green-500 transition-colors duration-300'
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;