import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      // console.log(pageHeader.current.style.backgroundImage)
      // pageHeader.current.style.backgroundImage = "url(" + require("assets/img/Banner_Website.jpg") + ")"
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
        // console.log(pageHeader.current.style.backgroundImage)
        // document.body.style.backgroundImage = "url(" + require("assets/img/Banner_Website.jpg") + ")"
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    // }else {
    //   document.body.style.backgroundImage = "url('assets/img/Banner_Website.jpg')"
    // }
    }else {
      // pageHeader.current.style.backgroundImage = "url(" + require("assets/img/bg6.jpg") + ")"
      // console.log(pageHeader.current.style, "new style")

    }
  });

  // function handleResize() {
  //   // console.log(pageHeader.current.style)
  //   if (window.innerWidth > 991) {
  //     // pageHeader.current.style.backgroundImage = "url(" + require("assets/img/Banner_Website.jpg") + ")"
  //   } else {
  //     // pageHeader.current.style.backgroundImage = "url(" + require("assets/img/bg6.jpg") + ")"
  //   }
  //
  // }
  //
  // window.addEventListener('resize', handleResize)


  return (
    <>
      <div className="page-header page-header-small">
        <div
    className="page-header-image"
    style={{
      backgroundImage: "url(" + require("assets/img/1200px-Domes_of_Zitouna_Mosque_JUIST.jpg") + ")"
    }}
    ref={pageHeader}
    />
        {/*<div className="content-center">*/}
        {/*  <Container>*/}
        {/*    <h1 className="title">This is our great company.</h1>*/}
        {/*    <div className="text-center">*/}
        {/*      <Button*/}
        {/*        className="btn-icon btn-round"*/}
        {/*        color="info"*/}
        {/*        href="#pablo"*/}
        {/*        onClick={(e) => e.preventDefault()}*/}
        {/*      >*/}
        {/*        <i className="fab fa-facebook-square"></i>*/}
        {/*      </Button>*/}
        {/*      <Button*/}
        {/*        className="btn-icon btn-round"*/}
        {/*        color="info"*/}
        {/*        href="#pablo"*/}
        {/*        onClick={(e) => e.preventDefault()}*/}
        {/*      >*/}
        {/*        <i className="fab fa-twitter"></i>*/}
        {/*      </Button>*/}
        {/*      <Button*/}
        {/*        className="btn-icon btn-round"*/}
        {/*        color="info"*/}
        {/*        href="#pablo"*/}
        {/*        onClick={(e) => e.preventDefault()}*/}
        {/*      >*/}
        {/*        <i className="fab fa-google-plus"></i>*/}
        {/*      </Button>*/}
        {/*    </div>*/}
        {/*  </Container>*/}
        {/*</div>*/}
      </div>
    </>
  );
}

export default LandingPageHeader;
