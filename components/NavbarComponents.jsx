import React, { useState } from "react";

const NavbarComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-indigo-600 fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-white" href="/#">
              <span className="sr-only">Home</span>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                KELFAST FC
              </h1>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    href="/ShopPage"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-white"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black shadow"
                href="#"
              >
                Kontak kami
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black shadow"
                  href="#"
                >
                  Pendaftaran
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <nav aria-label="Global">
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <a
                    className="block text-white transition hover:text-white"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="block text-white transition hover:text-white shadow"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="block text-white transition hover:text-white shadow"
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="block text-white transition hover:text-white"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="block text-white transition hover:text-white"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>
                <li>
                  <a
                    className="block text-white transition hover:text-white"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavbarComponent;
