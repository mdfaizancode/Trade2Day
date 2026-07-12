import React from 'react';

function Footer() {
    return (
        <div className="Container border-top mt-5  footer-container ">
            <div className="row footer-row">
                <div className="col footer1">
                    <img src="/media/image/logo.svg" style={{ width: "150px" }}></img><hr></hr>
                    <p className="text-muted fs-7" style={{ fontSize: "14px" }}>&copy; 2010 - 2026, Zerodha Broking Ltd.<br></br>All rights reserved.</p> <br></br>
                    <i class="fa-brands fa-x-twitter"></i> &nbsp;&nbsp;
                    <i class="fa-brands fa-facebook"></i>&nbsp;&nbsp;
                    <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;
                    <i class="fa-brands fa-linkedin"></i>&nbsp;&nbsp;
                    

                </div>

                <div className="col footer2345" >
                    <h5>Account</h5>
                    <p>
                        <a href="#">Open demat account</a>
                        <a href="#">Minor demat </a>
                        <a href="#">NRI demat account</a>
                        <a href="#">HUF demat account</a>
                        <a href="#">Commodity</a>
                        <a href="#">Dematerialisation</a>
                        <a href="#">Fund transfer</a>
                        <a href="#">MTF</a>
                    </p>
                </div>

                <div className="col footer2345">
                    <h5>Support</h5>
                    <p>
                        <a href="#">Contact us</a>
                        <a href="#">Support portal</a>
                        <a href="#">How to file a complaint?</a>
                        <a href="#">Status of your complaints</a>
                        <a href="#">Bulletin</a>
                        <a href="#">Circular</a>
                        <a href="#">Z-Connect blog</a>
                        <a href="#">Downloads</a>
                    </p>
                </div>

                <div className="col footer2345">
                    <h5> Company</h5>
                    <p>
                        <a href="#">About</a>
                        <a href="#">Philosophy</a>
                        <a href="#">Press & media</a>
                        <a href="#">Careers</a>
                        <a href="#">Zerodha Cares (CSR)</a>
                        <a href="#">Zerodha.tech</a>
                        <a href="#">Open source</a>
                        <a href="#">Referral program</a>
                    </p>
                </div>

                <div className="col footer2345">
                    <h5>Quick links</h5>
                    <p>
                        <a href="#">Upcoming IPOs</a>
                        <a href="#">Brokerage charges</a>
                        <a href="#">Market holidays</a>
                        <a href="#">Economic calendar</a>
                        <a href="#">Calculators</a>
                        <a href="#">Markets</a>
                        <a href="#">Sectors</a>
                        <a href="#">Gift Nifty</a>
                    </p>
                </div>
                <div className="footerpara ">
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to <a href="#" style={{textDecoration:"none"}}>dp@zerodha.com.  </a>Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

                    <p> <a href="#" style={{textDecoration:"none"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</a></p>

                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

                    <p>India's largest broker based on networth as per NSE. <a href="#" style={{textDecoration:"none"}}>NSE broker factsheet </a></p>

                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers/depository participants. Receive information of your transactions directly from Exchange/Depositories on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <a href="#" style={{textDecoration:"none"}}>create a ticket here.</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer;