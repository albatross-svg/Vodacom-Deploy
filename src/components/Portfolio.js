

import React, { useEffect } from 'react';

const Portfolio = () => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#portfolio") {
            setTimeout(() => {
                const element = document.getElementById("portfolio");
                if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
            }, 100); // Small delay to ensure correct positioning
        }
    }, []);

    return (
        <div className="my-4 py-4 scroll-mt-24" id="portfolio">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                Portfolio
            </h2>
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
            </div>

            {/* Portfolio Images Section */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 px-4">
                <div className="flex flex-col items-center">
                    <div className="w-full max-w-sm aspect-[4/3] bg-gray-300 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
                        <img src="/path-to-image1.jpg" alt="Portfolio 1" className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-2 text-center font-semibold">Label 1</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-full max-w-sm aspect-[4/3] bg-gray-300 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
                        <img src="/path-to-image2.jpg" alt="Portfolio 2" className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-2 text-center font-semibold">Label 2</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-full max-w-sm aspect-[4/3] bg-gray-300 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
                        <img src="/path-to-image3.jpg" alt="Portfolio 3" className="w-full h-full object-cover" />
                    </div>
                    <p className="mt-2 text-center font-semibold">Label 3</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

