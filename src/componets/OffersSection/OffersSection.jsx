import React from 'react';
import img1 from '/src/componets/OffersSection/muhammad-awan-Jwby0ysbCV4-unsplash.jpg';
import img2 from '/src/componets/InspirationSection/pexels-rpnickson-3068519.jpg';



const data = [
  {
    image: img1, // replace with actual image URL
    title: '5 of the best hotels in Los Angeles',
    description: 'From Hollywood to Beverly Hills discover 5 of the best hotels in Los Angeles for your stay',
    span: 'col-span-2'
  },
  {
    image:img2, // replace with actual image URL
    title: 'The 6 best Orlando hotels for families',
    description: 'Discover the best Orlando hotels for families for your vacation.',
    span: '',
  },
  
];

const Card = ({ image, title, description,span }) => {
  return (
    <div className={`relative rounded-lg overflow-hidden shadow-lg ${span} `}>
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

const OfferSection = () => {
  return (
    <section className="max-w-7xl py-8 px-4 mt-11 w-[1150px] mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 data-aos="fade-up" className="text-2xl font-bold">Offers</h2>
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default OfferSection;
