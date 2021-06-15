import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import Rectangel from "../Reuseable/Rectangel";
import { useTransition, animated } from "react-spring";
import "../style.css";

// CLASS QUEUE SUDAH FUNGSIONAL TINGGAL TAMBAHIN DESKRIPSI

export default function PriorityQueue() {
  // Array box
  const [box, setBox] = useState([]);
  // Mencatat Index Keberapa
  let [index, setIndex] = useState(0);
  // Penampung Deskripsi
  const [desk, setDesk] = useState("");
  // Penampung Penjelasan
  const [penjelasan, setPenjelasan] = useState("");
  // PENAMPUNG INPUT
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // METHODE ENQUEUE
  const enqueue = () => {
    let newBox = box;
    newBox.push({ id: index, val: input, color: "white", h: "square", scale: 1 });
    newBox.sort((a, b) => {
      return a.val - b.val;
    });
    newBox.reverse();
    setDesk("ENQUEUE");
    setBox([...newBox]);
    setInput("");
    ubahPenjelasan("ENQUEUE", input);
    setIndex((index += 1));
    console.log(box);
  };

  // METHOD DEQUEUE
  const dequeue = async () => {
    if (box.length) {
      setDesk("DEQUEUE");
      ubahPenjelasan("DEQUEUE", box[0].val);
      let newBox = box.slice(1, box.length);
      setBox(newBox);
    } else {
      setDesk("DEQUEUE");
      ubahPenjelasan("DEQUEUE", null);
    }
    // setIndex((index -= 1));
  };

  const peek = () => {
    setDesk("PEEK");
    if (box.length) {
      ubahPenjelasan("PEEK", box[0].val);
    } else {
      ubahPenjelasan("PEEK", null);
    }
  };

  const empty = () => {
    setDesk("EMPTY");
    ubahPenjelasan("EMPTY", "");
  };

  const transition = useTransition(box, (item) => item.id, {
    from: { transform: "translateX(" + index * 100 + "px)", opacity: 1 },
    enter: (item) => [{ transform: "translateX(" + box.indexOf(item) * 60 + "px)", opacity: 1 }],
    update: (item) => [{ transform: "translateX(" + box.indexOf(item) * 60 + "px)", opacity: 1 }],
    leave: { transform: "translateX(-100px)", opacity: 0 },
    config: { tenstion: 500, friction: 20, mass: 1 },
  });

  // METHOD UNTUK MEBERIKAN PENJELASAN
  const ubahPenjelasan = (method, value) => {
    if (method === "DEQUEUE") {
      value == null ? setPenjelasan("Tidak ada yang bisa dikeluarkan dari antrian, karena tidak ada antrian kotak") : setPenjelasan("Kotak dengan nilai " + value + " Dikeluarkan Dari antrian");
    } else if (method === "ENQUEUE") {
      setPenjelasan("Kotak dengan nilai " + value + " dimasukan kedalam Array");
    } else if (method === "PEEK") {
      value == null ? setPenjelasan("Tidak ada tumpukan kotak, tidak ada nilai yang dikembalikan") : setPenjelasan("Pada antrian, kotak paling depan bernilai " + value);
    } else if (method === "EMPTY") {
      setPenjelasan(box.length <= 0 ? "Antrian Kosong" : "Ada antrian kotak");
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
            <div className="mainAnimationArea">
              {transition.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                  <Rectangel id={item.id} val={item.val} color={item.color} h={item.h} scale={item.scale} />
                </animated.div>
              ))}
            </div>
          </Col>
          {/* =========================================================== */}

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
                  <h6>Enqueue(int Elemen)</h6>
                  <p>Memasukan sebuah elemen kedalam antrian</p>
                </div>
                <div className="itemMethod">
                  <h6>Dequeue()</h6>
                  <p>Mengeluarkan elemen terdepan dari antrian</p>
                </div>
                <div className="itemMethod">
                  <h6>Peek()</h6>
                  <p>Melihat nilai dari elemen terdepan di sebuah antrian</p>
                </div>
                <div className="itemMethod">
                  <h6>isEmpty()</h6>
                  <p>Melakukan cek apakah antrian kosong atau tidak</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        {/* =========================================================== */}

        <Row>
          <Col>
            <Row>
              <Col className="mainInput">
                <InputGroup className="mb-2">
                  <FormControl placeholder="Input Data" aria-label="Recipient's username" aria-describedby="basic-addon2" value={input} onChange={handleInput} />
                  <InputGroup.Append>
                    <Button disabled={input === "" ? true : false} onClick={enqueue} variant="dark">
                      Enqueue
                    </Button>
                    <Button variant="outline-secondary" onClick={dequeue}>
                      Dequeue
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
              <h1>Priority Queue</h1>
              <p>
                Queue (antrian) adalah barisan elemen/data dimana proses memasukkan/menambah elemen/data dilakukan pada posisi belakang (rear) dan proses mengeluarkan/mengambil elemen/data dilakukan pada elemen/data di posisi depan (front)
                FIFO. Dalam Priority Queue, elemen dengan prioritas paling besar akan dilayani sebelum elemen dengan prioritas kecil.
              </p>
              {/* <div>
                <h5>Kompleksitas</h5>
                <p>Best Case</p>
              </div> */}
            </div>
          </Col>

          <Col className="nextMateri" lg="2">
            <h6>Materi struktur data lainnya</h6>
            <br />
            <Button href="#/Stack">Stack</Button>
            <Button href="#/DoublyLinkedList">Doubly LinkedList</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
