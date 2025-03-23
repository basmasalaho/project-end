import React from "react";

const SocialMedia = () => {
  return (
    <div className="bg-[#1B4332] py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">تواصل معنا</h2>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a href="#" className="bg-[#E1306C] p-2 rounded-full hover:opacity-90 transition-opacity">
            <img src="../src/imgs/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-[#1DA1F2] p-2 rounded-full hover:opacity-90 transition-opacity">
            <img src="../src/imgs/twitter.svg" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-[#0077B5] p-2 rounded-full hover:opacity-90 transition-opacity">
            <img src="../src/imgs/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-[#4267B2] p-2 rounded-full hover:opacity-90 transition-opacity">
            <img src="../src/imgs/facebook.svg" alt="Facebook" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;