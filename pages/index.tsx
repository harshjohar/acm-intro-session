import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Pec ACM Intro</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img
                        className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                        alt="hero"
                        src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Welcome to PEC ACM CSS
                        </h1>
                        <p className="mb-8 leading-relaxed">A growing community of Computer Science enthusiasts. Our mission is to be the most impactful ACM student chapter. We are a 600+ strong community of Computer Science enthusiasts working together to advance Computing as a Science and Profession. We are part of the official ACM Student Chapter – PEC ACM. Our base camp is at Punjab Engineering College, Chandigarh, IN.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                Join NOW!
                            </button>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
