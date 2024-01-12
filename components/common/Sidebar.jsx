import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Sidebar = ({ isMenuOpen, setIsMenuOpen }) => {
  const sidebarRef = useRef();

  // useEffect to close sidebar when click outside
  useEffect(() => {
    const handler = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    // preveting body from scrolling
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.removeEventListener("mousedown", handler);
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  return (
    // Sidebar Container
    <div
      className={`z-10 fixed ${isMenuOpen && "inset-0"} bg-black bg-opacity-65`}
    >
      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`z-10 fixed top-0 bottom-0 right-0 bg-[#FF725E] w-64 transition-all ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } shadow-xl border-l`}
      >
        {/* Sidebar content */}
        <div className="p-4 text-white">
          <Link href="/">
            <Image
              className="max-sm:w-[90px]"
              src="/img/Footer-Logo.png"
              width={100}
              height={50}
              alt="logo"
            />
          </Link>
          {/* Add your sidebar links or content here */}
          <ul className="mt-4">
            <li className="py-2 hover:scale-105 cursor-pointer origin-left transition-all duration-200 ease-in-out">
              <Link href="/">Home</Link>
            </li>
            <li className="py-2 hover:scale-105 cursor-pointer origin-left transition-all duration-200 ease-in-out">
              <Link href="/about">About Us</Link>
            </li>
            <li className="py-2 hover:scale-105 cursor-pointer origin-left transition-all duration-200 ease-in-out">
              <Link href="/management">Management</Link>
            </li>
            <li className="py-2 hover:scale-105 cursor-pointer origin-left transition-all duration-200 ease-in-out">
              <Link href="/news">News & Event</Link>
            </li>
            <li className="py-2 hover:scale-105 cursor-pointer origin-left transition-all duration-200 ease-in-out">
              <Link href="/gallery">Gallery</Link>
            </li>
            <li className="py-2 hover:scale-105 cursor-pointer origin-left transition-all duration-200 ease-in-out">
              <Link href="/contact">Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Menu toggle button */}
        <button
          className="fixed top-4 right-4 hover:scale-110 transition-all duration-200 ease-in-out"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuCloseIcon />
        </button>
      </div>
    </div>
  );
};

const MenuCloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30"
      width="30"
      viewBox="0 0 448 512"
      fill="white"
    >
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </svg>
  );
};

export default Sidebar;
