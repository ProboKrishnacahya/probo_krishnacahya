import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function Projects() {
  useEffect(() => {
    //* Tab Page Title
    document.title = "Projects";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  return (
    <div className="projects">
      <Header />
      <div className="container">
        <ul
          className="nav nav-pills nav flex-column flex-sm-row justify-content-center align-items-center gap-3 my-5"
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
              <i className="bi bi-globe2"></i>
              &emsp;Web
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
              <i className="bi bi-phone"></i>
              &emsp;Mobile
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
              <i className="bi bi-laptop"></i>
              &emsp;Desktop
            </button>
          </li>
        </ul>
      </div>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-1"
          role="tabpanel"
          aria-labelledby="pills-1-tab"
        >
          <div className="container">
            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">D'Orphan</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Oct 2022 - Jan 2023
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  D'Orphan is a Web Application that implemented MVC
                  Architecture and created using PHP (Laravel), JavaScript,
                  HTML5, CSS3, Tailwind CSS, Alpine.js, Livewire, and Midtrans.
                  The other platform version is a Native Mobile Application
                  based on Android OS that implemented MVVM Architecture along
                  with Google Material Design System and created using Java.
                  This Educational Application is designed in the form of a
                  Talents and Interests Development Course for Orphanage
                  Children so that they have qualified expertise with priority
                  according to their talents and interests. The creation of
                  D'Orphan is based on supporting the Sustainable Development
                  Goals on the 4th goal about Quality Education and 8th goal
                  about Decent Work and Economic Growth.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Publication of Orphanage and Tutor Profiles.
                      </li>
                      <li>&ensp;Find Tutors for Course Sessions.</li>
                      <li>&ensp;Manage Course Session Requests.</li>
                      <li>&ensp;Competition Recommendations.</li>
                      <li>
                        &ensp;Facilitate the process of donating from Donors to
                        Orphanages.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <div className="d-grid gap-2">
                      <div>
                        <img
                          src="images/projects/Web/DOrphan.svg"
                          className="d-block mx-auto"
                          alt="Project"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <iframe
                          loading="lazy"
                          src="https://www.canva.com/design/DAFVFKLOzrU/view?embed"
                          allowfullscreen="allowfullscreen"
                          allow="fullscreen"
                          title="Canva DOrphan"
                          className="rounded w-100 vh-100"
                        ></iframe>
                      </div>
                    </div>
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://dorphan.archotech.site/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>Visit Project</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">SejarahKita</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Nov 2021 - Jan 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  SejarahKita is a Web Application that implemented MVC
                  Architecture and created using PHP (Laravel), JavaScript,
                  HTML5, CSS3, and Bootstrap. Integrated using MySQL and RESTful
                  API with Native Mobile Application based on Android OS that
                  implemented MVVM Architecture along with Google Material
                  Design System and created using Java. This Education Game
                  application in the form of Anagram Word Game is about Sejarah
                  Indonesia subject for 12th Grade of High School Students that
                  focused to the chapter of "The Struggle of the Indonesian
                  Nation in Facing the Threat of Disintegration from Ideology,
                  Interests, and Government Systems" and "The Role and Values of
                  the Struggle of National Figures and Regional Leaders in
                  Maintaining the Integrity of the State and Indonesian Nation
                  in the 1945–1965 Period". The creation of SejarahKita is based
                  on supporting the Sustainable Development Goals on the 4th
                  goal about Quality Education.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Sharpen skills in Sejarah Indonesia subjects
                        through games that are packaged in the form of 2 game
                        modes, namely "Casual" and "Ranked". The Ranked Mode has
                        2 choices of Levels where each Ranked Point acquisition
                        is accumulated on each Leaderboard, namely "Easy" and
                        "Hard". So, that they can attract more interest in
                        learning.
                      </li>
                      <li>
                        &ensp;Assisting students in preparing for the final exam
                        of Sejarah Indonesia.
                      </li>
                      <li>
                        &ensp;Increase gratitude, respect, and appreciate the
                        services of the heroes of independence.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <div className="d-grid gap-2">
                      <div>
                        <img
                          src="images/projects/Web/SejarahKita Web.svg"
                          className="d-block mx-auto"
                          alt="Project"
                          loading="lazy"
                        />
                      </div>
                      <div>
                        <iframe
                          src="https://docs.google.com/presentation/d/e/2PACX-1vRMUrJJCVHJSytcg5RyEWQkzDott6Vjs4tahWfCMBA8BEueFa9mwxQoXPuxDJKOexf6_wjvNPFvBuBg/embed?start=false&loop=false&delayms=60000"
                          frameborder="0"
                          allowfullscreen="true"
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                          title="Google Slide SejarahKita Web"
                          className="rounded w-100 vh-100"
                        ></iframe>
                      </div>
                    </div>
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://youtu.be/-Kxwhn1nH5Y/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-youtube"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            {/* <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">Frontend Mentor Challenges</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Jul 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />I took on a frontend challenges that included creating
                  web designs through&nbsp;
                  <a
                    href="https://www.frontendmentor.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-link my-1"
                  >
                    Frontend Mentor
                  </a>
                  . You can see the challenges I have completed through the
                  table listed on the website below.
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <img
                      src="images/projects/Web/Frontend Mentor.svg"
                      className="d-block mx-auto"
                      alt="Project"
                      loading="lazy"
                    />
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://frontend-mentor-challenges-pk.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>Visit Project</strong>
                  </button>
                </a>
              </div>
            </div> */}

            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">PartnerSeeker</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;May 2021 – Jun 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  PartnerSeeker is a Dynamic Web that implemented Procedural
                  Paradigm and created using PHP, MySQL, HTML5, and CSS3. This
                  Business Oriented Social Networking website bridges between
                  freelancers and clients, namely recruiters or freelancer
                  seekers so that they can work together according to project
                  needs. Freelancers can upload their profiles and portfolios so
                  that website visitors can explore them so that clients can
                  find suitable service providers. The creation of PartnerSeeker
                  is based on supporting the Sustainable Development Goal on the
                  8th goal about Decent Work and Economic Growth and 17th goal
                  about Partnership for the Goals.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Helping recruiters or freelancer seekers to
                        connect with freelancers so that the effectiveness of
                        project work can run optimally according to targets.
                      </li>
                      <li>
                        &ensp;Encouraging the achievement of time efficiency in
                        finding the right human resources to be trusted in
                        completing project work.
                      </li>
                      <li>
                        &ensp;Better known to the public through the posting of
                        information, both from the individual side or the
                        company providing the project as well as freelancers.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <img
                      src="images/projects/Web/PartnerSeeker.svg"
                      className="d-block mx-auto"
                      alt="Project"
                      loading="lazy"
                    />
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://github.com/ProboKrishnacahya/PartnerSeeker/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-github"></i>&emsp;
                    <strong>View Repository</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-2"
          role="tabpanel"
          aria-labelledby="pills-2-tab"
        >
          <div className="container">
            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">Weerausaha</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Oct 2021 - Nov 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  Weerausaha is a Mobile Prototype in the form of UI/UX Design
                  that created using Figma along with Google Material Design
                  System. This digital product implements digital technology
                  innovations as a means of education about Entrepreneurship.
                  The creation of Weerausaha is based on supporting the
                  Sustainable Development Goal on the 4th goal about Quality
                  Education.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Presenting various knowledge and insights related
                        to Entrepreneurship to help promote MSMEs and
                        Entrepreneurs in Indonesia.
                      </li>
                      <li>
                        &ensp;Instilling an Entrepreneurial spirit in the
                        community, especially for Entrepreneurs in Indonesia to
                        produce "The World Changer", "The Visionary", "The
                        Survivor", and "The Strategist" Entrepreneurs.
                      </li>
                      <li>
                        &ensp;Encouraging the improvement of the quality and
                        growth of the quantity of Entrepreneurs in Indonesia.
                      </li>
                      <li>
                        &ensp;Help make Indonesia a developed country through
                        the development of Entrepreneurship among its people.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <div className="d-grid gap-2">
                      <div>
                        <iframe
                          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FINHbc8MFw9AL6Jtll9VNqi%2FWeerausaha%3Fpage-id%3D0%253A1%26node-id%3D67%253A7426%26starsting-point-node-id%3D67%253A7406%26scaling%3Dscale-down%26show-proto-sidebar%3D1"
                          allowfullscreen
                          title="Figma Weerausaha"
                          className="rounded w-100 vh-100"
                        ></iframe>
                      </div>
                      <div>
                        <iframe
                          src="https://docs.google.com/presentation/d/e/2PACX-1vSQKnbXZBFOg0qbyRMzd-fGYo-HeR9L0sX7e43mYX8yIABmVrSBCQ2k8MEkPkNzMHmprleZ_MXLqGLX/embed?start=false&loop=false&delayms=60000"
                          frameborder="0"
                          allowfullscreen="true"
                          mozallowfullscreen="true"
                          webkitallowfullscreen="true"
                          title="Google Slide Weerausaha"
                          className="rounded w-100 vh-100"
                        ></iframe>
                      </div>
                    </div>
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://www.figma.com/proto/INHbc8MFw9AL6Jtll9VNqi/Weerausaha?page-id=0%3A1&node-id=67%3A7426&starsting-point-node-id=67%3A7406&scaling=scale-down&show-proto-sidebar=1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>Visit Project</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">Holiyay</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;May 2022 - Jun 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  Holiyay is a Native Mobile Application based on iOS that
                  created using Swift, SwiftUI, and MapKit along with Apple
                  Human Interface Guidelines Design System. This Itinerary
                  application aims to help holiday planning through selecting
                  the tourist destinations that everyone want to visit and
                  determining the specific time (day, date, month, and year) of
                  the visit. It displays an amazing selection of holiday
                  destinations from various countries and categories. The
                  creation of Holiyay is based on supporting the Sustainable
                  Development Goals on the 3rd goal about Good Health and
                  Well-Being.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Helping users to overcome difficulties in planning
                        holiday times and locations. Holiday activities are also
                        one of the important activities in life.
                      </li>
                      <li>
                        &ensp;Introducing tourist destinations from various
                        countries in order to attract tourists' holiday visits
                        as one of the sources of increasing the country's
                        economy.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <img
                      src="images/projects/Mobile/Holiyay.svg"
                      className="w-75 h-75 d-block mx-auto"
                      alt="Project"
                      loading="lazy"
                    />
                    <iframe
                      src="https://docs.google.com/presentation/d/e/2PACX-1vTMYlcLaMqVFJOjRQVi6HlG7Im5lHpI4tX1Z8436Xnjfie6moTwW9dxoZ3gPrMI1o0BEKIuUH3UXRnP/embed?start=false&loop=false&delayms=60000"
                      frameborder="0"
                      allowfullscreen="true"
                      mozallowfullscreen="true"
                      webkitallowfullscreen="true"
                      title="Google Slide Holiyay"
                      className="rounded w-100 vh-100"
                    ></iframe>
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://youtu.be/94Wd0Zwe26o/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-youtube"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card" data-aos="fade-up">
              <h3 className="text-center">SejarahKita</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Nov 2021 - Jan 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  SejarahKita is a Native Mobile Application based on Android OS
                  that implemented MVVM Architecture along with Google Material
                  Design System and created using Java. Integrated using MySQL
                  and RESTful API with Web Application that implemented MVC
                  Architecture and created using PHP (Laravel), JavaScript,
                  HTML5, CSS3, and Bootstrap. This Education Game application in
                  the form of Anagram Word Game is about Sejarah Indonesia
                  subject for 12<sup>th</sup> Grade of High School Students that
                  focused to the chapter of "The Struggle of the Indonesian
                  Nation in Facing the Threat of Disintegration from Ideology,
                  Interests, and Government Systems" and "The Role and Values of
                  the Struggle of National Figures and Regional Leaders in
                  Maintaining the Integrity of the State and Indonesian Nation
                  in the 1945–1965 Period".
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Sharpen skills in Sejarah Indonesia subjects
                        through games that are packaged in the form of 2 game
                        modes, namely "Casual" and "Ranked". The Ranked Mode has
                        2 choices of Levels where each Ranked Point acquisition
                        is accumulated on each Leaderboard, namely "Easy" and
                        "Hard". So, that they can attract more interest in
                        learning.
                      </li>
                      <li>
                        &ensp;Assisting students in preparing for the final exam
                        of Sejarah Indonesia.
                      </li>
                      <li>
                        &ensp;Increase gratitude, respect, and appreciate the
                        services of the heroes of independence.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <img
                      src="images/projects/Mobile/SejarahKita Mobile.svg"
                      className="w-75 h-75 d-block mx-auto"
                      alt="Project"
                      loading="lazy"
                    />
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://youtu.be/-Kxwhn1nH5Y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-youtube"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">The Movie Database (TMDB) Clone</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Oct 2021 - Nov 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  <a
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Movie Database (TMDB)
                  </a>
                  &nbsp;Clone is an Android OS based Mobile Application about
                  Movie Catalog (Now Playing, Upcoming, and Popular Movies)
                  using TMDB API, Java Programming Language, and Android Jetpack
                  Library (Navigation Component, Model View ViewModel Pattern,
                  and Retrofit). Users can search for movie titles, view
                  detailed information, and also watch trailer.
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefit of Use:</strong>
                    <br />
                    Can make potential viewers know the picture of the film
                    through synopsis and trailers to attract interest in
                    watching so that it can increase the income of film
                    producers by increasing the number of viewers.
                  </div>
                </p>
                <details>
                  <summary className="text-link my-1">
                    <strong>Documentation</strong>
                  </summary>
                  <img
                    src="images/projects/Mobile/TMDB Clone.svg"
                    className="w-75 h-75 d-block mx-auto"
                    alt="Project"
                    loading="lazy"
                  />
                </details>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://youtu.be/7VgMHynIaOM/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-youtube"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">LemburanKu</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;May 2021 – Jun 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  LemburanKu is a Native Mobile Application based on Android OS
                  that implemented OOP Paradigm along with Google Material
                  Design System and created using Java, PHP, and MySQL. This
                  Finance application can be a solution for users to perform
                  calculations while storing Employee overtime data. Users can
                  create, update, view the details, and delete such data based
                  on the entered report information. The calculation rules used
                  in LemburanKu are based on applicable regulations from the
                  Ministry of Manpower of the Republic of Indonesia (KEP.
                  102/MEN/VI/2004 Kemnaker). The creation of LemburanKu is based
                  on supporting the Sustainable Development Goal on the 17th
                  goal about Partnership for the Goals.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Carry out the rules set by the Ministry of
                        Manpower of the Republic of Indonesia regarding the
                        payment of employee overtime wages from the company.
                      </li>
                      <li>
                        &ensp;The occurrence of justice for employees in
                        obtaining employee wages with nominal in accordance with
                        applicable regulations.
                      </li>
                      <li>
                        &ensp;Assist the company in the allocation of expenses
                        in paying employee overtime wages.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <img
                      src="images/projects/Mobile/LemburanKu Mobile.svg"
                      className="w-75 h-75 d-block mx-auto"
                      alt="Project"
                      loading="lazy"
                    />
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://youtu.be/3TW4evaf5bE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-youtube"></i>&emsp;
                    <strong>Watch Demonstration</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="pills-3"
          role="tabpanel"
          aria-labelledby="pills-3-tab"
        >
          <div className="container">
            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">Faumation</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;May 2022 - Jun 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  Faumation is a Desktop Prototype of Water Level Monitoring
                  System and Water Temperature Heater with Faucet Automation
                  Based on Internet of Things Through the Web Using Arduino Uno
                  R3 V2.0 Module on Resident Water Storage that implemented
                  Internet of Things technology in simulation form using Proteus
                  Printed Circuit Board Design and Circuit Simulator Software
                  and created using Arduino. The other platform version is a Web
                  Application that created using PHP (Laravel), JavaScript,
                  HTML5, CSS3, Tailwind CSS, Alpine.js, and Livewire.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Facilitate residents in the process of filling
                        water in bathing water reservoirs where the water faucet
                        can be run automatically. In addition, there is also a
                        filling option that can be controlled manually if
                        residents need to fill water even though the water is
                        still not running low. As a result, this water filling
                        feature can save time and energy while preventing the
                        use of bath water that is wasted because it passes the
                        capacity of the water filling station while filling
                        water.
                      </li>
                      <li>
                        &ensp;Provide convenience for residents in adjusting the
                        water temperature based on their needs, in which there
                        is a water temperature detector that can run
                        automatically so that residents can get warm water. In
                        addition, there is also the option of manually
                        controlling the water heater to warm the water.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <img
                      src="images/projects/Desktop/Faumation.svg"
                      className="w-50 h-50 d-block mx-auto rounded"
                      alt="Project"
                      loading="lazy"
                    />
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://github.com/ProboKrishnacahya/Faumation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-github"></i>&emsp;
                    <strong>View Repository</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">Sortrash</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;May 2022 - Jun 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  Sortrash is a Desktop Application based on a Graphical User
                  Interface that implemented Deep Learning technology with the
                  Convolutional Neural Network Algorithm and created using
                  Python and PySimpleGUI. The system in Sortrash can provide
                  information in the form of results (responses) of garbage
                  categories (types) according to the garbage objects uploaded
                  from files available in the user's device local disk
                  directory. This Image Classification application used to
                  detect objects in the form of waste based on 3 categories
                  (types) of waste, namely "Organic", "Inorganic Paper Made",
                  and "Non-Paper Inorganic". The creation of Sortrash is based
                  on supporting the Sustainable Development Goal on the 12th
                  goal about Responsible Consumption and Production.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Make it easier for the public to sort a single
                        unit of uncontaminated waste with other categories
                        (types) of waste with practical steps so that they can
                        be directed to dispose of in the right trash can.
                      </li>
                      <li>
                        &ensp;Assisting the waste management in carrying out
                        further waste management process regarding the waste
                        that has been disposed of in the trash.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <img
                      src="images/projects/Desktop/Sortrash.svg"
                      className="w-50 h-50 d-block mx-auto"
                      alt="Project"
                      loading="lazy"
                    />
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://github.com/ProboKrishnacahya/Sortrash/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-github"></i>&emsp;
                    <strong>View Repository</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">Dodge Master</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Dec 2021 – Jan 2022
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  Dodge Master is a Desktop Application about Platformer Genre
                  Game with 2D graphics that contains various obstacles that
                  players must pass in order to complete the game objectives.
                  There are 2 game modes, namely "Easy" and "Hard". The intended
                  target audience is the "Everyone" category according to
                  the&nbsp;
                  <a
                    href="https://www.esrb.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Entertainment Software Rating Board
                  </a>
                  .
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;As a means of entertainment on the sidelines of
                        spare time.
                      </li>
                      <li>
                        &ensp;Forming an adventurous soul through the difficulty
                        levels of obstacles presented in the game.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <img
                      src="images/projects/Desktop/Dodge Master.svg"
                      className="w-50 h-50 d-block mx-auto"
                      alt="Project"
                      loading="lazy"
                    />
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="https://github.com/ProboKrishnacahya/dodge-master/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-github"></i>&emsp;
                    <strong>View Repository</strong>
                  </button>
                </a>
              </div>
            </div>

            <div className="card my-4" data-aos="fade-up">
              <h3 className="text-center">LemburanKu</h3>
              <hr />
              <div className="text-white-50">
                <i
                  className="bi bi-clock category-time"
                  data-bs-toggle="tooltip"
                  title="Project Execution Time"
                ></i>
                &emsp;Nov 2020 – Jan 2021
              </div>
              <div className="mt-3">
                <p>
                  <i
                    className="bi bi-info-circle"
                    data-bs-toggle="tooltip"
                    title="Project Description"
                  ></i>
                  <strong>&emsp;Project Description:</strong>
                  <br />
                  LemburanKu is a Desktop Application based on Android OS that
                  implemented Procedural Paradigm and created using Java. This
                  Finance application can be a solution for users to perform
                  calculations while storing Employee overtime data. Users can
                  create, update, view the details, and delete such data based
                  on the entered report information. The calculation rules used
                  in LemburanKu are based on applicable regulations from the
                  Ministry of Manpower of the Republic of Indonesia (KEP.
                  102/MEN/VI/2004 Kemnaker). The creation of LemburanKu is based
                  on supporting the Sustainable Development Goal on the 17th
                  goal about Partnership for the Goals.
                  <br />
                  <div className="mt-3">
                    <i
                      className="bi bi-stars"
                      data-bs-toggle="tooltip"
                      title="Benefits of Use"
                    ></i>
                    <strong>&emsp;Benefits of Use:</strong>
                    <br />
                    <ul className="benefits">
                      <li>
                        &ensp;Carry out the rules set by the Ministry of
                        Manpower of the Republic of Indonesia regarding the
                        payment of employee overtime wages from the company.
                      </li>
                      <li>
                        &ensp;The occurrence of justice for employees in
                        obtaining employee wages with nominal in accordance with
                        applicable regulations.
                      </li>
                      <li>
                        &ensp;Assist the company in the allocation of expenses
                        in paying employee overtime wages.
                      </li>
                    </ul>
                  </div>
                  <details>
                    <summary className="text-link my-1">
                      <strong>Documentation</strong>
                    </summary>
                    <img
                      src="images/projects/Desktop/LemburanKu Desktop.svg"
                      className="w-50 h-50 d-block mx-auto"
                      alt="Project"
                      loading="lazy"
                    />
                  </details>
                </p>
              </div>
              <br />
              <div className="d-grid justify-content-center">
                <a
                  href="http://bit.ly/LemburanKu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i>&emsp;
                    <strong>Visit Project</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
