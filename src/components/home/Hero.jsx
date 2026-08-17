// "use client";

// import Link from "next/link";
// import { FiArrowRight } from "react-icons/fi";
// import homeImages from "@/config/homeImages";

// const Hero = () => {
//   return (
//     <section className="relative mx-0 overflow-hidden rounded-none bg-[var(--secondary)] pt-8 sm:px-6 sm:pt-10 lg:mx-8 lg:rounded-3xl lg:pt-12">
//       <div className="absolute inset-0">
//         <img
//           src={homeImages.hero}
//           alt="Students studying abroad"
//           className="h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/95 via-[var(--secondary)]/80 to-[var(--secondary)]/60" />
//       </div>

//       {/* Main content */}
//       <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start lg:px-5 gap-8 sm:gap-10 lg:flex-row lg:justify-between lg:gap-12">
//         {/* Left content */}
//         <div className="max-w-xl text-start lg:text-left">
//           <h1 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem] text-start lg:text-start">
//             Turn Your Dreams Into Global Study Opportunities
//           </h1>

//           <p className="mt-6 text-lg text-white/90 sm:text-xl">
//             We help Pakistani students find the right university, scholarship,
//             and study abroad destination — with personalized guidance every step
//             of the way, from application to visa
//           </p>

//           <div className="mt-8 flex flex-col items-center justify-start gap-4 sm:flex-row lg:justify-start">
//             <Link
//               href="/contact"
//               className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary-dark)] hover:gap-3"
//             >
//               Contact Us
//               <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>

//           </div>
//         </div>

//         {/* Right student image */}
//         {/* <div className="relative mx-auto h-[360px] w-[300px] shrink-0 flex items-center sm:h-[420px] sm:w-[360px] md:h-[470px] md:w-[400px] lg:mx-0 lg:h-[500px] lg:w-[420px]">
//           <div className="absolute bottom-0 right-0 h-[280px] w-[280px] overflow-hi rounded-full bg-[var(--primary)]/70 sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px] lg:h-[380px] lg:w-[380px]" />

//           <div className="absolute inset-0 flex items-end justify-center mt-10  overflow-hidden">
//             <img
//               src="/images/banner-man-img.png"
//               alt="Student ready for study abroad journey"
//               className="h-full w-full object-contain object-bottom animate-float"
//             />
//           </div>
//         </div> */}

// <div className="relative mx-auto h-[360px] w-[300px] shrink-0 sm:h-[420px] sm:w-[360px] md:h-[470px] md:w-[400px] lg:mx-0 lg:h-[500px] lg:w-[420px]">

//   {/* Circle background */}
//   <div className="absolute bottom-0 right-0 z-0 h-[280px] w-[280px] rounded-full bg-[var(--primary)]/70 sm:h-[320px] sm:w-[320px] md:h-[350px] md:w-[350px] lg:h-[380px] lg:w-[380px]" />

//   {/* Image wrapper - fixed inset, controls exactly how much image shows */}
//   <div className="absolute inset-0 z-10 flex items-end justify-center">
//     <img
//       src="/images/banner-man-img.png"
//       alt="Student ready for study abroad journey"
//       className="h-[90%] w-auto max-w-none object-contain object-bottom animate-float"
//     />
//   </div>
// </div>

//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0);
//           }

//           50% {
//             transform: translateY(-18px);
//           }
//         }

//         .animate-float {
//           animation: float 4s ease-in-out infinite;
//           will-change: transform;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Hero;

"use client";

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative mx-0 overflow-hidden rounded-none bg-[var(--secondary)] px-4 pt-10 sm:px-6 sm:pt-12 lg:mx-8 lg:rounded-3xl lg:pt-16">
      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start lg:px-5 gap-8 sm:gap-10 lg:flex-row lg:justify-between lg:items-center lg:gap-12">

        <div className="max-w-xl text-start lg:text-left">
          <h1 className="font-serif text-4xl leading-[1.15] text-white sm:text-5xl lg:text-[3.4rem] text-start lg:text-start">
            Turn Your Dreams Into Global Study Opportunities
          </h1>

          <p className="mt-6 text-lg text-white/90 sm:text-xl">
            We help Pakistani students find the right university, scholarship,
            and study abroad destination — with personalized guidance every step
            of the way, from application to visa
          </p>

          <div className="mt-8 flex flex-col items-center justify-start gap-4 sm:flex-row lg:justify-start">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--primary-dark)] hover:gap-3"
            >
              Contact Us
              <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

  
        {/* Right student image */}
      {/* Right student image */}
<div className="relative mx-auto h-[300px] w-[280px] shrink-0 sm:h-[360px] sm:w-[340px] md:h-[420px] md:w-[380px] lg:mx-0 lg:h-[460px] lg:w-[420px]">

  <div className="absolute bottom-[-20px] left-0 right-0 z-0 mx-auto h-[240px] w-[240px] overflow-hidden rounded-full bg-[#7ED321] sm:bottom-[-30px] sm:h-[280px] sm:w-[280px] md:bottom-[-35px] md:h-[320px] md:w-[320px] lg:bottom-[-40px] lg:h-[450px] lg:w-[450px]" />

  {/* Tower - right side, sirf vertical float, boy ke peeche */}
  <div className="absolute right-[-40px] bottom-0 z-[5] flex items-end justify-end overflow-visible sm:right-[-50px] lg:right-[-60px]">
    <img
      src="/banner-right-towor.png"
      alt="Eiffel tower illustration"
      className="h-[55%] w-auto max-w-none object-contain object-bottom animate-float-y opacity-90 ml-10  sm:h-[40%] lg:h-[35%]"
    />
  </div>

  {/* Boy image - untouched */}
  <div className="absolute inset-0 z-10 flex items-end justify-center overflow-visible">
    <img
      src="/images/banner-man-img.png"
      alt="Student ready for study abroad journey"
      className="h-[100%] w-auto max-w-none object-contain object-bottom animate-float-x"
    />
  </div>

</div>
      </div>

     <style jsx>{`
  @keyframes float-x {
    0%,
    100% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(-16px);
    }
  }

  @keyframes float-y {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-14px);
    }
  }

  .animate-float-x {
    animation: float-x 4s ease-in-out infinite;
    will-change: transform;
  }

  .animate-float-y {
    animation: float-y 3.5s ease-in-out infinite;
    will-change: transform;
  }
`}</style>
    </section>
  );
};

export default Hero;
