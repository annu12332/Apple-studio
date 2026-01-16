import React from 'react';

const ProductSpecs = () => {
  return (
    <section className="bg-[#0b0a24] text-white py-16 px-4 relative overflow-hidden">

      {/* 1. Header Area */}
      <div className="text-center mb-4 relative z-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 mt-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          Fortify MagSafe Specifications
        </h2>
      </div>

      <div className="max-w-6xl mx-auto relative flex flex-col items-center justify-center min-h-[600px]">

        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
          
          <div className="w-[400px] h-[400px] bg-yellow-200/45 rounded-full blur-[15px] -ml-40 -mt-0" />
          
          <div className="absolute w-[400px] h-[400px] bg-pink-200/40 rounded-full blur-[15px] -mr-48 -mt-10" />
          
          <div className="absolute w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-[15px] -mt-60 -ml-10" />
          
        </div>

        {/* Center Keyboard Image  */}
        <div className="relative z-10 w-full max-w-md flex items-center justify-center -mt-10">
          <img
            src="keyboard.png"
            alt="Keyboards Stack"
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative z-10"
          />
        </div>

        {/*  Feature Cards  */}
        
        {/* Battery Saver */}
        <div className="md:absolute top-0 left-4 lg:left-10 bg-[#74a9c6]/90 backdrop-blur-sm p-4 rounded-2xl w-64 z-20 shadow-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#5a1a7a] p-1.5 rounded-full text-[10px]">🔋</span>
            <h3 className="font-bold text-sm">Battery Saver</h3>
          </div>
          <p className="text-xs leading-tight">Auto Sleep Mode activated when idle.</p>
        </div>

        {/* Connectivity */}
        <div className="md:absolute top-10 right-4 lg:right-10 bg-[#74a9c6]/90 backdrop-blur-sm p-4 rounded-2xl w-64 z-20 shadow-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#5a1a7a] p-1.5 rounded-full text-[10px]">🌐</span>
            <h3 className="font-bold text-sm">Connectivity:</h3>
          </div>
          <p className="text-xs leading-tight">Bluetooth 3.0 / 5.0</p>
        </div>

        {/* Compatibility */}
        <div className="md:absolute bottom-36 left-4 lg:left-10 bg-[#74a9c6]/90 backdrop-blur-sm p-4 rounded-2xl w-64 z-20 shadow-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#5a1a7a] p-1.5 rounded-full text-[10px]">📱</span>
            <h3 className="font-bold text-sm">Compatibility:</h3>
          </div>
          <p className="text-xs leading-tight">iOS (iPhone/iPad), Android, Windows, Mac</p>
        </div>

        {/* Layout */}
        <div className="md:absolute bottom-28 right-4 lg:right-10 bg-[#74a9c6]/90 backdrop-blur-sm p-4 rounded-2xl w-64 z-20 shadow-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <span className="bg-[#5a1a7a] p-1.5 rounded-full text-[10px]">⌨️</span>
            <h3 className="font-bold text-sm">Layout:</h3>
          </div>
          <p className="text-xs leading-tight">Compact 78-key (with function keys).</p>
        </div>

        {/* Portability */}
        <div className="md:absolute -bottom-10 bg-[#74a9c6]/90 backdrop-blur-sm p-4 rounded-2xl w-[320px] text-center z-20 shadow-xl border border-white/10">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="bg-[#5a1a7a] p-1.5 rounded-full text-[10px]">🔄</span>
            <h3 className="font-bold text-sm">Portability</h3>
          </div>
          <p className="text-xs leading-tight">The only way to carry pocket keyboard you will ever need</p>
        </div>

        {/* Price Tag */}
        <div className="md:absolute left-2 top-[20%] text-center -rotate-12 hidden md:block z-20">
          <div className="relative">
             <span className="bg-[#ff46ff] px-4 py-1.5 rounded-full font-bold text-md shadow-[0_0_30px_#ff46ff]">Now 20% Cheaper</span>
<p className="text-4xl font-bold mt-4 text-white drop-shadow-[0_0_10px_rgba(255,70,255,0.8)] [text-shadow:0_0_20px_rgba(255,70,255,0.6),0_0_40px_rgba(255,70,255,0.4)]">
  1490 Tk
</p>          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSpecs;