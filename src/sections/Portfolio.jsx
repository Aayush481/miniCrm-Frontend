import React, { useState } from 'react';
import Details from './Details';



const portfolio = [
  {
    image: "https://i.pinimg.com/736x/86/60/93/8660934d504b3d6ddc4a21c3dce3a684.jpg",
    label: "Bridal",
    title: "Golden Glow Bride",
    description: "Radiant gold tones with bold eyes and soft contouring.",
    packages: "25K",
    type: "HD",
    location: "Saharanpur",
    tags: ["bridal", "gold", "HD"],
    shadow: "drop-shadow-[0_0_10px_rgba(15,118,110,0.7)]"
  },
  {
    image: "https://i.pinimg.com/736x/61/34/5d/61345d8d11991ad0dd0f24095d2a9a45.jpg",
    label: "Bridal",
    title: "Traditional Red Elegance",
    description: "Classic red bridal look with gold shimmer and regal jewelry.",
    packages: "28K",
    type: "Airbrush",
    location: "Saharanpur",
    tags: ["bridal", "traditional", "airbrush"],
    shadow: "drop-shadow-[0_0_25px_rgba(15,118,110,0.7)]"
  },
  {
    image: "https://i.pinimg.com/736x/75/d2/ed/75d2ed8c01ccf214850e06effecb2c88.jpg",
    label: "Bridal",
    title: "Minimal Nude Bride",
    description: "Soft glam with nude lips and natural glow for a modern bride.",
    packages: "22K",
    type: "HD",
    location: "Saharanpur",
    tags: ["bridal", "minimal", "HD"],
    shadow: "drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
  },
  {
    image: "https://i.pinimg.com/736x/65/aa/86/65aa861abb8d5a08f89c0dbf41d264cf.jpg",
    label: "Bridal",
    title: "Royal Contour Bride",
    description: "Heavy contour, bold lips, and regal styling for a majestic look.",
    packages: "30K",
    type: "Airbrush",
    location: "Saharanpur",
    tags: ["bridal", "royal", "airbrush"],
    shadow: "drop-shadow-[0_0_25px_rgba(128,0,128,0.3)]"
  },
  {
    image: "https://i.pinimg.com/originals/70/fc/bf/70fcbfb1f4a9ef99a2a9419ec6e821d0.jpg",
    label: "Bridal",
    title: "Pastel Day Bride",
    description: "Soft pastel tones with dewy finish for daytime weddings.",
    packages: "24K",
    type: "HD",
    location: "Saharanpur",
    tags: ["bridal", "pastel", "HD"],
    shadow: "drop-shadow-[0_0_25px_rgba(255,182,193,0.3)]"
  },
  {
    image: "https://i.pinimg.com/736x/8e/02/37/8e0237f4f48dfe00fbd6b644057a7dd9.jpg",
    label: "Engagement",
    title: "Soft Pink Glow",
    description: "Romantic pink tones with glowing skin and subtle shimmer.",
    packages: "18K",
    type: "HD",
    location: "Saharanpur",
    tags: ["engagement", "romantic", "HD"],
    shadow: "drop-shadow-[0_0_25px_rgba(255,105,180,0.3)]"
  },
  {
    image: "https://i.pinimg.com/originals/12/6d/e0/126de005e2d5a85e54e9f2a5390db084.jpg",
    label: "Engagement",
    title: "Smokey Glam",
    description: "Smokey eyes with nude lips for a bold engagement look.",
    packages: "20K",
    type: "Airbrush",
    location: "Saharanpur",
    tags: ["engagement", "evening", "airbrush"],
    shadow: "drop-shadow-[0_0_25px_rgba(105,105,105,0.3)]"
  },
  {
    image: "https://th.bing.com/th/id/OIP.2hm2QV39XojM1SIQ07FsWQHaJQ",
    label: "Engagement",
    title: "Natural Chic",
    description: "Light coverage with subtle shimmer for a fresh engagement look.",
    packages: "16K",
    type: "HD",
    location: "Saharanpur",
    tags: ["engagement", "minimal", "HD"],
    shadow: "drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]"
  },
  {
    image: "https://i.pinimg.com/736x/36/c9/99/36c9995ac334396694a1ce84efebf83b.jpg",
    label: "Engagement",
    title: "Bold Contour",
    description: "Defined contour and bold lips for a striking engagement style.",
    packages: "22K",
    type: "Airbrush",
    location: "Saharanpur",
    tags: ["engagement", "bold", "airbrush"],
    shadow: "drop-shadow-[0_0_25px_rgba(255,69,0,0.3)]"
  },
  {
    image: "https://i.pinimg.com/originals/fe/8d/0b/fe8d0b2aa2e5cfe24d523468c0bfa73f.jpg",
    label: "Partywear",
    title: "Glitter Glam",
    description: "Glitter eyes and glossy lips for a fun and festive look.",
    packages: "12K",
    type: "HD",
    location: "Saharanpur",
    tags: ["party", "glam", "HD"],
    shadow: "drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]"
  },
  {
    image: "https://i.pinimg.com/originals/57/f5/e1/57f5e1401b598513988dd14aa31df3ef.jpg",
    label: "Partywear",
    title: "Bronzed Cocktail",
    description: "Shimmery eyes with bronzed skin for cocktail parties.",
    packages: "14K",
    type: "Airbrush",
    location: "Saharanpur",
    tags: ["party", "cocktail", "airbrush"],
    shadow: "drop-shadow-[0_0_25px_rgba(210,180,140,0.3)]"
  },
  {
    image: "https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Party-Makeup-by-Team-Tejaswini-Makeup-Studio-Pune.jpg",
    label: "Partywear",
    title: "Trendy Bold",
    description: "Bold colors and experimental eye makeup for a trendy vibe.",
    packages: "16K",
    type: "Airbrush",
    location: "Saharanpur",
    tags: ["party", "trendy", "airbrush"],
    shadow: "drop-shadow-[0_0_25px_rgba(255,20,147,0.3)]"
  },
  {
    image: "https://i.pinimg.com/736x/22/35/d3/2235d35fe1852a9e716d667df6af8082.jpg",
    label: "Partywear",
    title: "Color Pop Party",
    description: "Vibrant eye colors with glossy lips for a bold party look.",
    packages: "16K",
    type: "Airbrush",
    location: "Saharanpur",
    tags: ["party", "colorful", "airbrush"],
    shadow: "drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]"
  }
];

const Portfolio = () => {
  const [currentPro, setCurrentPro] = useState(null);

  const open = (item) => {
    setCurrentPro(item);
  };

  const close = () => {
    setCurrentPro(null);
  };

  return (
    <section id="portfolio" className="w-full bg-gray-950 text-white px-4 sm:px-6 py-12 sm:py-16 overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10">
          Portfolio
        </h2>

        <div className={`w-full h-full relative transition-opacity duration-300 ${currentPro ? "opacity-30" : "opacity-100"}`}>
          <div className="relative columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 break-inside-avoid">
            {portfolio.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.label}
                className={`w-full mb-4 object-cover rounded-3xl transition-transform duration-200 ease-in hover:scale-105 ${item.shadow} backdrop-blur-2xl cursor-pointer`}
                loading="lazy"
                onClick={() => open(item)}
              />
            ))}
          </div>
        </div>
      </div>

      
      {currentPro && (
        <div className="fixed left-20 z-50 flex justify-center items-center bg-transparent bg-opacity-70">
          <Details
            img={currentPro.image}
            label={currentPro.label}
            title={currentPro.title}
            description={currentPro.description}
            packages={currentPro.packages}
            type={currentPro.type}
            location={currentPro.location}
            tags={currentPro.tags}
            onClose={close}
          />
        </div>
      )}
    </section>
  );
};

export default Portfolio;