import React from 'react';

interface AboutModalProps {
    onClose: () => void;
}

export function AboutModal({ onClose }: AboutModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-30 p-4">
            <div className="bg-gray-200 border-4 border-black p-4 sm:p-6 w-full max-w-4xl max-h-[95vh] overflow-y-auto relative text-black font-sans flex flex-col">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-red-500 border-2 border-black w-8 h-8 text-white font-bold text-xl hover:bg-red-600 flex items-center justify-center z-10"
                    aria-label="Close"
                >
                    <span className="mb-0.5">X</span>
                </button>

                <h2 className="text-lg sm:text-2xl font-bold mb-4 text-center font-display" style={{ fontFamily: '"Press Start 2P", cursive', textShadow: '2px 2px #fff' }}>
                    About
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 overflow-y-auto pr-1">
                    <section>
                        <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 border-b-2 border-black inline-block">How to Use</h3>
                        <ul className="list-disc list-inside space-y-1 ml-1 text-xs sm:text-sm">
                            <li>Log in with your Google account.</li>
                            <li>Select available grid slots.</li>
                            <li>Upload and crop your image.</li>
                            <li>Add a message and optional link.</li>
                            <li>Confirm to publish instantly!</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 border-b-2 border-black inline-block">Best Practices</h3>
                        <ul className="list-disc list-inside space-y-1 ml-1 text-xs sm:text-sm">
                            <li>Use clear, high-contrast images.</li>
                            <li>Keep messages short and catchy.</li>
                            <li>Avoid offensive content.</li>
                            <li>Check links before posting.</li>
                            <li className='font-bold'>Avoid personal photos; stick to brands/logos.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 border-b-2 border-black inline-block">Weekly Resets</h3>
                        <p className="leading-relaxed text-xs sm:text-sm">
                            To give everyone a chance, the billboard resets <span className="font-bold">every Sunday at midnight</span>.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2 border-b-2 border-black inline-block">Contact & More Slots</h3>
                        <p className="leading-relaxed text-xs sm:text-sm">
                            Need &gt;1 slot or have queries? Email: <a href="mailto:rahmanhabeeb360@gmail.com" className="font-bold underline hover:text-blue-600 transition-colors block sm:inline">rahmanhabeeb360@gmail.com</a>
                        </p>
                    </section>
                </div>

                <div className="mt-4 sm:mt-6 pt-4 border-t-2 border-dashed border-gray-400 text-center shrink-0">
                    <p className="font-bold flex items-center justify-center gap-2 text-xs sm:text-base">
                        Made with <span className="text-red-500 text-base sm:text-xl">♥</span> by Habeeb
                    </p>
                </div>
            </div>
        </div>
    );
}
