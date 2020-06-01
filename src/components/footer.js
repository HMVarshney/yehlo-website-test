import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/listings">Listings</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              Netaji Subhas University of Technology <br />
		              Sector-3 Dwarka<br />
		              New Delhi<br />
		              <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                         noreply@yehlo.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="fab fa-lg fa-google m-1" href="http://google.com/+"></a>
                        <i class="fab fa-lg fa-facebook-f m-1"></i>
                        <a className="fab fa-lg fa-linkedin m-1" href="http://www.linkedin.com/in/"></a>
                        <a className="fab fa-lg fa-twitter m-1" href="http://twitter.com/"></a>
                        <a className="fab fa-lg fa-youtube m-1" href="http://youtube.com/"></a>
                        <a className="fab fa-lg fa-mail m-1" href="mailto:"></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 YEHLO</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;