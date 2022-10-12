import React from "react";
import aboutimg from "../assets/images/speimageabout.jpeg";
const About = () => {
  return (
    <React.Fragment>
      <div>
        <div className="relative">
          <img className="w-[100%] h-[100%] max-h-[40vh] lg:max-h-[70vh] object-cover" src={aboutimg} alt="" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[85px] text-[white] flex items-center justify-center w-[100%] h-[100%] font-bold">
            <h1>ABOUT US</h1>
          </div>
        </div>
        <div className="w-[90%] lg:w-[80%] m-[auto] p-[20px] text-[#242424] font-bold mt-[30px] rounded-[20px] sm:[bg-[res]]">
          <p>
          <spam className="text-[#0067B1] font-bold">SPE</spam> has student chapters around the world that provide an operating
            framework for society activities at a university level. <spam className="text-[#0067B1] font-bold">SPE Khazar
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
            <spam className="text-[#0067B1] font-bold">Our achievements:</spam>
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
    </React.Fragment>
  );
};

export default About;

