import react from "react"

export default function Footer() { 
    return ( 
        <> 
        <div className="footer-container"> 
            <h6>Sign up for exclusive news and updates!</h6>
            <p>Enjoy 10% off your first purchase when you sign up!</p>
            
            <div className="subscribe-btn-container">
            <input placeholder="Enter Your Email"></input>
            <button>Subscribe</button>
            </div>
            <h3>Make a Statement! Dress with Purpose and Have some Swagger!</h3>

            <h3>Come Change Your Life Now!</h3>

            
        </div>


            <div className="footer-company-brand-help-container">


            <div className="footer-company-container">
                <h3>Company</h3>
                <h5>Our Story</h5>
                <h5>Shop Locations</h5>
                <h5>Philanthropy</h5>
            </div>

            <div className="footer-our-brand-container"> 
            <h3>Our Brand</h3>
            <h5>Craftmanship</h5>
            <h5>Reviews</h5>
            <h5>Blog</h5>
            <h5>Press</h5>
            </div>

            <div className="footer-help-container"> 
            <h3>Help</h3>
            <h5>Shipping and Returns</h5>
            <h5>FAQ</h5>
            <h5>IT Support</h5>
            <h5>Contact Us</h5>
            
            </div>

            <div className="footer-address-container"> 
            <h3>Contact</h3>
            <h5>Phone: 555-555-5555</h5>
            <h5>Address: 1234 Roadside Way, Philadelphia, PA</h5>
            <h5>E-Mail: emailaddress@gmail.com</h5>
            <a href="#">Instagram</a>
            <br></br>
            <a href="#">Facebook</a>
            </div>


            </div>



        {/* <div className="footer-contact-us-container"> 
        <h3>Contact Us</h3>
        <p>Phone: 555-555-5555</p>
        <p>Location: 1234 Roadside Way, PA</p>
        </div>

        <div className="footer-sign-up-input-field"> 
        <h6>Sign up for exclusive offers and sales!</h6>
        </div> */}
        </>
    )
}