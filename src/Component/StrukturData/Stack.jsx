import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import Rectangel from "../Reuseable/Rectangel";
import { useTransition, animated } from "react-spring";
import "../style.css";

export default function Stack() {
  // Array box
  const [arrayBox, setArrayBox] = useState([]);
  // Mencatat Index Keberapa
  let [index, setIndex] = useState(0);
  // Penampung Deskripsi
  const [desk, setDesk] = useState("");
  // Penampung Penjelasan
  const [penjelasan, setPenjelasan] = useState("");
  // PENAMPUNG INPUT
  const [input, setInput] = useState("");
  // METHOD UNTUK HANDLING INPUT
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // Method Push
  const pushBox = () => {
    let newArr = [...arrayBox];
    newArr.push({ id: index, val: input, color: "white", h: "square", scale: 1 });
    setIndex((index += 1));
    setDesk("PUSH");
    ubahPenjelasan("PUSH", input);
    setInput("");
    setArrayBox(newArr);
  };

  // Method Pop
  const popBox = () => {
    let newArr = [...arrayBox];
    setDesk("POP");
    if (newArr.length) {
      ubahPenjelasan("POP", arrayBox[arrayBox.length - 1].val);
      newArr.pop();
      setArrayBox(newArr);
    } else {
      ubahPenjelasan("POP", null);
    }
  };

  // METHOD PEEK
  const peek = () => {
    setDesk("PEEK");
    if (arrayBox.length) {
      ubahPenjelasan("PEEK", arrayBox[arrayBox.length - 1].val);
    } else {
      ubahPenjelasan("PEEK", null);
    }
  };

  // METHOD ISEMPTY
  const empty = () => {
    setDesk("EMPTY");
    ubahPenjelasan("EMPTY", "");
  };

  // PENGATURAN TRANSISI ANIMASI KOTAK
  const transition = useTransition(arrayBox, (item) => item.id, {
    from: { transform: "translate3d(0%, " + index * -100 + "px,0)", opacity: 0 },
    enter: (item) => [{ transform: "translate3d(0%," + arrayBox.indexOf(item) * -60 + "px,0)", opacity: 1 }],
    leave: { transform: "translate3d(0%," + index * -60 + "px,0)", opacity: 0 },
  });

  // METHOD UNTUK MEBERIKAN PENJELASAN
  const ubahPenjelasan = (method, value) => {
    if (method === "POP") {
      value == null ? setPenjelasan("Tidak ada yang bisa dikeluarkan dari tumpukan, karena tidak ada tumpukan kotak") : setPenjelasan("Kotak dengan nilai " + value + " dikeluarkan dari tumpukan");
    } else if (method === "PUSH") {
      setPenjelasan("Kotak dengan nilai " + value + " dimasukan kedalam Array");
    } else if (method === "PEEK") {
      value == null ? setPenjelasan("Tidak ada tumpukan kotak, tidak ada nilai yang dikembalikan") : setPenjelasan("Kotak paling atas dari tumpukan bernilai " + value);
    } else if ((method = "EMPTY")) {
      setPenjelasan(arrayBox.length <= 0 ? "Tumpukan Kosong" : "Ada tumpukan kotak");
    } else {
      setPenjelasan("");
    }
  };

  return (
    <div>
      <Container>
        <Row className="mainAnimationContainer">
          {/* ============== TEMPAT ANIMASI DI TAMPILKAN ============== */}
          <Col className="mainAnimation" lg="9">
            <div className="mainAnimationAreaStack">
              {transition.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                  <Rectangel id={item.id} val={item.val} color={item.color} h={item.h} scale={item.scale} />
                </animated.div>
              ))}
            </div>
          </Col>

          {/* ============== TEMPAT DESKRIPSI DAN PSEUDOCODE ==============*/}
          <Col className="mainDescription" lg="3">
            <Row>
              <Col className="mainExplanation">
                <div>
                  <span>{desk}</span>
                  <p>{penjelasan}</p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="mainPseudocode">
                <div className="itemMethod">
                  <h6>Push(int Elemen)</h6>
                  <p>Memasukan sebuah elemen kedalam tumpukan</p>
                </div>
                <div className="itemMethod">
                  <h6>Pop()</h6>
                  <p>Mengeluarkan elemen teratas dari tumpukan</p>
                </div>
                <div className="itemMethod">
                  <h6>Peek()</h6>
                  <p>Melihat nilai dari elemen teratas di sebuah antrian</p>
                </div>
                <div className="itemMethod">
                  <h6>isEmpty()</h6>
                  <p>Melakukan cek apakah tumpukan kosong atau tidak</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <Col className="mainInput">
                <InputGroup className="mb-2">
                  <FormControl placeholder="Input Data" aria-label="Recipient's username" aria-describedby="basic-addon2" value={input} onChange={handleInput} />
                  <InputGroup.Append>
                    <Button onClick={pushBox} variant="dark">
                      Push
                    </Button>
                    <Button variant="outline-secondary" onClick={popBox}>
                      Pop
                    </Button>
                    <Button variant="outline-secondary" onClick={peek}>
                      Peek
                    </Button>
                    <Button variant="outline-secondary" onClick={empty}>
                      isEmpty
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mainKeterangan">
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#272727" h={30} scale={1} />
                <p> Kotak Lama</p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#fff" h={30} scale={1} />
                <p> Kotak Baru</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mainTeoriArea">
          <Col className="mainTeori" lg="9">
            <div className="materiTeori">
              <h1>Stack</h1>
              <p>
                stack adalah salah satu struktur data yang digunakan untuk menyimpan sekumpulan objek ataupun variabel. Sesuai namanya yaitu stack, tidak heran apabila objek yang terkumpul terlihat seperti tumpukan. Nah, karakteristik stack
                sendiri bersifat LIFO (last in first out). Artinya, data yang terakhir masuk merupakan data yang akan keluar terlebih dahulu. Seperti halnya tumpukan pada umumnya, misalnya tumpukan buku, yang di atas atau yang terakhir
                masuk harus dikeluarkan terlebih dahulu untuk mendapatkan buku yang berada di tumpukan bawah.
              </p>
            </div>
          </Col>

          <Col className="nextMateri" lg="2">
            <h6>Materi struktur data lainnya</h6>
            <br />
            <Button href="/Queue">Queue</Button>
            <Button href="/DoublyLinkedList">Doubly LinkedList</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
