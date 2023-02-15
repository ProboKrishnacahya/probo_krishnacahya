import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function Contacts() {
  useEffect(() => {
    //* Tab Page Title
    document.title = "Contacts";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  // * Contacts
  const accounts = [
    {
      id: 1,
      url: "mailto:probo.krishnacahya@gmail.com",
      image: "images/contacts/gmail.svg",
      title: "Gmail",
      text: "probo.krishnacahya@gmail.com",
    },
    {
      id: 2,
      url: "https://www.linkedin.com/in/probo-krishnacahya/",
      image: "images/contacts/linkedin.svg",
      title: "LinkedIn",
      text: "Probo Krishnacahya",
    },
    {
      id: 3,
      url: "https://line.me/ti/p/~krshn_",
      image: "images/contacts/line.svg",
      title: "LINE",
      text: "krshn_",
    },
    {
      id: 4,
      url: "https://discord.com/users/542619130428391434",
      image: "images/contacts/discord.svg",
      title: "Discord",
      text: "ProboKrishnacahya #0912",
    },
    {
      id: 5,
      url: "https://www.instagram.com/probo_krishnacahya/",
      image: "images/contacts/instagram.svg",
      title: "Instagram",
      text: "probo_krishnacahya",
    },
    {
      id: 6,
      url: "https://t.me/cahyaa02",
      image: "images/contacts/telegram.svg",
      title: "Telegram",
      text: "cahyaa02",
    },
    {
      id: 7,
      url: "https://github.com/ProboKrishnacahya",
      image: "images/contacts/github.svg",
      title: "GitHub",
      text: "ProboKrishnacahya",
    },
  ];

  const connects = [];

  for (const account of accounts) {
    connects.push(
      <div className="kontak p-4 mb-3">
        <div className="d-flex">
          <span className="text-footer social-media">
            <a href={account.url} target="_blank" rel="noopener noreferrer">
              <div key={account.id}>
                <img
                  src={account.image}
                  loading="lazy"
                  alt="Connect"
                  data-bs-toggle="tooltip"
                  title={account.title}
                />
                &emsp;{account.text}
              </div>
            </a>
          </span>
        </div>
      </div>
    );
  }

  const [count, setCount] = React.useState(0);

  return (
    <div className="contacts">
      <Header />
      <div className="container">
        <section id="above-the-fold" data-aos="fade-up">
          <h4 className="text-center section-title">
            Contact Form&ensp;&#129309;
          </h4>
          <br />
          <p className="mb-3 text-center">
            For any business inquiries and/or other subjects, please feel free
            to contact me. Thank you and have a nice day.
          </p>
          <form
            action="https://getform.io/f/34a49fc6-a2ba-4dc3-a433-2043da0bf9c9"
            method="POST"
            enctype="multipart/form-data"
            className="vstack gap-3"
          >
            <div className="card pb-4 vstack gap-3">
              <div>
                <i className="bi bi-envelope"></i>&emsp;
                <label for="formControlInputEmail" className="form-label">
                  Email Address&#42;
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control border border-2"
                  id="formControlInputEmail"
                  placeholder="johndoe@email.com"
                  required
                />
              </div>
              <div>
                <i className="bi bi-person"></i>&emsp;
                <label for="formControlInputFullName" className="form-label">
                  Full Name&#42;
                </label>
                <input
                  type="text"
                  name="full-name"
                  className="form-control border border-2"
                  id="formControlInputFullName"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <div className="hstack justify-content-between">
                  <div>
                    <i className="bi bi-upload"></i>&emsp;
                    <label for="formFileMultiple" className="form-label">
                      Upload File
                    </label>
                  </div>
                  <div>
                    <a
                      className="text-info"
                      data-bs-toggle="collapse"
                      href="#upload-file"
                      role="button"
                      aria-expanded="false"
                      aria-controls="upload-file"
                    >
                      <i className="bi bi-info-circle"></i>
                    </a>
                  </div>
                </div>
                <input
                  type="file"
                  name="upload-file"
                  className="form-control border border-2"
                  id="formFileMultiple"
                  multiple
                />
                <div id="uploadFileHelp" className="form-text">
                  <div
                    className="collapse alert alert-primary pt-3 pb-0"
                    id="upload-file"
                  >
                    <ul>
                      <li>Maximum file size: 5 MB.</li>
                      <li>
                        Allowed file type:
                        <ul>
                          <li>
                            Documents (.pdf, .doc, .docx, .ppt, .pptx, .xls,
                            .xlsx .key, .pages, .numbers, .psd, .ai, .eps .epub,
                            .mobi, .azw, .tar, .zip, .rar, .7z).
                          </li>
                          <li>
                            Media (.png, .jpg, .jpeg, .tiff, .tif, .gif, .webp,
                            .scm .mp3, .mp4, .flv, .avi, .webm, .mov).
                          </li>
                          <li>
                            Text (.html, .htm, .xml, .sketch, .txt, .rtf).
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <label for="formControlURL" className="form-label">
                  Uniform Resource Locator (URL)
                </label>
                <input
                  type="url"
                  name="url"
                  className="form-control border border-2"
                  id="formControlURL"
                  placeholder="https://url.com/"
                  aria-describedby="form-addon"
                />
              </div>
              <div>
                <i className="bi bi-calendar-date"></i>&emsp;
                <label for="formControlInputDate" className="form-label">
                  Destined Date&#42;
                </label>
                <input
                  type="date"
                  name="date"
                  className="form-control border border-2"
                  id="formControlDatePicker"
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <div>
                <i className="bi bi-quote"></i>&emsp;
                <label for="formControlTextarea" className="form-label">
                  Message&#42;
                </label>
                <textarea
                  name="message"
                  className="form-control border border-2"
                  id="formControlTextarea"
                  placeholder="Insert your message here..."
                  rows={5}
                  onChange={(e) => setCount(e.target.value.length)}
                  required
                ></textarea>
                <div className="form-text text-end">{count}</div>
              </div>
              <small className="text-white-50 mt-2">
                &#42;&#41;&nbsp;Required to fill.
              </small>
            </div>
            <button className="btn btn-primary w-100" type="submit">
              <i className="bi bi-send"></i>&emsp;
              <strong>Submit</strong>
            </button>
          </form>
        </section>

        <div className="mb-5" data-aos="fade-up">
          <h4 className="text-center section-title">
            Would Be Glad to Connect&ensp;&#128518;
          </h4>
          <br />
          {connects}
        </div>
      </div>
      <Footer />
    </div>
  );
}
