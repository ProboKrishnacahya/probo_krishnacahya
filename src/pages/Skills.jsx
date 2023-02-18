import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function Skills() {
  useEffect(() => {
    //* Tab Page Title
    document.title = "Skills";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  const techStacks1 = [
    {
      id: 1,
      image: "images/skills/technologies/bootstrap.svg",
      alt: "Bootstrap",
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
      progress: "95%",
    },
    {
      id: 2,
      image: "images/skills/technologies/cascading-style-sheets-3.svg",
      alt: "Cascading Style Sheets 3",
      name: "Cascading Style Sheets 3",
      url: "http://www.w3.org/TR/CSS/",
      progress: "95%",
    },
    {
      id: 3,
      image: "images/skills/technologies/chakra-ui.svg",
      alt: "Chakra UI",
      name: "Chakra UI",
      url: "https://chakra-ui.com/",
      progress: "50%",
    },
    {
      id: 4,
      image: "images/skills/technologies/hyperText-markup-language-5.svg",
      alt: "HyperText Markup Language 5",
      name: "HyperText Markup Language 5",
      url: "http://www.w3.org/TR/html5/",
      progress: "95%",
    },
    {
      id: 5,
      image: "images/skills/technologies/flutter.svg",
      alt: "Flutter",
      name: "Flutter",
      url: "https://flutter.dev/",
      progress: "80%",
    },
    {
      id: 6,
      image: "images/skills/technologies/javascript.svg",
      alt: "JavaScript",
      name: "JavaScript",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      progress: "40%",
    },
    {
      id: 7,
      image: "images/skills/technologies/jquery.svg",
      alt: "jQuery",
      name: "jQuery",
      url: "https://jquery.com/",
      progress: "35%",
    },
    {
      id: 8,
      image: "images/skills/technologies/reactjs.svg",
      alt: "ReactJS",
      name: "ReactJS",
      url: "https://reactjs.org/",
      progress: "85%",
    },
    {
      id: 9,
      image: "images/skills/technologies/swiftui.svg",
      alt: "SwiftUI",
      name: "SwiftUI",
      url: "https://developer.apple.com/xcode/swiftui/",
      progress: "90%",
    },
    {
      id: 10,
      image: "images/skills/technologies/tailwindcss.svg",
      alt: "Tailwind CSS",
      name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      progress: "75%",
    },
  ];

  const frontend = [];

  for (const techStack1 of techStacks1) {
    frontend.push(
      <div className="col">
        <div className="kartu h-100">
          <img
            src={techStack1.image}
            className="card-img-top mx-auto py-0"
            alt={techStack1.alt}
            loading="lazy"
          />
          <div className="card-body py-2">
            <a href={techStack1.url} target="_blank" rel="noopener noreferrer">
              <p className="card-title">{techStack1.name}</p>
            </a>
          </div>
          <div className="card-footer border-0 bg-transparent pb-3">
            <div className="progress" style={{ height: "1.5rem" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${techStack1.progress}`,
                  fontSize: "1rem",
                }}
                aria-valuenow={techStack1.progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {techStack1.progress}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const techStacks2 = [
    {
      id: 1,
      image: "images/skills/technologies/dart.svg",
      alt: "Dart",
      name: "Dart",
      url: "https://dart.dev/",
      progress: "50%",
    },
    {
      id: 2,
      image: "images/skills/technologies/firebase.svg",
      alt: "Firebase",
      name: "Firebase",
      url: "https://www.firebase.com/",
      progress: "50%",
    },
    {
      id: 3,
      image: "images/skills/technologies/hypertext-preprocessor.svg",
      alt: "Hypertext Preprocessor",
      name: "Hypertext Preprocessor",
      url: "http://php.net/",
      progress: "65%",
    },
    {
      id: 4,
      image: "images/skills/technologies/java.svg",
      alt: "Java",
      name: "Java",
      url: "https://www.java.com/",
      progress: "65%",
    },
    {
      id: 5,
      image: "images/skills/technologies/laravel.svg",
      alt: "Laravel",
      name: "Laravel",
      url: "https://laravel.com/",
      progress: "75%",
    },
    {
      id: 6,
      image: "images/skills/technologies/mysql.svg",
      alt: "MySQL",
      name: "MySQL",
      url: "https://www.mysql.com/",
      progress: "70%",
    },
    {
      id: 7,
      image: "images/skills/technologies/python.svg",
      alt: "Python",
      name: "Python",
      url: "https://www.python.org/",
      progress: "65%",
    },
    {
      id: 8,
      image: "images/skills/technologies/swift.svg",
      alt: "Swift",
      name: "Swift",
      url: "https://www.swift.org/",
      progress: "65%",
    },
  ];

  const backend = [];

  for (const techStack2 of techStacks2) {
    backend.push(
      <div className="col">
        <div className="kartu h-100">
          <img
            src={techStack2.image}
            className="card-img-top mx-auto py-0"
            alt={techStack2.alt}
            loading="lazy"
          />
          <div className="card-body py-2">
            <a href={techStack2.url} target="_blank" rel="noopener noreferrer">
              <p className="card-title">{techStack2.name}</p>
            </a>
          </div>
          <div className="card-footer border-0 bg-transparent pb-3">
            <div className="progress" style={{ height: "1.5rem" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${techStack2.progress}`,
                  fontSize: "1rem",
                }}
                aria-valuenow={techStack2.progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {techStack2.progress}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const techStacks3 = [
    {
      id: 1,
      image: "images/skills/technologies/asana.svg",
      alt: "Asana",
      name: "Asana",
      url: "https://asana.com/",
      progress: "75%",
    },
    {
      id: 2,
      image: "images/skills/technologies/github.svg",
      alt: "GitHub",
      name: "GitHub",
      url: "https://github.com/",
      progress: "85%",
    },
    {
      id: 3,
      image: "images/skills/technologies/notion.svg",
      alt: "Notion",
      name: "Notion",
      url: "https://notion.so/",
      progress: "80%",
    },
    {
      id: 4,
      image: "images/skills/technologies/postman.svg",
      alt: "Postman",
      name: "Postman",
      url: "https://www.postman.com/",
      progress: "50%",
    },
    {
      id: 5,
      image: "images/skills/technologies/trello.svg",
      alt: "Trello",
      name: "Trello",
      url: "https://trello.com/",
      progress: "90%",
    },
  ];

  const others = [];

  for (const techStack3 of techStacks3) {
    others.push(
      <div className="col">
        <div className="kartu h-100">
          <img
            src={techStack3.image}
            className="card-img-top mx-auto py-0"
            alt={techStack3.alt}
            loading="lazy"
          />
          <div className="card-body py-2">
            <a href={techStack3.url} target="_blank" rel="noopener noreferrer">
              <p className="card-title">{techStack3.name}</p>
            </a>
          </div>
          <div className="card-footer border-0 bg-transparent pb-3">
            <div className="progress" style={{ height: "1.5rem" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${techStack3.progress}`,
                  fontSize: "1rem",
                }}
                aria-valuenow={techStack3.progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {techStack3.progress}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const techStacks4 = [
    {
      id: 1,
      image: "images/skills/technologies/after-effects.svg",
      alt: "After Effects",
      name: "After Effects",
      url: "https://www.adobe.com/products/aftereffects.html",
      progress: "35%",
    },
    {
      id: 2,
      image: "images/skills/technologies/figma.svg",
      alt: "Figma",
      name: "Figma",
      url: "https://www.figma.com/",
      progress: "90%",
    },
    {
      id: 3,
      image: "images/skills/technologies/illustrator.svg",
      alt: "Illustrator",
      name: "Illustrator",
      url: "https://www.adobe.com/products/illustrator.html",
      progress: "70%",
    },
    {
      id: 4,
      image: "images/skills/technologies/lightroom.svg",
      alt: "Lightroom",
      name: "Lightroom",
      url: "https://www.adobe.com/products/photoshop-lightroom.html",
      progress: "85%",
    },
    {
      id: 5,
      image: "images/skills/technologies/photoshop.svg",
      alt: "Photoshop",
      name: "Photoshop",
      url: "https://www.adobe.com/products/photoshop.html",
      progress: "45%",
    },
    {
      id: 6,
      image: "images/skills/technologies/premiere-pro.svg",
      alt: "Premiere Pro",
      name: "Premiere Pro",
      url: "https://www.adobe.com/products/premiere.html",
      progress: "60%",
    },
  ];

  const visualDesign = [];

  for (const techStack4 of techStacks4) {
    visualDesign.push(
      <div className="col">
        <div className="kartu h-100">
          <img
            src={techStack4.image}
            className="card-img-top mx-auto py-0"
            alt={techStack4.alt}
            loading="lazy"
          />
          <div className="card-body py-2">
            <a href={techStack4.url} target="_blank" rel="noopener noreferrer">
              <p className="card-title">{techStack4.name}</p>
            </a>
          </div>
          <div className="card-footer border-0 bg-transparent pb-3">
            <div className="progress" style={{ height: "1.5rem" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${techStack4.progress}`,
                  fontSize: "1rem",
                }}
                aria-valuenow={techStack4.progress}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {techStack4.progress}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const techStacks5 = [
    {
      id: 1,
      image: "images/skills/flags/indonesia.svg",
      alt: "Indonesian",
      name: "Indonesian",
      level: "Fluent (Native Language)",
    },
    {
      id: 2,
      image: "images/skills/flags/united-kingdom.svg",
      alt: "English",
      name: "English",
      level: "Professional Level",
    },
    {
      id: 3,
      image: "images/skills/flags/china.svg",
      alt: "Chinese",
      name: "Chinese",
      level: "Basic Level",
    },
  ];

  const humanLanguages = [];

  for (const techStack5 of techStacks5) {
    humanLanguages.push(
      <div className="col">
        <div className="kartu h-100">
          <img
            src={techStack5.image}
            className="card-img-top mx-auto"
            alt={techStack5.alt}
          />
          <div className="card-body py-2">
            <p className="card-title text-white">{techStack5.name}</p>
          </div>
          <div className="card-footer text-white-50 border-0 bg-transparent pb-0">
            <p>{techStack5.level}</p>
          </div>
        </div>
      </div>
    );
  }

  const technologies = [
    {
      id: 1,
      url: "http://www.w3.org/TR/html5/",
      icon: "fa-brands fa-html5",
      title: "HyperText Markup Language 5",
    },
    {
      id: 2,
      url: "http://www.w3.org/TR/CSS/",
      icon: "fa-brands fa-css3-alt",
      title: "Cascading Style Sheets 3",
    },
    {
      id: 3,
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      icon: "fa-brands fa-js-square",
      title: "JavaScript",
    },
    {
      id: 4,
      url: "https://reactjs.org/",
      icon: "fa-brands fa-react",
      title: "ReactJS",
    },
    {
      id: 5,
      url: "https://getbootstrap.com/",
      icon: "fa-brands fa-bootstrap",
      title: "Bootstrap",
    },
  ];

  const personalWebsite = [];

  for (const technology of technologies) {
    personalWebsite.push(
      <div className="d-inline mx-2">
        <span>
          <a href={technology.url} target="_blank" rel="noopener noreferrer">
            <i
              className={technology.icon}
              data-bs-toggle="tooltip"
              title={technology.title}
            ></i>
          </a>
        </span>
      </div>
    );
  }

  return (
    <div className="skills">
      <Header />
      <div className="container">
        <div className="mt-5" data-aos="fade-up">
          <h4 className="text-center section-title">
            &#128220;&ensp;Certifications
          </h4>
          <br />
          <table
            className="table table-responsive table-dark table-striped table-hover"
            id="certificationList"
          >
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Publisher Organization</th>
                <th scope="col">Date Achieved</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/46085a635bee467f8eb95925916f9250"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Android
                  </a>
                </td>
                <td>TestDome</td>
                <td>Jun 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/7834a499fcfd4123b947002eea0a63df"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DevOps
                  </a>
                </td>
                <td>TestDome</td>
                <td>May 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/7e5b2f29a59f48efa71e8b0bc72b0bcc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flutter
                  </a>
                </td>
                <td>TestDome</td>
                <td>May 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/575f7de7f7634b73892a42e4ac2d3e49"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abstract Reasoning
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.hackerrank.com/certificates/e33caa399655"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CSS
                  </a>
                </td>
                <td>HackerRank</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/949b8c4448564bca9b03a05ab6ca4ef2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    English Comprehension and Communication
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTExODI0/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Graphic Design (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/2d5ba222fb1142928e0bd04e5cd29639"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Growth Marketing
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTEwMTY5/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    JavaScript Programming (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/b5e61587a6ef4e65afda2ac3d79c804f"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Laravel
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/cc07de34412f4285a13180659b712405"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Numerical Reasoning
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTExODM5/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    React 16.X (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/d9cf9e4ff8d44090ac27560f0fc59836"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Scrum Master
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/b1c99a672cf848c78adba23062f749b8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Software Engineering
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTEwMTYy/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Static Site Development (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTEyMDQ0/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Swift for iOS (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/87b38d51c20f4f8bae38a87af9d50d8b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Verbal Reasoning
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/3e9554be3c624302a0975eb37fa4029a"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    iOS and Swift
                  </a>
                </td>
                <td>TestDome</td>
                <td>Mar 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/36ac75bae42c460db610f9625f83b675"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    A/B Testing
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/39a6f5d3441848a1b334b761fffd645c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Attention to Detail and Time Management
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NDk4ODgz/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bootstrap 4.x (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NDk4ODky/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CSS 3 (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://olympus1.mygreatlearning.com/course_certificate/APMQPGOB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front End Development - CSS
                  </a>
                </td>
                <td>Great Learning</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://olympus1.mygreatlearning.com/course_certificate/QYUKBBAP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Front End Development - HTML
                  </a>
                </td>
                <td>Great Learning</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/3b309305da0f40fda44e5dcfd2d49ec8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Git
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/2f62fb3b168e4066bf09e61d6ce201c4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML/CSS and Bootstrap
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/7c434b03589e4a71ac9f84c6b206fc74"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML/CSS, JavaScript with jQuery, and Bootstrap
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/e532dc2f33464be081f9c27a9506d72c"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML/CSS, JavaScript, and React
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/Users/socialMedia/NDk4NjQ1/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HTML5 (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/98ca9d68e3a0477e9fc9b36335ce3142"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Logical Reasoning
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/a8b39c082f744f08a12dde0dd41569ba"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Marketing Analytics
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://app.testdome.com/cert/528a68cf0ef742f8b89f17825e13e06d"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Project Management and Time Management
                  </a>
                </td>
                <td>TestDome</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.kaggle.com/learn/certification/probokrishnacahya/python"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Python
                  </a>
                </td>
                <td>Kaggle</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.agunacourse.com/cek-sertifikat?search=AC-455-97841590-53"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Python Fundamental
                  </a>
                </td>
                <td>Aguna Course</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTAyMjAx/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ%3D%3D/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    UI/UX Developer (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.studysection.com/users/socialMedia/NTAyMjEx/cHJvYm8ua3Jpc2huYWNhaHlhQGdtYWlsLmNvbQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web Designing (Advanced)
                  </a>
                </td>
                <td>StudySection</td>
                <td>Feb 2022</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.dicoding.com/certificates/07Z6RDEGYPQR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Memulai Pemrograman Dengan Dart
                  </a>
                </td>
                <td>Dicoding Indonesia</td>
                <td>Aug 2022 - Aug 2025</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://www.dicoding.com/certificates/N9ZOE9E18XG5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Belajar Prinsip Pemrograman SOLID
                  </a>
                </td>
                <td>Dicoding Indonesia</td>
                <td>Sep 2021 - Sep 2024</td>
              </tr>
            </tbody>
          </table>

          <section id="content" data-aos="fade-up">
            <div className="container text-center p-0">
              <h4 className="text-center section-title">
                &#128640;&ensp;Tech Stack
              </h4>
              {/* Information of Technology */}
              <div className="accordion" id="accordionSkills">
                <div className="accordion-item border-0 bg-transparent">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button border-0 bg-transparent text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <h5>
                        <i
                          className="bi bi-code-slash"
                          data-bs-toggle="tooltip"
                          title="Category"
                        ></i>
                        &emsp;Information of Technology
                      </h5>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionSkills"
                  >
                    <div className="accordion-body text-white">
                      <div className="d-flex mb-3">
                        <i
                          className="bi bi-star"
                          data-bs-toggle="tooltip"
                          title="Specialization"
                        ></i>
                        &emsp;
                        <strong>Frontend Development</strong>
                      </div>
                      <div className="row row-cols-1 row-cols-md-4 g-4">
                        {frontend}
                      </div>
                      <div className="d-flex my-3">
                        <i
                          className="bi bi-star"
                          data-bs-toggle="tooltip"
                          title="Specialization"
                        ></i>
                        &emsp;
                        <strong>Backend Development</strong>
                      </div>
                      <div className="row row-cols-1 row-cols-md-4 g-4">
                        {backend}
                      </div>
                      <div className="d-flex my-3">
                        <i
                          className="bi bi-star"
                          data-bs-toggle="tooltip"
                          title="Specialization"
                        ></i>
                        &emsp;
                        <strong>Others</strong>
                      </div>
                      <div className="row row-cols-1 row-cols-md-4 g-4">
                        {others}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Visual Design */}
                <div className="accordion-item border-0 bg-transparent">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed border-0 bg-transparent text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <h5>
                        <i
                          className="bi bi-vector-pen"
                          data-bs-toggle="tooltip"
                          title="Category"
                        ></i>
                        &emsp;Visual Design
                      </h5>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionSkills"
                  >
                    <div className="accordion-body text-white">
                      <div className="row row-cols-1 row-cols-md-4 g-4">
                        {visualDesign}
                      </div>
                    </div>
                  </div>
                  {/* Human Languages */}
                  <div className="accordion-item border-0 bg-transparent">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed border-0 bg-transparent text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <h5>
                          <i
                            className="bi bi-translate"
                            data-bs-toggle="tooltip"
                            title="Category"
                          ></i>
                          &emsp;Human Languages
                        </h5>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionSkills"
                    >
                      <div className="accordion-body text-white">
                        <div className="row row-cols-1 row-cols-md-4 g-4">
                          {humanLanguages}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container text-center mb-5">
            <span className="fs-6">Built with&ensp;</span>
            {personalWebsite}

            <br />
            <br />
            <div className="d-inline">
              <span className="fs-6">Deployed using&ensp;</span>
              <span>
                <a href="https://firebase.google.com/products/hosting">
                  <img
                    src="images/skills/technologies/hosting.svg"
                    width={256}
                    alt="Firebase"
                    data-bs-toggle="tooltip"
                    title="Firebase"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
