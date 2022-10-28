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

function GebedsRuimtes() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
       <div className="section section-team text-center">
          <Container>
            <h2 className="title">Onze Doelen</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div>
                    <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/Vriendschappen.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
                  <div className="container">
                        <h4 className="title">Vriendschappen</h4>
                    {/*<p className="category text-info">Model</p>*/}
                    <p className="description">
                      Bij ons leer je nieuwe vrienden kennen! Elk semester voorzien we ook een aanbod aan ontspanningsactiviteiten. </p>
                  </div>
                </Col>
                <Col md="4">
                  <div>
                    <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/Islamitischekennis.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
                  <div className="container">
                        <h4 className="title">Islamitische kennis</h4>
                    {/*<p className="category text-info">Model</p>*/}
                    <p className="description">
                      Door middel van lezingen willen we onze studenten de kans geven om zich te vormen en te ontwikkelen.</p>
                  </div>
                </Col>
                <Col md="4">
                  <div>
                    <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/Engagement.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
                  <div className="container">
                        <h4 className="title">Engagement</h4>
                    {/*<p className="category text-info">Model</p>*/}
                    <p className="description">
                      Zaytouna probeert, in de mate van het mogelijke, haar steentje bij te dragen aan een betere samenleving.</p>
                  </div>
                </Col>

              </Row>
            </div>
          </Container>
        </div>


        <DefaultFooter />
      </div>
    </>
  );
}

export default GebedsRuimtes;
