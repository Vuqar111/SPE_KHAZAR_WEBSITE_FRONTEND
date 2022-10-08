import React from "react";
import styled from "styled-components";
import aboutimg from "../assets/images/speimageabout.jpeg";
const About = () => {
  return (
    <Wrapper>
      <div>
        <div className="imgdiv">
          <img className="img" src={aboutimg} />
          <div className="abouttext">
            <h1>ABOUT US</h1>
          </div>
        </div>
        <div className="w-[80%] m-[auto] p-[20px] contentabout font-bold mt-[50px] rounded-[20px] sm:[bg-[res]]">
          <p>
          <spam className="specialText">SPE</spam> has student chapters around the world that provide an operating
            framework for society activities at a university level. <spam className="specialText">SPE Khazar
            University Student Chapter</spam>  was established on 1st of January in 2
            2005. The mission of the chapter is to provide students with SPE
            membership which gives them access to the technical and
            non-technical knowledge besides will keep them in touch with the
            prestigeous, dynamic community of petroleum professionals worldwide
            and many other benefits.Also the student chapter aims to organize
            free technical and non-technical events to provide ways to the
            students to learn from, interact and network with the industry.
            <br />
            <br />
            <br />
            <spam className="specialText">Our achievements:</spam>
            <br />
            <br />
            SPE has Student chapter awards and recognition recognize those that
            succeed in fulfilling SPE’s mission by serving local members. The
            awards honor exemplary efforts in industry engagement, operations
            and planning, community and social outreach, and more. As SPE Khazar
            University Student chapter we have been awarded recently as a reward
            for our quality work. • Gold Standard Chapter 2018 •Student Chapter
            Excellence Award 2021-This prestigious award is the second highest
            honor a student chapter can receive and is awarded to only 20
            percent of student chapters around the world.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
.contentabout {
  width: 95%;
  padding: 10px;
  margin-bottom: 50px;
  color: #242424;
}
.imgdiv {
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  max-height: 60vh;
  object-fit: cover;
}
.abouttext {
  position: absolute;
  font-size: 85px;
  color: white;
  font-weight: bold;
  display: flex;
  top: 50%;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.438);
}
.specialText {
  color: #0067B1;
  font-weight: 800;
}
  @media (max-width: 768px) {
    .abouttext {
      font-size: 20px;
    }
  }
`;