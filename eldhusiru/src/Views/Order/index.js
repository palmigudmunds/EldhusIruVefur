import React, { useEffect, Suspense, useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

const OrderView = () => {
  const [widget, setWidget] = useState(false);
  const [reload, setReload] = useState(false);

  const onPageLoad = () => {
    setWidget(true);
    setReload(!reload);
  };

  const checkLoad = () => {
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      setReload(!reload);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    checkLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {

    if (widget) {

      window["sc-store"] = { uuid: "b474b4c6-fd9e-4fb2-9c70-bb4565f8a760" };
      // Inject the widget
      let frameWrapper = document.querySelector(
        "#salescloud-widget-frame-wrapper"
      );
      let script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://store.salescloud.is/assets/index.js?time=" + Date.now();
      
      if (frameWrapper !== null) {
        frameWrapper.innerHTML = "<div id='app'></div>";
        document.body.appendChild(script);
      } else {
        // window.location.reload(false);
        checkLoad();
      }
    } else {
      checkLoad();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  return (
    <>
      <Suspense fallback={<Loading />}>
          <Navigation />
          <div className="">
            <div className="max-w-screen-xl mx-auto md:pt-36 lg:pt-48">
              <div id="salescloud-widget-frame-wrapper"></div>
            </div>
          </div>
        <Footer />
      </Suspense>
    </>
  );
};

export default OrderView;
