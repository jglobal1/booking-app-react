
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Reusable Card Component
const PropertyCard = ({ imageSrc, title }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-48 object-cover "
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



const ExploreSection = () => {
  // Array to hold the property types
  const propertyTypes = [
    { 
        title: "Hostel", 
        imageSrc: "src/componets/ExploreSection/pexels-pixabay-261102.jpg" 

    },

    { 
        title: "Guest House", 
        imageSrc: "src/componets/ExploreSection/pexels-pixabay-271639 (1).jpg" 
    },

    { 
        title: "Villa", 
        imageSrc: "src/componets/ExploreSection/pexels-pixabay-277572.jpg" 
    },
    
    {
         title: "Resort", 
         imageSrc: "src/componets/ExploreSection/pexels-stuffedbox-ng-513424808-16237807.jpg" 
    },

    {
        title: "Serviced Apartment", 
        imageSrc: "src/componets/ExploreSection/tony-yakovlenko-lDxxeAJrWpE-unsplash.jpg" 
   },

   {
         title: "Luxury", 
         imageSrc: "src/componets/PropertySection/pexels-pixabay-271639 (1).jpg" 
    },

    {
        title: "Luxury", 
        imageSrc: "src/componets/ExploreSection/vecteezy_close-up-of-white-pillow-on-bed-decoration-with-light-lamp_4876630.jpg" 
   },

   {
    title: "Serviced Apartment", 
    imageSrc: "src/componets/ExploreSection/tony-yakovlenko-lDxxeAJrWpE-unsplash.jpg" 
    },
  ];


  const settings = {
    dots: false, 
    infinite: true, // Loop through slides infinitely
    speed: 500, // Transition speed
    slidesToShow: 6, // Show 4 cards at a time
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
    

    className=" my-8 w-[1150px]  mx-auto">
      <h1 className="text-2xl ml-[15px] font-bold">Explore Nigeria</h1>
      <p className="text-[16px] ml-[15px] mt-2">These popular destinations have a lot to offer</p>
      
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

export default ExploreSection;
