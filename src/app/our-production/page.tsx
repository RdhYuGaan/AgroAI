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

      <Footer />
    </div>
  );
};

export default OurProduction; 
