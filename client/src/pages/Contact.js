import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://scontent.fdac160-1.fna.fbcdn.net/v/t1.6435-9/52706461_2289306704442377_4645629076248199168_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGz3Vrp9Er2W5RpQzD8CQshNyTut7ud8iw3JO63u53yLI1_MAzaCNLRy6Ih0IZTjnylnlVY8WJGHi5wr_hRjosT&_nc_ohc=-pgaHfSY3jwQ7kNvgFAbD8M&_nc_ht=scontent.fdac160-1.fna&oh=00_AYDnbMghH5kQJCnmCRue7TwEQySLyBMfB6c0vnHNE3bxkA&oe=6680451F"
            alt="contactus"
            style={{ width: "60%", height: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Email me:
          </p>
          <p className="mt-3">
            <BiMailSend /> : fahad.khan.raj.mail@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 0157*******
          </p>
          <p className="mt-3">
            <BiSupport /> : Emergency: 01555555555
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
