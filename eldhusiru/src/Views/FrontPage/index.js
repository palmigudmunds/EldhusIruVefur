import Navigation from "../../components/Navigation";
import Modal from "../../components/Modal";
import AboutUs from "../../components/AboutUs";
import HoursLocation from "../../components/HoursLocation";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import { useTranslation } from "react-i18next";
import { Suspense, useState } from "react";

const FrontPageView = () => {
  const [showModal, setShowModal] = useState(false);
	const { t } = useTranslation();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="relative md:px-6">
          <Navigation />
          <div className="spacing-container">
            <div
              id="hero-header"
              className="relative -mt-5 flex flex-col items-center justify-center text-center py-0 px-3"
            >
              <div className="space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
                <div className="w-full md:w-4/6">
                  <h1 className="max-md:mt-5">{t("header-main")}</h1>
                  <div className="pt-10 max-md:mb-5">
                    <button
                      className="order-button"
                      type="button"
                      onClick={() => {
                        setShowModal(true);
                      }}
                    >
                      {t("order-now-button")}
                    </button>
                  </div>
                </div>
              </div>
              {showModal && <Modal setOpenModal={setShowModal} />}
            </div>
            <AboutUs />
            <HoursLocation />
            <ContactUs/>
          </div>
        </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default FrontPageView;
