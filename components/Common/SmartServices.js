import React from "react";
import Link from "next/link";

const SmartServices = () => {
  return (
    <div className="home-service-area pt-100 pb-70">
      <div className="container">
        <div className="section-title">
          <span>Smart Services</span>
          <h2>Mod Tech Elevators Provide All Kinds Of Elevators </h2>
          <p>
            WE PROVIDE COMPACT DESIGN IN VIEW OF THE LIMITATIONS OF SPACE IN A
            PRIVATE RESIDENCE USAGE OF THE LIFT RESTRICTED PRIMARILY TO THE
            RESIDENTS OF THE PRIVATE HOMES SPECIAL FACILITIES TO MEET THE NEEDS
            OF ELDERLY AND HANDICAPPED PERSONS, INCLUDING WHEELCHAIR USERS
            QUIET, SMOOTH, JERK-FREE MOVEMENT OF THE LIFT AND CONTROLS TO HAVE
            EASE OF OPERATION.AS WELL AS COMMERCIAL LIFT, HOSPTIAL LIFTS,
            STAIRCASE LIFTS, DUMBWAIT ELEVATORS.{" "}
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <div className="service-img">
                <img src="/images/services/service1.png" alt="service" />
              </div>

              <div className="service-content">
                <h3>RESIDENTIAL ELEVATORS</h3>
                <p>
                  Residential elevators, or home elevators, are a type of
                  elevator designed for private residential buildings, or small
                  commercial buildings.They are typically small, usually have a
                  capacity of 2-4 persons, and only serve 2-5 floors. They may
                  have unique design characteristics suited for home
                  furnishings.
                </p>

                <Link href="/solutions-details">
                  <a className="line-bnt">Read More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <div className="service-img">
                <img src="/images/services/service2.png" alt="service" />
              </div>

              <div className="service-content">
                <h3>DUMBWAIT ELEVATORS</h3>
                <p>
                  A dumbwaiter is a small freight elevator or lift intended to
                  carry food. Dumbwaiters found within modern structures,
                  including both commercial, public and private buildings, are
                  often connected between multiple floors. When installed in
                  restaurants, schools, hospitals, retirement homes or in
                  private homes, the lifts generally terminate in a kitchen
                </p>

                <Link href="/solutions-details">
                  <a className="line-bnt">Read More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <div className="service-img">
                <img src="/images/services/service3.png" alt="service" />
              </div>

              <div className="service-content">
                <h3>STAIR CASE ELEVATORS</h3>
                <p>
                  A stair elevator or lift is a motorized piece of equipment
                  designed to help the elderly and disabled live comfortably
                  within a multiple floor dwelling or gain access to a raised
                  entrance. The most common type is the stair lift.{" "}
                </p>

                <Link href="/solutions-details">
                  <a className="line-bnt">Read More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <div className="service-img">
                <img src="/images/services/service4.png" alt="service" />
              </div>

              <div className="service-content">
                <h3>CAPSULE ELEVATORS</h3>
                <p>
                  Glass lifts or capsule lifts are special lifts installed on
                  the exterior face of the building or in the lobby or at a
                  place where it can enhance the elevation and look of building
                </p>

                <Link href="/solutions-details">
                  <a className="line-bnt">Read More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <div className="service-img">
                <img src="/images/services/service5.png" alt="service" />
              </div>

              <div className="service-content">
                <h3> OVERHEAD CRANES</h3>
                <p>
                  An overhead crane, commonly called a bridge crane, is a type
                  of crane found in industrial environments. An overhead crane
                  consists of two parallel rails seated on longitudinal I-beams
                  attached to opposite steel columns by means of brackets. The
                  traveling bridge spans the gap
                </p>

                <Link href="/solutions-details">
                  <a className="line-bnt">Read More</a>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="single-service">
              <div className="service-img">
                <img src="/images/services/service6.png" alt="service" />
              </div>

              <div className="service-content">
                <h3>MAINTENANCE</h3>
                <p>
                  Common maintenance include examination of all moving parts to
                  determine appropriate adjustments and lubrication. Machinery
                  to be inspected includes the governor — a pulley that rotates
                  when the elevator is in motion — the motor and its bearings,
                  brushes, and the machine brake system.
                </p>

                <Link href="/solutions-details">
                  <a className="line-bnt">Read More</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartServices;
