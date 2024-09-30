import React from 'react';
import Slider from "react-slick";
import Img1 from "/src/componets/DealsSection/pexels-donaldtong94-189333.jpg";
import Img2 from "/src/componets/DealsSection/pexels-elina-sazonova-1838554.jpg";
import Img3 from "/src/componets/DealsSection/pexels-enginakyurt-1579253.jpg";
import Img4 from "/src/componets/DealsSection/pexels-enginakyurt-2736388.jpg";
import Img5 from "/src/componets/DealsSection/pexels-pixabay-53464.jpg";
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { FaArrowRight } from "react-icons/fa6"; // Correctly import FaArrowRight

const ProductsData = [
    { id: 1, img: Img1, 
        small: "Genius", 
        title: "Camden Enterprise Hotel", 
        p: "London, United Kingdom", 
        rating: "Very Good · 3,479 reviews",
        price: "2 nights",
        no: "8.5",
        naira: "NGN 1,126,270",
        NAIRA: "NGN 922,422",
    },
    { id: 2, img: Img2, 
        small: "Genius", 
        title: "Maple Leaf Korean Hotel", 
        p: "Accra, Ghana", 
        rating: "Very Good · 3,479 reviews",
        price: "2 nights",
        no: "8.5",
        naira: "NGN 1,126,270",
        NAIRA: "NGN 922,422",
     },
    { id: 3, img: Img3, 
        small: "Genius", 
        title: "The Marylebone Hotel", 
        p: "London, United Kingdom", 
        rating: "Very Good · 3,479 reviews",
        price: "2 nights",
        no: "8.5",
        naira: "NGN 1,126,270",
        NAIRA: "NGN 922,422",
    },

    { id: 4, img: Img4, 
        small: "Genius", 
        title: "Camden Enterprise Hotel", 
        p: "London, United Kingdom", 
        rating: "Very Good · 3,479 reviews",
        price: "2 nights",
        no: "8.5",
        naira: "NGN 1,126,270",
        NAIRA: "NGN 922,422",
    },

    { id: 5, img: Img5, 
        small: "Genius", 
        title: "Camden Enterprise Hotel", 
        p: "London, United Kingdom", 
        rating: "Very Good · 3,479 reviews",
        price: "2 nights",
        no: "8.5",
        naira: "NGN 1,126,270",
        NAIRA: "NGN 922,422",
    },
];


const NextArrow = ({ onClick }) => {
    return (
      <div
        className="slick-next ml-[15px] cursor-pointer text-3xl relative left-[1120px] top-[-260px] "
        onClick={onClick}
      >
        <FaArrowRight/>
      </div>
    );
  };

const DealSection = () => {
    const settings = {
        dots: false, // Disable dots
        infinite: true, // Infinite loop sliding
        speed: 500, // Transition speed
        slidesToShow: 4, // Show 4 cards at a time
        slidesToScroll: 1, // Scroll 1 card at a time
        prevArrow: null, // Disable the left arrow
        nextArrow: <NextArrow />, // Use the custom right
        responsive: [
            {
                breakpoint: 1024, // For screen width of 1024px or less
                settings: {
                    slidesToShow: 3, // Show 3 cards on medium screens
                },
            },
            {
                breakpoint: 768, // For screen width of 768px or less
                settings: {
                    slidesToShow: 2, // Show 2 cards on smaller screens
                },
            },
            {
                breakpoint: 480, // For screen width of 480px or less
                settings: {
                    slidesToShow: 1, // Show 1 card on mobile devices
                },
            },
        ],
    };

    return (
        <div className='mt-14 mb-12 w-[1150px] mx-auto'>
            <div className='container'>
                {/* Header section */}
                <div
                 className=' mb-[20px] max-w-[1150px] mx-auto'>
                    <h1 className='text-2xl font-bold'>Deals for the the weekend</h1>
                    <p className='text-[16px] text-gray-400'>Save on stays for September 27 - September 29</p>
                </div>

                {/* Body section */}
                <Slider {...settings}>
                    {/* Card section */}
                    {ProductsData.map((data) => (
                        <div key={data.id} className='space-y-3 pl-4 shadow-lg border'>
                            <img 
                                
                                src={data.img} 
                                alt={data.title} 
                                className='h-[220px] w-[100%] object-cover' 
                            />
                            <div>
                                <p className='text-[10px] text-white bg-blue-600 w-[44px] h-[19px] font-bold rounded p-1'>{data.small}</p>
                                <h1 className='font-bold'>{data.title}</h1>
                                <div className='flex items-center gap-1'>
                                    
                                    <span className='text-xs'>{data.p}</span>
                                </div>

                                <div className='flex gap-2 mt-1'>
                                    <h2 className='rounded bg-blue-700 text-white text-[12px] p-1'>{data.no}</h2>
                                    <span className='text-xs mt-2'>{data.rating}</span>
                                </div>

                                <div className='flex mt-5'>
                                <p className='text-xs p-1'>{data.price}</p>
                                <p className='text-sm text-red-500 p-1 line-through'>{data.naira}</p>
                                <p className='pl-1 text-black font-bold'>{data.NAIRA}</p>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default DealSection;
