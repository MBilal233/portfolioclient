import React from "react";

function Contact() {
  return (
    <div id="Contacts">
      <div className="container">
        <div className="row">
            <div className="contactheading">
                <h1>Contact</h1>
            </div>
            <form className="form">
              <div className="namesection">
              <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Second Name" />
              </div>
              <div className="emailandphonesection">
              <input type="email" placeholder="Email" />
                <input type="text" placeholder="Phone" />
              </div>
              <div className="messagesection">
              <textarea name="" id="" cols="50" rows="10" placeholder="Message"></textarea>
              </div>
              <div className="submitesection">
              <input type="submit" />

              </div>

            </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
