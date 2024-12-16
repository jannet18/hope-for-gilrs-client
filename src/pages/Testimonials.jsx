import React from "react";
import { ImQuotesRight } from "react-icons/im";

function Testimonials() {
  return (
    <section className="bg-[#273733]">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="grid grid-cols-1 items-center gap-3 justify-items-start px-3 lg:gap-4">
            <h2 className="text-xl font-bold tracking-tight text-yellow-400">
              Our Testimonials
            </h2>
            <span className="text-white font-bold text-4xl">
              What they are talkimg about Hope for Girls
            </span>
            <p className="mt-4 text-slate-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>
            <button className="bg-[#FBD459] rounded-3xl px-6 py-4 text-sm uppercase hover:bg-white hover:text-[#01715d]">
              All Testimonials
            </button>
          </div>
          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              <div className="relative px-6">
                <blockquote className="flex h-full flex-col justify-between bg-white border-[#FBD459] border-8 p-6 shadow-sm sm:p-8 lg:p-12 rounded-3xl">
                  <div className="">
                    <div className="absolute md:bottom-[230px] top-[-60px]">
                      <div className="flex items-center gap-6 md:gap-32">
                        <img
                          src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                          alt="profile"
                          className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-full border-8 border-[#FBD459]"
                        />
                        <footer className="flex flex-col font-bold text-white text-xl">
                          {/* &mdash; */}
                          <span className="whitespace-nowrap">
                            Michael Scott
                          </span>
                        </footer>
                        <ImQuotesRight className="bg-[#01715d] text-white w-24 h-24 p-4 rounded-full border-8 border-[#FBD459] hidden sm:block" />
                      </div>
                    </div>
                    <div className="mt-10">
                      <div className="flex">
                        <span className="text-2xl text-yellow-400">
                          Volunteer
                        </span>
                        {/* <p className="text-2xl  font-bold text-rose-600 sm:text-3xl">
                          Stayin' Alive
                        </p> */}
                      </div>

                      <p className="mt-4 leading-relaxed text-gray-700">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>
                </blockquote>
                <div className="hidden lg:-mt-6 lg:flex lg:justify-end lg:gap-4">
                  <button
                    aria-label="Previous slide"
                    id="keen-slider-previous-desktop"
                    className="rounded-full bg-white p-3 text-gray-600 transition hover:bg-[#01715D] hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 rtl:rotate-180"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>

                  <button
                    aria-label="Next slide"
                    id="keen-slider-next-desktop"
                    className="rounded-full bg-white text-gray-600 p-3 transition hover:bg-[#01715D] hover:text-white"
                  >
                    <svg
                      className="size-5 rtl:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            className="rounded-full bg-white p-3 text-gray-600 transition hover:bg-[#01715D] hover:text-white"
          >
            <svg
              className="size-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            className="rounded-full bg-white p-3 text-gray-600 transition hover:bg-[#01715D] hover:text-white"
          >
            <svg
              className="size-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
