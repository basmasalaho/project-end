import React from "react";
import abstractIcon from "../imgs/Abstract.svg";
import logoImage from "../imgs/logo.svg";

const ContactUs = () => {
  return (
   
      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-800">تواصل معنا</h2>
          <div className="flex justify-center mt-2">
            <img src={abstractIcon} alt="شعار" className="h-8" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[400px]">
              <img 
                src={logoImage}
                alt="إيجار" 
                className="w-full"
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <form className="space-y-4 max-w-[500px] mx-auto md:mx-0">
              <div>
                <label className="block text-right mb-1">الاسم</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-md border border-gray-200 text-right shadow-md focus:shadow-lg transition-shadow"
                />
              </div>
              <div>
                <label className="block text-right mb-1">الايميل</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-md border border-gray-200 text-right shadow-md focus:shadow-lg transition-shadow"
                />
              </div>
              <div>
                <label className="block text-right mb-1">الموضوع</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-md border border-gray-200 text-right shadow-md focus:shadow-lg transition-shadow"
                />
              </div>
              <div>
                <label className="block text-right mb-1">رسالتك</label>
                <textarea
                  rows="4"
                  className="w-full p-3 rounded-md border border-gray-200 text-right shadow-md focus:shadow-lg transition-shadow"
                ></textarea>
              </div>
              <button className="bg-[#1B4332] text-white px-6 py-3 rounded-md hover:bg-emerald-800 transition-colors w-full">
                ارسال
              </button>
            </form>
           
          </div>
        </div>
      </div>
    
  );
};

export default ContactUs;