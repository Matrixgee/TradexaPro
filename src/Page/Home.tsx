import React, { useEffect } from 'react';
import Hero from "./Hero"
import landingPimg1 from "../assets/landingimg1.jpg"
import landingPimage2 from "../assets/landingPimage2.png"
import landingPimage3 from "../assets/landingPimage3.jpg"
import landingPimage4 from "../assets/landingPimage4.png"
import focalPoint from "../assets/focalPoint.png"
import acmeCorp from "../assets/acmeCorp.png"
import cloudWatch from "../assets/cloudWatch.png"
import epicurious from "../assets/epicurious.png"
import {Financecards} from "./Landingpagecards"
import {Bottomcard} from "./Landingpagecards"
import {Riskresearch} from "./Landingpagecards"
import financecardimg1 from "../assets/financecardimg1.jpg"
import financecardimg2 from "../assets/financecardimg2.jpg"
import financecardimg3 from "../assets/financecardimg3.jpg"
import financecardimg4 from "../assets/financecardimg4.jpg"
import financecardimg5 from "../assets/financecardimg5.jpg"
import financecardimg6 from "../assets/financecardimg6.jpg"
import landingpageimg5 from "../assets/landingpageimg5.jpg"
import landingpageimg6 from "../assets/landingpageimg6.jpg"
import landingpageimg7 from "../assets/landingpageimg7.jpg"
// import TradHold from "./TradHold"
import 'animate.css';

const Home = () => {

  const fadeInUp = React.useRef < HTMLDivElement > (null);
  const fadeInUp2 = React.useRef < HTMLDivElement > (null);
  const fadeInUp3 = React.useRef < HTMLDivElement > (null);
  const fadeInUp4 = React.useRef < HTMLDivElement > (null);
  const fadeInUp5 = React.useRef < HTMLDivElement > (null);
  const fadeInUp6 = React.useRef < HTMLDivElement > (null);
  const fadeInUp7 = React.useRef < HTMLDivElement > (null);
  const fadeInUp8 = React.useRef < HTMLDivElement > (null);
  const fadeInUp9 = React.useRef < HTMLDivElement > (null);
  const fadeInUp10 = React.useRef < HTMLDivElement > (null);
  const fadeInUp11 = React.useRef < HTMLDivElement > (null);
  const fadeInLeft = React.useRef < HTMLDivElement > (null);
  const fadeInLeft2 = React.useRef < HTMLDivElement > (null);
  const fadeInLeft3 = React.useRef < HTMLDivElement > (null);
  const fadeInRight = React.useRef < HTMLDivElement > (null);
  const fadeInRight2 = React.useRef < HTMLDivElement > (null);
  const fadeInRight3 = React.useRef < HTMLDivElement > (null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp.current) {
      observer.observe(fadeInUp.current);
    }

    return () => {
      if (fadeInUp.current) {
        observer.unobserve(fadeInUp.current);
      }};
    
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp2.current) {
      observer.observe(fadeInUp2.current);
    }

    return () => {
      if (fadeInUp2.current) {
        observer.unobserve(fadeInUp2.current);
      }};
    
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp3.current) {
      observer.observe(fadeInUp3.current);
    }

    return () => {
      if (fadeInUp3.current) {
        observer.unobserve(fadeInUp3.current);
      }};
    
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp4.current) {
      observer.observe(fadeInUp4.current);
    }

    return () => {
      if (fadeInUp4.current) {
        observer.unobserve(fadeInUp4.current);
      }};
    
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp5.current) {
      observer.observe(fadeInUp5.current);
    }

    return () => {
      if (fadeInUp5.current) {
        observer.unobserve(fadeInUp5.current);
      }};
    
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp6.current) {
      observer.observe(fadeInUp6.current);
    }

    return () => {
      if (fadeInUp6.current) {
        observer.unobserve(fadeInUp6.current);
      }};
    
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp7.current) {
      observer.observe(fadeInUp7.current);
    }

    return () => {
      if (fadeInUp7.current) {
        observer.unobserve(fadeInUp7.current);
      }};
    
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp8.current) {
      observer.observe(fadeInUp8.current);
    }

    return () => {
      if (fadeInUp8.current) {
        observer.unobserve(fadeInUp8.current);
      }};
    
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp9.current) {
      observer.observe(fadeInUp9.current);
    }

    return () => {
      if (fadeInUp9.current) {
        observer.unobserve(fadeInUp9.current);
      }};
    
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp10.current) {
      observer.observe(fadeInUp10.current);
    }

    return () => {
      if (fadeInUp10.current) {
        observer.unobserve(fadeInUp10.current);
      }};
    
    },[]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInUp');
        }
      });
    });

    if (fadeInUp11.current) {
      observer.observe(fadeInUp11.current);
    }

    return () => {
      if (fadeInUp11.current) {
        observer.unobserve(fadeInUp11.current);
      }};
    
    },[]);

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
          entry.target.classList.add('animate__fadeInLeft');
        }
      });
    });

    if (fadeInLeft2.current) {
      observer.observe(fadeInLeft2.current);
    }

    return () => {
      if (fadeInLeft2.current) {
        observer.unobserve(fadeInLeft2.current);
      }

    };

  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInLeft');
        }
      });
    });

    if (fadeInLeft3.current) {
      observer.observe(fadeInLeft3.current);
    }

    return () => {
      if (fadeInLeft3.current) {
        observer.unobserve(fadeInLeft3.current);
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
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // It's visible. Add the animation class here!
          entry.target.classList.add('animate__fadeInRight');
        }
      });
    });

    if (fadeInRight2.current) {
      observer.observe(fadeInRight2.current);
    }

    return () => {
      if (fadeInRight2.current) {
        observer.unobserve(fadeInRight2.current);
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

    if (fadeInRight3.current) {
      observer.observe(fadeInRight3.current);
    }

    return () => {
      if (fadeInRight3.current) {
        observer.unobserve(fadeInRight3.current);
      }
    };

  }, []);
  

  return (
    <>
      <Hero/>
      {/* <TradHold/> */}
      <div className="w-full h-[auto] bg-[#edeff7] flex flex-col items-center" id='home'>
        <div ref={fadeInUp} className="w-[90%] h-[550px]  flex justify-between mt-20 mb-20 phone:flex-col-reverse phone:h-[auto] phone:mb-20 animate__animated ">
          <div className="w-[52%] h-[100%]  flex flex-col justify-center gap-8 phone:w-[100%] phone:gap-1 ">
            <h1 className="text-5xl font-semibold phone:text-xl ">About Expresstradesprofit</h1>
            <p className=" text-base font-normal text-[#25376f] phone:text-sm  ">
              We are one of the world's leading multi-asset alternative investment firm with approximately
              $649 billion in assets under management that creates lasting impact for our investors,<br></br>
              teams, businesses and the communities in which we live. Founded in 2013, we pioneered a
              consulting-based approach to the asset management investing, partnering closely with
              management teams to offer the insights that challenge conventional thinking, build great
              businesses and improve operations. Over time, we have organically expanded this approach
              across asset classes to build one of the strongest alternative asset platforms in the world.
            </p>
            <button className="w-[50%] h-[70px] bg-blue-500 hover:bg-blue-700 rounded-full text-[white] text-lg font-semibold mt-5 phone:mt-10 phone:w-[70%] phone:h-[60px] phone:text-xs ">View Certificate of Incoporation</button>
          </div>
          <div className="w-[45%] h-[100%] flex items-center phone:w-[100%] phone:mb-3 animate__animated ">
            <img src={landingPimg1} alt="" />
          </div>
        </div>
        <div className="w-[100%] h-[650px] bg-blue-500 flex phone:h-[auto] ">
          <div ref={fadeInLeft} className="w-[45%] h-[100%] flex flex-col justify-center pl-20 gap-8 phone:w-[100%] phone:p-10 animate__animated ">
            <p className="text-white text-base font-semibold phone:text-sm ">
              At EXPRESS TRADES PROFIT, we understand that decentralized
              cryptocurrencies like Bitcoin and Ethereum will change the way the world
              views and uses money so, we are spearheading a new financial system
              being built in real-time, and we believe this new worldwide crypto financial
              system will accelerate humanity for a long time into the future.
            </p>
            <p className="text-white text-base font-semibold phone:text-sm ">
              EXPRESS TRADES PROFIT brings together the best aspects of crypto and
              the real economy in order to get to a qualitatively new level-composite
              economy. This means a simple integration of rules and customs of existing
              industries and segments of global and local economies. Utilizing the power
              of the global community and the sharing economy to tear down the barriers
              and revolutionize the old and inefficient financial systems.
            </p>
            <p className="text-white text-base font-semibold phone:text-sm ">
              Our vision is to create sustainable wealth and income for investors all round
              the world, and we have fulfilled this mandate for over four years, and we
              continue each day to make our platform much easier, safer and more
              profitable.
            </p>
            <button className="w-[30%] h-[60px] bg-orange-500 hover:bg-orange-700 rounded-full text-[white] text-lg font-semibold mt-5 phone:w-[70%] phone:text-sm phone:h-[50px] ">Get Started</button>
          </div>
          <div ref={fadeInRight} className="w-[55%] h-[100%] flex items-center phone:hidden animate__animated ">
            <img src={landingPimage2} alt="" />
          </div>
        </div>
        <div className="w-[100%] h-[1150px] flex mt-10 phone:flex-col phone:h-auto phone:p-10 ">
          <div ref={fadeInLeft2} className="w-[50%] h-[100%] phone:w-[100%] animate__animated ">
            <div className="w-[100%] h-[35%] pl-20 flex flex-col justify-center font-semibold gap-5 phone:pl-0 phone:gap-2 phone:mb-5 ">
              <h1 className="text-4xl phone:text-2xl ">Everything A Finance App</h1>
              <h1 className="text-5xl phone:text-2xl font-bold text-[#25376f] ">How To Trade Options</h1>
              <h1 className="text-5xl phone:text-2xl font-bold text-[#25376f] ">In Four Steps</h1>
              <h2 className="text-2xl font-semibold mt-10 phone:mt-5 phone:text-xl ">Options Trading</h2>
            </div>
            <div className="w-[100%] h-[65%] flex flex-col pl-20 gap-8 phone:pl-0 phone:mb-10 ">
              <p className=" text-base font-normal text-[#25376f] phone:text-sm  ">
                Trading stock options can be complex — even more so than stock trading. When you buy a
                certain future date.
              </p>
              <p className=" text-base font-normal text-[#25376f] phone:text-sm   ">
                Options trading is when you buy or sell an underlying asset at a pre-negotiated price by a
                stock, you just decide how many shares you want, and your broker fills the order at the
                prevailing market price or a limit price you set. Options trading requires an understanding of
                advanced strategies, and the process for opening an options trading account includes a few
                more steps than opening a typical investment account.
              </p>
              <p className=" text-base font-normal text-[#25376f] phone:text-sm   ">
                In 2022, the stock market has seen its share of highs and lows amid concerns about inflation,
                Russia's invasion of Ukraine and rising oil prices. When the market is volatile, options trading
                often increases, says Randy Frederick, managing director of trading and derivatives with the
                Schwab Center for Financial Research.
              </p>
              <p className=" text-base font-normal text-[#25376f] phone:text-sm   ">
                “You can use options to speculate and to gamble, but the reality is ... the best use of options is
                to protect your downside,” he says. "Options are one way to generate income when the
                markets aren’t going up.”
              </p>
              <p className=" text-base font-normal text-[#25376f] phone:text-sm   ">
                According to the Options Clearing Corporation, there were 939 million options contracts
                traded in March 2022, up 4.5% compared with March 2021. It was second-highest trading
                month on record.
              </p>
              <button className="w-[30%] h-[60px] bg-blue-500 hover:bg-blue-700 rounded-full text-[white] text-lg font-semibold mt-5 phone:w-[70%] phone:h-[50px] phone:text-sm ">Get Started</button>
            </div>
          </div>
          <div ref={fadeInRight2} className="w-[50%] h-[100%] phone:w-[100%] animate__animated ">
            <div className="w-[100%] h-[40%] pl-3 pt-4 phone:pl-0 phone:pt-0  ">
              <img src={landingPimage3} alt="" className="w-[90%] phone:w-[100%] " />
            </div>
            <div className="w-[100%] h-[60%] pr-20 pl-3 pt-20 flex flex-col gap-7 phone:pr-0 phone:pl-0 phone:pt-5 ">
                <p className=" text-base font-bold text-[#25376f]  ">* Investment objectives.
                 <span className=" text-base font-normal text-[#25376f]  ">-  This usually includes income, growth, capital preservation or speculation.
                 </span>
                </p>
                <p className=" text-base font-bold text-[#25376f] phone:text-sm  ">* Trading experience.
                 <span className=" text-base font-normal text-[#25376f] phone:text-sm  ">-  The broker will want to know your knowledge of investing,
                  how long you’ve been trading stocks or options, how many trades you make per year
                  and the size of your trades.
                 </span>
                </p>
                <p className=" text-base font-bold text-[#25376f] phone:text-sm  ">* Personal financial information.
                 <span className=" text-base font-normal text-[#25376f] phone:text-sm  ">-  Have on hand your liquid net worth (or
                  investments easily sold for cash), annual income, total net worth and employment
                  information.
                 </span>
                </p>
                <p className=" text-base font-bold text-[#25376f] phone:text-sm  ">* The types of options you want to trade.
                 <span className=" text-base font-normal text-[#25376f] phone:text-sm  ">-  For instance, calls, puts or spreads. And
                  whether they are covered or naked. The seller or writer of options has an obligation to
                  deliver the underlying stock if the option is exercised. If the writer also owns the
                  underlying stock, the option position is covered. If the option position is left
                  unprotected, it's naked.
                 </span>
                </p>
            </div>
          </div>
        </div>
        <div ref={fadeInUp2} className="w-[100%] h-[700px] phone:h-auto phone:p-10 animate__animated ">
          <div className="w-[100%] h-[30%] flex items-center justify-center flex-col pr-20 pl-20 gap-6 phone:h-[100%] phone:p-0 phone:gap-2 ">
            <h1 className="text-4xl font-semibold phone:text-xl ">Helping Entrepreneurs <span className="text-5xl font-semibold text-[#25376f] phone:text-xl ">Globally</span></h1>
            <p className=" text-base font-normal text-[#25376f] leading-7 text-center phone:text-sm ">
              We seek out business teams with the coherence and expertise to develop a project capable of reaping long-term financial returns, which has positioned us as a firm
              with reliable investment expertise and dependable profitability.
            </p>
          </div>
          <div className="w-[100%] h-[70%] pl-20 pb-10 relative phone:hidden ">
            <img src={landingPimage4} alt="" className="w-[65%] h-[100%] "/>
            <div className="w-[90%] h-[80px] absolute top-10 flex justify-between ">
              <div className="w-[16%] h-[100%] flex items-center "><img src={focalPoint} alt="" /></div>
              <div className="w-[16%] h-[100%] flex items-center "><img src={cloudWatch} alt="" /></div>
              <div className="w-[16%] h-[100%] flex items-center "><img src={epicurious} alt="" /></div>
              <div className="w-[16%] h-[100%] flex items-center "><img src={focalPoint} alt="" /></div>
              <div className="w-[16%] h-[100%] flex items-center "><img src={acmeCorp} alt="" /></div>
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[600px] bg-blue-500 flex justify-center flex-col pl-20 pr-20 phone:h-auto phone:p-10 ">
          <div ref={fadeInUp3} className="w-[100%] h-[20%] flex items-center justify-between mb-2 phone:flex-col phone:mb-5 animate__animated ">
            <h1 className="text-4xl font-semibold text-[#fff] phone:text-xl phone:text-center ">Everything You Expect From A Trading Expert</h1>
            <button className="w-[12%] h-[55px] bg-orange-500 hover:bg-orange-700 rounded-full text-[white] text-lg font-semibold mt-5 phone:hidden ">Get Started</button>
          </div>
          <div ref={fadeInUp4} className="w-[100%] h-[60%] flex justify-between phone:flex-col phone:gap-10 animate__animated ">
            <div className="w-[30%] h-[100%] bg-[white] rounded-2xl p-10 flex flex-col gap-3 phone:w-[100%] phone:text-center smallPhone:p-5 ">
              <h3 className="text-xl font-bold phone:text-lg ">Clear Investment Processes</h3>
              <p className=" text-base font-normal text-[#3450a4] leading-8 phone:text-sm ">
                Our transparent investment processes detail
                how each investment team identifies and
                implements investment opportunities and the
                risk/return profile to be expected. We believe
                that strict adherence to these guidelines is one
                of the most effective forms of risk
                management.
              </p>
            </div>
            <div className="w-[30%] h-[100%] bg-[white] rounded-2xl p-10 flex flex-col gap-3 phone:w-[100%] phone:text-center smallPhone:p-5 ">
              <h3 className="text-xl font-bold phone:text-lg ">ESG Integration</h3>
              <p className=" text-base font-normal text-[#3450a4] leading-8 phone:text-sm ">
                As a signatory of the United Nations-
                supported Principles for Responsible
                Investment (UN PRI) initiative, we're
                committed to investing responsibly and
                supported by a global team of dedicated
                ESG specialists whose recommendations
                help shape the investment process.
              </p>
            </div>
            <div className="w-[33%] h-[100%] bg-[white] rounded-2xl p-10 flex flex-col gap-3 phone:w-[100%] phone:text-center smallPhone:p-5 ">
              <h3 className="text-xl font-bold phone:text-lg ">Robust Oversight</h3>
              <p className=" text-base font-normal text-[#3450a4] leading-8 phone:text-sm ">
                Portfolio risk management is supplemented by
                our independent risk and quantitative analytics
                team—which partners with investment teams
                to measure behavioral biases and other risks
                but reports to senior investment management
                —and an operational risk management
                function that assesses risk across the complex.
              </p>
            </div>
          </div>
        </div>
        <div ref={fadeInUp5} className="w-[100%] h-auto p-20 phone:mt-20 phone:p-10 animate__animated ">
          <div className="w-[100%] h-[100px]flex items-center justify-between phone:h-auto phone:justify-center ">
            <div className="w-[85%] h-[100%] flex flex-col justify-center gap-3 phone:text-center ">
              <h1 className="text-4xl font-semibold phone:text-xl  ">Be In Complete Control<span className="text-[#25376f] "> With Finance</span></h1>
              {/* <p className=" text-base font-normal text-[#3450a4] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p> */}
            </div>
            <button className="w-[15%] h-[60px] bg-blue-500 hover:bg-blue-700 rounded-full text-[white] text-lg font-semibold phone:hidden ">Get Started</button>
          </div>
          <div className="w-[100%] h-auto mt-10 flex flex-wrap gap-7 phone:gap-20 ">
            <div className="w-[31.9%] h-auto phone:w-[100%] ">
              <Financecards
                img = {financecardimg1}
                h2 = "FOREIGN EXCHANGE"
                p = "EXPRESS TRADES PROFIT finance offers a broad array of professional services and access to the global foreign exchange markets for commercial and institutional clients."
              />
            </div>
            <div className="w-[31.9%] h-auto phone:w-[100%] ">
              <Financecards
                img = {financecardimg2}
                h2 = "REAL ESTATE"
                p = "As one of the world's largest investors in real estate, we own and operate iconic properties in the world's most dynamic markets."
              />
            </div>
            <div className="w-[31.9%] h-auto phone:w-[100%] ">
              <Financecards
                img = {financecardimg3}
                h2 = "INFRASTRUCTURE"
                p = "We are one of the world's largest infrastructure investors, owning and operating assets across the utilities, transport and energy."
              />
            </div>
            <div className="w-[31.9%] h-auto phone:w-[100%] ">
              <Financecards
                img = {financecardimg4}
                h2 = "FIXED INCOME"
                p = "We meet our investor's needs by offering a broad fixed income solution set and targeted global market intelligence."
              />
            </div>
            <div className="w-[31.9%] h-auto phone:w-[100%] ">
              <Financecards
                img = {financecardimg5}
                h2 = "STOCK"
                p = "Stock trading involves buying and selling shares in companies in an effort to make money on daily changes in price. Traders watch the short-term price fluctuations of these stocks closely and then try to buy low and sell high."
              />
            </div>
            <div className="w-[31.9%] h-auto phone:w-[100%] ">
              <Financecards
                img = {financecardimg6}
                h2 = "OPTIONS COPY TRADING"
                p = "Options Are A Form Of Derivative Contract That Gives Buyers Of The Contracts (The Option Holders) The Right (But Not The Obligation) To Buy Or Sell A Security At A Chosen Price At Some Point In The Future. Option Buyers Are Charged An Amount Called A Premium By The Sellers For Such A Right"
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[600px] bg-blue-500 p-20 flex justify-between phone:flex-col-reverse phone:h-auto phone:p-10 phone:gap-10 ">
          <div ref={fadeInLeft3} className="w-[57%] h-[100%] pl-[100px] pr-[100px] flex flex-col gap-6 phone:w-[100%] phone:p-0 phone:text-center phone:gap-2 animate__animated ">
            <h1 className="text-4xl font-semibold text-[#fff] phone:text-xl ">Responsible Investing</h1>
            <p className="text-white text-base leading-7 phone:text-sm ">
              At EXPRESS TRADES PROFIT Finance we consider environmental, social
              and governance (ESG) issues throughout the investment decision-making
              process and life-cycle. We believe that robust and well-implemented ESG
              policies and practices contribute directly to the long-term success and
              sustainability of our portfolio companies. Implemented effectively, they help
              us to protect and enhance reputation and financial performance whilst
              creating stronger, more valuable companies which can create benefits for all
              stakeholders: from employees to customers, suppliers to shareholders, and
              the wider community at large.
            </p>
            <p className="text-white text-base leading-7 mt-2 ">
              We review our approach to ESG regularly to ensure that it continues to reflect best practice.
            </p>
          </div>
          <div ref={fadeInRight3} className="w-[43%] h-[100%] phone:w-[100%] animate__animated ">
            <img src={landingpageimg5} alt="" className="w-full h-full  rounded-xl" />
          </div>
        </div>
        <div className="w-[100%] p-20 bg-blue-100 mt-20 flex flex-wrap gap-7 phone:p-10 phone:text-center ">
          <div ref={fadeInUp6} className="w-[31.9%] h-auto phone:w-[100%] animate__animated ">
            <Bottomcard
              h2 = "A Focus On Long-Term, Risk-Adjusted Returns"
              p = "Our teams understand the importance of pursuing outcomes with superior risk/return characteristics. This focus is embedded in each step of the investment process."
            />
          </div>
          <div ref={fadeInUp7} className="w-[31.9%] h-auto phone:w-[100%] animate__animated ">
            <Bottomcard
              h2 = "High-Conviction, Risk-Aware Portfolios"
              p = "Our focus on proprietary, security-level research allows us to build high-conviction, differentiated portfolios. Our risk management processes provide valuable insight to help our teams understand potential outcomes."
            />
          </div>
          <div ref={fadeInUp8} className="w-[31.9%] h-auto phone:w-[100%] animate__animated ">
            <Bottomcard
              h2 = "Specialized Experience"
              p = "Our equity teams are led by industry veterans—many with decades of experience managing their respective strategies—who work tirelessly to implement investment processes that can endure through changing markets."
            />
          </div>
        </div>
        <div className="w-[100%] h-[500px] bg-blue-500 mt-20 px-20 py-10 phone:h-auto phone:p-10 ">
          <Riskresearch
            img = {landingpageimg6}
            h1 = "Research Driven"
            p = "In an environment defined by uncertainty, the role that independent, bottom-up research and analysis plays in the investment process becomes ever more critical. Our structure fosters a research environment characterized by focused investment teams and embedded analysts with the ability to take advantage of our global reach."
          />
        </div>
        <div className="w-[100%] p-20 bg-blue-100 mt-20 flex flex-wrap gap-7 phone:text-center phone:p-10 ">
          <div ref={fadeInUp9} className="w-[31.9%] h-auto phone:w-[100%] animate__animated ">
            <Bottomcard
              h2 = "Proprietary Research"
              p = "Original research is the cornerstone of effective investment processes. We pride ourselves on conducting bottom-up, independent research to generate unique company insight."
            />
          </div>
          <div ref={fadeInUp10} className="w-[31.9%] h-auto phone:w-[100%] animate__animated ">
            <Bottomcard
              h2 = "Global Connectivity"
              p = "We’re proud of our collaborative culture. It’s evident in the way we share our work across investment teams and asset classes—from formal collaboration to informal engagements, our research efforts are truly global. We harness all of our intellectual capital for the benefit of our clients."
            />
          </div>
          <div ref={fadeInUp11} className="w-[31.9%] h-auto phone:w-[100%] animate__animated ">
            <Bottomcard
              h2 = "Engaged Debate"
              p = "Our culture actively promotes a diversity of views. Open exchanges of ideas enables our teams to refine their investment theses and bring us closer to identifying the best investment ideas."
            />
          </div>
        </div>
        <div className="w-[100%] h-[500px] bg-blue-500 mt-20 px-20 py-10 phone:h-auto phone:p-10 ">
          <Riskresearch
            img = {landingpageimg7}
            h1 = "Multidimensional Risk Management"
            p = "EXPRESS TRADES PROFIT risk management is at the heart of everything we do. It starts with clearly defined and transparently communicated investment processes, includes formal ESG analysis with the support of dedicated specialists, and continues with ongoing multiple levels of portfolio and operational oversight. The goal is for our portfolio teams to take risk in alignment with client expectations."
          />
        </div>
      </div>
    </>
  )
}

export default Home