import React from "react";
import { Container, Jumbotron, Row, Col, Image, Card } from "react-bootstrap";
import "../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import pic from "../../Image/pic1.jpg";
import pic2 from "../../Image/pic2.jpg";
import iconAnimation from "../../Image/iconAnimation.svg";
import iconDescription from "../../Image/iconDescription.svg";
import iconStep from "../../Image/iconStep.svg";
import study from "../../Image/study.svg";
import logo from "../../Image/WebLogo1.svg";

export const Home = () => (
  // ====JUMBOTRON====
  <div className="homeBody">
    <Jumbotron className="Jumbotron" fluid>
      <Container>
        <Row>
          <Col className="contentJumbo" md={{ span: 4, offset: 8 }}>
            <h1>Visualisasi ASD</h1>
            <p>Website ini merupakan Website yang membuat visualisasi dari algoritma dan struktur data yang ada pada mata kuliah Algoritma dan Struktur Data.</p>

            <a className="tombolLink" href="#/Stack">
              MULAI BELAJAR
            </a>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    {/* ISI KONTENT */}
    <Container className="Content">
      {/*==== CTA 1 ==== */}
      <div className="ctaCont">
        <Row className="justify-content-md-center ">
          <Col className="cta" lg="3">
            <Image className="ctaImage" src={iconAnimation} />
            <div>
              <h5>Animasi</h5>
              <p>Algoritma dan struktur data dijelaskan menggunakan animasi</p>
            </div>
          </Col>

          <Col className="cta" lg="3">
            <Image className="ctaImage" src={iconStep} />
            <div>
              <h5>Langkah-langkah</h5>
              <p>Animasi akan dilihatkan langkah demi langkah beserta pseudocode</p>
            </div>
          </Col>

          <Col className="cta" lg="3">
            <Image className="ctaImage" src={iconDescription} />
            <div>
              <h5>Penjelasan</h5>
              <p>Setiap langkah yang diambil diberikan penjelasan</p>
            </div>
          </Col>
        </Row>
      </div>

      {/* ===== CARDS ===== */}
      <Row className="justify-content-md-center cardCont" id="materi">
        <h2>Materi Struktur Data</h2>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="3" className="kartu">
          <Card classname="Card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={study} />
            <Card.Body>
              <Card.Title>Queue</Card.Title>
              <Card.Text>Mempelajari berbagai method dari struktur data queue beserta animasinya</Card.Text>
              <a className="btnPrimary" href="#/Queue">
                PELAJARI
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="3" className="kartu">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={study} />
            <Card.Body>
              <Card.Title>Stack</Card.Title>
              <Card.Text>Mempelajari berbagai method dari struktur data stack beserta animasinya</Card.Text>
              <a className="btnPrimary" href="#/Stack">
                PELAJARI
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="3" className="kartu">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={study} />
            <Card.Body>
              <Card.Title>Doubly Linked List</Card.Title>
              <Card.Text>Mempelajari berbagai method dari struktur data Doubly Linked List beserta animasinya</Card.Text>
              <a className="btnPrimary" href="#/DoublyLinkedList">
                PELAJARI
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-md-center cardCont" id="materi">
        <h2>Materi Algoritma Sorting</h2>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="3" className="kartu">
          <Card classname="Card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={study} />
            <Card.Body>
              <Card.Title>Insertion Sort</Card.Title>
              <Card.Text>Mempelajari cara kerja algoritma Insertion Sort melihat beserta animasinya</Card.Text>
              <a className="btnPrimary" href="#/InsertionSort">
                PELAJARI
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="3" className="kartu">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={study} />
            <Card.Body>
              <Card.Title>Quick Sort</Card.Title>
              <Card.Text>Mempelajari cara kerja algoritma Quick Sort beserta melihat animasinya</Card.Text>
              <a className="btnPrimary" href="#/QuickSort">
                PELAJARI
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" className="kartu">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={study} />
            <Card.Body>
              <Card.Title>Merge Sort</Card.Title>
              <Card.Text>Mempelajari cara kerja algoritma Merge Sort beserta melihat animasinya</Card.Text>
              <a className="btnPrimary" href="#/MergeSort">
                PELAJARI
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="justify-content-md-center cardCont" id="materi">
        <h2>Materi Algoritma Searching</h2>
      </Row>
      <Row className="justify-content-md-center">
        <Col lg="3" className="kartu">
          <Card classname="Card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={study} />
            <Card.Body>
              <Card.Title>Sequential Search</Card.Title>
              <Card.Text>Mempelajari cara kerja algoritma Sequential Search beserta animasinya</Card.Text>
              <a className="btnPrimary" href="#/SequentialSearch">
                PELAJARI
              </a>
            </Card.Body>
          </Card>
        </Col>

        <Col lg="3" className="kartu">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={study} />
            <Card.Body>
              <Card.Title>Binary Search</Card.Title>
              <Card.Text>Mempelajari cara kerja algoritma Binary Search beserta melihat animasinya</Card.Text>
              <a className="btnPrimary" href="#/BinarySearch">
                PELAJARI
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    {/* ==== CTA 2 ==== */}
    <div className="ctaQuotes">
      <Container>
        <Row className="justify-content-md-center ">
          <Col className="quotes" lg="4">
            <h4>“The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge.”</h4>
            <p>— Stephen Hawking</p>
          </Col>
        </Row>
      </Container>
    </div>

    <Container className="Content">
      {/* ====INFO PEMBUAT==== */}
      <Row className="justify-content-md-center">
        <Col className="infoContent" lg="9">
          <Row className="info">
            <Col md={{ span: 7, offset: 1 }}>
              <h2>HUH4902</h2>
              <p>Pada skripsi dengan kode HUH4902 akan dibuat sebuah media belajar tambahan untuk mata kuliah Algoritma dan Struktur Data (ASD). Media belajar ini akan menampilan animasi dari materi ASD yang sudah terpilih.</p>
              <hr />
            </Col>
          </Row>
          <Row className="author">
            <Col md={{ span: 7, offset: 1 }}>
              <Image src={pic} className="profile" roundedCircle></Image>
              <div>
                <span>Naufal Muhammad Irsyad</span>
                <p>Mahasiswa Teknik Informatika</p>
              </div>
            </Col>
          </Row>
          <Row className="author">
            <Col md={{ span: 7, offset: 1 }}>
              <Image src={pic2} className="profile" roundedCircle></Image>
              <div>
                <span>Husnul Hakim, S.Kom., M.T.</span>
                <p>Dosen Teknik Informatika</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

    {/* ===FOOTER=== */}
    <Container fluid>
      <Row className="justify-content-md-center footer">
        <Col className="footerContent" lg="2">
          <h5>Visualisasi ASD</h5>
          <p>Website ini adalah tugas skripsi Naufal Muhammad Irsyad</p>
        </Col>

        <Col className="footerContent" lg="2">
          <h5>Credit</h5>
          <a href="https://www.drawkit.io/product/education-free-vector-illustrations">Ilustrasi</a>
          <br />
          <a href="https://www.flaticon.com/">Ikon</a>
        </Col>

        <Col className="footerContent" lg="2">
          <h5>Kontak</h5>
          <a href="https://mail.google.com/mail">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </a>
        </Col>
      </Row>
    </Container>
  </div>
);
