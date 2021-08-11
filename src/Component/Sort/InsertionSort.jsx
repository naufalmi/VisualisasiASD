import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { useTransition, animated } from "react-spring";
import Rectangel from "../Reuseable/Rectangel";
import "../style.css";

export default function InsertionSort() {
  // Sebuah object yang menyimpan warna
  const color = { default: "rgb(173, 173, 173)", identify: "rgb(255, 192, 55)", itIs: "#5A9CFF", iteration: "#FF5247" };
  // STATE UNTUK RECTANGEL CLASS
  const [itemz, setItemz] = useState([]);
  // Penampung Deskripsi
  const [desk, setDesk] = useState("");
  // PENAMPUNG INPUT
  const [input, setInput] = useState("");
  // DISABLE BUTTON
  const [disable, setDisable] = useState(true);
  const [disable2, setDisable2] = useState(true);
  // PRO BUTTON
  const [pro, setPro] = useState(true);
  // =======================================
  // PENAMPUNG PSEUDOCODE DAN PENJELASAN
  // =======================================
  // >>>>>> state Penjelasan
  const [penjelasan, setPenjelasan] = useState("");
  // >>>>>> state Pseudocode awam
  const [pseudocode, setPseudocode] = useState([
    { id: 0, text: "Masukan item ke i hingga ke n kedalam array yang sudah terurut di sebelah kiri item", color: color.default, colorText: "black", scale: 1 },
    { id: 1, text: "Apakah nilai item sebelah lebih besar ?", color: color.default, colorText: "black", scale: 1 },
    { id: 2, text: "Lebih besar, maka tukar posisi", color: color.default, colorText: "black", scale: 1 },
    { id: 3, text: "Lebih kecil, maka array sebelah kiri sudah tersusun dan item sudah dimasukan", color: color.default, colorText: "black", scale: 1 },
  ]);

  // >>>>>> state Pseudocode Anak IT
  const [pseudocodeIT, setPseudocodeIT] = useState([
    { id: 0, text: "For i = 2 to n", color: color.default, colorText: "black", scale: 1 },
    { id: 1, text: "___ j = i - 1", color: color.default, colorText: "black", scale: 1 },
    { id: 2, text: "___ key = A[i]", color: color.default, colorText: "black", scale: 1 },
    { id: 3, text: "___ While j > 0 and key < array[j]", color: color.default, colorText: "black", scale: 1 },
    { id: 4, text: "______  array[j+1]=array[j]", color: color.default, colorText: "black", scale: 1 },
    { id: 5, text: "______  j = j-1", color: color.default, colorText: "black", scale: 1 },
    { id: 6, text: "___ A[j+1] = key", color: color.default, colorText: "black", scale: 1 },
  ]);

  // >>>>>>> Method untuk mengubah penjelasan
  const ubahPenjelasan = (method, box1, box2) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (method === "CEK") {
          setDesk("CEK");
          setPenjelasan("Apakah nilai yang akan dimasukan (" + box1 + ") lebih kecil dari " + box2);
        } else if (method === "TUKAR") {
          setDesk("TUKAR POSISI");
          setPenjelasan("Karena nilai yang akan dimasukan (" + box1 + ")  lebih kecil dibandingkan nilai sebelah kiri (" + box2 + "), maka posisinya ditukar");
        } else if (method === "SKIP") {
          setDesk("Posisi Tepat");
          setPenjelasan("Karena nilai disebelah kiri lebih kecil, maka nilai yang dimasukan telah berada di posisi yang tepat");
        } else {
          setDesk("TERURUT");
          setPenjelasan("Yeay! Semua nilai sudah terurut ");
        }
        resolve();
      }, 200);
    });
  };

  // >>>>>>> method penentu highlight pseudocode
  const highLightPseudocode = (arr, idx) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // * pseudocode default terlebih dahulu
        for (let i = 0; i < arr.length; i++) {
          arr[i].color = color.default;
          arr[i].colorText = "black";
          arr[i].scale = 1;
        }
        // * Membuat highlight
        arr[idx].color = "#5a9cff";
        arr[idx].colorText = "white";
        resolve();
      }, 200);
    });
  };

  // >>>>>>> method penentu highlight pseudocode
  const highLightPseudocodeIT = (arr, code) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // * pseudocode default terlebih dahulu
        for (let i = 0; i < arr.length; i++) {
          arr[i].color = color.default;
          arr[i].colorText = "black";
        }
        if (code === 0) {
          // ubah baris 1-3
          arr[0].color = "#5a9cff";
          arr[0].colorText = "white";

          arr[1].color = "#5a9cff";
          arr[1].colorText = "white";

          arr[2].color = "#5a9cff";
          arr[2].colorText = "white";
        } else if (code === 1) {
          arr[3].color = "#5a9cff";
          arr[3].colorText = "white";

          arr[4].color = "#5a9cff";
          arr[4].colorText = "white";

          arr[5].color = "#5a9cff";
          arr[5].colorText = "white";
        } else {
          arr[6].color = "#5a9cff";
          arr[6].colorText = "white";
        }

        resolve();
      }, 200);
    });
  };

  // >>>>>>>> pengaturan transisi pseudocode
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

  // ================================================

  // TRANSISI KOTAK
  const transition = useTransition(itemz, (item) => item.id, {
    from: { transform: "translate3d(0px,0px,0)", opacity: 1 },
    enter: (item) => [{ transform: "translate3d(" + itemz.indexOf(item) * 60 + "px,0%,0)", opacity: 1 }],
    update: (item) => [{ transform: "translate3d(" + itemz.indexOf(item) * 60 + "px,0%,0)" }],
    leave: { opacity: 0 },
    config: { tension: 400, mass: 2 },
  });

  // METHOD UNTUK HANDLE INPUT
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  // INPUT ARRAY
  const split = () => {
    if (input.indexOf(" ") >= 0) {
      alert("MASUKAN HARUS DIPISAH MENGGUNAKAN KOMA BUKAN SPASI");
    } else {
      let tempInput = input.split(",");
      setInput("");
      if (isNaN(tempInput[0])) {
        alert("MASUKAN HARUS BERUPA ANGKA! CONTOH : 20,33,29,56");
      } else {
        setDisable(false);
        setDisable2(false);
        setItemz([]);
        let newArray = [];
        for (let i = 0; i < tempInput.length; i++) {
          newArray.push({ id: i, val: parseInt(tempInput[i]), color: color.default, h: parseInt(tempInput[i]), scale: 1 });
        }
        console.log(newArray);
        setItemz([...newArray]);
      }
    }
  };

  // ===== EMPTY AN ARRAY =====
  const emptyArray = () => {
    let newPseudo = pseudocode;
    let newPseudoIT = pseudocodeIT;
    // * Mereset pseudocode dan penjelasan
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
    setDisable(true);
    setDisable2(true);
    setPseudocodeIT(newPseudoIT);
    setDesk("");
    setPenjelasan("");
    setPseudocode([...newPseudo]);
    // * Mereset array
    let newArr = itemz;
    while (newArr.length) {
      newArr.pop();
    }
    setItemz([...newArr]);
  };

  // ===== METHOD UNTUK MERUBAH WARNA KOTAK =====
  const changeColor = (arr, idx, color) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        arr[idx].color = color;
        resolve();
      }, 1000);
    });
  };

  const sorted = (arr) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
          arr[i].color = color.itIs;
        }
        resolve();
      }, 500);
    });
  };
  // ============================================

  // ===== FUNCTION SWAPPING =====
  const swapping = (array, e1, e2) => {
    return ([array[e1], array[e2]] = [array[e2], array[e1]]);
  };

  // ======== INSERTION SORT ========

  const insertionSort = async () => {
    setDisable(true);
    let newArray = itemz;
    let newPseudo = pseudocode;
    let newPseudoIT = pseudocodeIT;
    // Ubah Penjelasan dan Pseudocode
    await highLightPseudocode(newPseudo, 0);
    setPseudocode(newPseudo);
    // ==============================
    for (let i = 1; i < itemz.length; i++) {
      let j = i;
      // Ubah Penjelasan dan Pseudocode
      await highLightPseudocodeIT(newPseudoIT, 0);
      await highLightPseudocode(newPseudo, 1);
      setPseudocode(newPseudo);
      setPseudocodeIT(newPseudoIT);
      // ===============================

      // Ubah Warna untuk array[j] dan array[j-1]
      await changeColor(newArray, j, color.iteration);
      await changeColor(newArray, j - 1, color.identify);
      setItemz([...newArray]);
      // ==========================

      while (j - 1 >= 0 && newArray[j].h < newArray[j - 1].h) {
        // Ubah Penjelasan dan Pseudocode
        await highLightPseudocodeIT(newPseudoIT, 1);
        await highLightPseudocode(newPseudo, 2);
        setPseudocode(newPseudo);
        setPseudocodeIT(newPseudoIT);
        await ubahPenjelasan("CEK", newArray[j].h, newArray[j - 1].h);
        // ===================================

        // Ubah warna iterasi array[j-1]
        await changeColor(newArray, j - 1, color.identify);
        setItemz([...newArray]);
        // =============================

        // Ubah Penjelasan

        await ubahPenjelasan("TUKAR", newArray[j].h, newArray[j - 1].h);
        // =============================
        await new Promise((resolve) => {
          setTimeout(() => {
            swapping(newArray, j, j - 1);
            setItemz([...newArray]);
            resolve();
          }, 2000);
        });

        // Ubah warna array[j] ke semula
        await changeColor(newArray, j, color.default);
        setItemz([...newArray]);
        // ==============================

        j--;
      }

      // Ubah Penjelasan dan Pseudocode

      await ubahPenjelasan("SKIP", "", "");
      await highLightPseudocodeIT(newPseudoIT, 2);
      setPseudocodeIT(newPseudoIT);
      await highLightPseudocode(newPseudo, 3);
      setPseudocode(newPseudo);
      // ==============================

      // Ubah warna ke semula
      if (j - 1 >= 0) {
        await changeColor(newArray, j - 1, color.default);
      }
      await changeColor(newArray, j, color.default);
      setItemz([...newArray]);
      // ==============================
    }

    // Ubah Penjelasan
    await ubahPenjelasan("", "", "");
    // ==========================

    // Ubah semua warna array karna sudah ter sort
    await sorted(newArray);
    setItemz([...newArray]);
    // ============================================
  };

  // ================================

  return (
    <div>
      <Container>
        <Row className="mainAnimationContainer">
          {/* ============== TEMPAT ANIMASI DI TAMPILKAN ============== */}
          <Col className="mainAnimation" lg="9">
            {/* ANIMASI */}
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
                  <FormControl placeholder="Contoh Input : 33,70,21,88 (Input harus dipisahkan dengan koma)" aria-label="Recipient's username" aria-describedby="basic-addon2" value={input} onChange={handleInput} />
                  <InputGroup.Append>
                    <Button disabled={disable} onClick={insertionSort} variant={itemz.length === 0 ? "outline-secondary" : "dark"}>
                      Sort
                    </Button>
                    <Button disabled={disable2} onClick={emptyArray} variant="outline-secondary">
                      Reset
                    </Button>
                    <Button disabled={input === "" ? true : false} onClick={split} variant={itemz.length === 0 ? "dark" : "outline-secondary"}>
                      Input
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
            <Row></Row>
            <Row className="mainKeterangan">
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="rgb(173, 173, 173)" h={30} scale={1} />
                <p> Belum Terurut </p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="rgb(255, 192, 55)" h={30} scale={1} />
                <p> Nilai Pembanding </p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#FF5247" h={30} scale={1} />
                <p> Nilai yang dimasukan </p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#3FB1B5" h={30} scale={1} />
                <p> Terurut</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mainTeoriArea">
          <Col className="mainTeori" lg="9">
            <div className="materiTeoriPendek">
              <h1>Insertion Sort</h1>
              <p>
                Insertion sort adalah algoritma yang paling efesien untuk mengurutkan bilangan yang jumlahnya sedikit. Algortima ini berjalan seperti kebanyakan orang mengurutkan kartu pada tangannya. di awali dengan tangan kiri yang kosong
                dan kartu di meja menghadap ke bawah. lalu setelah itu kartu diambil dan diletakan pada tangan kiri dengan posisi kartu menghadap ke atas. untuk untuk menemukan posisi yang benar pada suatu kartu, pemain mulai membandingkan
                kartu dengan masing masing kartu yang sudah ada di tangan, dari kanan ke kiri.
              </p>
              <div>
                <h5>Kompleksitas</h5>
                <p>
                  Best Case : O(n)
                  <br /> Average Case : O(n^2) <br /> Worst Case : O(n^2)
                </p>
              </div>
            </div>
          </Col>

          <Col className="nextMateri" lg="2">
            <h6>Materi Sorting lainnya</h6>
            <br />
            <Button href="#/QuickSort">Quick Sort</Button>
            <Button href="#/MergeSort">Merge Sort</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
