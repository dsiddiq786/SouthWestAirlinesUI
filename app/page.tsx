'use client';

import Features from './components/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import HeroSEC from './components/HeroSec';
import Rewards from './components/Rewards';
import SearchInputs from './components/SearchInputs/SearchInputs';
import SpecialOffer from './components/SpecialOffer';
import TravelAdvisory from './components/TravelAdvisory';

export default function Home() {
  return (
    <>
      <Header />
      <div className="container relative mx-auto w-full max-w-[105rem] bg-transparent">
        {/* Container */}
        <div className="container-sw relative z-10 bg-transparent">
          <div className="flex flex-col">
            {/* Rest of the components */}

            {/* Hero section */}
            <div className="mb-2">
              <HeroSEC />
            </div>

            {/* Travel Advisory */}
            <div>
              <TravelAdvisory />
            </div>

            {/* Inputs, Rewards, SpecialOffers, features */}
            <div className="my-6 flex flex-col gap-2 rounded-sm">
              <SearchInputs />
              <Rewards />
              <SpecialOffer />
              <Features />
            </div>
          </div>
        </div>

        {/* Background Image */}
        <div className="absolute top-0 h-screen w-full bg-hero-bg bg-cover bg-fixed bg-center-200 bg-no-repeat">
          {/* <div className="fixed top-24 w-full">
            <img
              src="/images/hero-bg2.png"
              alt=""
              className="w-full object-cover"
            />
          </div> */}
        </div>
      </div>

      <Footer isLinks={true} />
    </>
  );
}
