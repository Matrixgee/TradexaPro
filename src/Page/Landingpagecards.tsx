import React, { useEffect } from 'react';
import 'animate.css';

export const Financecards = (props:any)=> {

  return (
    <div className="w-[100%] h-auto p-10 bg-[#fff] rounded-2xl hover:shadow-2xl flex-grow-1 flex-basis-200 smallPhone:p-5 ">
      <div className="w-[100%] h-[200px] ">
        <img src={props.img} alt="" className="w-[100%] h-[100%]" />
      </div>
      <h2 className="text-xl font-semibold mt-2 phone:text-lg ">{props.h2}</h2>
      <p className=" text-base font-normal text-[#3450a4] leading-7 mt-3 phone:text-sm ">{props.p}</p>
      <button className="w-[50%] h-[50px] bg-blue-500 hover:bg-blue-700 rounded-full text-[white] text-lg font-semibold mt-5 phone:text-sm phone:w-[70%] smallPhone:h-[40px] ">Learn More</button>
    </div>
  )
}


export const Bottomcard = (props:any)=>{

  return (

    <div className="w-[100%] h-auto p-10 bg-[#fff]  rounded-xl hover:shadow-2xl smallPhone:p-5 ">
      <h2 className="text-xl font-semibold mt-2 phone:text-lg ">{props.h2}</h2>
      <p className=" text-base font-normal text-[#3450a4] leading-7 mt-3 phone:text-sm ">{props.p}</p>
    </div>
  )
}

export const Riskresearch = (props:any)=>{

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInLeft');
        }
      });
    });

    if (fadeInLeft.current) {
      observer.observe(fadeInLeft.current);
    }

    return () => {
      if (fadeInLeft.current) {
        observer.unobserve(fadeInLeft.current);
      }

    };

  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInRight');
        }
      });
    });

    if (fadeInRight.current) {
      observer.observe(fadeInRight.current);
    }

    return () => {
      if (fadeInRight.current) {
        observer.unobserve(fadeInRight.current);
      }
    };

  }, []);

  const fadeInLeft = React.useRef < HTMLDivElement > (null);
  const fadeInRight = React.useRef < HTMLDivElement > (null);

  return (

    <div className="w-[100%] h-[100%] flex justify-between items-center phone:flex-col phone:text-center phone:gap-5  ">
      <div ref={fadeInLeft} className="w-[40%] h-[90%] phone:w-[100%] animate__animated ">
        <img src={props.img} alt="" className="w-[100%] h-[100%] rounded-2xl " />
      </div>
      <div ref={fadeInRight} className="w-[55%] h-[100%] flex flex-col justify-center gap-5 pr-36 phone:w-[100%] phone:p-0 phone:gap-2 animate__animated ">
        <h1 className="text-4xl font-semibold text-[#fff] leading-normal phone:text-xl ">{props.h1}</h1>
        <p className="text-white text-base leading-7 phone:text-sm ">{props.p}</p>
      </div>
    </div>
  )
}

