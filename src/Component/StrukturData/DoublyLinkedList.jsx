import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { useTransition, animated } from "react-spring";
import Node from "../Reuseable/Node";
import "../style.css";

// CLASS DOUBLY LINKED LIST YANG SUDAH FIX (SUDAH BERFUNGSI SEMUA KECUALI TAMPILAN BELUM SESUAI)
export default function DoublyLinkedList() {
  // State untuk items (box)
  const [items, setItems] = useState([]);
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

  // METHOD ADD AFTER
  const AddEnd = () => {
    let newItems = [...items];
    if (newItems.length <= 0) {
      newItems.push({ id: index, val: input, prev: null, next: null });
    } else {
      newItems.push({ id: index, val: input, prev: "ADA", next: null });
      newItems[newItems.length - 2].next = "ADA";
    }
    setInput("");
    setDesk("ADD END");
    ubahPenjelasan("ADDEND", input);
    setIndex((index += 1));
    setItems(newItems);
  };

  // METHOD ADD AFTER
  const AddFront = () => {
    let newItems = items;
    if (newItems.length <= 0) {
      newItems.push({ id: index, val: input, prev: null, next: null });
    } else {
      newItems.splice(0, 0, { id: index, val: input, prev: null, next: "ADA" });
      newItems[1].prev = "ADA";
    }
    setInput("");
    setDesk("ADD FRONT");
    ubahPenjelasan("ADDFRONT", input);
    setIndex((index += 1));
    setItems([...newItems]);
  };

  // METHOD ADD AFTER
  const AddAfter = () => {
    let inputArr = input.split(",");
    let newItems = [...items];

    if (inputArr[0] === "") {
      alert("ISI INPUT TERLEBIH DAHULU");
    } else if (newItems.length > parseInt(inputArr[0])) {
      newItems.splice(parseInt(inputArr[0]), 0, { id: index, val: inputArr[1], prev: "ADA", next: "ADA" });
    } else {
      newItems.splice(parseInt(inputArr[0]), 0, { id: index, val: inputArr[1], prev: "ADA", next: null });
      newItems[parseInt(inputArr[0]) - 1].next = "ADA";
    }
    setInput("");
    setDesk("ADD AFTER");
    ubahPenjelasan("ADDAFTER", input);
    setIndex((index += 1));
    setItems(newItems);
  };

  // METHOD DELETE END
  const DeleteEnd = () => {
    let newItems = [...items];
    newItems.pop();
    if (newItems.length) {
      newItems[newItems.length - 1].next = null;
    }
    setInput("");
    setDesk("DELETE END");
    ubahPenjelasan("DELETEEND", null);
    setItems(newItems);
  };

  // METHOD DELETE FIRST
  const DeleteFirst = () => {
    let newItems = [...items];
    newItems.splice(0, 1);
    if (newItems.length > 0) {
      newItems[0].prev = null;
    }
    setInput("");
    setDesk("DELETE FIRST");
    ubahPenjelasan("DELETEFIRST", null);
    setItems(newItems);
  };

  // METHOD DELETE AFTER
  const DeleteAfter = () => {
    let newItems = [...items];
    if (input === "") {
      alert("ISI INPUT TERLEBIH DAHULU");
    } else if (newItems.length === 1) {
      newItems.pop();
    } else if (newItems.length < parseInt(input) + 1) {
      newItems.splice(parseInt(input) - 1, 1);
      newItems[newItems.length - 1].next = null;
    } else if (parseInt(input) === 1 && newItems.length > parseInt(input)) {
      newItems.splice(parseInt(input) - 1, 1);
      newItems[0].prev = null;
    }
    setInput("");
    setDesk("DELETE AFTER");
    ubahPenjelasan("DELETEAFTER", null);
    setItems(newItems);
  };

  //  Pengaturan Transisi
  const transition = useTransition(items, (item) => item.id, {
    from: { transform: "translateY(-100px)", opacity: 0 },
    enter: { transform: "translateY(0px)", opacity: 1 },
    update: { transform: "translateY(0px)", opacity: 1 },
    leave: { transform: "translateY(100px)", opacity: 0 },
    config: { tenstion: 500, friction: 20, mass: 2 },
  });

  // METHOD UNTUK MEBERIKAN PENJELASAN
  const ubahPenjelasan = (method, value) => {
    if (method === "ADDFRONT") {
      setPenjelasan("Menambah node dengan nilai " + value + " melalui head");
    } else if (method === "ADDEND") {
      setPenjelasan("Menambah node dengan nilai " + value + " melalui tail");
    } else if (method === "ADDAFTER") {
      setPenjelasan("Menyisipkan node dengan nilai " + value + " melalui node lain");
    } else if (method === "DELETEEND") {
      setPenjelasan("Menghapus node terakhir");
    } else if (method === "DELETEFIRST") {
      setPenjelasan("Menghapus node terdepan atau head");
    } else if (method === "DELETEAFTER") {
      setPenjelasan("Menghapus node melalui node lain");
    }
  };

  return (
    <div>
      <Container>
        <Row className="mainAnimationContainer">
          {/* ============== TEMPAT ANIMASI DI TAMPILKAN ============== */}
          <Col className="mainAnimationDLL" lg="9">
            {transition.map(({ item, props, key }) => (
              <animated.div className="contNode" key={key} style={props}>
                <h6>{items.indexOf(item) === 0 ? "Head " : ""}</h6>
                <h6>{items.indexOf(item) === items.length - 1 ? "Tail" : ""}</h6>
                <Node id={item.id} val={item.val} prev={item.prev} next={item.next} />
              </animated.div>
            ))}
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
                  <h6>Add First(int new_data)</h6>
                  <p>Menambahkan node melalui Head</p>
                </div>

                <div className="itemMethod">
                  <h6>Add End(int new_data)</h6>
                  <p>Menambahkan node melalui tail</p>
                </div>

                <div className="itemMethod">
                  <h6>Add After(node PrevNode,int new_data)</h6>
                  <p>Menyisipkan node diantara node lainnya </p>
                </div>

                <div className="itemMethod">
                  <h6>Delete First()</h6>
                  <p>Menghapus node melalui head</p>
                </div>

                <div className="itemMethod">
                  <h6>Delete End()</h6>
                  <p>Menghapus node melalui tail</p>
                </div>

                <div className="itemMethod">
                  <h6>Delete After(node PrevNode)</h6>
                  <p>Menghapus node melalui node lain</p>
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
                    <Button onClick={AddEnd} variant="dark">
                      addEnd
                    </Button>
                    <Button onClick={AddFront} variant="dark">
                      addFront
                    </Button>
                    <Button onClick={AddAfter} variant="dark">
                      addAfter
                    </Button>
                    <Button onClick={DeleteEnd} variant="dark">
                      deleteEnd
                    </Button>
                    <Button onClick={DeleteFirst} variant="dark">
                      deleteFirst
                    </Button>
                    <Button onClick={DeleteAfter} variant="dark">
                      deleteAfter
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mainTeoriArea">
          <Col className="mainTeori" lg="9">
            <div className="materiTeoriPendek">
              <h1>Doubly Linked List</h1>
              <p>Double Linked List adalah linked list dengan node yang memiliki data dan dua buah reference link (biasanya disebut next dan prev) yang menunjuk ke node sebelum dan node sesudahnya.</p>
              <br />
              <h3>Node</h3>
              <div className="materiNode">
                <Node id="" val="Node" prev="Prev" next="Next" />
              </div>
            </div>
          </Col>

          <Col className="nextMateri" lg="2">
            <h6>Materi struktur data lainnya</h6>
            <br />
            <Button href="/Stack">Stack</Button>
            <Button href="/Queue">Queue</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
