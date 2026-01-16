import React from 'react';

const Features = () => {
    return (
        <section className="relative w-full min-h-[550px] bg-[#050510] overflow-hidden flex items-center">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[130px] rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="flex flex-col lg:flex-row w-full items-center">
                
                <div className="w-full lg:w-[45%] flex flex-col items-start relative">
                                        <div className="relative z-10 transform  -ml-20 md:-ml-32 lg:-ml-36 opacity-90">
                        <img 
                            src="keyboard2.png" 
                            alt="Light Blue Keyboard" 
                            className="w-[280px] md:w-[420px] lg:w-[520px] max-w-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-[55%] flex flex-col md:flex-row justify-between px-6 md:px-16 mt-16 lg:mt-0 text-white z-10">
                    
                    {/* Column 1: Main Features */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] tracking-wide">
                                Silent Keypress
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-semibold leading-snug max-w-[300px]">
                                Work quietly in a library, café, or meeting.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.7)] tracking-wide">
                                Long-Lasting Battery
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-semibold leading-snug max-w-[350px]">
                                Up to 30 hours of continuous typing or 40 days standby.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Compatibility */}
                    <div className="mt-12 md:mt-0 md:pl-10 pr-20">
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tighter text-center md:text-left drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                            Supports <br />
                            iOS/iPad <br />
                            OS <br />
                            Windows <br />
                            TV
                        </h3>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;