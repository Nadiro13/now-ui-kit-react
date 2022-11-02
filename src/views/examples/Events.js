import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/LandingPageHeader.js";
import Tab from '../index-sections/Tab.js'
import DefaultFooter from "components/Footers/DefaultFooter.js";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";
import Index from "../Index";
import Carousel from '../index-sections/Carousel'



function Events() {
    // let { path, url } = useRouteMatch();
  const evLength = 21;
  let evList1 = [...Array(20).keys()].reverse();
  evList1.pop()
    const evList = evList1.reverse();
  const [page, setPage] = React.useState("0");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);



  let pages = [0];
  const navitems = pages.map((pagina) =>
      <NavItem>
         <Button
             style={{  justifyContent:'center', alignItems:'center'}}

           onClick={(e) => {
               window.scrollTo(0, 0);
             e.preventDefault();
             setPage('0' );

           }}
         >
           Back
           {/*<h3> 2 </h3>*/}
         </Button>
      </NavItem>
  )
    pages.pop();

  const postertemsgen = [0].map((pagina) =>
  <TabPane tabId={"page" + pagina} >
    <Col className="ml-auto mr-auto" md="10">
      <Row className="collections">
          <Col md="4">
            <NavItem>
            <NavLink tag={Link}
                onClick={(e) => {
             e.preventDefault();
             setPage('20' );
             window.scrollTo(0, 0);
           }}>

                  <img

              alt="..."
              className="img-raised"
              src={require("assets/img/ev20.jpg")}
            />
            </NavLink>
          </NavItem>
              <NavItem>
            <NavLink tag={Link}
                onClick={(e) => {
             e.preventDefault();
             setPage('17' );
             window.scrollTo(0, 0);
           }}>

                  <img

              alt="..."
              className="img-raised"
              src={require("assets/img/ev17.jpg")}
            />
            </NavLink>
          </NavItem>
              <NavItem>
            <NavLink tag={Link}
                onClick={(e) => {
             e.preventDefault();
             setPage('14' );
             window.scrollTo(0, 0);
           }}>

                  <img

              alt="..."
              className="img-raised"
              src={require("assets/img/ev14.jpg")}
            />
            </NavLink>
          </NavItem>


          </Col>

          <Col md="4">
            <NavItem>
            <NavLink tag={Link}
                onClick={(e) => {
             e.preventDefault();
             setPage('19' );
             window.scrollTo(0, 0);
           }}>

                  <img

              alt="..."
              className="img-raised"
              src={require("assets/img/ev19.jpg")}
            />
            </NavLink>
          </NavItem>
              <NavItem>
            <NavLink tag={Link}
                onClick={(e) => {
             e.preventDefault();
             setPage('16' );
             window.scrollTo(0, 0);
           }}>

                  <img

              alt="..."
              className="img-raised"
              src={require("assets/img/ev16.jpg")}
            />
            </NavLink>
          </NavItem>
              <NavItem>
            <NavLink tag={Link}
                onClick={(e) => {
             e.preventDefault();
             setPage('13' );
             window.scrollTo(0, 0);
           }}>

                  <img

              alt="..."
              className="img-raised"
              src={require("assets/img/ev13.jpg")}
            />
            </NavLink>
          </NavItem>


          </Col>
          <Col md="4">
            <NavItem>
            <NavLink tag={Link}
                onClick={(e) => {
             e.preventDefault();
             setPage('18' );
             window.scrollTo(0, 0);
           }}>

                  <img

              alt="..."
              className="img-raised"
              src={require("assets/img/ev18.jpg")}
            />
            </NavLink>
          </NavItem>
              <NavItem>
            <NavLink tag={Link}
                onClick={(e) => {
             e.preventDefault();
             setPage('15' );
             window.scrollTo(0, 0);

           }}>

                  <img

              alt="..."
              className="img-raised"
              src={require("assets/img/ev15.jpg")}
            />
            </NavLink>
          </NavItem>
              <NavItem>
            <NavLink tag={Link}
                onClick={(e) => {
             e.preventDefault();
             setPage('12' );
             window.scrollTo(0, 0);
             console.log(page)
           }}>

                  <img

              alt="..."
              className="img-raised"
              src={require("assets/img/ev12.jpg")}
            />
            </NavLink>
          </NavItem>


          </Col>

      </Row>
    </Col>
  </TabPane>
);
  const items20  = [
  {
    src: require("assets/img/ev20/1.jpg"),
  },
      {
    src: require("assets/img/ev20/2.jpg"),
  },
      {
    src: require("assets/img/ev20/3.jpg"),
  },
      {
    src: require("assets/img/ev20/4.jpg"),
  },
      {
    src: require("assets/img/ev20/5.jpg"),
  }
  ,
      {
    src: require("assets/img/ev20/6.jpg"),
  }
  ,
      {
    src: require("assets/img/ev20/7.jpg"),
  }
  ,
      {
    src: require("assets/img/ev20/8.jpg"),
  }
  ,
      {
    src: require("assets/img/ev20/9.jpg"),
  }
  ,
      {
    src: require("assets/img/ev20/10.jpg"),
  }

];

  const events20 = [20].map((pagina) =>
  <TabPane tabId={"page" + pagina } >
      <Col className="ml-auto mr-auto" md="10">
         <Row className="collections">
            <Col md="6">
                <div>
                <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/ev20.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
            </Col>
              <Col md="6">
                <h1>Praatavond: Islam & …</h1>
                  <p className="description">
                      Tijd voor serieuze en boeiende gesprekken… Op deze praatavond kon iedereen zijn/haar hart luchten en praten over
                      de belangrijke rol van de islam in ons leven!</p>


            </Col>
         </Row>
          <Row>
              <Carousel items={items20}/>
          </Row>

      </Col>
      <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    {navitems}
                  </Nav>
      </div>
  </TabPane>
);

  const items19  = [
  {
    src: require("assets/img/ev19/1.jpg"),
  },
      {
    src: require("assets/img/ev19/2.jpg"),
  },
      {
    src: require("assets/img/ev19/3.jpg"),
  },
      {
    src: require("assets/img/ev19/4.jpg"),
  },
      {
    src: require("assets/img/ev19/5.jpg"),
  }

];

  const events19 = [19].map((pagina) =>
  <TabPane tabId={"page" + pagina } >
      <Col className="ml-auto mr-auto" md="10">
         <Row className="collections">
            <Col md="6">
                <div>
                <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/ev19.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
            </Col>
              <Col md="6">
                <h1>Quiz Night: the kick-off </h1>
                  <p className="description">
                      Het academiejaar '22-'23 ging van start met een tweede editie van de Quiz Night. Het werd een avond boordevol plezier en ontspanning!</p>


            </Col>
         </Row>
          <Row>
              <Carousel items={items19}/>
          </Row>

      </Col>
      <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    {navitems}
                  </Nav>
      </div>
  </TabPane>
);



  const events18 = [18].map((pagina) =>
  <TabPane tabId={"page" + pagina } >
      <Col className="ml-auto mr-auto" md="10">
         <Row className="collections">
            <Col md="6">
                <div>
                <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/ev18.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
            </Col>
              <Col md="6">
                <h1>Sports@Zaytouna</h1>
                  <p className="description">
                      Een avond vol basketbal en voetbal waarin ware talentjes zichtbaar waren.</p>


            </Col>
         </Row>

      </Col>
      <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    {navitems}
                  </Nav>
      </div>
  </TabPane>
);



  const events17 = [17].map((pagina) =>
  <TabPane tabId={"page" + pagina } >
      <Col className="ml-auto mr-auto" md="10">
         <Row className="collections">
            <Col md="6">
                <div>
                <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/ev17.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
            </Col>
              <Col md="6">
                <h1>Picknick@Zaytouna</h1>
                  <p className="description">
                      Een namiddag vol lekkernijen, gezelligheid en veel bijpraten!</p>


            </Col>
         </Row>


      </Col>
      <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    {navitems}
                  </Nav>
      </div>
  </TabPane>
);


  const items16  = [
  {
    src: require("assets/img/ev16/1.jpg"),
  },
      {
    src: require("assets/img/ev16/2.jpg"),
  },
      {
    src: require("assets/img/ev16/3.jpg"),
  },
      {
    src: require("assets/img/ev16/4.jpg"),
  },
      {
    src: require("assets/img/ev16/5.jpg"),
  }, {
    src: require("assets/img/ev16/6.jpg"),
  }

];

  const events16 = [16].map((pagina) =>
  <TabPane tabId={"page" + pagina } >
      <Col className="ml-auto mr-auto" md="10">
         <Row className="collections">
            <Col md="6">
                <div>
                <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/ev16.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
            </Col>
              <Col md="6">
                <h1>ZaytounAid: liefdadigheidsproject</h1>
                  <p className="description">
                      Dankzij gulle donaties is het gelukt om maar liefst 60 cadeaupakketten samen te stellen voor vluchtelingen jongeren. Deze werden nadien overhandigd aan Een Hart Voor Vluchtelingen Gent!</p>


            </Col>
         </Row>
          <Row>
              <Carousel items={items16}/>
          </Row>

      </Col>
      <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    {navitems}
                  </Nav>
      </div>
  </TabPane>
);

  const items15  = [
  {
    src: require("assets/img/ev15/1.jpg"),
  },
      {
    src: require("assets/img/ev15/2.jpg"),
  },
      {
    src: require("assets/img/ev15/3.jpg"),
  },
      {
    src: require("assets/img/ev15/4.jpg"),
  },
      {
    src: require("assets/img/ev15/5.jpg"),
  } ,
      {
    src: require("assets/img/ev15/6.jpg"),
  },
      {
    src: require("assets/img/ev15/7.jpg"),
  },
      {
    src: require("assets/img/ev15/8.jpg"),
  },
      {
    src: require("assets/img/ev15/9.jpg"),
  },
      {
    src: require("assets/img/ev15/10.jpg"),
  },
      {
    src: require("assets/img/ev15/11.jpg"),
  }

];

  const events15 = [15].map((pagina) =>
  <TabPane tabId={"page" + pagina } >
      <Col className="ml-auto mr-auto" md="10">
         <Row className="collections">
            <Col md="6">
                <div>
                <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/ev15.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
            </Col>
              <Col md="6">
                <h1>Iftar: Zaytouna edition</h1>
                  <p className="description">
                      De ramadan is een maand vol zegeningen: spiritualiteit, verbinding en dankbaarheid.
                      Om de waarden van deze vastenmaand explicieter uit te dragen, organiseerde Zaytouna op dinsdag 19/04 haar allereerste iftar.
                      Het werd een onvergetelijke avond!</p>


            </Col>
         </Row>
          <Row>
              <Carousel items={items15}/>
          </Row>

      </Col>
      <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    {navitems}
                  </Nav>
      </div>
  </TabPane>
);

  const items14  = [
  {
    src: require("assets/img/ev14/1.jpg"),
  },
      {
    src: require("assets/img/ev14/2.jpg"),
  },
      {
    src: require("assets/img/ev14/3.jpg"),
  },
      {
    src: require("assets/img/ev14/4.jpg"),
  },
      {
    src: require("assets/img/ev14/5.jpg"),
  }

];

  const events14 = [14].map((pagina) =>
  <TabPane tabId={"page" + pagina } >
      <Col className="ml-auto mr-auto" md="10">
         <Row className="collections">
            <Col md="6">
                <div>
                <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/ev14.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
            </Col>
              <Col md="6">
                <h1>Vruchten van de ramadan: spirituele reis naar het innerlijke</h1>
                  <p className="description">
                      Hoe kunnen we als student de maand Ramadan tot het uiterste benutten en er de vruchten van plukken?
                      Tezcan Türkben, doctor in Hadithwetenschap en docent islamitische godsdienst aan de lerarenopleiding UCLL, stoomde ons in haar interactieve lezing spiritueel klaar voor de ramadan.</p>


            </Col>
         </Row>
          <Row>
              <Carousel items={items14}/>
          </Row>

      </Col>
      <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    {navitems}
                  </Nav>
      </div>
  </TabPane>
);


  const items13  = [
  {
    src: require("assets/img/ev13/1.jpg"),
  },
      {
    src: require("assets/img/ev13/2.jpg"),
  },
      {
    src: require("assets/img/ev13/3.jpg"),
  }

];

  const events13 = [13].map((pagina) =>
  <TabPane tabId={"page" + pagina } >
      <Col className="ml-auto mr-auto" md="10">
         <Row className="collections">
            <Col md="6">
                <div>
                <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/ev13.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
            </Col>
              <Col md="6">
                <h1>Zaytouna Reads: Win je hart terug</h1>
                  <p className="description">
                   In de allereerste editie van Zaytouna’s boekenclub werd het boek ‘Win je hart terug’ van Yasmin Mogahed gelezen! </p>


            </Col>
         </Row>
          <Row>
              <Carousel items={items13}/>
          </Row>

      </Col>
      <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    {navitems}
                  </Nav>
      </div>
  </TabPane>
);
  const items12  = [
  {
    src: require("assets/img/ev12/1.jpg"),
  },
      {
    src: require("assets/img/ev12/2.jpg"),
  },
      {
    src: require("assets/img/ev12/3.jpg"),
  },
      {
    src: require("assets/img/ev12/4.jpg"),
  }

];

  const events12 = [12].map((pagina) =>
  <TabPane tabId={"page" + pagina } >
      <Col className="ml-auto mr-auto" md="10">
         <Row className="collections">
            <Col md="6">
                <div>
                <img
                      alt="..."
                      className="img-fluid img-raised"
                      src={require("assets/img/ev12.jpg")} border={{radius: 8} }
                    ></img>
                  </div>
            </Col>
              <Col md="6">
                <h1>Wortels van jihadisme: politieke en religieuze oorzaken</h1>
                  <p className="description">
                    Professor Abied Alsulaiman gaf ons een woordje uitleg geven over het concept "jihadisme-salafisme".
                      Hij beantwoordde hoe het jihadisme is ontstaan en wat de politieke invloeden en strekkingen hiervan zijn.</p>


            </Col>
         </Row>
          <Row>
              <Carousel items={items12}/>
          </Row>

      </Col>
      <div className="nav-align-center">
                  <Nav
                    className="nav-pills-info nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    {navitems}
                  </Nav>
      </div>
  </TabPane>
);




  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        {/*<ProfilePageHeader />*/}
        <div className="section">
          <Container>

            <h1 className="title"></h1>
            {/*<h5 className="description">*/}
            {/*  An artist of considerable range, Ryan — the name taken by*/}
            {/*  Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs*/}
            {/*  and records all of his own music, giving it a warm, intimate feel*/}
            {/*  with a solid groove structure. An artist of considerable range.*/}
            {/*</h5>*/}
            <Col>

              <TabContent className="gallery" activeTab={"page" + page}>
                {postertemsgen}
                  {/*{postervast}*/}
                  {events20}
                  {events19}
                  {events18}
                  {events17}
                  {events16}
                  {events15}
                  {events14}
                  {events13}
                  {events12}

              </TabContent>
              <Col className="ml-auto mr-auto" md="6" >
                {/*<h4 className="title text-center">My Portfolio</h4>*/}
                {/*<div className="nav-align-center">*/}
                {/*  <Nav*/}
                {/*    className="nav-pills-info nav-pills-just-icons"*/}
                {/*    pills*/}
                {/*    role="tablist"*/}
                {/*  >*/}
                {/*    {navitems}*/}
                {/*  </Nav>*/}
                {/*</div>*/}
              </Col>
            </Col>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Events;
