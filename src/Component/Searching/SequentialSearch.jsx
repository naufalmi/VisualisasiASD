import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { useTransition, animated } from "react-spring";
import Rectangel from "../Reuseable/Rectangel";
import "../style.css";

// CLASS SEQUENTIAL SEARCH YANG SUDAH FIX (SUDAH BERFUNGSI SEMUA KECUALI TAMPILAN BELUM SESUAI)
// KURANG FUNGSIN SPLIT

export default function SequentialSearch() {
  // Sebuah object yang menyimpan warna
  const color = { default: "rgb(255, 192, 55)", identify: "rgb(173, 173, 173)", itIs: "#3FB1B5" };
  // STATE UNTUK RECTANGEL CLASS
  const [itemz, setItemz] = useState([]);
  // DISABLE BUTTON
  const [disable, setDisable] = useState(true);
  const [disable2, setDisable2] = useState(true);
  // ===================================================
  //  -------- BAGIAN PENJELASAN & PSEUDOCODE ----------
  // ===================================================

  // PRO BUTTON
  const [pro, setPro] = useState(true);
  // Penampung Deskripsi
  const [desk, setDesk] = useState("");
  // Penampung Penjelasan
  const [penjelasan, setPenjelasan] = useState("");

  // Pseudocode biasa
  const [pseudocode, setPseudocode] = useState([
    { id: 0, text: "Dari kotak ke 1 hingga kotak ke n", color: color.identify, colorText: "black", scale: 1 },
    { id: 1, text: "Cek nilai apakah sesuai dengan target?", color: color.identify, colorText: "black", scale: 1 },
    { id: 2, text: "Belum sesuai, cek kotak selanjutnya", color: color.identify, colorText: "black", scale: 1 },
    { id: 3, text: "Sudah sesuai, akhiri pencarian", color: color.identify, colorText: "black", scale: 1 },
  ]);

  //>>>>>> state Pseudocode Anak IT
  const [pseudocodeIT, setPseudocodeIT] = useState([
    { id: 0, text: "For i = 1 to array length", color: color.identify, colorText: "black", scale: 1 },
    { id: 1, text: "___ if array[i] = target", color: color.identify, colorText: "black", scale: 1 },
    { id: 2, text: "______  return true", color: color.identify, colorText: "black", scale: 1 },
    { id: 3, text: "return false", color: color.identify, colorText: "black", scale: 1 },
  ]);

  // METHOD MERUBAH PSEUDOCODE
  const highLightPseudocode = (arr, idx) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Membuat pseudocode default terlebih dahulu

        for (let i = 0; i < pseudocode.length; i++) {
          arr[i].color = color.identify;
          arr[i].colorText = "black";
          arr[i].scale = 1;
        }
        // Membuat highlight
        arr[idx].color = "#5a9cff";
        arr[idx].colorText = "white";
        arr[idx].scale = 1.4;
        resolve();
      }, 500);
    });
  };

  // >>>>>>> method penentu highlight pseudocode
  const highLightPseudocodeIT = (arr, idx1) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // * pseudocode default terlebih dahulu
        for (let i = 0; i < arr.length; i++) {
          arr[i].color = color.identify;
          arr[i].colorText = "black";
        }
        // * Membuat highlight
        arr[idx1].color = "#5a9cff";
        arr[idx1].colorText = "white";
        resolve();
      }, 500);
    });
  };

  // METHOD UNTUK MEBERIKAN PENJELASAN
  const ubahPenjelasan = (method, boxVal, target) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (method === "CEK") {
          setDesk("CEK");
          setPenjelasan("Apakah kotak dengan nilai " + boxVal + " sama dengan target (" + target + ")");
        } else if (method === "NEXT") {
          setDesk("NEXT");
          setPenjelasan("Melanjut kan pencarian ke kotak depannya");
        } else if (method === "KETEMU") {
          setDesk("KETEMU");
          setPenjelasan("Nilai target (" + boxVal + ") ditemukan dalam array");
        } else {
          setDesk("TIDAK KETEMU");
          setPenjelasan("Tidak ada kotak yang bernilai sesuai target ");
        }
        resolve();
      }, 500);
    });
  };

  // TRANSISI PSEUDOCODE
  const transitionPseudo = useTransition(pseudocode, (item) => item.id, {
    from: { opacity: 1, background: "white", color: "black", scale: 0 },
    enter: (item) => [{ opacity: 1, background: item.color, color: item.colorText, scale: item.scale }],
    update: (item) => [{ background: item.color, color: item.colorText, scale: item.scale, opacity: 1 }],
  });
  // >>>>>>>> pengaturan transisi pseudocode IT
  const transitionPseudoIT = useTransition(pseudocodeIT, (item) => item.id, {
    from: { opacity: 1, background: "white", color: "black", scale: 0 },
    enter: (item) => [{ opacity: 1, background: item.color, color: item.colorText, scale: item.scale }],
    update: (item) => [{ background: item.color, color: item.colorText, scale: item.scale, opacity: 1 }],
  });

  // =============================================================================

  // PENAMPUNG INPUT
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  //  PENGATURAN TRANSISI
  const transition = useTransition(itemz, (item) => item.id, {
    from: { transform: "translateX(0px)", opacity: 0 },
    enter: (item) => [{ transform: "translateX(" + itemz.indexOf(item) * 60 + "px)", opacity: 1 }],
    leave: { opacity: 0 },
  });

  // Method Merubah warna 1 kotak
  const changeSatu = (arr, idx, color, scale) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        arr[idx].color = color;
        arr[idx].scale = scale;
        resolve();
      }, 500);
    });
  };

  // Method pengubah warna
  const changeColor = (array, startIndex, endIndex, color, scale) => {
    let i;
    for (i = startIndex; i <= endIndex; i++) {
      array[i].color = color;
      array[i].scale = scale;
    }
  };

  // MENGEMBALIKAN WARNA MENJADI DEFAULT
  const resetArray = () => {
    let newArray = [...itemz];
    let newPseudo = pseudocode;
    let newPseudoIT = pseudocodeIT;
    changeColor(newArray, 0, newArray.length - 1, color.default, 1);
    for (let i = 0; i < newPseudo.length; i++) {
      newPseudo[i].color = color.default;
      newPseudo[i].colorText = "black";
      newPseudo[i].scale = 1;
    }
    for (let i = 0; i < newPseudoIT.length; i++) {
      newPseudoIT[i].color = color.default;
      newPseudoIT[i].colorText = "black";
      newPseudoIT[i].scale = 1;
    }
    setDisable(false);
    setDesk("");
    setPenjelasan("");
    setPseudocode(newPseudo);
    setPseudocodeIT(newPseudoIT);
    setItemz(newArray);
    setInput("");
  };

  // INPUT ARRAY
  const split = () => {
    setDisable(false);
    setDisable2(false);
    setInput("");
    let tempInput = input.split(",");
    let newArray = [];
    for (let i = 0; i < tempInput.length; i++) {
      newArray.push({ id: i, val: parseInt(tempInput[i]), color: color.default, h: 50, scale: 1 });
    }
    console.log(newArray);
    setItemz(newArray);
  };

  // METHOD SEQ SEARCH UNTUK CLASS RECTANGEL
  const sequentialSearch = async () => {
    if (input === "") {
      alert("MASUKAN ANGKA YANG INGIN DICARI");
    } else {
      setDisable(true);
      setInput("");
      let newPseudo = pseudocode;
      let newPseudocodeIT = pseudocodeIT;

      // Ubah highlight pseudocode
      await highLightPseudocode(newPseudo, 0);
      setPseudocode(newPseudo);
      // ============================
      for (let i = 0; i < itemz.length; i++) {
        let newArr = [...itemz];
        // Ubah highlight pseudocode IT LOOP
        await highLightPseudocodeIT(newPseudocodeIT, 0);
        setPseudocodeIT(newPseudocodeIT);
        // ============================

        // ubah highlight pseudocode  CEK
        await highLightPseudocode(newPseudo, 1);
        await highLightPseudocodeIT(newPseudocodeIT, 1);
        setPseudocodeIT(newPseudocodeIT);
        await ubahPenjelasan("CEK", newArr[i].val, input);
        setPseudocode(newPseudo);
        // ============================
        if (newArr[i].val === parseInt(input)) {
          // Ubah highlight pseudocode dan penjelasan  KETEMU
          await highLightPseudocodeIT(newPseudocodeIT, 2);
          setPseudocodeIT(newPseudocodeIT);
          await highLightPseudocode(newPseudo, 3);
          setPseudocode(newPseudo);
          await ubahPenjelasan("KETEMU", newArr[i].val, "");
          // ============================

          // ubah warna
          await changeSatu(newArr, i, color.itIs, 1.2);
          return setItemz(newArr);
          // ==============
        } else {
          // Ubah highlight pseudocode NEXT
          await highLightPseudocode(newPseudo, 2);
          setPseudocode(newPseudo);
          await ubahPenjelasan("NEXT", "", "");
          // ============================

          // Ubah highlight pseudocode IT LOOP
          await highLightPseudocodeIT(newPseudocodeIT, 0);
          setPseudocodeIT(newPseudocodeIT);
          // ============================

          // ubah warna
          await changeSatu(newArr, i, color.identify, 1);
          setItemz(newArr);
          // ==============
        }
      }
      return ubahPenjelasan("", "", "");
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
                {/* Tombol Toggle */}

                <Button onClick={() => setPro(!pro)} variant={pro ? "dark" : "light"} size="sm">
                  {pro ? "Pro" : "Awam"}
                </Button>

                {/* Tampilan Pseudocode */}
                <div className="wrapper">
                  {pro
                    ? // Pseudocode untuk orang IT
                      transitionPseudoIT.map(({ item, props, key }) => (
                        <animated.div className="itemPseudocodeIT" key={key} style={props}>
                          {item.text}
                        </animated.div>
                      ))
                    : // Pseudocode untuk orang awam

                      transitionPseudo.map(({ item, props, key }) => (
                        <animated.div className="itemPseudocode" key={key} style={props}>
                          {item.text}
                        </animated.div>
                      ))}
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
                    <Button disabled={disable} onClick={sequentialSearch} variant={itemz.length === 0 ? "outline-secondary" : "dark"}>
                      Cari
                    </Button>
                    <Button disabled={disable2} onClick={resetArray} variant="outline-secondary">
                      Reset
                    </Button>
                    <Button disabled={input === "" ? true : false} onClick={split} variant={itemz.length === 0 ? "dark" : "outline-secondary"}>
                      Input
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mainKeterangan">
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="rgb(173, 173, 173)" h={30} scale={1} />
                <p> Kotak yang sudah di cek</p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="rgb(255, 192, 55)" h={30} scale={1} />
                <p> Wilayah pencarian</p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#3FB1B5" h={30} scale={1} />
                <p> Kotak dengan nilai yang dicari</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mainTeoriArea">
          <Col className="mainTeori" lg="9">
            <div className="materiTeori">
              <h1>Sequential Search</h1>
              <p>
                Sequential Search, juga disebut pencarian linier, adalah yang paling sederhana dari semua algoritma pencarian. Ini adalah pendekatan brute force untuk menemukan nilai target tunggal, dalam sebuah koleksi nilai. Ia menemukan
                targe dengan memulai pencarian pada elemen pertama dari koleksi dan memeriksa setiap elemen berikutnya sampai elemen yang cocok ditemukan atau setiap elemen dari koleksinya telah diperiksa
              </p>
              <div>
                <h5>Kompleksitas</h5>
                <p>
                  Best Case : O(1)
                  <br /> Average Case : O(n) <br /> Worst Case : O(n)
                </p>
              </div>
            </div>
          </Col>

          <Col className="nextMateri" lg="2">
            <h6>Materi Searching lainnya</h6>
            <br />
            <Button href="#/BinarySearch">Binary Search</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
