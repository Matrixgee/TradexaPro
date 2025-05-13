import { useEffect, useState } from 'react';
import First from '../assets/First.webp';
import Second from '../assets/second.webp';
import Third from '../assets/Third.webp';
import {Link} from 'react-router-dom'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const Context = [
    {
      id: 1,
      image: First,
      HeadText: 'A Philosophy Rooted In The Pursuit Of Alpha',
      SubHeaderText: "Our clients rely on us to deliver performance alpha consistent with their specific objectives taking into account.",
    },
    {
      id: 2,
      image: Second,
      HeadText: "Your Future Is Created By What You Do Today",
      SubHeaderText: "Join professional trading experts in our journey to building a profitable future."
    },
    {
      id: 3,
      image: Third,
      HeadText: "Professional Portfolio Management",
      SubHeaderText: "EXPRESS TRADES PROFIT believes portfolio management is far more than just buying stocks and bonds and hoping they do well."
    }
  ];

  const totalSlides = Context.length;


  const splitLastWord = (text:string) => {
    const words = text.split(' ');
    const lastWord = words.pop(); 
    const initialText = words.join(' '); 
    return { initialText, lastWord };
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides); 
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides); 
  };

  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % Context.length);
    }, 8000); 

    return () => clearInterval(interval); 
  },[Context.length])

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-100'>
      <div className='relative w-full h-full'>
        <img src={Context[currentSlide].image} alt={Context[currentSlide].HeadText} className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center text-white p-4 '  style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className='W-[90%] h-[100%] flex justify-center gap-4 items-start flex-col px-7'>
          {
              (() => {
                const { initialText, lastWord } = splitLastWord(Context[currentSlide].HeadText);
                return (
                  <h1 className='font-semibold text-5xl phone:text-3xl'>
                    {initialText} <span style={{ color: '#fdc500' }}>{lastWord}</span>
                  </h1>
                );
              })()
            }
          <p className='font-medium text-md text-center phone:text-[10px]'>{Context[currentSlide].SubHeaderText}</p>
          <div className='w-[90%] h-[15%] flex justify-start items-center phone:justify-center'>
             <button className="bg-[#003566] hover:bg-blue-500  text-white font-bold rounded w-[20%] h-[50%] phone:w-[60%] ">
            <Link to='/reg'>Get Started</Link>
          </button>
          </div>
          </div>
          
        </div>
        <button onClick={prevSlide} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-white p-2' style={{background: 'rgba(0, 0, 0, 0.9)'}}>
          &#10094;
        </button>
        <button onClick={nextSlide} className='absolute right-3 top-1/2 transform -translate-y-1/2  text-white p-2' style={{background: 'rgba(0, 0, 0, 0.9)'}}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Hero;
