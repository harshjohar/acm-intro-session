import Link from "next/link";
import React from "react";

function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link
                    className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                    href="/"
                >
                    <img
                        src="https://cdn.sanity.io/images/9zrn54i9/events/1f344e7217d51300bb19eb7acbcadaf975dc8fb8-200x200.jpg"
                        alt="pec acm"
                        className="h-20"
                    />
                    <span className="ml-3 text-xl">PEC ACM</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/"} className="mr-5 hover:text-gray-900">
                        Home
                    </Link>
                    <Link
                        href={"/subgroups"}
                        className="mr-5 hover:text-gray-900"
                    >
                        Sub groups
                    </Link>
                    <Link href={"/events"} className="mr-5 hover:text-gray-900">
                        Events
                    </Link>
                    <Link
                        href={"/aboutme"}
                        className="mr-5 hover:text-gray-900"
                    >
                        About Me
                    </Link>
                </nav>
                <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Join Now!
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-1"
                        viewBox="0 0 24 24"
                    >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;
