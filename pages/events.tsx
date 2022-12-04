import Head from "next/head";
import React from "react";

function events() {
    return (
        <div>
            <Head>
                <title>Events | PEC ACM</title>
            </Head>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -mx-4 -my-8">
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                                        Nov
                                    </span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">
                                        24
                                    </span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                                        WEB n APP
                                    </h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                                        Codeblooded 4.0
                                    </h1>
                                    <p className="leading-relaxed mb-5">
                                        24 hr hackathon organised bt STGI. Cash
                                        prize pool of 1.3 lakh. Solved real
                                        world problems in code.
                                    </p>
                                    <a className="inline-flex items-center">
                                        <img
                                            alt="blog"
                                            src="https://dummyimage.com/103x103"
                                            className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                        />
                                        <span className="flex-grow flex flex-col pl-3">
                                            <span className="title-font font-medium text-gray-900">
                                                PECFEST
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                                        Nov
                                    </span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">
                                        26
                                    </span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                                        CP
                                    </h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                                        Codecode
                                    </h1>
                                    <p className="leading-relaxed mb-5">
                                        3 hr long competitive programming event
                                        organised in collaboration with IIT
                                        Bombay. Winners are selected to go to
                                        IITB for finals.
                                    </p>
                                    <a className="inline-flex items-center">
                                        <img
                                            alt="blog"
                                            src="https://dummyimage.com/102x102"
                                            className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                        />
                                        <span className="flex-grow flex flex-col pl-3">
                                            <span className="title-font font-medium text-gray-900">
                                                PECFEST
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 px-4 lg:w-1/3">
                            <div className="h-full flex items-start">
                                <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                    <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                                        Every
                                    </span>
                                    <span className="font-medium text-lg text-gray-800 title-font leading-none">
                                        Week
                                    </span>
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                                        ML
                                    </h2>
                                    <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                                        ML weekly challenge
                                    </h1>
                                    <p className="leading-relaxed mb-5">
                                        A recurring event organised by ML sub
                                        group. Held every week on saturday eve
                                        and regular discussion on every tuesday.
                                    </p>
                                    <a className="inline-flex items-center">
                                        <img
                                            alt="blog"
                                            src="https://dummyimage.com/101x101"
                                            className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                                        />
                                        <span className="flex-grow flex flex-col pl-3">
                                            <span className="title-font font-medium text-gray-900">
                                                Weekly
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default events;
