"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {

  const handleHire = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
  }

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-[86px] lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&#39;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Abhishek Bhattacharjee",
                1000,
                "Backend Engineer",
                1000,
                "Java Developer",
                1000,
                "DevOps Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#fafdff] text-base sm:text-lg mb-6 lg:text-xl">
            <b>Backend Engineer @Swaroop.ai | Passionate about creating innovative, scalable solutions.</b>
          </p>
          <div>
            <button onClick={handleHire} className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="p-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <Link href="https://drive.google.com/file/d/1hTjYrg3S1KsuPlwsVXmUJvzzpx0DVMzl/view?usp=sharing" className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </Link>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-br from-purple-500 to-pink-500 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="hero image"
              className="absolute rounded-full object-contain transform -translate-x-1/2 top-0 left-1/2"
              width={1000}
              height={1000}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;