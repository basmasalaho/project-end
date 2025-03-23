import React from "react";

const HeroSection = () => {
  return (
    <div 
      className="relative bg-white py-16 overflow-hidden"
      style={{
        backgroundImage: 'url("../src/imgs/Map.svg")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '30%',  // تم تغييرها من 'cover' إلى '50%'
        backgroundOpacity: '0.1'
      }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
        {/* صورة المنزل */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img src="..\src\imgs\Image.svg" alt="نموذج منزل" className="max-w-full" />
        </div>
        
        {/* النص الترويجي */}
        <div className="w-full md:w-1/2 text-right">
          
          <p className="text-emerald-700 mb-2">أهلاً بكم!</p>
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
            بيت أحلامك بلمسة زر
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-700 mb-6">
            أفضل العروض للإيجار بسهولة!
          </h2>
          <p className="text-gray-600 mb-4 text-[#AEAFB0]">
            ابحث عن شقتك أو منزلك المثالي بكل سهولة، مع أفضل العروض والأسعار في متناول يدك.
          </p>
          <p className="text-gray-600 mb-8 text-[#AEAFB0]">
            نوفر لك تجربة بحث سلسة، خيارات متنوعة، وتواصل مباشر مع المؤجرين لتجد سكنك
            المناسب في أسرع وقت!
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-emerald-700 text-white px-6 py-3 rounded-md hover:bg-emerald-800 transition-colors flex items-center gap-2">
              <span>اطلب الخدمة</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div 
              className="w-32 h-32"
              style={{
                backgroundImage: 'url("../src/imgs/Map.svg")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                opacity: '0.1',
              }}
            />
          </div>
        </div>
      </div>
      
     
    </div>
  );
};

export default HeroSection;