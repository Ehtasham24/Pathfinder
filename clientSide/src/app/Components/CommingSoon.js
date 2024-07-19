"use client";

import { useEffect, useState } from "react";

const ComingSoon = () => {
  const launchDate = new Date("2024-07-15T00:00:00Z");
  const [timeLeft, setTimeLeft] = useState({});
  const [hasMounted, setHasMounted] = useState(false);

  const calculateTimeLeft = () => {
    let difference = +launchDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setHasMounted(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!hasMounted) {
    // Render a placeholder or nothing until the component has mounted
    return null;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div className="flex flex-col items-center px-4" key={interval}>
      <span className="text-4xl lg:text-5xl text-gray-200">
        {timeLeft[interval] < 10
          ? `0${timeLeft[interval]}`
          : timeLeft[interval]}
      </span>
      <span className="text-gray-400 mt-2">
        {interval.charAt(0).toUpperCase() + interval.slice(1)}
      </span>
    </div>
  ));

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundImage:
          "url('https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg')",
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-70">
        <div className="container mx-auto px-8 lg:px-4 xl:px-0 py-8 flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center md:text-left">
              We Are <span className="text-yellow-300">Coming</span> Soon
            </h1>

            <div className="mt-12 flex flex-col items-center mt-8">
              <p className="text-gray-300 uppercase text-sm">
                Time left until launching
              </p>
              <div className="flex items-center justify-center space-x-4 mt-4">
                {timerComponents}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
