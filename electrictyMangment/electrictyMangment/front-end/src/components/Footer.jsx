import React from "react";

const Footer = () => {
  return (
    <footer
      className="d-flex justify-content-between"
      style={{ padding: "20px", backgroundColor: "#000", color: "#fff",position:"fixed",bottom:"0px",width:"100%" }}
    >
      <div>
        <span>
          Electro<span className="text-success">Pay</span>
        </span>
      </div>
      <div>© [2023] [ElectroPay]. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
