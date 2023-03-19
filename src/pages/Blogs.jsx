import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";
import Header from "./../components/Header";
import SearchBar from "./../components/SearchBar";
import Footer from "./../components/Footer";

export default function Blogs() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Blogs";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  const postsReadMore = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
      alt: "Breast Cancer",
      title:
        "Klasifikasi Tingkat Keganasan Kanker Payudara Menggunakan Algoritma K-Nearest Neighbors",
      time: 11,
      category: "Machine Learning",
      date: "Jun 10th, 2022",
      url: "/blogs/klasifikasi-tingkat-keganasan-kanker-payudara-menggunakan-algoritma-k-nearest-neighbors",
    },
    // {
    //   id: 2,
    //   image:
    //     "https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
    //   alt: "ComfyPace",
    //   title:
    //     "Sistem Pendukung Metode Pembelajaran Self-Paced Learning bagi Mahasiswa di dalam Kelas Berbasis Web",
    //   time: "-",
    //   category: "-",
    //   date: "-",
    //   url: "#",
    // },
  ];

  const blogsReadMore = [];

  for (const postReadMore of postsReadMore) {
    blogsReadMore.push(
      <div className="postTarget card p-0 mb-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src={postReadMore.image}
              className="post-thumbnail img-fluid h-100"
              alt={postReadMore.alt}
              loading="lazy"
            />
          </div>
          <div className="col-md-8 vstack justify-content-between">
            <div className="card-body vstack gap-3 justify-content-between">
              <div>
                <h5 className="card-title mb-0">{postReadMore.title}</h5>
              </div>
              <div>
                <p className="card-text hstack flex-column flex-sm-row align-items-start text-truncate text-white-50 gap-md-5 gap-2">
                  <div>
                    <i
                      className="bi bi-stopwatch"
                      data-bs-toggle="tooltip"
                      title="Estimated Reading Time"
                    ></i>
                    &emsp;{postReadMore.time}&nbsp;minutes
                  </div>
                  <div>
                    <i
                      className="bi bi-calendar-date"
                      data-bs-toggle="tooltip"
                      title="Uploaded Date"
                    ></i>
                    &emsp;{postReadMore.date}
                  </div>
                  <div className="text-truncate">
                    <i
                      className="bi bi-tag"
                      data-bs-toggle="tooltip"
                      title="Category"
                    ></i>
                    &emsp;{postReadMore.category}
                  </div>
                </p>
              </div>
              <div>
                <a href={postReadMore.url} className="stretched-link">
                  <button className="btn btn-primary w-100">
                    <i className="bi bi-arrow-right"></i>&emsp;
                    <strong>Read More</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const postsComingSoon = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1610484826917-0f101a7bf7f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop",
      alt: "ComfyPace",
      title:
        "Sistem Pendukung Metode Pembelajaran Self-Paced Learning bagi Mahasiswa di dalam Kelas Berbasis Web",
      time: "-",
      category: "-",
      date: "-",
      url: "#",
    },
  ];

  const blogsComingSoon = [];

  for (const postComingSoon of postsComingSoon) {
    blogsComingSoon.push(
      <div className="postTarget card p-0 mb-4">
        <div className="row opacity-50">
          <div className="col-md-4">
            <img
              src={postComingSoon.image}
              className="post-thumbnail img-fluid h-100"
              alt={postComingSoon.alt}
              loading="lazy"
            />
          </div>
          <div className="col-md-8 vstack justify-content-between">
            <div className="card-body vstack gap-3 justify-content-between">
              <div>
                <h5 className="card-title mb-0">{postComingSoon.title}</h5>
              </div>
              <div>
                <p className="card-text hstack flex-column flex-sm-row align-items-start text-truncate text-white-50 gap-md-5 gap-2">
                  <div>
                    <i
                      className="bi bi-stopwatch"
                      data-bs-toggle="tooltip"
                      title="Estimated Reading Time"
                    ></i>
                    &emsp;{postComingSoon.time}&nbsp;minutes
                  </div>
                  <div>
                    <i
                      className="bi bi-calendar-date"
                      data-bs-toggle="tooltip"
                      title="Uploaded Date"
                    ></i>
                    &emsp;{postComingSoon.date}
                  </div>
                  <div className="text-truncate">
                    <i
                      className="bi bi-tag"
                      data-bs-toggle="tooltip"
                      title="Category"
                    ></i>
                    &emsp;{postComingSoon.category}
                  </div>
                </p>
              </div>
              <div>
                <a href={postComingSoon.url} className="stretched-link">
                  <button className="btn btn-primary w-100">
                    <i className="bi bi-hourglass-split"></i>&emsp;
                    <strong>Coming Soon</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blogs">
      <Header />
      <div className="container d-grid gap-5 my-5" data-aos="fade-up">
        <SearchBar />
        
        {/* Data tidak ditemukan */}
        <div className="postNotFound text-center">
          <img src="images/assets/no_result.svg" alt="No Result" />
          <h3>Oops.. No data found.</h3>
          <p className="fs-5">Please try again.</p>
        </div>

        {/* Data ditemukan */}
        <div>
        <div>{blogsReadMore}</div>
        <div>{blogsComingSoon}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
