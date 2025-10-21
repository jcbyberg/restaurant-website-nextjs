import React from "react";

const HomeSection = () => {
  return (
    <section
      id="home"
      className="pt-32 flex flex-col md:flex-row items-center justify-between px-8 pb-32"
    >
      <div className="flex-1">
        <h2 className="text-5xl text-sunset font-bold mb-4">
          Local Ingredients <br /> Stone-Fired <br />
          
        </h2>
        <p className="text-lg text-lightColor mb-6">
          Craving something remarkable? Experience all-Canadian, stone-fired pizza—slow-fermented dough, seasonal toppings, and big flavour. 
          </p>
        <a
          href="#dishes"
          className="inline-block bg-sunset text-white px-6 py-3 rounded hover:bg-jellyBeanBlue transition"
        >
          Menu
        </a>
      </div>
      <div className="flex-1 relative mt-8 md:mt-0 w-full h-[400px]">
        <img
          src="/images/image1.png"
          alt="Food 1"
          className="absolute w-[80%] h-auto rounded object-cover"
          style={{
            animation:
              "imageSwitch 15s steps(1) infinite 0s, rotate 9s linear infinite",
          }}
        />
        <img
          src="/images/image5.png"
          alt="Food 2"
          className="absolute w-[80%] h-auto rounded object-cover"
          style={{
            animation:
              "imageSwitch 15s steps(1) infinite 5s, rotate 9s linear infinite",
          }}
        />
        <img
          src="/images/image4.png"
          alt="Food 3"
          className="absolute w-[80%] h-auto rounded object-cover"
          style={{
            animation:
              "imageSwitch 15s steps(1) infinite 10s, rotate 9s linear infinite",
          }}
        />
      </div>
    </section>
  );
};

export default HomeSection;
