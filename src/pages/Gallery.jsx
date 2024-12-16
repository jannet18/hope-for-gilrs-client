import React from "react";

function Gallery() {
  return (
    <div>
      <div className="bg-[#FBD459] text-center p-16">
        <h1 className="font-bold text-4xl md:text-5xl text-[#283734] capitalize">
          Our Photo Gallery
        </h1>
      </div>
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 bg-[#f9f4e8] p-10 lg:p-20 items-center justify-items-center">
        <div className="relative rounded-3xl overflow-hidden group">
          <a href="#">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-[#01715d]/50 rounded-3xl bg-opacity-15 opacity-0 transition-opacity duration-500 hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 h-10 w-full bg-[#FBD459] scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></div>

            <div className="relative p-4 sm:p-6 lg:p-8">
              <div className="absolute bottom-[170%] left-10">
                <p className="text-[#283734] font-bold text-3xl text-center">
                  <span className="text-xl italic">Charity</span>
                  <br />
                  Education
                </p>
              </div>
            </div>
          </a>
        </div>
      </div> */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 bg-[#f9f4e8] p-10 lg:p-20 items-center justify-items-center">
        <div className="relative rounded-3xl overflow-hidden group">
          <a href="#">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* <div className="absolute inset-0 bg-[#01715d]/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 h-10 w-full bg-[#FBD459] scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-[#FBD459] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 mb-5">
              <p className="text-[#283734] font-bold text-3xl text-center">
                <span className="text-xl italic">Charity</span>
                <br />
                Education
              </p>
            </div>
          </a>
        </div>
        <div className="relative rounded-3xl overflow-hidden group">
          <a href="#">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* <div className="absolute inset-0 bg-[#01715d]/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 h-10 w-full bg-[#FBD459] scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-[#FBD459] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 mb-5">
              <p className="text-[#283734] font-bold text-3xl text-center">
                <span className="text-xl italic">Charity</span>
                <br />
                Education
              </p>
            </div>
          </a>
        </div>
        <div className="relative rounded-3xl overflow-hidden group">
          <a href="#">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* <div className="absolute inset-0 bg-[#01715d]/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 h-10 w-full bg-[#FBD459] scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-[#FBD459] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 mb-5">
              <p className="text-[#283734] font-bold text-3xl text-center">
                <span className="text-xl italic">Charity</span>
                <br />
                Education
              </p>
            </div>
          </a>
        </div>
        <div className="relative rounded-3xl overflow-hidden group">
          <a href="#">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* <div className="absolute inset-0 bg-[#01715d]/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 h-10 w-full bg-[#FBD459] scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-[#FBD459] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 mb-5">
              <p className="text-[#283734] font-bold text-3xl text-center">
                <span className="text-xl italic">Charity</span>
                <br />
                Education
              </p>
            </div>
          </a>
        </div>
        <div className="relative rounded-3xl overflow-hidden group">
          <a href="#">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* <div className="absolute inset-0 bg-[#01715d]/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 h-10 w-full bg-[#FBD459] scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-[#FBD459] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 mb-5">
              <p className="text-[#283734] font-bold text-3xl text-center">
                <span className="text-xl italic">Charity</span>
                <br />
                Education
              </p>
            </div>
          </a>
        </div>
        <div className="relative rounded-3xl overflow-hidden group">
          <a href="#">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
              className="w-full h-full object-cover rounded-3xl"
            />
            {/* <div className="absolute inset-0 bg-[#01715d]/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 left-0 h-10 w-full bg-[#FBD459] scale-x-0 transition-transform duration-500 group-hover:scale-x-100 origin-left"></div> */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-[#FBD459] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 mb-5">
              <p className="text-[#283734] font-bold text-3xl text-center">
                <span className="text-xl italic">Charity</span>
                <br />
                Education
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
