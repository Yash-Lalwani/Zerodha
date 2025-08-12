import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(248, 248, 248)" }}>
      <div className="container border-top">
        <div className="row mt-5">
          <div className="col">
            <img
              className="mb-4"
              src="/media/images/logo.svg"
              alt="Zerodha logo"
              style={{ width: "75%" }}
            ></img>
            <p style={{ fontSize: "0.8rem" }} className="p-2">
              © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <i className="fa-brands fa-x-twitter fa-lg me-4"></i>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <i className="fa-brands fa-facebook fa-lg me-4"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <i className="fa-brands fa-instagram fa-lg me-4"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <i className="fa-brands fa-linkedin fa-lg me-4"></i>
            </a>

            <hr />

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <i className="fa-brands fa-youtube fa-lg me-4"></i>
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <i className="fa-brands fa-whatsapp fa-lg me-4"></i>
            </a>
            <a
              href="https://telegram.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <i className="fa-brands fa-telegram fa-lg me-4"></i>
            </a>
          </div>
          <div className="col">
            <h6 className="fw-bold mb-4">Account</h6>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Open demat account
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Minor demat account
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              NRI demat account
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Commodity
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Dematerialisation
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Fund transfer
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              MTF
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Referral program
            </a>
          </div>
          <div className="col">
            <h6 className="fw-bold mb-4">Support</h6>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Contact us
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Support portal
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              How to file a complaint?
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Status of your complaints
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Bulletin
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Circular
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Z-Connect blog
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Downloads
            </a>
          </div>
          <div className="col">
            <h6 className="fw-bold mb-4">Company</h6>
            <a
              href="/about"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              About
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Philosophy
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Press & media
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Careers
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Zerodha Cares (CSR)
            </a>
            <a
              href="https://zerodha.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Zerodha.tech
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Open source
            </a>
          </div>

          <div className="col">
            <h6 className="fw-bold mb-4">Quick links</h6>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Upcoming IPOs
            </a>
            <a
              href="/pricing"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Brokerage charges
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Market holidays
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Economic calendar
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Calculators
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Markets
            </a>
            <a
              href="/"
              className="d-block mb-3 text-muted text-decoration-none"
            >
              Sectors
            </a>
          </div>
        </div>
        <div style={{ fontSize: "0.70rem" }} className="text-muted px-3 mt-5">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to{" "}
            <a href="mailto:complaints@zerodha.com">complaints@zerodha.com</a>,
            for DP related to <a href="mailto:dp@zerodha.com">dp@zerodha.com</a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on{" "}
            <a href="/" className="text-primary text-decoration-none">
              SEBI SCORES
            </a>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a href="/" className="text-primary text-decoration-none">
              Smart Online Dispute Resolution
            </a>{" "}
            |{" "}
            <a href="/" className="text-primary text-decoration-none">
              Grievances Redressal Mechanism
            </a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets – once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <a href="/" className="text-primary text-decoration-none">
              create a ticket here
            </a>
            .
          </p>

          <div className="d-flex flex-wrap gap-4 mt-4 mb-4 fw-medium justify-content-center">
            <a href="/" className="text-muted text-decoration-none">
              NSE
            </a>
            <a href="/" className="text-muted text-decoration-none">
              BSE
            </a>
            <a href="/" className="text-muted text-decoration-none">
              MCX
            </a>
            <a href="/" className="text-muted text-decoration-none">
              Terms & conditions
            </a>
            <a href="/" className="text-muted text-decoration-none">
              Policies & procedures
            </a>
            <a href="/" className="text-muted text-decoration-none">
              Privacy policy
            </a>
            <a href="/" className="text-muted text-decoration-none">
              Disclosure
            </a>
            <a href="/" className="text-muted text-decoration-none">
              For investor's attention
            </a>
            <a href="/" className="text-muted text-decoration-none">
              Investor charter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
