import React from "react";
import { FaShareAlt, FaUserCircle } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

function Articles() {
  return (
    <div className="max-w-6xl mx-auto m-20">
      <div className="flex flex-col items-center justify-center py-10 lg:py-16">
        <span className="italic font-bold text-emerald-500 text-lg">
          News & articles
        </span>
        <p className="lg:text-4xl text-2xl font-bold text-[#283734]">
          Latest news and Articles
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 justify-items-center gap-8 p-12">
        <article className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="h-56 w-full object-cover"
          />
          <div className="absolute top-[46%] md:top-[43%] lg:top-[43%] left-8 p-2 text-sm font-bold italic rounded-3xl bg-white text-[#01715d] border hover:shadow">
            07 Sep, 22
          </div>
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 text-gray-500">
              <a href="#" className="flex items-center gap-2">
                <FaUserCircle className="text-[#FBD459]" />
                Layerdrops
              </a>
              <a href="#" className="flex items-center gap-2 whitespace-nowrap">
                <FaComments className="text-[#FBD459]" />2 comments
              </a>
            </div>
            <h1 className="font-bold text-2xl lg:text-4xl text-[#283734] hover:text-[#01715d] whitespace-nowrap">
              Fundraiser Health
            </h1>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <div className="flex items-center justify-between border-t mt-3">
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium hover:text-[#01715d]"
              >
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  &rarr;
                </span>
                Read More
              </a>
              <a href="#">
                <FaShareAlt className="hover:text-[#01715d] w-5 h-5" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Articles;
