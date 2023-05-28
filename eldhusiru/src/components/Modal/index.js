import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Modal({ setOpenModal }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-black opacity-40"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-2xl p-10 mx-auto bg-white rounded-xl shadow-lg">
            <div className="mt-3 sm:flex justify-center">
              <div className="mt-2 text-center">
                <h5 className="text-2xl font-medium text-gray-800">
                  {t("modal-header")}
                </h5>
                <div className="gap-2 mt-10 items-center sm:grid sm:grid-cols-2">
                  <Link to="/order">
                    <button
                      className="font-bold w-full mt-2 p-2.5 flex-1 text-white bg-main rounded-xl hover:bg-red-700 ease-in-out duration-300"
                      onClick={() => setOpenModal(false)}
                    >
                      {t("modal-pickup")}
                    </button>
                  </Link>
                  <a
                    href="https://wolt.com/en/isl/reykjavik/restaurant/eldhus-iru"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="font-bold w-full mt-2 p-2.5 flex-1 text-white bg-main rounded-xl hover:bg-red-700 ease-in-out duration-300">
                      {t("modal-delivery")}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
