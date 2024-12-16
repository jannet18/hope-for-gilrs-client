import React from "react";

function FAQS() {
  return (
    <div className="">
      <div className="bg-[#f9f4e8] grid grid-cols-1 lg:grid-cols-4 gap-10 items-center justify-items-center lg:gap-14 p-16 lg:p-20">
        <div className="rounded-lg lg:col-span-2 ml-2">
          <div className="grid grid-cols-1 gap-4 items-center justify-items-start">
            <h3 className="font-bold italic text-emerald-500 text-lg whitespace-nowrap">
              Recently asked questions
            </h3>
            <h1 className="font-bold text-3xl lg:text-4xl capitalize">
              Frequently asked questions
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestiae consequuntur laborum accusamus itaque atque hic
              inventore totam temporibus sed culpa numquam nisi non repellendus
              commodi porro autem, mollitia fugiat. Animi.
            </p>
            <button className="block w-fit rounded-3xl uppercase text-sm bg-[#FBD459] text-[#283734] px-12 py-3 font-medium hover:text-white hover:bg-[#283734] shadow focus:outline-none focus:ring whitespace-nowrap">
              get help
            </button>
          </div>
        </div>
        <div className="lg:col-span-2 divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white">
          <details
            className="group p-6 [&_summary::-webkit-details-marker]:hidden"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium active:text-[#01715d]">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>

          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing?
              </h2>

              <span className="relative size-5 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
              veritatis molestias culpa in, recusandae laboriosam neque aliquid
              libero nesciunt voluptate dicta quo officiis explicabo
              consequuntur distinctio corporis earum similique!
            </p>
          </details>
        </div>
      </div>
      <div className="p-6">
        <div className="relative bg-[url(https://media.istockphoto.com/id/522397820/photo/cheerful-children-lying-dawn-on-grass.jpg?s=612x612&w=0&k=20&c=5z9pA1pHpG5jnglB568GYheF9QtRTKrLu6RXkzdkSfE=)] bg-cover bg-center bg-no-repeat rounded-2xl mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-4 gap-10 justify-items-center p-16 md:p-20 text-white text-5xl md:text-7xl font-bold md:-mt-14 -my-10">
          <div className="absolute inset-0 bg-[#01715d]/95 rounded-2xl"></div>
          <div className="relative h-20 flex flex-col items-center justify-center gap-2 px-5 md:px-10 group md:border-r md:border-teal-600">
            <h1 className="relative">70M</h1>
            <span className="italic text-base md:text-lg text-teal-600 whitespace-nowrap">
              Total donation
            </span>
            <div className="absolute bottom-0 left-1/2 h-1 bg-[#FBD459] w-0 transition-all duration-500 group-hover:w-full group-hover:scale-x-100 origin-left transform -translate-x-1/2"></div>
          </div>
          <div className="relative h-20 flex flex-col items-center justify-center gap-2 px-5 md:px-10 group md:border-r md:border-teal-600">
            <h1 className="relative">48K</h1>
            <span className="italic text-base md:text-lg text-teal-600 whitespace-nowrap">
              Projects funded
            </span>
            <div className="absolute bottom-0 left-1/2 h-1 bg-[#FBD459] w-0 transition-all duration-500 group-hover:w-full group-hover:scale-x-100 origin-left transform -translate-x-1/2"></div>
          </div>
          <div className="relative h-20 flex flex-col items-center justify-center gap-2 px-5 md:px-10 group md:border-r md:border-teal-600">
            <h1 className="relative">38%</h1>
            <span className="italic text-base md:text-lg text-teal-600 whitespace-nowrap">
              Kids that need help
            </span>
            <div className="absolute bottom-0 left-1/2 h-1 bg-[#FBD459] w-0 transition-all duration-500 group-hover:w-full group-hover:scale-x-100 origin-left transform -translate-x-1/2"></div>
          </div>
          <div className="relative h-20 flex flex-col items-center justify-center gap-2 px-5 md:px-10 group">
            <h1 className="relative">230</h1>
            <span className="italic text-base md:text-lg text-teal-600 whitespace-nowrap">
              Volunteers
            </span>
            <div className="absolute bottom-0 left-1/2 h-1 bg-[#FBD459] w-0 transition-all duration-500 group-hover:w-full group-hover:scale-x-100 origin-left transform -translate-x-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQS;
