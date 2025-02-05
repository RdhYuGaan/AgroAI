// app/our-solutions/page.tsx
import React from 'react';
import ContentCard01 from '../components/ContentCard01';
import Footer from '../components/Footer';

const cardsData = [
  { title: 'AI-Powered Crop Disease Detection', description: 'At AgroAI, we don’t just help you detect crop diseases early; we provide actionable solutions tailored to each specific issue. Our AI-powered system identifies common diseases and offers precise recommendations, from treatment options to preventive measures. By addressing issues like fungal infections, pest invasions, and nutrient deficiencies, we help farmers implement effective solutions that restore crop health and prevent future outbreaks, ensuring higher yields and sustainable growth.' },
  { title: 'Water Control System', description: 'Efficient water management is crucial for healthy crops. AgroAI offers a smart irrigation system that monitors soil moisture levels and automatically adjusts water supply, ensuring optimal hydration for your plants while conserving water resources.' },
  { title: 'pH Control System', description: 'Maintaining the right soil pH is essential for crop growth. Our pH control system continuously monitors soil conditions and makes real-time adjustments to ensure your crops get the perfect balance, resulting in better growth and higher yields.' },
  { title: 'Solutions to Recognized Diseases', description: 'At AgroAI, we don’t just help you detect crop diseases early; we provide actionable solutions tailored to each specific issue. Our AI-powered system identifies common diseases and offers precise recommendations, from treatment options to preventive measures. By addressing issues like fungal infections, pest invasions, and nutrient deficiencies, we help farmers implement effective solutions that restore crop health and prevent future outbreaks, ensuring higher yields and sustainable growth.' },
];

const OurSolutions = () => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-cover bg-center" 
      style={{ backgroundImage: 'url(images/tea-estate.jpg)' }}
    >
            {/* Main Content */}
      <div className="flex-grow container mx-auto px-4 py-16 text-center text-white">
        <h1 className="text-6xl font-bold mb-12">Our Solutions</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <ContentCard01 
              key={index} 
              title={card.title} 
              description={card.description} 
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurSolutions;
