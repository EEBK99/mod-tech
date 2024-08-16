import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const OurCompany = () => {
  return (
    <div className="home-company-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="choose-content">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Great Understanding
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        At our core, we pride ourselves on a deep understanding
                        of the elevator and escalator industry. We listen
                        closely to our clients' needs and adapt our solutions to
                        meet specific requirements. Our expertise allows us to
                        provide tailored recommendations and innovative
                        solutions that address unique challenges and elevate the
                        user experience.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Updated Technology
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Embrace the future with our cutting-edge technology. We
                        continually invest in the latest advancements to ensure
                        our elevators and escalators are not only efficient and
                        reliable but also feature the most advanced safety and
                        performance technologies. Our commitment to innovation
                        keeps you ahead of the curve and ensures optimal
                        performance.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Experienced Workers
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our team of seasoned professionals brings years of
                        experience to every project. From design to installation
                        and maintenance, our skilled workers are dedicated to
                        excellence and precision. Their expertise ensures that
                        each system operates seamlessly and meets the highest
                        industry standards.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Best Quality Service
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Quality is at the heart of everything we do. We are
                        committed to delivering exceptional service from start
                        to finish, ensuring that every product we provide meets
                        rigorous standards of reliability and safety. Our
                        customer-focused approach guarantees that your
                        experience with us is smooth and satisfactory.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="company-img">
              <img src="/images/company-img.jpg" alt="company" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCompany;
