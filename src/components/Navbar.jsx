import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="logo">
          <img src="..\src\imgs\logo.svg" alt="" className="h-10" />
        </div>
        
        {/* القائمة للشاشات الكبيرة */}
        <div className="hidden md:block">
          <ul className="flex space-x-6 rtl:space-x-reverse">
            <li><a href="#" className="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition-colors">الرئيسية</a></li>
            <li><a href="#" className="text-gray-700 hover:text-emerald-700 transition-colors">الخدمات</a></li>
            <li><a href="#" className="text-gray-700 hover:text-emerald-700 transition-colors">من نحن</a></li>
            <li><a href="#" className="text-gray-700 hover:text-emerald-700 transition-colors">تواصل معنا</a></li>
          </ul>
        </div>
        
        <div className="hidden md:flex space-x-3 rtl:space-x-reverse">
          <button className="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-800 transition-colors">تسجيل الدخول</button>
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:border-emerald-700 hover:text-emerald-700 transition-colors">إنشاء حساب</button>
        </div>
        
        {/* زر القائمة للشاشات الصغيرة */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* القائمة المنسدلة للشاشات الصغيرة */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-3 px-4 shadow-inner">
          <ul className="flex flex-col space-y-3">
            <li><a href="#" className="block bg-emerald-700 text-white px-4 py-2 rounded-md">الرئيسية</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-emerald-700">الخدمات</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-emerald-700">من نحن</a></li>
            <li><a href="#" className="block text-gray-700 hover:text-emerald-700">تواصل معنا</a></li>
          </ul>
          <div className="mt-4 flex flex-col space-y-2">
            <button className="bg-emerald-700 text-white px-4 py-2 rounded-md hover:bg-emerald-800">تسجيل الدخول</button>
            <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:border-emerald-700 hover:text-emerald-700">إنشاء حساب</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;