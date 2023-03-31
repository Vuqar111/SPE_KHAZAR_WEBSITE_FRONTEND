import React from "react";
import "../../assets/css/hackathon.css";
import khazarLogo from "../../assets/images/hackathon/khazar.png";
import speLogo from "../../assets/images/hackathon/spekhazarlogo.png";
import mlkLogo from "../../assets/images/hackathon/mlklogo.png";
// import codersLogo from "../../assets/images/hackathon/coders.svg";

const Hackathon = () => {
  return (
    <>
      <div className="hackContainer">
        <div className="sponsorbox">
          <img src={speLogo} alt="" className="speImg" />
          <img src={mlkLogo} alt="" className="sponsorImg" />
          <img src={khazarLogo} alt="" className="sponsorImg" />
          {/* <img src={codersLogo} alt="" className="sponsorImg" /> */}
        </div>
        <h1 className="hackathonHeader">HACKATHON</h1>
        <h2 className="hackathonsubheader">Məlumat</h2>
        <div className="hackbox">
          <div className="hackcontent">
            <p className="hacktext">
              “Hackathon” 2023-cu il 8,9 aprel tarixlərində baş tutacaq.
              “Hackathon”-da ümimilikdə 10-15 komandanın iştirakı nəzərdə
              tutulur. Hər bir komandaya İnformasiya Texnologiyaları, Ağıllı
              sistemlər və Kənd təsərrüfatı ilə bağlı qlobal problem ideyaları
              veriləcək və iştirakçılar həmin ideyalar üzərində biznes model və
              MVP(Minumum Viable Product) planını hazırlayıb münsif heyətinə
              təqdim edəcəklər.
            </p>
            <br />
            <p className="hacktext">
              “Hackathon”-da bütün universitetlərdən bakalavr tələbələri iştirak
              edə biləcəklər. Ən az bir qızın və kapitanın iştirak etməsi şərti
              ilə hər komanda 3 nəfərdən ibarət olmalıdır.
            </p>
          </div>
        </div>

        {/* Rules */}
        <h2 className="hackathonsubheader">Qeydiyyat/Seçim mərhələsi</h2>
        <div className="hackbox">
          <img
            className="hackcontentimg"
            src="https://res.cloudinary.com/dmpt1iii5/image/upload/v1665521469/SPE-Events/284470749_564616025105668_5927146446129160428_n_1_edx9by.jpg"
            alt=""
          />
          <div className="hackcontent">
            <p className="hacktext">
              <p className="hacktext">
                “Hackathon” 2023-cu il 8,9 aprel tarixlərində baş tutacaq.
                “Hackathon”-da ümimilikdə 10-15 komandanın iştirakı nəzərdə
                tutulur. Hər bir komandaya İnformasiya Texnologiyaları, Ağıllı
                sistemlər və Kənd təsərrüfatı ilə bağlı qlobal problem ideyaları
                veriləcək və iştirakçılar həmin ideyalar üzərində biznes model
                və MVP(Minumum Viable Product) planını hazırlayıb münsif
                heyətinə təqdim edəcəklər.
              </p>
            </p>
          </div>
        </div>

        <h2 className="hackathonsubheader">Qeydiyyat/Seçim mərhələsi</h2>
        <div className="hackbox">
          <img
            className="hackcontentimg"
            src="https://res.cloudinary.com/dmpt1iii5/image/upload/v1665521469/SPE-Events/284470749_564616025105668_5927146446129160428_n_1_edx9by.jpg"
            alt=""
          />
          <div className="hackcontent">
            <p className="hacktext">
              <b>Qeydiyyat Formunda tələb olunan məlumatlar</b>
              <ul className="hackList">
                <li className="hacktext"> Ad, Soyad və ata adı</li>
                <li className="hacktext">Elektron poçt ünvanı</li>
                <li className="hacktext">Elektron poçt ünvanı</li>
                <li className="hacktext">İxtisas</li>
                <li className="hacktext">Kurs</li>
                <li className="hacktext">Tələbə biletinin şəkli</li>
                <li className="hacktext">Komanda adı</li>
                <li className="hacktext">Motivasiya məktubu</li>
              </ul>
            </p>
          </div>
        </div>

        <h2 className="hackathonsubheader">Timeline</h2>
        <div className="hackbox">
          <div class="timeline-scene">
            <div class="container-fluid">
              <div class="row">
                <div class="timeline-item">
                  <div class="item-content">
                    <h2>
                      <b>08:30 – 09:00</b>
                    </h2>
                    <p>Müsabiqəçilərin toplanması</p>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="item-content">
                    <h2>
                      <b>09:00 – 10:00</b>
                    </h2>
                    <p>
                      Hackathon haqqında məlumat Sponsorlar və Qonaqların
                      nitqlər
                    </p>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="item-content">
                    <h2>
                      <b>10:00</b>
                    </h2>
                    <p>Tapşırıqların paylanması</p>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="item-content">
                    <h2>
                      <b>13:00 -14:00</b>
                    </h2>
                    <p>Yemək fasiləsi</p>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="item-content">
                    <h2>
                      <b>17:00</b>
                    </h2>
                    <p>Snack</p>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="item-content">
                    <h2>
                      <b>18:00</b>
                    </h2>
                    <p>Hackathon bitir</p>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="item-content">
                    <h2>
                      <b>18:00 – 18:20</b>
                    </h2>
                    <p>
                      Komandaların öz işlərini təqdim etməsi üçün ardıcıllığın
                      püşk atma ilə müəyyənləşdirilməsi
                    </p>
                  </div>
                </div>

                <div class="timeline-item">
                  <div class="item-content">
                    <h2>
                      <b>19:00-20:00</b>
                    </h2>
                    <p>Yemək fasiləsi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="hackathonsubheader">Qonaqlar</h2>
        <div className="hackbox">
          <div className="hackcontent">
            <p className="hacktext">
              <p className="hacktext">
                Xəzər Universitetinin Qəyyumlar Şurasının sədri -{" "}
                <b>Hamlet İsaxanlı</b>
                <br />
                Xəzər Universitetinin rektoru - <b>İradə Xəlilova</b>
                <br />
                Xəzər Universitetinin Təbiət Elmləri və Mühəndislik fakültəsinin
                dekanı - <b>Fəxrəndə Əlimərdanova</b>
                <br />
                Millət vəkilləri “MLK Tech Group” şirkətinin direktoru -{" "}
                <b>Mələk Mahmudova</b> və rəhbət heyəti
                <br />
                “Coders Azərbaycan” kursunun nümayəndəsi
              </p>
            </p>
          </div>
        </div>

        <h2 className="hackathonsubheader">Mentor və Münsiflər Heyəti</h2>
        <div className="hackbox">
          <div className="hackcontent">
            <p className="hacktext">
              <p className="hacktext">
                Hakaton boyunca iştirakçılara mentorlar tərəfindən dəstək
                göstəriləcəkdir. Mentor heyəti - Xəzər Universitetinin Neftçi
                Mühəndislər Cəmiyyəti, Xəzər Universiteti, MLK Tech Group və
                Coders Azerbaycan kursunun əməkdaşlarından ibarət olacaq.
                Qaliblər Xəzər Universiteti, MLK Tech Group və Coders
                Azərbaycan’nın əməkdaşlarından ibarət olan münsiflər heyəti
                tərəfindən müəyyənləşdiriləcək.
              </p>
            </p>
          </div>
        </div>

        <h2 className="hackathonsubheader">MLK Tech Group</h2>
        <div className="hackbox">
          <img src={mlkLogo} alt="" className="hackcontentimg" />
          <div className="hackcontent">
            <p className="hacktext">
              <p className="hacktext">
                MLK Tech Group şirkəti 2021-ci ildən etibarən ağıllı ev sistemi
                və həmçinin elektrik, mexanika və zəif axın sistemləri üzrə
                çoxsahəli fəaliyyət göstərir. Dünyaca məşhur brendlərlə
                əməkdaşlıq əsasında çalışan şirkət istənilən rahat və təhlükəsiz
                idarə olunması üçün yüksək keyfiyyəti ilə seçilən sistemlərinin
                layihələndirilməsi və quraşdırılmasını təmin edir.
              </p>
            </p>
          </div>
        </div>

        <h2 className="hackathonsubheader">Contacts</h2>
        <div className="hackbox">
          <div className="hackcontact">
            <h2 className="hackathonsubheader">Khazar University</h2>
            <ul className="hackList">
              <li className="hacktext">
                <a href="">Xəzər Universiteti, Məhsəti Gəncəvi, Bakı</a>
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
