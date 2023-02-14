import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "bootstrap";
import Typewriter from "typewriter-effect/dist/core";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function Home() {
  useEffect(() => {
    //* Tab Page Title
    document.title = "Probo Krishnacahya";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });

    //* Setup TypewriterJS (Typewriting Effect)
    var typewriting = document.getElementById("typewriting");
    var typewriter = new Typewriter(typewriting, {
      delay: 50,
      loop: !0,
      devMode: !0,
      cursorClassName: "typeCursor",
    });
    typewriter
      .typeString("Frontend Developer")
      .pauseFor(3000)
      .deleteAll(30)
      .typeString("UI/UX Designer")
      .pauseFor(3000)
      .deleteAll(30)
      // .typeString('DevSecOps Engineer').pauseFor(3000).deleteAll(30)
      // .typeString('ML Engineer').pauseFor(3000).deleteAll(30)
      .start();
  }, []);

  //* About Me
  const profiles = [
    {
      id: 1,
      icon: "bi bi-person-circle",
      title: "Full Name",
      text: "Probo Krishnacahya",
    },
    {
      id: 2,
      icon: "bi bi-geo-alt-fill",
      title: "City of Domicile",
      text: "Surabaya, East Java",
    },
    {
      id: 3,
      icon: "bi bi-flag-fill",
      title: "Nationality",
      text: "Indonesia",
    },
    {
      id: 4,
      icon: "bi bi-suit-heart-fill",
      title: "Religion",
      text: "Catholic",
    },
    {
      id: 5,
      icon: "bi bi-gender-male",
      title: "Gender",
      text: "Male",
    },
  ];

  const aboutMe = [];

  for (const profile of profiles) {
    aboutMe.push(
      <div className="vstack justify-content-center">
        <div>
          <i
            className={profile.icon}
            data-bs-toggle="tooltip"
            title={profile.title}
          ></i>
          &emsp; {profile.text}
        </div>
      </div>
    );
  }

  //* Volunteering Experiences
  const events = [
    {
      id: 1,
      url: "https://sites.google.com/ciputra.ac.id/ct-for-educators/",
      name: "Best Practices on Computational Thinking for Future Educators Workshop",
      description:
        "Best Practices on Computational Thinking for Future Educators Workshop is a special program designed by Universitas Ciputra Techno Center for Teachers to train Computational Thinking successfully. This program empowers Educators to become Experts in embedding Computational Thinking in their teaching strategies. Workshop topics include Introduction to Computational Thinking, Computational Thinking in Class & Developing Computational Thinking Tasks, and Computational Thinking Tools. At this event, I am responsible as a member of the Module (Presentation Slides) Division through designing the layout of the content and making illustrations of the material that has been prepared by the Trainer.",
      position:
        "Member of Module (Presentation Slides) Division (Ad Hoc Committee)",
      date: "Jul 2022",
    },
    {
      id: 2,
      url: "https://informatika.uc.ac.id/id/2022/04/technopreneurship-workshop-2022-day-1/",
      name: "Technopreneurship Workshop",
      description:
        "Technopreneurship Workshop is a Department Camp for Informatics Students at Universitas Ciputra Surabaya, where there are activities in the form of workshops and webinars. It was held with the aim of honing the Technopreneurship skills of students through designing business ideas engaged in technology using the Business Model Canvas, Pitching Deck, and User Interface Design Prototype to get investment from investors. At this event, I am responsible as a Member of IT - Inventory Division for Configure the Discord's Community Server which is used for Bonding sessions between Mentors with their Mentees and Prepare the needs of Mini Games equipment.",
      position: "Member of IT - Inventory Division (Ad Hoc Committee)",
      date: "Apr 2022",
    },
    {
      id: 3,
      url: "https://nplc.uc.ac.id/",
      name: "8th National Programming & Logic Competition",
      description:
        "National Programming & Logic Competition is a yearly programming and logic competition for High School Students and equivalent organized by the Informatics Student Union at Universitas Ciputra Surabaya. It was held with the aim of honing correct logic and programming skills, strengthening teamwork, and fostering a competitive spirit among participants. At this event, I am responsible as a Member of Marketing Division for Inviting High School Students and equivalent to register as participants in the competition and Contacting Young Influencers to participate in promoting the competition through social media.",
      position: "Member of Marketing Division (Ad Hoc Committee)",
      date: "Nov 2020 - Jan 2021",
    },
  ];

  const volunteeringExperiences = [];

  for (const event of events) {
    volunteeringExperiences.push(
      <div className="card mb-4 pt-4 pb-2">
        <p className="mb-0">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            <h3 className="text-center">{event.name}</h3>
          </a>
          <hr />
        </p>
        <p className="mb-3">
          <i
            className="bi bi-info-circle-fill"
            data-bs-toggle="tooltip"
            title="Event Description"
          ></i>
          &emsp;{event.description}
        </p>
        <p className="mb-3">
          <i
            className="bi bi-diagram-3-fill"
            data-bs-toggle="tooltip"
            title="Event Position"
          ></i>
          &emsp;{event.position}
        </p>
        <p className="text-white-50">
          <i
            className="bi bi-clock-fill category-time"
            data-bs-toggle="tooltip"
            title="Event Time"
          ></i>
          &emsp;{event.date}
        </p>
      </div>
    );
  }

  //* Awards
  const achievements = [
    {
      id: 1,
      url: "https://informatika.uc.ac.id/id/2022/08/juara-2-ui-ux-design-competition-national-informatic-fun-competition-2022/",
      name: "2nd Place in National Informatic Fun Competition 2K22 - UI/UX Design Category",
      description: `National Informatic Fun Competition (NIFC) 2K22 is a national scale activity in the form of 8 categories of Competition, Workshop, Webinars, and Bazaars organized by HIMA Teknik Informatika Universitas Muhammadiyah Riau. Weerausaha Team representing Universitas Ciputra Surabaya in the User Interface - User Experience (UI/UX) Design competition category with the competition theme "The Role of Digital Technology in the Development of Educational Ideas and Innovation" along with the sub-theme "Education" managed to win by occupying the Runner up.`,
      publisher: "Universitas Muhammadiyah Riau",
      date: "Aug 2022",
    },
    {
      id: 2,
      url: "https://informatika.uc.ac.id/id/2022/08/prestasi-fit-competition-2022-juara-1-harapan-2-dan-ide-terbaik/",
      name: "9th Place in Faculty of Information Technology Competition 2022 - Web Developer Category",
      description: `Faculty of Information Technology (FIT) Competition 2022 is a national scale competition in the field of information technology held by Himpunan Mahasiswa S1 Teknik Informatika Fakultas Teknologi Informasi Universitas Kristen Satya Wacana. This competition aims to foster a competitive spirit and spur students to realize creative and innovative ideas in the field of Informatics Engineering that have technology-based business values ​​(mobile and website applications) and are beneficial to the community. SK Team representing Universitas Ciputra Surabaya in the Web Developer category with the competition theme "Innovation For a Better World" managed to rank 9th as a finalist.`,
      publisher: "Universitas Kristen Satya Wacana Salatiga",
      date: "Aug 2022",
    },
    {
      id: 3,
      url: "https://media-exp1.licdn.com/dms/image/C562DAQGm0CjYpS3yCg/profile-treasury-image-shrink_800_800/0/1646667126399?e=1661623200&v=beta&t=-bHIDUtZToFpZowoAJZqzgVz-Er4WbWny41nVOBKnc4",
      name: "Full Score Achievement",
      description:
        "Reached Grade Point Average 4.0 in 2021/2022 Odd (3rd Semester).",
      publisher: "Universitas Ciputra Surabaya",
      date: "Jan 2022",
    },
  ];

  const awards = [];

  for (const achievement of achievements) {
    awards.push(
      <div className="card mb-4 pt-4 pb-2">
        <p className="mb-0">
          <a
            href={achievement.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            <h3 className="text-center">{achievement.name}</h3>
          </a>
          <hr />
        </p>
        <p className="mb-3">
          <i
            className="bi bi-info-circle-fill"
            data-bs-toggle="tooltip"
            title="Award Description"
          ></i>
          &emsp;{achievement.description}
        </p>
        <p className="mb-3">
          <i
            className="bi bi-patch-check-fill"
            data-bs-toggle="tooltip"
            title="Publisher"
          ></i>
          &emsp;{achievement.publisher}
        </p>
        <p className="text-white-50">
          <i
            className="bi bi-clock-fill category-time"
            data-bs-toggle="tooltip"
            title="Published Date"
          ></i>
          &emsp;{achievement.date}
        </p>
      </div>
    );
  }

  //* Hobbies
  // Surabaya
  const sby = [
    { id: 1, image: "images/home/photography/golf.jpg" },
    { id: 2, image: "images/home/photography/hujan.jpg" },
    { id: 3, image: "images/home/photography/lilin.jpg" },
  ];

  const surabaya = [];

  for (const shoot of sby) {
    surabaya.push(
      <div key={shoot.id}>
        <img
          src={shoot.image}
          className="d-block rounded shadow-sm w-100"
          loading="lazy"
          alt="Photography"
        />
      </div>
    );
  }

  // Yogyakarta
  const diy = [
    { id: 1, image: "images/home/photography/candi-1.jpg" },
    { id: 2, image: "images/home/photography/candi-2.jpg" },
    { id: 3, image: "images/home/photography/pantai-1.jpg" },
    { id: 4, image: "images/home/photography/pantai-2.jpg" },
    { id: 5, image: "images/home/photography/pantai-3.jpg" },
    { id: 6, image: "images/home/photography/permukiman.jpg" },
  ];

  const yogyakarta = [];

  for (const shoot of diy) {
    yogyakarta.push(
      <div key={shoot.id}>
        <img
          src={shoot.image}
          className="d-block rounded shadow-sm w-100"
          loading="lazy"
          alt="Photography"
        />
      </div>
    );
  }

  // Malang
  const mlg = [
    { id: 1, image: "images/home/photography/candi-3.jpg" },
    { id: 2, image: "images/home/photography/chochin.jpg" },
    { id: 3, image: "images/home/photography/tanaman-1.jpg" },
    { id: 4, image: "images/home/photography/tanaman-2.jpg" },
    { id: 5, image: "images/home/photography/tanaman-3.jpg" },
    { id: 6, image: "images/home/photography/tanaman-4.jpg" },
  ];

  const malang = [];

  for (const shoot of mlg) {
    malang.push(
      <div key={shoot.id}>
        <img
          src={shoot.image}
          className="d-block rounded shadow-sm w-100"
          loading="lazy"
          alt="Photography"
        />
      </div>
    );
  }

  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="col mt-4" data-aos="fade-up">
          <div className="text-center">
            <span className="display-3 fw-bold">Probo Krishnacahya</span>
            <br />
            <p className="display-5" id="typewriting"></p>
            <br />
            <div className="d-grid gap-4 d-md-block justify-content-md-start mt-5">
              <NavLink
                className="btn btn-primary btn-lg pulse px-4 me-md-2"
                to="/contacts"
              >
                <i className="bi bi-person-plus-fill"></i>&emsp;
                <strong>Get in touch</strong>
              </NavLink>
              <button
                type="button"
                className="btn btn-secondary btn-lg px-4 me-md-2"
                data-bs-toggle="modal"
                data-bs-target="#resumeModal"
              >
                <i className="bi bi-filetype-pdf"></i>&emsp;
                <strong>View Resume</strong>
              </button>
            </div>
          </div>
          <h3 className="scroll-down text-center mt-5">
            <a href="#content">
              <i
                className="bi bi-chevron-double-down"
                data-bs-toggle="tooltip"
                title="Scroll Down"
              ></i>
            </a>
          </h3>
        </div>
        <div
          className="modal fade"
          id="resumeModal"
          tabindex="-1"
          aria-labelledby="resumeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title" id="resumeModalLabel">
                  <i className="bi bi-file-earmark-person-fill"></i>&emsp;Probo
                  Krishnacahya&#39;s Resume
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-0">
                <iframe
                  src="pdf/home/ProboKrishnacahya_Resume.pdf"
                  frameborder="0"
                  title="Resume"
                  className="w-100 vh-100"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <section id="content" data-aos="fade-up">
          <h4 className="text-center section-title">&#128587;&ensp;About Me</h4>
          <br />
          <div className="hstack flex-column flex-sm-row justify-content-between gap-4">
            <div className="card hstack flex-column flex-sm-row justify-content-between gap-4 col-xl-6">
              <div className="text-center col-xl-6">
                <img
                  src="images/assets/author-about.svg"
                  className="border border-2 border-info rounded-circle shadow-sm"
                  id="assets"
                  alt="Probo Krishnacahya"
                  loading="lazy"
                />
              </div>
              <div className="vstack col-xl-6 justify-content-center gap-3">
                {aboutMe}
              </div>
            </div>
            <div>
              <p>
                It's me, Probo Krishnacahya. You can call me Krishna. I was born
                at Surabaya on November 2<sup>nd</sup>, 2002.
              </p>
              <p>
                I am able to handle multiple projects based on Critical
                Thinking, Analytical Thinking, Creative Thinking, and Divergent
                Thinking. Along with that, cooperative teamwork and excellent
                individual are my key points. Focusing on deepening Frontend
                Development and User Interface - User Experience (UI/UX) Design
                expertise while grow up Artificial Intelligence (AI) and
                Development, Security, and Operations (DevSecOps) skills are my
                goals.
              </p>
            </div>
          </div>
        </section>

        <div className="container" data-aos="fade-up">
          <h4 className="text-center section-title">
            &#127979;&ensp;Educations
          </h4>
          <br />
          <div className="row">
            <div className="col-auto text-center flex-column d-flex">
              <div className="row h-50"></div>
              <input
                type="radio"
                name="timeline1"
                id="timeline1"
                checked="checked"
              />
              <div className="row h-50">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
            </div>
            <div className="col pb-2">
              <p className="mb-1">
                <i
                  className="bi bi-building"
                  data-bs-toggle="tooltip"
                  title="University"
                ></i>
                &emsp;
                <a
                  href="https://www.uc.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info"
                >
                  <strong>Universitas Ciputra Surabaya</strong>
                </a>
              </p>
              <p className="mb-1">
                <i
                  className="bi bi-mortarboard-fill"
                  data-bs-toggle="tooltip"
                  title="Degree, Field of Study"
                ></i>
                &emsp;Sarjana Komputer (Fakultas Teknologi Informasi - Program
                Studi Informatika)
              </p>
              <p className="text-white-50">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Education Time"
                ></i>
                &emsp;2020 - 2024
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-auto text-center flex-column d-flex">
              <div className="row h-50">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
              <input
                type="radio"
                name="timeline2"
                id="timeline2"
                checked="checked"
              />
              <div className="row h-50">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
            </div>
            <div className="col py-2">
              <p className="mb-1">
                <i
                  className="bi bi-building"
                  data-bs-toggle="tooltip"
                  title="Senior High School"
                ></i>
                &emsp;
                <a
                  href="https://dm.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info"
                >
                  <strong>
                    Sekolah Menengah Atas Kristen Dharma Mulya Surabaya
                  </strong>
                </a>
              </p>
              <p className="mb-1">
                <i
                  className="bi bi-mortarboard-fill"
                  data-bs-toggle="tooltip"
                  title="Major"
                ></i>
                &emsp;Ilmu Pengetahuan Sosial
              </p>
              <p className="text-white-50">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Education Time"
                ></i>
                &emsp;2017 - 2020
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-auto text-center flex-column d-flex">
              <div className="row h-50">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
              <input
                type="radio"
                name="timeline3"
                id="timeline3"
                checked="checked"
              />
              <div className="row h-50">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
            </div>
            <div className="col py-2">
              <p className="mb-1">
                <i
                  className="bi bi-building"
                  data-bs-toggle="tooltip"
                  title="Junior High School"
                ></i>
                &emsp;
                <a
                  href="https://dm.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info"
                >
                  <strong>
                    Sekolah Menengah Pertama Kristen Dharma Mulya Surabaya
                  </strong>
                </a>
              </p>
              <p className="text-white-50">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Education Time"
                ></i>
                &emsp;2014 - 2017
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-auto text-center flex-column d-flex">
              <div className="row h-25">
                <div className="timeline-lines bg-white p-0 mx-auto"></div>
              </div>
              <input
                type="radio"
                name="timeline4"
                id="timeline4"
                checked="checked"
              />
            </div>
            <div className="col py-2">
              <p className="mb-1">
                <i
                  className="bi bi-building"
                  data-bs-toggle="tooltip"
                  title="Elementary School"
                ></i>
                &emsp;
                <a
                  href="https://dm.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info"
                >
                  <strong>Sekolah Dasar Kristen Dharma Mulya Surabaya</strong>
                </a>
              </p>
              <p className="text-white-50">
                <i
                  className="bi bi-clock-fill category-time"
                  data-bs-toggle="tooltip"
                  title="Education Time"
                ></i>
                &emsp;2008 - 2014
              </p>
            </div>
          </div>

          <section id="below-the-fold">
            <div className="vstack gap-5">
              <div data-aos="fade-up">
                <h4 className="text-center section-title">
                  &#128293;&ensp;Volunteering Experiences
                </h4>
                <br />
                {volunteeringExperiences}
              </div>

              <div data-aos="fade-up">
                <h4 className="text-center section-title">
                  &#127942;&ensp;Awards
                </h4>
                <br />
                {awards}
              </div>
            </div>
          </section>

          <div className="container mb-5" data-aos="fade-up">
            <h4 className="text-center section-title">&#10024;&ensp;Hobbies</h4>
            <br />
            <div
              id="carouselHobbies"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselHobbies"
                  data-bs-slide-to="0"
                  data-bs-toggle="tooltip"
                  title="Photography"
                  className="active"
                  aria-current="true"
                  aria-label="Photography"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselHobbies"
                  data-bs-slide-to="1"
                  data-bs-toggle="tooltip"
                  title="Sports"
                  aria-label="Sports"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselHobbies"
                  data-bs-slide-to="2"
                  data-bs-toggle="tooltip"
                  title="Cooking"
                  aria-label="Cooking"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselHobbies"
                  data-bs-slide-to="3"
                  data-bs-toggle="tooltip"
                  title="Watch Movies and Series"
                  aria-label="Watch Movies and Series"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselHobbies"
                  data-bs-slide-to="4"
                  data-bs-toggle="tooltip"
                  title="Listen to Songs"
                  aria-label="Listen to Songs"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselHobbies"
                  data-bs-slide-to="5"
                  data-bs-toggle="tooltip"
                  title="Playing Games"
                  aria-label="Playing Games"
                ></button>
              </div>
              <div className="carousel-inner text-center mx-auto">
                <div className="carousel-item active">
                  <div className="col">
                    <div className="kartu h-100">
                      <figure className="figure d-block mx-auto">
                        <img
                          src="images/home/hobbies/photography.svg"
                          className="card-img-top mx-auto pt-5 pb-3"
                          alt="Photography"
                          loading="lazy"
                        />
                        <figcaption className="figure-caption text-white-50">
                          Landscape Genre
                        </figcaption>
                        <p className="card-title mb-3">Photography</p>
                        <button
                          type="button"
                          className="btn btn-primary mb-5"
                          data-bs-toggle="modal"
                          data-bs-target="#modalPhotography"
                        >
                          <i className="bi bi-image-fill"></i>&emsp;
                          <strong>Look Photos</strong>
                        </button>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col">
                    <div className="kartu h-100">
                      <figure className="figure d-block mx-auto">
                        <a
                          href="https://storyset.com/illustration/jiu-jitsu/rafiki"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="images/home/hobbies/sports.svg"
                            className="card-img-top mx-auto py-3"
                            alt="Sports"
                            loading="lazy"
                          />
                        </a>
                        <figcaption className="figure-caption text-white-50">
                          Martial Arts
                        </figcaption>
                        <p className="card-title mb-5">Sports</p>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col">
                    <div className="kartu h-100">
                      <figure className="figure d-block mx-auto">
                        <img
                          src="images/home/hobbies/cooking.svg"
                          className="card-img-top mx-auto py-3"
                          alt="Cooking"
                          loading="lazy"
                        />
                        <figcaption className="figure-caption text-white-50">
                          Main Course and Dessert
                        </figcaption>
                        <p className="card-title mb-5">Cooking</p>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col">
                    <div className="kartu h-100">
                      <figure className="figure d-block mx-auto">
                        <img
                          src="images/home/hobbies/watch-movies-and-series.svg"
                          className="card-img-top mx-auto py-3"
                          alt="Watch Movies and Series"
                          loading="lazy"
                        />
                        <figcaption className="figure-caption text-white-50">
                          Action and Science Fiction Genres
                        </figcaption>
                        <p className="card-title mb-5">
                          Watch Movies and Series
                        </p>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col">
                    <div className="kartu h-100">
                      <figure className="figure d-block mx-auto">
                        <img
                          src="images/home/hobbies/listen-to-songs.svg"
                          className="card-img-top mx-auto pt-5 pb-3"
                          alt="Listen to Songs"
                          loading="lazy"
                        />
                        <figcaption className="figure-caption ">
                          Pop Genre
                        </figcaption>
                        <p className="card-title mb-5">Listen to Songs</p>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col">
                    <div className="kartu h-100">
                      <figure className="figure d-block mx-auto">
                        <img
                          src="images/home/hobbies/playing-games.svg"
                          className="card-img-top mx-auto pt-5 pb-3"
                          alt="Playing Games"
                          loading="lazy"
                        />
                        <figcaption className="figure-caption text-white-50">
                          Action, Racing, Sports, Third Person Shooter, and Open
                          World Genres
                        </figcaption>
                        <p className="card-title mb-5">Playing Games</p>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselHobbies"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                  data-bs-toggle="tooltip"
                  title="Previous"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselHobbies"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                  data-bs-toggle="tooltip"
                  title="Next"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalPhotography"
        data-bs-backdrop="static"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content bg-dark">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="staticBackdropLabel">
                <i className="bi bi-camera-fill"></i>&emsp;Collection of My
                Shoots
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul
                className="nav nav-pills nav-fill flex-column flex-sm-row justify-content-center gap-3 mt-2 mb-5 bg-primary bg-opacity-25 rounded"
                id="pills-tab"
                role="tablist"
                data-aos="fade-up"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active px-5"
                    id="pills-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-1"
                    aria-selected="true"
                  >
                    Surabaya
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link px-5"
                    id="pills-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-2"
                    type="button"
                    role="tab"
                    aria-controls="pills-2"
                    aria-selected="false"
                  >
                    Yogyakarta
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link px-5"
                    id="pills-3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-3"
                    type="button"
                    role="tab"
                    aria-controls="pills-3"
                    aria-selected="false"
                  >
                    Malang
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-1"
                  role="tabpanel"
                  aria-labelledby="pills-1-tab"
                >
                  <div
                    id="carouselPhotography1"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="false"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography1"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography1"
                        data-bs-slide-to="1"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography1"
                        data-bs-slide-to="2"
                        aria-label="Photography"
                      ></button>
                    </div>
                    <div className="carousel-inner text-center mx-auto">
                      <div className="carousel-item active">
                        <div className="col">{surabaya[0]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{surabaya[1]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{surabaya[2]}</div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                        data-bs-toggle="tooltip"
                        title="Previous"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                        data-bs-toggle="tooltip"
                        title="Next"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-2"
                  role="tabpanel"
                  aria-labelledby="pills-2-tab"
                >
                  <div
                    id="carouselPhotography2"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="false"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography2"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography2"
                        data-bs-slide-to="1"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography2"
                        data-bs-slide-to="2"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography2"
                        data-bs-slide-to="3"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography2"
                        data-bs-slide-to="4"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography2"
                        data-bs-slide-to="5"
                        aria-label="Photography"
                      ></button>
                    </div>
                    <div className="carousel-inner text-center mx-auto">
                      <div className="carousel-item active">
                        <div className="col">{yogyakarta[0]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{yogyakarta[1]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{yogyakarta[2]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{yogyakarta[3]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{yogyakarta[4]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{yogyakarta[5]}</div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselPhotography2"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                        data-bs-toggle="tooltip"
                        title="Previous"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselPhotography2"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                        data-bs-toggle="tooltip"
                        title="Next"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-3"
                  role="tabpanel"
                  aria-labelledby="pills-3-tab"
                >
                  <div
                    id="carouselPhotography3"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="false"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography3"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography3"
                        data-bs-slide-to="1"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography3"
                        data-bs-slide-to="2"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography3"
                        data-bs-slide-to="3"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography3"
                        data-bs-slide-to="4"
                        aria-label="Photography"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselPhotography3"
                        data-bs-slide-to="5"
                        aria-label="Photography"
                      ></button>
                    </div>
                    <div className="carousel-inner text-center mx-auto">
                      <div className="carousel-item active">
                        <div className="col">{malang[0]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{malang[1]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{malang[2]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{malang[3]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{malang[4]}</div>
                      </div>
                      <div className="carousel-item">
                        <div className="col">{malang[5]}</div>
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselPhotography3"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                        data-bs-toggle="tooltip"
                        title="Previous"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselPhotography3"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                        data-bs-toggle="tooltip"
                        title="Next"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}