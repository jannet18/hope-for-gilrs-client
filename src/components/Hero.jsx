import React from "react";
import { FaHandsHoldingCircle } from "react-icons/fa6";

function Hero() {
  return (
    <>
      <section className="relative bg-[url('https://t4.ftcdn.net/jpg/06/52/22/59/360_F_652225930_sbWHvu8GlyCrcGwTweBdEAlf8xor5VXL.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl grid gap-3 grid-cols-1 justify-items-start">
            <h1 className="text-xl font-extrabold sm:text-2xl text-[#FBD459] py-2">
              Always donate for children
              <strong className="block font-extrabold text-white text-4xl md:text-6xl py-3">
                Lend a helping <br /> Hand to Those <br /> in Need
              </strong>
            </h1>
            <div className="mt-8 flex flex-wrap gap-4 text-center py-2">
              <a
                href="#"
                className="block w-fit whitespace-nowrap bg-[#FBD459] px-16 py-4 rounded-3xl uppercase text-sm font-medium shadow hover:bg-white hover:text-[#01715d] focus:outline-none "
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-24 md:gap-x-40">
        <div className="bg-[#f9f4e8] w-full md:[] py-16">
          <div className="relative hidden md:flex items-center md:justify-end py-8">
            {/* <div className="md:mr-40  ml-5  px-10 border-8 rounded-b-full p-20 w-[250px] h-[350px] lg:w-[450px] lg:h-[700px] md:w-[450px] md:h-[700px] border-[#fbd459] z-20"></div> */}
            <div className="lg:mr-40 md:mr-48 border-8 rounded-b-full lg:w-[450px] lg:h-[600px] md:w-[450px] md:h-[600px] border-[#fbd459] z-20"></div>

            <img
              src="https://media.licdn.com/dms/image/D5612AQH4UwVMye63zg/article-cover_image-shrink_720_1280/0/1682324822448?e=2147483647&v=beta&t=xaH_f6tLQXzs7dSnIsfgE_jxlGrh1avVYTkSeGVNzes"
              alt="Hands reaching out to heart"
              className="absolute md:top-[10%] md:right-[10%] top-[15%] right-[10%] object-cover rounded-b-full rounded-tr-[1.5rem] w-[350px] h-[450px] md:w-[500px] md:h-[750px] z-10 overflow-hidden"
            />
            <img
              src="https://media.istockphoto.com/id/1363108156/vector/love-and-compassion-hands.jpg?s=612x612&w=0&k=20&c=GoOIYkFWo_mCpcWRo58VBPrFmUZF9MlN2Bg3TMF1JC0="
              alt="Love and compassion hands"
              className="rounded-full absolute md:bottom-[2%] md:left-[78%] bottom-[-2%] left-[68%] object-cover w-[80px] h-[80px] md:w-[200px] md:h-[200px] z-10 "
            />
          </div>
        </div>
        <div className="bg-white grid grid-cols-1 justify-items-start gap-8 md:gap-12 px-16">
          <h3 className="italic text-emerald-500 font-bold text-lg">
            Welcome to Hope For Life Girls Charity
          </h3>
          <p className="md:text-5xl text-3xl font-bold text-[#283734]">
            Helping each other can make world better
          </p>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            aspernatur incidunt sed nulla, sapiente aliquid sunt laudantium
            esse, pariatur, ipsam delectus labore amet earum! Dolores quod
            maiores minus placeat dolore?
          </p>
          <div className="flex">
            <div className="w-1 h-6 text-[#01715D]" />
            <h4 className="text-2xl">
              Helped fund
              <span className="text-[#FBD459] font-bold m-2">25000</span>
              projects in
              <span className="text-[#FBD459] font-bold m-2">24</span>
              countries, Benefiting over
              <span className="text-[#FBD459] font-bold m-2">3.5</span>
              million people.
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src="src/assets/hand-heart.png"
                alt="heart-hands"
                className="w-20 h-20 hover:scale-75"
              />
              <div className="flex flex-col items-center justify-center">
                <h5 className="font-bold text-2xl hover:text-[#01715d] whitespace-nowrap">
                  Join our team
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <img
                src="src/assets/heart-hands.png"
                alt="hands-heart"
                className="w-20 h-20 hover:scale-75"
              />
              <div className="flex flex-col items-center justify-center">
                <h5 className="font-bold text-2xl hover:text-[#01715d] whitespace-nowrap">
                  Join our team
                </h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </div>
            </div>
          </div>
          <button className="bg-[#FBD459] w-44 flex items-center gap-2 text-sm uppercase px-8 py-4 text-[#283734] hover:bg-[#283734] hover:text-white rounded-3xl whitespace-nowrap">
            discover more
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10"></div>
      {/* <div className="text-center mt-10">
        <button className="bg-[#fbd459] text-[#01715d] text-xs uppercase p-5 rounded-full font-bold hover:bg-gray-600 hover:text-white">
          Discover more
        </button>
      </div> */}
      <div className="flex flex-col items-center justify-center p-16">
        <div className="flex flex-col items-center justify-center">
          <h3 className="italic font-bold text-xl text-emerald-500">
            Help & donate to us now
          </h3>
          <p className="font-bold text-3xl md:text-5xl text-center">
            Find the popular cause and donate to <br /> them
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10 py-10">
          <div className="rounded-t-3xl grid grid-cols-1 items-center justify-center rounded-3xl shadow-lg gap-3">
            <div className="relative overflow-hidden group rounded-t-3xl">
              <img
                src="https://static.wixstatic.com/media/e348d4_0fccc924bfa646558c705f74568c42fd~mv2.jpg/v1/fill/w_640,h_664,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e348d4_0fccc924bfa646558c705f74568c42fd~mv2.jpg"
                alt=""
                className="object-cover transform transition-transform duration 500 rounded-t-3xl scale-100 group-hover:scale-105 origin-top"
              />
              <div className="absolute inset-0 bg-black/25 bg-opacity-15 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
              <span className="absolute top-[85%] left-[5%] bg-[#FBD459] px-3 py-1 text-sm rounded-3xl z-20">
                Health
              </span>
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-bold text-2xl">
                It is a long established fact
              </h3>
              <p className="text-gray-500 tracking-wider">
                Health It is a long established fact that a reader Lorem
              </p>
              <div className="border bg-[#f9f4e8] p-10 rounded-3xl">
                <input
                  type="range"
                  min={100}
                  max={1000}
                  className="w-full text-[#01715D]"
                />
                <div className="flex items-center justify-between">
                  <span>Raised</span>
                  <span>Goal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
