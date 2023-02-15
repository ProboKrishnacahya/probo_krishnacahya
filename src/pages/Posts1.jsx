import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "bootstrap";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

export default function Posts1() {
  useEffect(() => {
    //* Tab Page Title
    document.title =
      "Klasifikasi Tingkat Keganasan Kanker Payudara Menggunakan Algoritma K-Nearest Neighbors";

    //* Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  return (
    <div className="posts1">
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3 vh-100" id="side" data-aos="fade-up">
            <div className="hstack justify-content-between mb-2">
              <strong>Table of Contents</strong>
              <a
                className="text-info"
                data-bs-toggle="collapse"
                href="#daftar-isi"
                role="button"
                aria-expanded="true"
                aria-controls="daftar-isi"
              >
                <i className="bi bi-chevron-expand"></i>
              </a>
            </div>
            <div className="list-group">
              <div className="collapse show" id="daftar-isi">
                <a
                  className="list-group-item list-group-item-action text-truncate rounded-top"
                  href="#section1"
                >
                  Latar Belakang
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate"
                  href="#section2"
                >
                  Mengapa Menggunakan Klasifikasi K-Nearest Neighbors (KNN) dan
                  Apakah Hasilnya?
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate"
                  href="#section3"
                >
                  Kelebihan dan Kekurangan dari Klasifikasi K-Nearest Neighbors
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate"
                  href="#section4"
                >
                  Step 0 — Persiapan Data
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate"
                  href="#section5"
                >
                  Step 1 — Download Dataset dan Buat GitHub Repository
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate"
                  href="#section6"
                >
                  Step 2 — Import Library
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate"
                  href="#section7"
                >
                  Step 3 — Import Dataset
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate"
                  href="#section8"
                >
                  Step 4 — Mengkategorikan Data
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate"
                  href="#section9"
                >
                  Step 5 — Analisis Data Eksplorasi
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate"
                  href="#section10"
                >
                  Step 6 — Penerapan Modeling dan K-Nearest Neighbors
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate"
                  href="#section11"
                >
                  Step 7 — Evaluasi Model
                </a>
                <a
                  className="list-group-item list-group-item-action text-truncate rounded-bottom"
                  href="#section12"
                >
                  Konklusi
                </a>
              </div>

              <SideBar />
            </div>
          </div>
          <div className="col-sm-9" data-aos="fade-up">
            <div className="card">
              <div className="vstack gap-4 mb-5">
                <p className="card-text hstack flex-column flex-sm-row align-items-start text-truncate text-white-50 gap-md-5 gap-2">
                  <div>
                    <i
                      className="bi bi-stopwatch"
                      data-bs-toggle="tooltip"
                      title="Estimated Reading Time"
                    ></i>
                    &emsp;11&nbsp;minutes
                  </div>
                  <div>
                    <i
                      className="bi bi-calendar-date"
                      data-bs-toggle="tooltip"
                      title="Uploaded Date"
                    ></i>
                    &emsp;Jun 10th, 2022
                  </div>
                  <div className="text-truncate">
                    <i
                      className="bi bi-tag"
                      data-bs-toggle="tooltip"
                      title="Category"
                    ></i>
                    &emsp;Machine Learning
                  </div>
                </p>
              </div>
              <h3>
                Klasifikasi Tingkat Keganasan Kanker Payudara Menggunakan
                Algoritma K-Nearest Neighbors
              </h3>
              <figure className="py-3">
                <img
                  src="https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
                  className="rounded d-block mx-auto shadow-sm mb-1"
                  loading="lazy"
                  alt="Breast Cancer"
                />
                <figcaption className="text-white-50 text-center pt-1">
                  Ilustrasi Pemeriksaan Kanker Payudara oleh&nbsp;
                  <a
                    href="https://unsplash.com/@nci"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    National Cancer Institute
                  </a>
                  &nbsp;
                </figcaption>
              </figure>
              <div id="section1">
                <h5>Latar Belakang</h5>
                <p>
                  Kanker merupakan salah satu masalah kesehatan terbesar di
                  dunia. Secara global, rasio kasus kanker payudara meningkat
                  dari hari ke hari dan menjadi penyebab kematian nomor dua.
                  Pada tahun 2020, wanita yang didiagnosis dengan kanker
                  payudara adalah 2,3 juta dan kematian terkait adalah 685.000.
                  Kanker payudara adalah kanker paling umum di dunia, karena ada
                  7,8 juta wanita hidup yang didiagnosis menderita kanker
                  payudara pada akhir tahun 2020. Dibandingkan dengan kanker
                  lainnya, ada lebih banyak tahun hidup yang disesuaikan dengan
                  disabilitas yang hilang oleh wanita ke payudara.
                </p>
                <p>
                  Global Burden of Cancer Study (Globocan) dari World Health
                  Organization (WHO) mencatat bahwa total kasus kanker di
                  Indonesia pada 2020 mencapai 396.914 kasus dan total kematian
                  sebesar 234.511 kasus. Penyebab utamanya yaitu karena kondisi
                  lingkungan yang tercemar bahan karsinogen, seperti rokok,
                  daging olahan, dsb. Sebagai upaya dalam meminimalisir
                  kekeliruan diagnosis kanker payudara yang dapat membahayakan
                  penderita, kami terinspirasi untuk membuat sebuah proyek yaitu
                  “Klasifikasi Tingkat Keganasan Kanker Payudara Menggunakan
                  Algoritma K-Nearest Neighbors.”
                </p>
              </div>

              <div id="section2">
                <h5>
                  Mengapa Menggunakan Klasifikasi K-Nearest Neighbors (KNN) dan
                  Apakah Hasilnya?
                </h5>
                <p>
                  Sebelum masuk pada klasifikasi menggunakan K-Nearest
                  Neighbors, mari kita mengenal terlebih dahulu apa itu Machine
                  Learning dan Supervised Learning. Machine Learning adalah
                  cabang dari Artificial Intelligence, dimana disiplin ilmu ini
                  meliputi perencanaan serta pengembangan algoritma yang
                  memungkinkan komputer untuk mengembangkan perilaku berdasarkan
                  data empiris. Pada Machine Learning, terdapat algoritma
                  Supervised Learning, Unsupervised Learning, dan Reinforcement
                  Learning. Supervised Learning sendiri merupakan suatu model
                  Machine Learning yang mempelajari data dengan label atau
                  target dimana evaluasi model tersebut akan berdasarkan target
                  yang telah ditentukan. Algoritma ini terdiri dari dua hal,
                  yaitu regresi dan klasifikasi. Sasaran dari klasifikasi adalah
                  untuk memprediksi label kelas dari data yang telah ditentukan.
                  Untuk kebutuhan mengklasifikasikan dataset kali ini, kita
                  dapat menggunakan salah satu algoritma Supervised Learning,
                  yaitu K-Nearest Neighbors.
                </p>
                <p>
                  Lebih lanjut, K-Nearest Neighbors adalah algoritma yang dapat
                  digunakan dalam klasifikasi data dengan memilih kelas paling
                  umum dari K data terdekat dari input itu. Detail proses dari
                  klasifikasi menggunakan algoritma ini adalah sebagai berikut:
                  <ol>
                    <li>Tentukan nilai dari K.</li>
                    <li>
                      Hitung jarak titik data yang tidak diketahui kelasnya dari
                      semua data.
                    </li>
                    <li>
                      Pilih K observasi pada data training terdekat dengan titik
                      data yang tidak diketahui kelasnya.
                    </li>
                    <li>
                      Prediksi kelas dari data yang tidak diketahui menggunakan
                      kelas mayoritas dari K observasi terdekat tersebut.
                    </li>
                  </ol>
                  <figure className="py-3">
                    <img
                      src="http://res.cloudinary.com/dyd911kmh/image/upload/f_auto,q_auto:best/v1531424125/KNN_final_a1mrv9.png"
                      className="rounded d-block mx-auto shadow-sm mb-1"
                      loading="lazy"
                      alt="Ilustrasi Cara Kerja Algoritma KNN"
                    />
                    <figcaption className="text-white-50 text-center pt-1">
                      Ilustrasi Cara Kerja Algoritma KNN oleh&nbsp;
                      <a
                        href="https://www.datacamp.com/tutorial/k-nearest-neighbor-classification-scikit-learn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-info"
                      >
                        DataCamp
                      </a>
                      &nbsp;
                    </figcaption>
                  </figure>
                  Dalam proyek ini, kami menggunakan algoritma K-Nearest
                  Neighbors Classification karena output yang dihasilkan yakni
                  dengan mengkategorikan dalam dua label yaitu Benign (jinak)
                  atau Malignant (ganas).
                </p>
              </div>

              <div id="section3">
                <h5>
                  Kelebihan dan Kekurangan dari Klasifikasi K-Nearest Neighbors
                </h5>
                <p>
                  Kelebihan:
                  <ol>
                    <li>Efektif untuk mengolah data dalam jumlah banyak.</li>
                    <li>
                      Performa tergolong bagus untuk kebutuhan klasifikasi
                      maupun regresi.
                    </li>
                    <li>Tahan terhadap data training yang riuh.</li>
                    <li>
                      Intuitif dan cukup sederhana untuk dipahami dan
                      diimplementasikan.
                    </li>
                  </ol>
                  Kekurangan:
                  <ol>
                    <li>
                      Memakan waktu komputasi yang tinggi jika data training
                      besar karena jarak masing-masing data diukur pada setiap
                      data test.
                    </li>
                    <li>
                      Tidak diketahui perhitungan jarak yang paling cocok
                      terhadap dataset tertentu.
                    </li>
                    <li>Sensitif dengan ciri yang tidak relevan.</li>
                  </ol>
                </p>
              </div>

              <div id="section4">
                <h5>Step 0 — Persiapan Data</h5>
                <p>
                  Dataset yang akan kami gunakan yakni&nbsp;"
                  <a
                    href="https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data?resource=download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    Breast Cancer Wisconsin (Diagnostic) Data Set
                  </a>
                  "&nbsp;oleh UCI Machine Learning yang tersedia di&nbsp;
                  <a
                    href="https://www.kaggle.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    Kaggle
                  </a>
                  . Analisis ini bertujuan untuk mengamati fitur mana yang
                  paling membantu dalam memprediksi kanker ganas atau jinak dan
                  untuk melihat tren umum yang dapat membantu kita dalam
                  pemilihan model dan pemilihan parameter. Untuk mencapai ini,
                  kami menggunakan metode Klasifikasi K-Nearest Neighbors agar
                  sesuai dengan fungsi yang dapat menangani kumpulan data yang
                  bersifat variabel kategoris. Beberapa variabel yang akan
                  memengaruhi prediksi tersebut yaitu:
                  <ol>
                    <li>
                      Diagnosis (M = malignant / ganas , B = benign / jinak)
                    </li>
                    <li>
                      Radius (rata-rata jarak dari pusat ke titik pada keliling)
                    </li>
                    <li>Texture (standar deviasi nilai grey-scale)</li>
                    <li>Perimeter (keliling)</li>
                    <li>Area (luas)</li>
                    <li>Smoothness (variasi lokal dalam panjang radius)</li>
                    <li>Compactness (perimeter² / area — 1.0)</li>
                    <li>Concavity (kecekungan)</li>
                    <li>Concave points (jumlah bagian cekung)</li>
                    <li>Symmetry (simetri)</li>
                    <li>Fractal dimension (“coastline approximation” — 1)</li>
                  </ol>
                  Rata-rata, standard error dan nilai terbesar dari
                  variabel-variabel tersebut dihitung untuk setiap gambar,
                  menghasilkan 30 variabel. Misalnya, variabel ke-3 adalah
                  Radius Rata-rata, variabel ke-13 adalah standard error dari
                  Radius, dan variabel ke-23 adalah Radius terbesar.
                </p>
              </div>

              <div id="section5">
                <h5>Step 1 — Download Dataset dan Buat GitHub Repository</h5>
                <p>
                  Buatlah sebuah repository baru di Github untuk mengupload
                  dataset yang ada. Disini kami akan membuat sebuah repositori
                  baru bernama dataset. Upload file "breast-cancer.csv" ke
                  repositori GitHub yang telah di download tadi.
                </p>
                <figure className="py-3">
                  <img
                    src="https://miro.medium.com/max/1400/1*BQOTyvE577SqJvbT1Bv_Mg.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Membuat repositori GitHub baru dengan nama “dataset”"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Membuat repositori GitHub baru dengan nama “dataset”
                  </figcaption>
                </figure>
                <p>
                  Klik file bernama "breast-cancer.csv", kemudian tekan raw yang
                  berada pada di sebelah kanan atas untuk mendapatkan link.
                  Setelah di-redirect pada page raw tadi, copy link&nbsp;
                  <a
                    href="https://raw.githubusercontent.com/nathanaelabel/Dataset/main/breast-cancer.csv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    Raw
                  </a>
                  &nbsp;nya.
                </p>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/3082/1*9pmztY3KIaXm-oNkbmHhMw.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Raw File dari “breast-cancer.csv”"
                  />
                  <img
                    src="https://miro.medium.com/max/3650/1*8nyNLsJfUO2UjH4HBea6_g.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Raw File dari “breast-cancer.csv”"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Raw File dari “breast-cancer.csv”
                  </figcaption>
                </figure>
              </div>

              <div id="section6">
                <h5>Step 2 — Import Library</h5>
                <p>
                  Disini kami akan menggunakan Google Colab untuk mengolah
                  dataset ini. Pertama-tama, kita akan mengimpor semua library
                  yang diperlukan dan mengimpor dataset kita ke Google Colab
                  ini.
                </p>
                <div className="bg-dark rounded p-3 mb-3  ">
                  <code>
                    # Data preprocessing & EDA
                    <br />
                    import pandas as pd
                    <br />
                    import numpy as np
                    <br />
                    import matplotlib.pyplot as plt
                    <br />
                    import seaborn as sns
                    <br />
                    from sklearn.preprocessing import LabelEncoder
                    <br />
                    <br />
                    # Classification
                    <br />
                    from sklearn.model_selection import train_test_split
                    <br />
                    from sklearn.neighbors import KNeighborsClassifier
                    <br />
                    <br />
                    # Model evaluation
                    <br />
                    from sklearn import metrics
                    <br />
                    from sklearn.metrics import confusion_matrix
                  </code>
                </div>
              </div>

              <div id="section7">
                <h5>Step 3 — Import Dataset</h5>
                <p>
                  Paste link raw yang sudah di copy tadi
                  “https://raw.githubusercontent.com/nathanaelabel/Dataset/main/breast-cancer.csv”
                  untuk mengimpor datasetnya. Kemudian kita juga dapat
                  menggunakan metode head() pandas untuk memeriksa kumpulan
                  data.
                </p>
                <div className="bg-dark rounded p-3">
                  <code>
                    # Read data
                    <br />
                    df =
                    pd.read_csv("https://raw.githubusercontent.com/nathanaelabel/Dataset/main/breast-cancer.csv")
                    <br />
                    <br />
                    # Glimpse of the data
                    <br />
                    df.head()
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1050/1*sGDHvgW6BAnfetxjUPchQw.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil df.head()"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil df.head()
                  </figcaption>
                </figure>
                <p>
                  Kemudian, kita akan memeriksa seluruh tipe data pada dataset
                  dan kemungkinan nilai yang hilang.
                </p>
                <div className="bg-dark rounded p-3">
                  <code>
                    # Check data types & missing values
                    <br />
                    df.info()
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1050/1*triToM0Vs6oenO4yTEE0uw.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil df.info()"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil df.info()
                  </figcaption>
                </figure>
                <p>
                  Berdasarkan pengamatan diatas, terdapat satu kolom yang kurang
                  jelas yakni “Unnamed: 32”, dimana setiap barisnya merupakan
                  NaN atau missing value, maka dari itu kita harus menghapusnya
                  dengan melakukan dropna. Setelah itu kita bisa melakukan
                  df.info() kembali untuk memeriksa seluruh tipe data pada
                  dataset apakah sudah bersih atau belum.
                </p>
                <div className="bg-dark rounded p-3">
                  <code>
                    df.dropna(axis=1, inplace=True)
                    <br />
                    df.info()
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1050/1*4_-8kCvwthXYnqX-nSBhPQ.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil df.info() setelah kolom “Unnamed: 32” di drop"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil df.info() setelah kolom “Unnamed: 32” di drop
                  </figcaption>
                </figure>
                <p>
                  Setelah itu berdasarkan tabel di atas, dapat dilihat sudah
                  bahwa tidak ada variabel yang memiliki missing value, dan juga
                  seluruh tipe data sudah benar. Kita hanya perlu mengubah
                  target variable “diagnosis” ke dalam bentuk 0/1.
                  <br />
                  Data used:
                  <br />
                  Target variable: diagnosis
                  <br />
                  Predictors:
                  <ul>
                    <li>radius_mean</li>
                    <li>texture_mean</li>
                    <li>perimeter_mean</li>
                    <li>area_mean</li>
                    <li>smoothness_mean</li>
                    <li>compactness_mean</li>
                    <li>concavity_mean</li>
                    <li>concave_points_mean</li>
                    <li>symmetry_mean</li>
                    <li>fractal_dimension_mean</li>
                  </ul>
                  Untuk pembahasan artikel ini, kita fokus ke rata-rata (mean)
                  dari masing-masing variabel saja agar memudahkan penjelasan
                  metode-metode yang ada.
                </p>
                <div className="bg-dark rounded p-3 mb-3">
                  <code>
                    # Variable selection
                    <br />
                    df = df[df.columns[1:12]] # Untuk melihat nama kolom di
                    tabel pada index ke-1 s.d. 12
                  </code>
                </div>
              </div>

              <div id="section8">
                <h5>Step 4 — Mengkategorikan Data</h5>
                <p>
                  Data kategoris adalah variabel yang berisi nilai label
                  daripada nilai numerik. Jumlah nilai yang mungkin sering kali
                  terbatas pada himpunan tetap. Misalnya, pengguna biasanya
                  dideskripsikan berdasarkan negara, jenis kelamin, kelompok
                  usia, dll.
                </p>
                <p>
                  Disini kami akan menggunakan Label Encoder untuk melabeli data
                  kategorikal. Label Encoder adalah bagian dari SciKit Learn
                  Library dengan Python dan digunakan untuk mengonversi data
                  kategorikal, atau data teks, menjadi angka, yang dapat
                  dipahami dengan lebih baik oleh model prediktif kami.
                </p>
                <div className="bg-dark rounded p-3">
                  <code>
                    # Data encoding for target variable
                    <br />
                    encoder = LabelEncoder()
                    <br />
                    df.diagnosis = encoder.fit_transform(df.diagnosis)
                    <br />
                    <br />
                    # Glimpse of the data
                    <br />
                    df.head()
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1050/1*it7Q-rjA16es466KPsEz4Q.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil dari df.head() setelah variabel “diagnosis” di encode"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil dari df.head() setelah variabel “diagnosis” di encode
                  </figcaption>
                </figure>
                <p>
                  Interpretasinya variabel yang di encoder akan membaca bahwa
                  kolom “diagnosis” adalah tipe object, dan akan meng-”encode”
                  ‘B’ menjadi 0, dan ‘M’ menjadi 1.
                </p>
                <div className="bg-dark rounded p-3 mb-3">
                  <code>
                    # Check the encoded class
                    <br />
                    class_label = encoder.classes_
                    <br />
                    class_label
                    <br />
                    Output: array(['B', 'M'], dtype=object)
                  </code>
                </div>
                <p>
                  Kita juga harus melakukan pengecekan apakah ada nilai duplikat
                  dari data yang akan digunakan, dan jika ada maka harus
                  dibuang/diambil salah satu saja. Namun dari hasil pengecekan
                  dibawah ini, tidak ditemukan adanya data duplikat.
                </p>
                <div className="bg-dark rounded p-3">
                  <code>
                    # Check duplicated values
                    <br />
                    df[df.duplicated()]
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1050/1*fU0gK-ykIrsvpuJ3M7eQcg.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil df.duplicated()"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil df.duplicated()
                  </figcaption>
                </figure>
              </div>

              <div id="section9">
                <h5>Step 5 — Analisis Data Eksplorasi</h5>
                <p>
                  Dalam step ini akan terbagi lagi menjadi dua langkah yakni
                  Univariate dan Multivariate.
                </p>
                <h6>5.1. Univariate</h6>
                <p>5.1.1. Descriptive Statistics</p>
                <p>Load tabel dari dataset.</p>
                <div className="bg-dark rounded p-3 mb-3">
                  <code>df.describe()</code>
                </div>
                <p>5.1.2. Data Distribution</p>
                <p>5.1.1.1. Categorical Data</p>
                <p>Membuat pie chart untuk variabel “diagnosis”.</p>
                <div className="bg-dark rounded p-3">
                  <code>
                    diagnosis, diagnosis_count = np.unique(df.diagnosis,
                    return_counts = True)
                    <br />
                    <br />
                    # Pie chart of `diagnosis`
                    <br />
                    plt.figure(figsize=(5, 5), dpi=80, facecolor='w',
                    edgecolor='k')
                    <br />
                    plt.pie(diagnosis_count, labels = ['Benign','Malignant'],
                    autopct="%1.2f%%")
                    <br />
                    plt.title("Diagnosis Distribution", fontweight='bold');
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/587/1*GEBLn1ylo9yXOOGhrsLt8A.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Pie chart distribusi diagnosis Benign dan Malignant"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Pie chart distribusi diagnosis Benign dan Malignant
                  </figcaption>
                </figure>
                <p>
                  Karena persebaran atau distribusi dari data cukup seimbang
                  (63:37), maka pada artikel kali ini, tidak akan dilakukan
                  penyeimbangan data menggunakan oversampling maupun
                  undersampling.
                </p>
                <p>5.1.1.2. Continuous Data</p>
                <p>Membuat histogram pada data kontinu.</p>
                <div className="bg-dark rounded p-3">
                  <code>
                    # Combine all Histograms
                    <br />
                    predictors_name = df.columns[1:]
                    <br />
                    sns.set(rc=&#123;'axes.facecolor':'#E1F5FE',
                    'figure.facecolor':'white'&#125;)
                    <br />
                    plt.figure(figsize = [15,6])
                    <br />
                    for i in range(len(predictors_name)):
                    <br />
                    plt.subplot(2, 5, i+1)
                    <br />
                    sns.histplot(df, x = predictors_name[i])
                    <br />
                    plt.tight_layout()
                    <br />
                    plt.show()
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1050/1*ctx6v8-ArxwF5m_jruKvVw.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil dari seluruh histogram data kontinu"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil dari seluruh histogram data kontinu
                  </figcaption>
                </figure>
                <p>
                  Berdasarkan Histogram diatas, mayoritas data tidak
                  berdistribusi normal, melainkan skewed to the right. Artinya,
                  mayoritas data memiliki outlier atas. Selanjutnya, kita coba
                  untuk deteksi outlier tersebut.
                </p>
                <p>5.1.3. Outlier Detection</p>
                <p>
                  Pendeteksian outlier di sini akan dilakukan sebelum outlier
                  tersebut dibuang.
                </p>
                <div className="bg-dark rounded p-3">
                  <code>
                    # Combine all Boxplot
                    <br />
                    plt.figure(figsize = [15,6])
                    <br />
                    for i in range(len(predictors_name)):
                    <br />
                    plt.subplot(2, 5, i+1)
                    <br />
                    sns.boxplot(x = df[predictors_name[i]])
                    <br />
                    plt.tight_layout()
                    <br />
                    plt.show()
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1050/1*tHYgUIzmX9pVFQEWKLlpnQ.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil dari seluruh Boxplot"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil dari seluruh Boxplot
                  </figcaption>
                </figure>
                <p>
                  Dari boxplot-boxplot tersebut, cukup tervalidasi bahwa ada
                  banyak outlier di area kanan, sesuai dengan hipotesis awal
                  bahwa distribusi data nya cenderung skewed to the right.
                </p>
                <div className="bg-dark rounded p-3">
                  <code>
                    # Outlier removal
                    <br />
                    for i in range(len(predictors_name)):
                    <br />
                    q1 = np.quantile(df[predictors_name[i]], 0.25)
                    <br />
                    q3 = np.quantile(df[predictors_name[i]], 0.75)
                    <br />
                    iqr = q3-q1
                    <br />
                    upper_bound = q3 + (1.5*iqr)
                    <br />
                    lower_bound = q1 - (1.5*iqr)
                    <br />
                    df = df[df[predictors_name[i]] &lt;= upper_bound]
                    <br />
                    df = df[df[predictors_name[i]] &gt;= lower_bound]
                    <br />
                    df.reset_index(inplace=True, drop=True)
                    <br />
                    df
                  </code>
                </div>
                <img
                  src="https://miro.medium.com/max/1050/1*oq7q38kkK92iYI02xi0KhA.png"
                  className="rounded d-block mx-auto shadow-sm my-3"
                  loading="lazy"
                  alt="Outlier removal"
                />
                <div className="bg-dark rounded p-3">
                  <code>
                    # Combine all Boxplot
                    <br />
                    plt.figure(figsize = [15,6])
                    <br />
                    for i in range(len(predictors_name)):
                    <br />
                    plt.subplot(2, 5, i+1)
                    <br />
                    sns.boxplot(x = df[predictors_name[i]])
                    <br />
                    plt.tight_layout()
                    <br />
                    plt.show()
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1050/1*8k5_Kj8JCRJtPmcIzkSK-w.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil seluruh Boxplot setelah pembuangan outlier"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil seluruh Boxplot setelah pembuangan outlier
                  </figcaption>
                </figure>
                <div className="bg-dark rounded p-3">
                  <code>
                    # Combine all Histograms
                    <br />
                    plt.figure(figsize = [15,6])
                    <br />
                    for i in range(len(predictors_name)):
                    <br />
                    plt.subplot(2, 5, i+1)
                    <br />
                    sns.histplot(df, x = predictors_name[i])
                    <br />
                    plt.tight_layout()
                    <br />
                    plt.show()
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1050/1*eWCej6ORWzrRMEdOaCQICQ.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil seluruh histogram setelah pembuangan outlier"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil seluruh histogram setelah pembuangan outlier
                  </figcaption>
                </figure>
                <p>
                  Dapat dilihat setelah adanya pembuangan outlier (pencilan),
                  maka distribusi data tiap variabel semakin mendekati normal,
                  dan dapat dilihat pula dari boxplot yang baru, banyak outlier
                  yang sudah terbuang.
                </p>
              </div>
              <h6>5.2. Multivariate</h6>
              <p>5.2.1. Correlation Plot</p>
              <p>Melakukan korelasi untuk melihat hubungan antar data.</p>
              <div className="bg-dark rounded p-3">
                <code>df.corr()</code>
              </div>
              <figure className="py-3 d-grid gap-1">
                <img
                  src="https://miro.medium.com/max/1050/1*50g2pRHNQ1jXvLCHQB2kVw.png"
                  className="rounded d-block mx-auto shadow-sm mb-1"
                  loading="lazy"
                  alt="Hasil df.corr()"
                />
                <figcaption className="text-white-50 text-center pt-1">
                  Hasil df.corr()
                </figcaption>
              </figure>
              <p>
                Membuat heatmap dari korelasi di atas agar lebih mudah
                dianalisis.
              </p>
              <div className="bg-dark rounded p-3">
                <code>
                  plt.figure(figsize = [12,12])
                  <br />
                  sns.heatmap(df.corr(), annot = True, vmin = -1, vmax = 1, cmap
                  = "RdBu");
                </code>
              </div>
              <figure className="py-3 d-grid gap-1">
                <img
                  src="https://miro.medium.com/max/1050/1*VRpJ1smw9SYncQEqxJuu7A.png"
                  className="rounded d-block mx-auto shadow-sm mb-1"
                  loading="lazy"
                  alt="Hasil dari heatmap"
                />
                <figcaption className="text-white-50 text-center pt-1">
                  Hasil dari heatmap
                </figcaption>
              </figure>
              <p>
                Pada pemodelan secara umum, korelasi antar variabel prediktor
                diusahakan serendah mungkin. Sedangkan korelasi antar variabel
                prediktor dan variabel target diusahakan setinggi mungkin. Maka,
                melihat heatmap di atas, terdapat korelasi sangat tinggi (1)
                antara radius_mean dan perimeter_mean, sehingga salah satu
                variabel sebaiknya dibuang. Untuk menentukan variabel mana yang
                perlu di drop, dilihat korelasi antar masing-masing variabel
                dengan variabel diagnosis (variabel target). Dari heatmap,
                diketahui korelasi antara radius_mean dan diagnosis sebesar
                0.69, sedangkan korelasi antar perimeter_mean dan diagnosis
                sebesar 0.7. Karena korelasi antara radius_mean & diagnosis
                lebih kecil dibandingkan perimeter_mean & diagnosis, maka
                radius_mean sebaiknya dibuang.
              </p>
              <p>
                Variabel perimeter mean juga terlihat sangat berhubungan dengan
                area_mean, dan area_mean lebih berkorelasi dengan variabel
                target yaitu diagnosis. Oleh sebab itu, kami memutuskan untuk
                melakukan drop variabel perimeter_mean juga.
              </p>
              <div className="bg-dark rounded p-3">
                <code>
                  df.drop("radius_mean", axis = 1, inplace = True)
                  <br />
                  df.drop("perimeter_mean", axis = 1, inplace = True)
                  <br />
                  plt.figure(figsize = [12,12])
                  <br />
                  sns.heatmap(df.corr(), annot = True, vmin = -1, vmax = 1, cmap
                  = "RdBu");
                </code>
              </div>
              <figure className="py-3 d-grid gap-1">
                <img
                  src="https://miro.medium.com/max/1050/1*V27fmFcbUiqbS-Kn4Azi5A.png"
                  className="rounded d-block mx-auto shadow-sm mb-1"
                  loading="lazy"
                  alt="Hasil heatmap setelah variabel “radius_mean” dan variabel “perimeter_mean” dibuang"
                />
                <figcaption className="text-white-50 text-center pt-1">
                  Hasil heatmap setelah variabel “radius_mean” dan variabel
                  “perimeter_mean” dibuang
                </figcaption>
              </figure>
              <p>5.2.2. Pair Plot</p>
              <div className="bg-dark rounded p-3">
                <code>sns.pairplot(df[df.columns[1:]]);</code>
              </div>
              <figure className="py-3 d-grid gap-1">
                <img
                  src="https://miro.medium.com/max/2381/1*qhB3l0vQXPR8p7I08YY12A.png"
                  className="rounded d-block mx-auto shadow-sm mb-1"
                  loading="lazy"
                  alt="Hasil dari pairplot"
                />
                <img
                  src="https://miro.medium.com/max/2126/1*IR1ikp1t9Jmi3gz8gc8KfQ.png"
                  className="rounded d-block mx-auto shadow-sm mb-1"
                  loading="lazy"
                  alt="Hasil dari pairplot"
                />
                <figcaption className="text-white-50 text-center pt-1">
                  Hasil dari pairplot
                </figcaption>
              </figure>
              <div id="section10">
                <h5>Step 6 — Penerapan Modeling dan K-Nearest Neighbors</h5>
                <h6>6.1. Modeling</h6>
                <p>6.1.1. Pemilihan variabel prediktor dan variabel target</p>
                <div className="bg-dark rounded p-3 mb-3">
                  <code>
                    Y = df[["diagnosis"]]
                    <br />X = df[df.columns[1:]]
                  </code>
                </div>
                <p>6.1.2. Train-Test Splitting</p>
                <div className="bg-dark rounded p-3 mb-3">
                  <code>
                    X_train, X_test, Y_train, Y_test = train_test_split(X, Y,
                    test_size=0.2, random_state=0)
                  </code>
                </div>
                <h6>6.2. K-Nearest Neighbors</h6>
                <p>
                  Penentuan nilai K dalam algoritma KNN sebenarnya bergantung
                  kepada penulis. Namun, untuk menentukan nilai K yang paling
                  optimal, bisa juga dilakukan menggunakan perbandingan antara
                  nilai K dengan nilai akurasi atau error rate. Untuk artikel
                  kali ini, kami membandingkan nilai K dengan akurasi untuk
                  menentukan nilai K yang optimal (memiliki akurasi tertinggi).
                </p>
                <div className="bg-dark rounded p-3">
                  <code>
                    # Find optimal K-value
                    <br />
                    ## Menentukan list kosong untuk simpan accuracy per K-value
                    nya
                    <br />
                    acc = []
                    <br />
                    <br />
                    ## Looping dari 1 s.d. 39
                    <br />
                    for i in range(1,40):
                    <br />
                    <br />
                    # Fit KNN
                    <br />
                    neigh = KNeighborsClassifier(n_neighbors = i).fit(X_train,
                    Y_train)
                    <br />
                    <br />
                    # Predict untuk test data
                    <br />
                    yhat = neigh.predict(X_test)
                    <br />
                    <br />
                    # Hitung akurasi
                    <br />
                    accuracy = metrics.accuracy_score(Y_test, yhat)
                    <br />
                    acc.append(accuracy)
                    <br />
                    <br />
                    # Menentukan ukuran plotnya
                    <br />
                    plt.figure(figsize=(10,6))
                    <br />
                    <br />
                    # Plot x = range(1,40), y = akurasinya
                    <br />
                    plt.plot(range(1,40),acc,color = 'blue',linestyle='dashed',
                    <br />
                    marker='o',markerfacecolor='red', markersize=10)
                    <br />
                    plt.title('accuracy vs. K Value')
                    <br />
                    plt.xlabel('K-value')
                    <br />
                    plt.ylabel('Accuracy')
                    <br />
                    print("Maximum accuracy:",max(acc),"at K
                    =",acc.index(max(acc))+1);
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1050/1*KGjEmSAj1EJYEVAYd1DHbQ.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil K-12 adalah akurasi tertinggi"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil K-12 adalah akurasi tertinggi
                  </figcaption>
                </figure>
                <p>
                  Berdasarkan plot diatas, dapat disimpulkan bahwa akurasi
                  tertinggi, didapat oleh nilai K sebesar 12, dengan nilai
                  akurasi sebesar 93.48%. Oleh karena itu, penulis memutuskan
                  untuk menggunakan K-12 dalam membuat model untuk prediksi test
                  data.
                </p>
              </div>

              <div id="section11">
                <h5>Step 7 — Evaluasi Model</h5>
                <div className="bg-dark rounded p-3 mb-3">
                  <code>
                    # Fit model with the best K-value based on accuracy
                    <br />
                    knn_model = KNeighborsClassifier(n_neighbors=12)
                    <br />
                    knn_model.fit(X_train, Y_train)
                    <br />
                    <br />
                    # Prediction
                    <br />
                    prediction = knn_model.predict(X_test)
                    <br />
                    <br />
                    # Accuracy of the model
                    <br />
                    acc = metrics.accuracy_score(Y_test, prediction)
                    <br />
                    print(f"Akurasi dari model KNN dengan K = 11 adalah&nbsp;
                    &#123;round(acc * 100, 2)&#125;%")
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/773/1*6ZqG6RJGa_sF8pJ65gLy5w.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil output akurasi"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil output akurasi
                  </figcaption>
                </figure>
                <p>
                  Nilai akurasi dari prediksi kanker payudara menggunakan
                  algoritma KNN dengan nilai K=12, adalah sebesar 93.48%.
                  Berdasarkan akurasi tersebut, model dapat digolongkan sebagai
                  model yang baik karena memiliki akurasi diatas 80%. Bahkan,
                  mendekati 95%.
                </p>
                <div className="bg-dark rounded p-3 mb-3">
                  <code>
                    # Confusion matrix
                    <br />
                    confusion_matrix = metrics.confusion_matrix(Y_test,
                    prediction)
                    <br />
                    knn_model.fit(X_train, Y_train)
                    <br />
                    confusion_matrix
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/273/1*RBiWdhW9ty1JWGQ_ZRZYNg.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil confusion matrix"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil confusion matrix
                  </figcaption>
                </figure>
                <div className="bg-dark rounded p-3 mb-3">
                  <code>
                    # Plot heatmap of confusion matrix
                    <br />
                    sns.heatmap(confusion_matrix, annot=True, cmap = "RdBu")
                    <br />
                    plt.title("Confusion Matrix of Breast Cancer Classification
                    using KNN");
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/950/1*C435Os3MZJBjmgjU2-SYgg.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil heatmap"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil heatmap
                  </figcaption>
                </figure>
                <div className="bg-dark rounded p-3 mb-3">
                  <code>
                    # Full annotation of confusion matrix visualization
                    <br />
                    ## Nama group
                    <br />
                    group_names = ["True Negative (Benign)", "False Positive",
                    "False Negative", "True Positive (Malignant)"]
                    <br />
                    <br />
                    ## Jumlah per group
                    <br />
                    group_counts = ["&#123;0:0.0f&#125;".format(value) for value
                    in confusion_matrix.flatten()]
                    <br />
                    <br />
                    ## Siapkan label untuk per kotak di heatmap confusion matrix
                    nya
                    <br />
                    labels = [f"&#123;group_name&#125; \n
                    &#123;group_count&#125;" for group_name, group_count in
                    zip(group_names, group_counts)]
                    <br />
                    labels = np.asarray(labels).reshape(2,2)
                    <br />
                    labels
                    <br />
                    <br />
                    ## Plot heatmap
                    <br />
                    plt.figure(figsize=(8,6))
                    <br />
                    sns.heatmap(confusion_matrix, annot = labels, fmt='', cmap =
                    "RdBu")
                    <br />
                    plt.xlabel("Prediction")
                    <br />
                    plt.ylabel("Actual Class")
                    <br />
                    plt.title("Confusion Matrix of Breast Cancer Classification
                    using KNN");
                  </code>
                </div>
                <figure className="py-3 d-grid gap-1">
                  <img
                    src="https://miro.medium.com/max/1166/1*8TtK_FjWYTOrrMfabFo0cw.png"
                    className="rounded d-block mx-auto shadow-sm mb-1"
                    loading="lazy"
                    alt="Hasil heatmap confusion matrix"
                  />
                  <figcaption className="text-white-50 text-center pt-1">
                    Hasil heatmap confusion matrix
                  </figcaption>
                </figure>
                <p>
                  Lebih lanjut, untuk detail hasil prediksinya: dari 70
                  penderita kanker payudara kategori Benign, 69 diantaranya
                  terprediksi sebagai penderita Benign dan 1 sisanya terprediksi
                  sebagai penderita Malignant. Sedangkan, dari 22 penderita
                  kanker payudara kategori Malignant, 17 diantaranya benar
                  terprediksi sebagai penderita Malignant, dan 5 sisanya salah
                  terprediksi sebagai penderita Benign.
                </p>
                <p>
                  Pada Confusion Matrix diatas, digunakan istilah Negative untuk
                  penderita Benign dan Positive untuk penderita Malignant,
                  meskipun sebenarnya tidak ada kelas yang “positif” maupun
                  “negatif”. Penggunaan istilah tersebut, didasarkan pada
                  keadaan umum dimana 0 biasanya dianggap sebagai kelas negatif,
                  dan 1 dianggap sebagai kelas positif.
                </p>
              </div>

              <div id="section12">
                <h5>Konklusi</h5>
                <p>
                  Maka, dari model dan analisa yang telah dilakukan, bisa
                  dikembangkan suatu ide untuk membuat aplikasi yang bisa
                  menerima data pasien dan mengeluarkan output berupa diagnosis
                  kondisi pasien dan dikembangkan dengan terus melatih Model
                  agar dapat lebih akurat dalam melakukan diagnosis.
                </p>
              </div>

              <h5>Referensi:</h5>
              <ul>
                <li>
                  Goel, V. (2018, October 12). Building a Simple Machine
                  Learning Model on Breast Cancer Data. Medium.&nbsp;
                  <a
                    href="https://towardsdatascience.com/building-a-simple-machine-learning-model-on-breast-cancer-data-eca4b3b99fa3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    https://towardsdatascience.com/building-a-simple-machine-learning-model-on-breast-cancer-data-eca4b3b99fa3
                  </a>
                </li>
                <li>
                  Rizaty, M. A. (2021, June 29). Ini Jenis Kanker Yang paling
                  Banyak Diderita Penduduk Indonesia. Databoks.&nbsp;
                  <a
                    href="https://databoks.katadata.co.id/datapublish/2021/06/29/ini-jenis-kanker-yang-paling-banyak-diderita-penduduk-indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    https://databoks.katadata.co.id/datapublish/2021/06/29/ini-jenis-kanker-yang-paling-banyak-diderita-penduduk-indonesia
                  </a>
                </li>
                <li>
                  Advantages and Disadvantages of different Classification
                  Models. (2020, September 28). GeeksforGeeks.&nbsp;
                  <a
                    href="https://www.geeksforgeeks.org/advantages-and-disadvantages-of-different-classification-models/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    https://www.geeksforgeeks.org/advantages-and-disadvantages-of-different-classification-models/
                  </a>
                </li>
                <li>
                  Learning Basic Concept. (n.d.). Teknik Informatika
                  UNIKOM.&nbsp;
                  <a
                    href="https://repository.unikom.ac.id/67323/1/CV%20-%2011%20Supervised%20Learning.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    https://repository.unikom.ac.id/67323/1/CV%20-%2011%20Supervised%20Learning.pdf
                  </a>
                </li>
              </ul>
              <h5>Resources:</h5>
              <ul className="mb-0">
                <li>
                  <a
                    href="https://colab.research.google.com/drive/1V31XLxbqGf_4YIxiE_6iaS_trZIr4YHb?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    Notebook Python Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data?resource=download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-info"
                  >
                    Dataset
                  </a>
                </li>
              </ul>
              <hr />
              <p className="mb-0">
                Written by:&nbsp;
                <a
                  href="http://bit.ly/nathanaelabel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-info"
                >
                  Nathanael Abel Arianto
                </a>
                ,&nbsp;
                <NavLink to="/" className="text-info">
                  Probo Krishnacahya
                </NavLink>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
