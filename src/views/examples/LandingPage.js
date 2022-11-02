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
import ExamplesNavbar from "components/Navbars/LandingspageNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import Images from "../index-sections/Images";

function LandingPage() {
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
        {/*<Row style={{ fdisplay: 'flex' ,  justifyContent:'center', alignItems:'center'}} >*/}
        {/*  <h2 className="title"> Home </h2> <img*/}
        {/*              alt="..."*/}

        {/*              src={require("assets/img/Zey-01.png")} width="100" height="100"></img>*/}



        {/*</Row>*/}
       <div className="section section-team text-center">
          <Container>
            <h2 className="title">Onze doelen</h2>
            <div className="team">
              <Row>
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
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Onze waarden</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/Toegankelijkheid.png")}
                    ></img>
                    <h4 className="title">Toegankelijkheid</h4>
                    {/*<p className="category text-info">Model</p>*/}
                    <p className="description">
                      Op onze events is er geen voorkennis vereist zodat iedereen, ongeacht geloof of overtuiging, steeds welkom is!

                    </p>
                    {/*<Button*/}
                    {/*  className="btn-icon btn-round"*/}
                    {/*  color="info"*/}
                    {/*  href="#pablo"*/}
                    {/*  onClick={(e) => e.preventDefault()}*/}
                    {/*>*/}
                    {/*  <i className="fab fa-twitter"></i>*/}
                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*  className="btn-icon btn-round"*/}
                    {/*  color="info"*/}
                    {/*  href="#pablo"*/}
                    {/*  onClick={(e) => e.preventDefault()}*/}
                    {/*>*/}
                    {/*  <i className="fab fa-instagram"></i>*/}
                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*  className="btn-icon btn-round"*/}
                    {/*  color="info"*/}
                    {/*  href="#pablo"*/}
                    {/*  onClick={(e) => e.preventDefault()}*/}
                    {/*>*/}
                    {/*  <i className="fab fa-facebook-square"></i>*/}
                    {/*</Button>*/}
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/Kwaliteit.png")} border={{radius: 8}
                    }></img>
                    <h4 className="title">Kwaliteit</h4>
                    {/*<p className="category text-info">Model</p>*/}
                    <p className="description">
                      Zaytouna tracht kwalitatieve events te organiseren: hierbij letten we erop dat deze inhoudelijk sterk zijn en organisatorisch goed in elkaar zitten.
                    </p>
                    {/*<Button*/}
                    {/*  className="btn-icon btn-round"*/}
                    {/*  color="info"*/}
                    {/*  href="#pablo"*/}
                    {/*  onClick={(e) => e.preventDefault()}*/}
                    {/*>*/}
                    {/*  <i className="fab fa-twitter"></i>*/}
                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*  className="btn-icon btn-round"*/}
                    {/*  color="info"*/}
                    {/*  href="#pablo"*/}
                    {/*  onClick={(e) => e.preventDefault()}*/}
                    {/*>*/}
                    {/*  <i className="fab fa-instagram"></i>*/}
                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*  className="btn-icon btn-round"*/}
                    {/*  color="info"*/}
                    {/*  href="#pablo"*/}
                    {/*  onClick={(e) => e.preventDefault()}*/}
                    {/*>*/}
                    {/*  <i className="fab fa-facebook-square"></i>*/}
                    {/*</Button>*/}
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/img/Huiselijke sfeer.png")}
                    ></img>
                    <h4 className="title">Huiselijke sfeer</h4>
                    {/*<p className="category text-info">Model</p>*/}
                    <p className="description">
                      Binnen Zaytouna proberen we steeds een huiselijke sfeer te creëren waarin iedereen zich comfortabel kan voelen.
                    </p>
                    {/*<Button*/}
                    {/*  className="btn-icon btn-round"*/}
                    {/*  color="info"*/}
                    {/*  href="#pablo"*/}
                    {/*  onClick={(e) => e.preventDefault()}*/}
                    {/*>*/}
                    {/*  <i className="fab fa-twitter"></i>*/}
                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*  className="btn-icon btn-round"*/}
                    {/*  color="info"*/}
                    {/*  href="#pablo"*/}
                    {/*  onClick={(e) => e.preventDefault()}*/}
                    {/*>*/}
                    {/*  <i className="fab fa-instagram"></i>*/}
                    {/*</Button>*/}
                    {/*<Button*/}
                    {/*  className="btn-icon btn-round"*/}
                    {/*  color="info"*/}
                    {/*  href="#pablo"*/}
                    {/*  onClick={(e) => e.preventDefault()}*/}
                    {/*>*/}
                    {/*  <i className="fab fa-facebook-square"></i>*/}
                    {/*</Button>*/}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Contacteer ons</h2>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Voornaam en Familienaam..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Typ een bericht..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="#FCF6BA"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="lg"
                  >
                    Verstuur Bericht
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
