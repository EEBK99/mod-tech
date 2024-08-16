import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = () => {
  return (
    <div className="choose-area ptb-100">
      <div className="container">
        <div className="section-title">
          <span>Why Choose Us</span>
          <h2>We Achieved People’s Trust by Our Great Service</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.</p> */}
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="choose-img">
              <img src="/images/choose-img.png" alt="choose" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="choose-content">
              <div className="faq-accordion">
                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What types of elevators do you offer?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        We provide a wide range of elevators designed to meet
                        various needs. Our offerings include passenger
                        elevators, freight elevators, residential elevators, and
                        escalators for both commercial and public spaces. Each
                        product can be customized to fit specific requirements.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do I determine which elevator or escalator is right
                        for my building?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Our team of experts is here to help you choose the best
                        solution based on your building's design, traffic flow,
                        and usage needs. We conduct a thorough assessment of
                        your space and provide recommendations tailored to your
                        specific requirements.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What are the lead times for manufacturing and
                        installation?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Lead times can vary depending on the complexity of the
                        project and the specific product selected. On average,
                        manufacturing takes 2-4 months, followed by installation
                        which may take an additional 1-2 months. We provide a
                        detailed timeline during the planning phase.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="d">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Do you offer maintenance and repair services?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, we offer comprehensive maintenance and repair
                        services to ensure your elevators remain in optimal
                        condition. Our service packages include regular
                        inspections, preventive maintenance, and emergency
                        repairs.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="e">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Are your products compliant with safety standards?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Absolutely. All of our elevators are designed and
                        manufactured to comply with the latest safety standards
                        and regulations. We prioritize safety in every aspect of
                        our product development and installation processes.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="f">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        Can your elevators be customized?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        Yes, we offer a range of customization options to meet
                        your specific needs and preferences. From design
                        features to performance specifications, we can tailor
                        our products to align with your project requirements and
                        aesthetic goals.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="g">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        What should I do if I experience a problem with my
                        elevator or escalator?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        If you encounter any issues, please contact our customer
                        support team immediately. We provide prompt assistance
                        and have a dedicated team for troubleshooting and
                        resolving any problems to minimize downtime and ensure
                        safety.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="h">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How do I request a quote or consultation?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        You can request a quote or consultation by filling out
                        the form on our website or by contacting us directly via
                        phone or email. Our team will get in touch with you to
                        discuss your needs and provide a detailed proposal.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="i">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        How can I stay informed about new products and updates?
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                        To stay updated on our latest products and company news,
                        you can subscribe to our newsletter, follow us on social
                        media, or regularly check our website for updates. We
                        also offer periodic announcements about new innovations
                        and industry trends.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqContent;
