import React, { useRef, useEffect, useState } from 'react';
import hamburgerIcon from '../assets/hamburger.svg';
import closeIcon from '../assets/close.svg';
import { Link, NavLink } from 'react-router';

const headerItems = [
    { name: 'Home', path: '/' },
    { name: 'About us', path: '/about' },
    { name: 'Fresh', path: '/fresh' },
    { name: 'Brands', path: '/brands' },
    { name: 'Dehydrated Vegetables', path: '/dehydrated-vegetables' },
    { name: 'Spices', path: '/spices' },
    { name: 'Processed', path: '/processed' },
    { name: 'Contact us', path: '/contact' }
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Close menu when clicking outside or pressing Escape
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        }
        function handleKeyDown(event) {
            if (event.key === 'Escape') setMenuOpen(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <header className="relative w-full bg-header text-white" ref={menuRef}>
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
                <Link to="/" className="font-display text-lg font-bold text-white no-underline sm:text-xl">
                    Mezraw Solutions
                </Link>

                <nav aria-label="Main" className="hidden items-center gap-8 xl:flex">
                    {headerItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end
                            className={({ isActive }) =>
                                `whitespace-nowrap text-base font-semibold no-underline transition-colors duration-150 ease-out [@media(hover:hover)]:hover:text-brand-light ${isActive ? 'text-brand-light' : 'text-white'}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                <button
                    type="button"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    className="-mr-2 flex size-11 cursor-pointer items-center justify-center transition-transform duration-150 ease-out-strong active:scale-95 xl:hidden"
                >
                    <img src={menuOpen ? closeIcon : hamburgerIcon} alt="" className="size-7" />
                </button>
            </div>

            {/* Dropdown menu, small screens only */}
            <nav
                id="mobile-menu"
                aria-label="Main"
                aria-hidden={!menuOpen}
                className={`absolute inset-x-0 top-full z-50 flex max-h-[calc(100dvh-4rem)] flex-col overflow-y-auto bg-header px-5 pb-6 pt-2 shadow-lg xl:hidden
                    transition-[transform,opacity,visibility] duration-200 ease-out-strong
                    ${menuOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'}`}
            >
                {headerItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                            `flex min-h-12 items-center py-2 text-lg font-medium no-underline transition-colors duration-150 ease-out [@media(hover:hover)]:hover:text-brand-light ${isActive ? 'text-brand-light' : 'text-white'}`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}

export default Header;
