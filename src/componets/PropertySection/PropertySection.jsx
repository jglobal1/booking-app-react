
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reusable Card Component
const PropertyCard = ({ imageSrc, title }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-[16px] mb-2">{title}</div>
      </div>
    </div>
  );
};


// Custom Arrow Component (only for the right arrow)
const CustomArrow = ({ className, style, onClick }) => (
  <div
    className={`${className}   p-2 rounded-full right-4 z-10 `}
    style={{ ...style, fontSize: "2rem", right: "-25px", width: "60px", height: "60px" }}
    onClick={onClick}
  >
    {">"}
  </div>
);



const PropertySection = () => {
  // Array to hold the property types
  const propertyTypes = [
    { 
        title: "Hostel", 
        imageSrc: "src/componets/PropertySection/pexels-maceiras-2467558.jpg" 

    },

    { 
        title: "Guest House", 
        imageSrc: "src/componets/PropertySection/pexels-konstantinos-eleftheriadis-916620-2034335.jpg" 
    },

    { 
        title: "Villa", 
        imageSrc: "src/componets/PropertySection/pexels-osho-1001965.jpg" 
    },
    
    {
         title: "Resort", 
         imageSrc: "src/componets/PropertySection/pexels-pixabay-261102.jpg" 
    },

    {
        title: "Serviced Apartment", 
        imageSrc: "src/componets/PropertySection/pexels-pixabay-161758.jpg" 
   },

   {
         title: "Luxury", 
         imageSrc: "src/componets/PropertySection/pexels-pixabay-271639 (1).jpg" 
    },
  ];


  const settings = {
    dots: false, 
    infinite: true, // Loop through slides infinitely
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 4 cards at a time
    slidesToScroll: 1, // Scroll 1 card at a time
    nextArrow: <CustomArrow />, // Only show right arrow
    prevArrow: null, // Disable the left arrow

  
    
    responsive: [
      {
        breakpoint: 1024, // For screen width of 1024px or less
        settings: {
          slidesToShow: 3, // Show 3 cards on medium screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For screen width of 768px or less
        settings: {
          slidesToShow: 2, // Show 2 cards on smaller screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For screen width of 480px or less
        settings: {
          slidesToShow: 1, // Show 1 card on mobile devices
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div
    data-aos="fade-up"
    className=" my-8 w-[1150px] mx-auto">
      <h1 className="text-2xl ml-[15px] font-bold">Property types unique to Abuja</h1>
      <p className="text-[16px] ml-[15px] mt-2">Stay in style for your next trip</p>
      
      {/* Container for the property cards */}
      <Slider{...settings}>
      
        {propertyTypes.map((property, index) => (
          <PropertyCard
          
            key={index}
            title={property.title}
            imageSrc={property.imageSrc}
          />
        ))}
      </Slider>
    </div>
    
  );
};

export default PropertySection;
