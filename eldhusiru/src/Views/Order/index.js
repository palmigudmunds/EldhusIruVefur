import React, { useEffect, Suspense, useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

const OrderView = () => {
  const [widget, setWidget] = useState(false);

  // useEffect(() => {
  //   const div = document.getElementById("salescloud-widget-frame-wrapper");
  //   console.log(div);
  //   if (div !== null) {
  //     console.log("inside if");
  //     div.addEventListener("load", () => {
  //       setLoading(false);
  //     });
  //   }
  // }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {

    const onPageLoad = () => {
      setWidget(true);
    };

    // Check if the page has already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
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
        window.location.reload(false);
      }
    }

  }, [widget]);

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
