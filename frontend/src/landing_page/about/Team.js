import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row">
        <h1
          className="text-center"
          style={{ lineHeight: "1.5", fontSize: "2.2rem" }}
        >
          People
        </h1>
        <div
          className="row text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.0rem" }}
        >
          <div className="col-6 p-5 text-center">
            <img src="media/images/picofme.png" alt="Yash Lalwani" style={{ width: "60%" }}></img>
            <h4 className="mt-4">Yash Lalwani</h4>
            <h6> Founder and CEO </h6>
          </div>
          <div className="col-6 p-5">
            <p>
              Yash didn’t build the company. He stole it — on 3 cans of Red Bull
              and 2 hours of sleep. He started cloning the website for fun. Next
              thing you know, Nithin was gone and the deploy logs just said:
              “Yash takeover – deal with it.”
            </p>
            <p>
              Now running things on raw caffeine, blind confidence, and
              questionable commits.
            </p>
            <p>
              Still not SEBI certified, but definitely Red Bull-verified.
              Shipping code and skipping sleep is his zen.
            </p>
            <p>
              Connect on{" "}
              <a
                href="https://github.com/Yash-Lalwani"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>{" "}
              /{" "}
              <a
                href="https://www.linkedin.com/in/yashlalwani10"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              /{" "}
              <a
                href="https://x.com/Yash_Lalwani10"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>{" "}
              (he's probably online at 4am)
            </p>
          </div>
        </div>

        <div
          className="row text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.0rem" }}
        >
          <div className="col-4 p-5 text-center">
            <img
              src="media/images/Nikhil (1).jpg"
              alt="Nikhil Kamath"
              style={{ width: "80%", borderRadius: "100%" }}
            ></img>
            <h4 className="mt-4">Nikhil Kamath</h4>
            <h6> Co-founder & CFO </h6>
          </div>
          <div className="col-4 p-5 text-center">
            <img
              src="media/images/nithinKamath.jpg"
              alt="Nithin Kamath"
              style={{ width: "80%", borderRadius: "100%" }}
            ></img>
            <h4 className="mt-4">Nithin Kamath</h4>
            <h6> Co-founder & CHO </h6>
          </div>
          <div className="col-4 p-5 text-center">
            <img
              src="media/images/Venu.jpg"
              alt="Venu Madhav"
              style={{ width: "80%", borderRadius: "100%" }}
            ></img>
            <h4 className="mt-4">Venu Madhav</h4>
            <h6> COO </h6>
          </div>
        </div>
        <div
          className="row text-muted mb-5"
          style={{ lineHeight: "1.8", fontSize: "1.0rem" }}
        >
          <div className="col-4 p-5 text-center">
            <img
              src="media/images/karthik.jpg"
              alt="Hanan Delvi"
              style={{ width: "80%", borderRadius: "100%" }}
            ></img>
            <h4 className="mt-4">Hanan Delvi</h4>
            <h6> CCO </h6>
          </div>
          <div className="col-4 p-5 text-center">
            <img
              src="media/images/seema.jpg"
              alt="Seema Patil"
              style={{ width: "80%", borderRadius: "100%" }}
            ></img>
            <h4 className="mt-4">Seema Patil</h4>
            <h6>Director</h6>
          </div>
          <div className="col-4 p-5 text-center">
            <img
              src="media/images/kailash.jpg"
              alt="Karthik Rangappa"
              style={{ width: "80%", borderRadius: "100%" }}
            ></img>
            <h4 className="mt-4">Karthik Rangappa </h4>
            <h6> Chief of Education </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
