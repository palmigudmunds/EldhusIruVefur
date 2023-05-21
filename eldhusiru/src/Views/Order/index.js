import React, { useEffect, Suspense, useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";

const OrderView = () => {
  // const [loading, setLoading] = useState(true);

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
    const head = document.querySelector("head");
    const link1 = document.createElement("link");
    const link2 = document.createElement("link");
    const link3 = document.createElement("link");

    link1.setAttribute("rel", "stylesheet");
    link1.setAttribute(
      "href",
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
    );
    link2.setAttribute("rel", "stylesheet");
    link2.setAttribute(
      "href",
      "https://cdn.jsdelivr.net/npm/@mdi/font@5.x/css/materialdesignicons.min.css"
    );
    link3.setAttribute("rel", "stylesheet");
    link3.setAttribute("type", "text/css");
    link3.setAttribute(
      "href",
      "https://store.salescloud.is/assets/style.css?v=5"
    );

    head.appendChild(link1);
    head.appendChild(link2);
    head.appendChild(link3);

    window["sc-store"] = { uuid: "b474b4c6-fd9e-4fb2-9c70-bb4565f8a760" };
    // Inject the widget
    let frameWrapper = document.querySelector(
      "#salescloud-widget-frame-wrapper"
    );
    let script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://store.salescloud.is/assets/index.js?time=" + Date.now();

    frameWrapper.innerHTML = "<div id='app'></div>";
    document.body.appendChild(script);

    return () => {
      head.removeChild(link1);
      head.removeChild(link2);
      head.removeChild(link3);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
          <Navigation />
          <div className="pb-32 max-md:pt-16">
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
