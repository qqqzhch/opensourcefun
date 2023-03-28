import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Header() {
  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      // eslint-disable-next-line  @typescript-eslint/no-unused-expressions
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed z-30 w-full transition duration-300 ease-in-out md:bg-opacity-90 ${
        !top && 'bg-white shadow-lg backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <Link href={'/'} className="block" aria-label="Cruip">
              <svg
                className="h-8 w-8"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <radialGradient
                    cx="21.152%"
                    cy="86.063%"
                    fx="21.152%"
                    fy="86.063%"
                    r="79.941%"
                    id="header-logo"
                  >
                    <stop stopColor="#4FD1C5" offset="0%" />
                    <stop stopColor="#81E6D9" offset="25.871%" />
                    <stop stopColor="#338CF5" offset="100%" />
                  </radialGradient>
                </defs>
                <rect
                  width="32"
                  height="32"
                  rx="16"
                  fill="url(#header-logo)"
                  fillRule="nonzero"
                />
              </svg>
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex grow">
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <Link
                  href={'/signin'}
                  className="flex items-center px-5 py-3 font-medium text-gray-600 transition duration-150 ease-in-out hover:text-gray-900"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href={'/signup'}
                  className="btn-sm ml-3 bg-gray-900 text-gray-200 hover:bg-gray-800"
                >
                  <span>Sign up</span>
                  <svg
                    className="ml-2 -mr-1 h-3 w-3 shrink-0 fill-current text-gray-400"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
