import React from 'react';

const Portfolio = () => {
    return (
        <div className="my-4 py-4" id="portfolio">
            <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
                Portfolio
            </h2>
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-blue-900 mb-8"></div>
            </div>

            {/* Portfolio Images Section */}
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 px-4">
                <div className="flex flex-col items-center">
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg shadow-md">
                        <span className="text-gray-600">Image 1</span>
                    </div>
                    <p className="mt-2 text-center font-semibold">Label 1</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg shadow-md">
                        <span className="text-gray-600">Image 2</span>
                    </div>
                    <p className="mt-2 text-center font-semibold">Label 2</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-lg shadow-md">
                        <span className="text-gray-600">Image 3</span>
                    </div>
                    <p className="mt-2 text-center font-semibold">Label 3</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
