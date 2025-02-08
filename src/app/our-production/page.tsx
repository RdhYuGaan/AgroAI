import React from 'react';
import Footer from '../components/Footer';

const OurProduction: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 py-16">
        {/* Section 1 - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {/* Left Column - Image */}
          <div className="relative h-96">
            <img 
              src="/images/TabletImage.png" 
              alt="Farm Bot" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Right Column - Product Info */}
          <div className="text-emerald-800">
            {/* Title */}
            <h2 className="text-4xl font-bold mb-6 text-emerald-600">Farm Bot</h2>
            
            {/* Color Boxes */}
            <div className="flex gap-1 mb-6">
              {['#BEBBC2', '#F9DED7', '#FCE9DB', '#E8E8EA', '#2E2D33'].map((color, i) => (
              <div key={i} className="flex flex-col items-center">
              {i === 0 && <span className="text-sm mb-1">Colour</span>}
              {i === 4 && <span className="text-sm mb-1">Dark</span>}
              <div 
              className={`w-8 h-8 rounded border-2 border-emerald-100 ${i > 0 && i < 4 ? 'mt-6' : ''}`}
              style={{ backgroundColor: color, marginTop: i > 0 && i < 4 ? '25px' : '0' }}
              />
              </div>
              ))}
            </div>

            {/* Price */}
            <p className="text-emerald-600 text-2xl font-semibold mb-6">
              Price: 45000 LKR
            </p>

            {/* Selection Boxes */}
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-2">
                <span>Qty:</span>
                <select className="px-3 py-2 rounded border-2 border-emerald-500 bg-transparent">
                  {[1,2,3,4,5].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <button className="px-6 py-2 rounded border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 transition">
                Add to Cart
              </button>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
                <button className="flex-1 py-3 bg-[#204E51] text-white rounded hover:bg-[#1A3E41] transition">
                Buy Now
                </button>
                <button className="flex-1 py-3 bg-[#b5c9ec] text-green-500 rounded hover:bg-blue-700 transition">
                Buy in Installment
                </button>
            </div>

            {/* Delivery Info */}
            <div className="flex items-center gap-4 mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 14h1v2h2v-2h1l3 3h-10l3-3zm2-10a5 5 0 00-5 5v3h10v-3a5 5 0 00-5-5z" 
                />
              </svg>
              <div>
                <p>Delivery 5 working days</p>
              </div>
            </div>

            {/* Return Policy */}
            <div className="flex items-center gap-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                />
              </svg>
              <div>
                <p>Product returns and exchange term</p>
                <p>15 days</p>
                <p>Condition</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center mb-12">
        <div className="shadow-lg p-6 bg-white rounded-lg w-full max-w-5xl">
          <h3 className="text-2xl font-semibold mb-4 text-emerald-600 text-center">Features</h3>
          <h3>Product Information</h3>
          <div className="grid grid-cols-2 gap-4">
        <div className="font-semibold">Type:</div>
        <div className="text-right">Farm Bot</div>
        <div className="font-semibold">RAM:</div>
        <div className="text-right">-</div>
        <div className="font-semibold">SSD:</div>
        <div className="text-right">1000 GB</div>
        <div className="font-semibold">Processor Type:</div>
        <div className="text-right">Intel Core i7-12700H</div>
        <div className="font-semibold">PROCESSOR SPEED:</div>
        <div className="text-right">2.3 - 4.7 GHz</div>
        <div className="font-semibold">DISPLAY SIZE INCH:</div>
        <div className="text-right">-</div>
        <div className="font-semibold">DISPLAY SIZE SM:</div>
        <div className="text-right">40.64 cm</div>
        <div className="font-semibold">DISPLAY TYPE:</div>
        <div className="text-right">OLED, TOUCHSCREEN, 120 Hz</div>
        <div className="font-semibold">DISPLAY RESOLUTION:</div>
        <div className="text-right">2880x1620</div>
        <div className="font-semibold">VIDEO CARD TYPE:</div>
        <div className="text-right">INTEL ARC A370M GRAPHICS</div>
        <div className="font-semibold">GRAPHIC MEMORY SIZE:</div>
        <div className="text-right">4 GB GDDR6</div>
        <div className="font-semibold">WEB CAMERA:</div>
        <div className="text-right">720p + IR</div>
        
          </div>
        </div>
      </div>
      <div className="relative flex justify-center items-center mb-8">
        <div className="shadow-lg p-4 bg-white rounded-lg w-full max-w-4xl relative">
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full">
        &lt;
          </button>
            <h3 className="text-center text-3xl font-semi-bold text-emerald-800 mb-3">Other Products</h3>
            <div className="overflow-hidden">
              <div className="flex justify-center transition-transform duration-500 ease-in-out">
                <div className="min-w-[85%] mx-2 h-65">
                <img 
                src="/images/SlideCard1.png" 
                alt="Slide 1" 
                className="w-full h-full object-contain rounded-lg"
                />
                </div>
              </div>
            </div>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full">
        &gt;
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OurProduction; 
