import "./Contact.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
function Contact() {
  return (
    <>
      <div className="container">
        <div className="first-container">
          <div className="heading">
            <h1>Contact US</h1>
          </div>
          <div className="info">
            <div className="call">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="callUs">Call Us</div>
              <div className="no">+91 485624658</div>
            </div>

            <div className="mail">
              <div className="icon">
                <MdEmail />
              </div>
              <div className="email_us">Email Us</div>
              <div className="gmail">
                <a href="">DRcollection@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="second-container">
          <div className="first-part">
            <div className="first">
              <p>For Customer Asistant</p>
              <a href="#">Support@collection.com</a>
            </div>
            <div className="second">
              <p>For Coperate Enquiry Asistant</p>
              <a href="#">Coorporate@collection.com</a>
            </div>
            <div className="third">
              <p>For PR and Advertising Asistant</p>
              <a href="#">Pr@DRCollection.com</a>
            </div>
          </div>
          <div className="second-p">
            <p>
              Street: 601, Plot No 15, Megor Arcade, M.g.road<br></br> Nr
              Sindhuwadi, Ghatkoper (east)
            </p>
            <p>City: Mumbai</p>
            <p>State/province/area: Maharashtra</p>
            <p>Zip code: 400077</p>
            <p>Country: India</p>
            <p>Mon-Sat (9:00 AM to 7:00 PM)</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
