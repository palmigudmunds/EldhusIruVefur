import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import diskur from "../../resources/stadurinn.jpeg";

const MainMenu = () => {
  const { t } = useTranslation();

  return (
    <div
      id="main-section"
      className="flex flex-col md:flex-row justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 md:space-x-4"
    >
      <div className="w-full md:w-1/2">
        <h1 className="max-md:mt-5">{t("header-main")}</h1>
        <div className="pt-10 space-x-4 max-md:mb-5">
          <a
            href="https://yess.is/eldhus-iru"
            className="bg-main text-white text-lg md:text-xl font-medium py-4 px-8 rounded-full hover:bg-red-700 ease-in-out duration-300"
          >
            {t("order-now-button")}
          </a>
          <Link
            to="/menu"
            className="text-main hover:text-red-400 text-lg md:text-xl font-medium ease-in-out duration-300"
          >
            {t("see-menu-button")}
          </Link>
        </div>
      </div>
      <div className="flex justify-center w-full h-full md:w-1/2 md:max-h-screen mt-5 md:mt-0">
        {/* <div className='w-full md:w-11/12 h-full md:h-5/6 border-2 border-black-500 rounded-3xl'></div> */}
        <img
          className="w-full h-auto object-cover rounded-2xl md:max-w-[35rem] max-w-[24rem]"
          src={diskur}
          alt="diskur"
        />
      </div>
    </div>
  );
};

export default MainMenu;
