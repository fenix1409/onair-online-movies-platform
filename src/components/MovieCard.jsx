import React, { useState } from 'react';

const MovieCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className={`w-72 h-36 bg-gray-900 text-white rounded-lg p-5 m-4 transition-all duration-300 overflow-hidden shadow-md relative
        ${isHovered ? 'h-64 bg-gray-800' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="border-b border-gray-700 pb-2 mb-3">
                <h3 className="m-0 text-xl font-semibold text-yellow-500">{ }</h3>
                {!isHovered && (
                    <div className="text-gray-400 text-sm">
                        <span>{ }</span> | <span>{ }</span>
                    </div>
                )}
            </div>

            {isHovered && (
                <div className="animate-fadeIn">
                    <p className="text-sm leading-relaxed mb-4">{ }</p>
                    <button className="bg-yellow-500 text-black py-2 px-4 rounded font-bold hover:bg-yellow-600 transition-colors">
                        Watch Now
                    </button>
                </div>
            )}
        </div>
    )
}

export default MovieCard