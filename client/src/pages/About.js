import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="https://i.ibb.co/FnW5QTz/logo.png"
            alt="contactus"
            style={{ width: "40%", height: "60%"}}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Hello! I am Fahad Khan Raj, I developed this website using a combination of technologies. The front end is built with HTML, CSS, and React. For the server-side logic, I used Node.js, and the data is stored in a MongoDB database. I took help and resources from open-source projects to enhance functionality. To add visual appeal, I generated custom images using an AI image generator.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
