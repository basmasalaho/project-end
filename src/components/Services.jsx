import React from "react";
import consultationIcon from "../imgs/consultation.svg";
import villaIcon from "../imgs/villa.svg";
import officeIcon from "../imgs/office.svg";
import apartmentIcon from "../imgs/apartment.svg";
import abstractIcon from "../imgs/Abstract.svg";

const Services = () => {
  const services = [
    {
      icon: consultationIcon,
      title: "استشارات",
      description: "نقدم لكم شتى سكنية للإيجار بمواقع مميزة ومساحات متنوعة تناسب جميع الاحتياجات."
    },
    {
      icon: villaIcon,
      title: "تأجير فلل",
      description: "نقدم لكم شتى سكنية للإيجار بمواقع مميزة ومساحات متنوعة تناسب جميع الاحتياجات."
    },
    {
      icon: officeIcon,
      title: "تأجير مكاتب",
      description: "نقدم لكم شتى سكنية للإيجار بمواقع مميزة ومساحات متنوعة تناسب جميع الاحتياجات."
    },
    {
      icon: apartmentIcon,
      title: "تأجير شقق",
      description: "نقدم لكم شتى سكنية للإيجار بمواقع مميزة ومساحات متنوعة تناسب جميع الاحتياجات."
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-800">الخدمات</h2>
          <div className="flex justify-center mt-2">
            <img src={abstractIcon} alt="شعار" className="h-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 place-items-center sm:place-items-stretch ">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[12px] shadow-[0_4px_20px_0_#00000040]
                w-[280px] h-[337px] 
                pt-[40px] pr-[16px] pb-[40px] pl-[16px]
                ${index === 0 ? 'border-2 border-emerald-600' : 'border border-gray-100'}`}
            >
              <div className="flex flex-col items-center text-center">
                <img src={service.icon} alt={service.title} className="w-16 h-16 mb-4" />
                <h3 className="text-xl font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                  {service.title}
                  <span>←</span>
                </h3>
                <p className="text-[#C6C7C8] text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;