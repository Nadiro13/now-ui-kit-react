import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Images from "../index-sections/Images";
import Carousel from "../index-sections/Carousel";

function GebedsRuimtes() {
    const B = (props) => <p style={{fontWeight: 'bold'}}>{props.children}</p>

  React.useEffect(() => {
    document.body.classList.add("gebedsruimtes");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("gebedsruimtes");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        {/*<LandingPageHeader />*/}
        {/*  <Row style={{ fdisplay: 'flex' ,  justifyContent:'center', alignItems:'center'}} >*/}
        {/*  /!*<h2 className="title"> Gebedsruimtes </h2> *!/ <img*/}
        {/*              alt="..."*/}

        {/*              src={require("assets/img/Zey2-01.png")} width="100" height="100"></img>*/}



        {/*</Row>*/}
       <div className="section section-team text-center">
           <Row>
               <p></p>
           </Row>

           <Col className="ml-auto mr-auto" md="10">

         <Row className="collections">
            <Col md="6">
                <h2 className="title">Campus Dunant stiltekamer</h2>
                <div>
                <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/Gebedsruimte psychologie/WhatsApp Image 2022-10-29 at 21.52.05.jpeg")} style={{maxHeight:"200px"} }
                    ></img>
                  </div>
            </Col>
              <Col md="6" style={{ flexDirection: 'column', display: 'flex' ,  justifyContent:'center', alignItems:'center'}}>
                  <h2> Henri Dunantlaan 2</h2>


                  <p className="description">


Op de derde verdieping vind je deze stiltekamer!</p>


            </Col>
         </Row>
          <Row>
              {/*<Carousel items={items12}/>*/}
          </Row>

      </Col>

        </div>


      </div>
        <DefaultFooter />
    </>
  );
}

export default GebedsRuimtes;
