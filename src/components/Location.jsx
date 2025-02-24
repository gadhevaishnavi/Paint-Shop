import React from "react";
import '../assets/css/Location.css'; // Make sure this CSS file exists in the same directory or adjust the path accordingly.

const Location = () => {
  return (
    <div className="location-container">
      {/* Google Map Embed */}
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.818580693752!2d77.29601751442172!3d19.182431987042825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1c9611e3c6d33%3A0x5e6c4d5d1c1076eb!2sRaj+Galaxy%2C+Shop+No+7%2C+SBI+Bank+Opposite%2C+Malegaon+Road%2C+Nanded+413512!5e0!3m2!1sen!2sin!4v1699014598246!5m2!1sen!2sin"
        width="100%"
        height="600"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Contact Information */}
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Get in touch with us today.</p>
        <h3>Call Us</h3>
        <p>Mobile: 8378844361</p>
        <p>Tel: 8378844361</p>
        <h3>Address</h3>
        <p>
          Raj Galaxy, Shop No 7, SBI Bank Opposite, <br />
          Malegaon Road, Nanded 413512
        </p>
        <h3>Email</h3>
        <p>gayakwadshubham7028@gmail.com</p>
      </div>
    </div>
  );
};

export default Location;
