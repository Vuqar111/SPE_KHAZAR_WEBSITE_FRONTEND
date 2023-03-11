import React, {useEffect}  from "react";
import '../..//assets/css/hackathon.css';
import khazarLogo from "../../assets/images/hackathon/khazar.png";
import speLogo from "../../assets/images/hackathon/spekhazarlogo.png";
import mlkLogo from "../../assets/images/hackathon/mlklogo.png";
import codersLogo from "../../assets/images/hackathon/coders.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hackathon = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <>
      <div className="hackContainer">
        <div className="sponsorbox">
          <img src={speLogo} alt="" className="speImg" />
          <img src={mlkLogo} alt="" className="sponsorImg" />
          <img src={khazarLogo} alt="" className="sponsorImg" />
          <img src={codersLogo} alt="" className="sponsorImg" />
        </div>
        <h1 className="hackathonHeader">HACKATHON</h1>

        <h2 className="hackathonsubheader">About</h2>
        <div className="hackbox">
          <div className="hackcontent" data-aos="fade-left">
            <p className="hacktext">
              UFAZ Hackathon is a thematic event during which competitors from
              various universities work intensively on different projects with
              the objective of producing solutions in 48 hours. Competitors in
              this event are groups of three students and each group will be
              given a unique topic to work on. To increase the competition
              spirit, topics will be distributed at the start of the Hackathon.
            </p>
            <p className="hacktext">Competition date:</p>
            <p className="hacktext">
              The Hackathon will take place on March 4 and 5, 2023 Who can join:
            </p>
            <p className="hacktext">
              Students from any university forming a group of 3 Why join?
            </p>
            <ul className="hackList">
              <li className="hacktext">Discover talented students</li>
              <li className="hacktext">
                Encourage students to go further with their ideas
              </li>
              <li className="hacktext">
                Inspire students how to exploit their time in a good manner
              </li>
              <li className="hacktext">Strengthen the spirit of teamwork</li>
              <li className="hacktext">
                Link students to university through the extra-curricular
                activities
              </li>
            </ul>
          </div>
          <img
            className="hackcontentimg"
            src="https://res.cloudinary.com/dmpt1iii5/image/upload/v1665521469/SPE-Events/284470749_564616025105668_5927146446129160428_n_1_edx9by.jpg"
            alt=""
            data-aos="fade-right"
          />
        </div>

        {/* Rules */}
        <h2 className="hackathonsubheader">Rules</h2>
        <div className="hackbox">
          <img
            className="hackcontentimg"
            src="https://res.cloudinary.com/dmpt1iii5/image/upload/v1665521469/SPE-Events/284470749_564616025105668_5927146446129160428_n_1_edx9by.jpg"
            alt=""
            data-aos="fade-left"
          />
          <div className="hackcontent" data-aos="fade-right">
            <ul className="hackList">
              <li className="hacktext">
                Only students can compete at the Hackathon
              </li>
              <li className="hacktext">
                Teams must be formed by exactly three students, gender-mixed
              </li>
              <li className="hacktext">
                Respecting the program and following the instructions on-site is
                a must
              </li>
              <li className="hacktext">
                Have an understanding of basic Agile methodologies (Project
                Management)
              </li>
              <li className="hacktext">
                Submitted work will be removed if:
                <ul className="hackList">
                  <li className="hacktext">Plagiarism is detected</li>
                  <li className="hacktext">
                    The deadline for submission is not respected
                  </li>
                  <li className="hacktext">
                    The team is trying to get help from other members
                    (competitors or outside)
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <h2 className="hackathonsubheader">Contacts</h2>
        <div className="hackbox">
          <div className="hackcontact">
            <h2 className="hackathonsubheader">Khazar University</h2>
            <ul className="hackList">
              <li className="hacktext">
                <a href="">
                  Xəzər Universiteti, Məhsəti Gəncəvi, Bakı
                </a>
              </li>
              <li className="hacktext">
                <a href="tel:(+994) 50 xxx xx xx">(+994) 50 xxx xx xx</a>
              </li>
              <li className="hacktext">
                <a href="mailto:mail@gmail.com">mail@gmail.com</a>
              </li>
              <li className="hacktext">
                <a href="https://hackathon.spe.org/">hackathon.spe.org</a>
              </li>
            </ul>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.0135152402813!2d49.935432751511804!3d40.408551379264814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403062fc5d066f49%3A0x383f2647b67161af!2zWMmZesmZciBVbml2ZXJzaXRldGk!5e0!3m2!1saz!2saz!4v1678292658838!5m2!1saz!2saz"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Hackathon;
