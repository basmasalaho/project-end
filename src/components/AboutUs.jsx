import React from "react";
import abstractIcon from "../imgs/Abstract.svg";
import houseImage from "../imgs/hose.svg";
import houseKeyImage from "../imgs/house-key.svg";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 z-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-emerald-800">من نحن</h2>
        <div className="flex justify-center mt-2">
          <img src={abstractIcon} alt="شعار" className="h-8" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-20">
        <div 
          className="w-full md:w-1/2 space-y-6 text-right"
          style={{
            backgroundImage: `url("../src/imgs/house-key.svg")`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundOpacity: '0.1'
          }}
        >
          <h3 className="text-2xl font-bold text-emerald-700 mt-4 text-[#54565B]">
            مرحباً بكم في إيجار!
          </h3>
          <div className="p-4 rounded-lg mb-6 space-y-4">
            <p className="text-[#54565B] text-lg leading-relaxed flex items-center gap-2 before:content-['•'] before:text-[#C6C7C8] before:text-2xl">
              نحن منصة رائدة في مجال إيجار العقارات تهدف إلى تقديم أفضل الخدمات للمستأجرين والمالكين على حد سواء.
            </p>
            <p className="text-[#54565B] text-lg leading-relaxed flex items-center gap-2 before:content-['•'] before:text-[#C6C7C8] before:text-2xl">
              نحن فريق من الخبراء المتخصصين في السوق العقاري،
              نسعى دائماً لتوفير المعلومات الدقيقة والمحدثة، مع تقديم خيارات متنوعة تلبي
              احتياجات جميع عملائنا.
            </p>
            <p className="text-[#54565B] text-lg leading-relaxed flex items-center gap-2 before:content-['•'] before:text-[#C6C7C8] before:text-2xl">
              نؤمن بأن لكل شخص حق في الوصول إلى مسكن مناسب،
              لذا نبذل جهداً كبيراً لتيسير عمليات الإيجار وتوفير خيارات تناسب كافة الميزانيات.
            </p>
            <p className="text-[#54565B] text-lg leading-relaxed flex items-center gap-2 before:content-['•'] before:text-[#C6C7C8] before:text-2xl">
              أسسنا هذا الموقع لتسهيل عملية البحث عن العقارات، سواء كانت سكنية أو
              تجارية، وجعل تجربة الإيجار أكثر سلاسة وشفافية.
            </p>
          </div>
         
        </div>
        {/* الصورة */}
        <div className="gap-[1rem]">
          <img 
            src={houseImage}
            alt="غرفة عصرية" 
            className="rounded-lg w-[374px] h-[374px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;