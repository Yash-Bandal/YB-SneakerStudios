import { useEffect, useState } from "react";

import { arrowRight } from "../assets/icons";
import {Button} from "../components";
import CountUp from "../components/CountUp";
import {shoes,statistics } from "../constants";
import {ShoeCard} from "../components";

// import bigShoe1 from "../assets/images/big-shoe1e.png";
import {bigShoe1} from "../assets/images";



const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalShoes = shoes.length;
  const bigShoeImg = shoes[activeIndex]?.bigShoe || bigShoe1;

  useEffect(() => {
    if (isPaused || totalShoes <= 1) return;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalShoes);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [isPaused, totalShoes]);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat  text-coral-red">Our Summer Collection</p>
        <h1 className="mt-10  font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14  sm:max-w-sm">Discover stylish Nike arrivals, with quality, comfort, and innovation for your active life.</p>

        <Button label="Shop Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              {/* <p className="text-4xl font-palanquin font-bold">{stat.value}</p> */}
            
            {/* Counting up numbers */}
              <p className="text-4xl font-palanquin font-bold">
                <CountUp end={stat.value} />{stat.suffix}
              </p>
              
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="relative flex-1 flex-container justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"> */}
        <div
          className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center bg-cover"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
        <img
          key={bigShoeImg}
          src={bigShoeImg}
          alt="Shoe Collection"
          width={610}
          height={500}
          className="object-contain relative z-10 fade-in"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <div key={shoe.bigShoe}>
              <ShoeCard 
                imgURL={shoe}
                onSelect={() => setActiveIndex(index)}
                isActive={index === activeIndex}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Hero


