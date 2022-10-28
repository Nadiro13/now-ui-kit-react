/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container style={{display: 'flex' ,  justifyContent:'center', alignItems:'center'}}>
          <nav >
            <ul>
              <li>
                <a
                  href="https://belchicken.com/"
                  target="_blank"
                >
                  <img alt="..."  src={require("assets/img/Belchicken.png")} width="100" height="100"></img>
                </a>

              </li>
              <li>
                <a
                  href="https://www.simpizza.be/"
                  target="_blank"
                >
                  <img
                      alt="..."

                      src={require("assets/img/Simpizza.png")} width="200" height="200"></img>
                </a>

              </li>
              <li>
                <a
                  href="https://www.kingslizepizza.be/"
                  target="_blank"
                >
                  <img
                      alt="..."

                      src={require("assets/img/Kingslize.jpg")} width="100" height="100"></img>
                </a>

              </li>
            </ul>
          </nav>

        </Container>
        <Container   style={{display: 'flex' ,  justifyContent:'center'}}>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Designed by{" "}
            <a
              href="https://www.invisionapp.com?ref=nukr-default-footer"
              target="_blank"
            >
              Invision
            </a>
            . Coded by{" "}
            <a
              href="https://www.creative-tim.com?ref=nukr-default-footer"
              target="_blank"
            >
              Creative Tim
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
