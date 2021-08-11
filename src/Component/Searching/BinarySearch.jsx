import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { useTransition, animated } from "react-spring";
import Rectangel from "../Reuseable/Rectangel";
import "../style.css";

export default function BinarySearch() {
  // Sebuah object yang menyimpan warna
  const color = { default: "rgb(173, 173, 173)", checked: "rgba(255,255,255,0.6)", identify: ["rgb(255, 192, 55)", "#fb9b29", "#fb8729"], itIs: "#3FB1B5" };
  // STATE UNTUK RECTANGEL CLASS
  const [itemz, setItemz] = useState([]);
  // DISABLE BUTTON
  const [disable, setDisable] = useState(true);
  const [disable2, setDisable2] = useState(true);
  // DELAY
  const [delay, setDelay] = useState(500);

  // ===================================================
  //  -------- BAGIAN PENJELASAN & PSEUDOCODE ----------
  // ===================================================

  // PRO BUTTON
  const [pro, setPro] = useState(true);
  // Penampung Deskripsi
  const [desk, setDesk] = useState("");
  // Penampung Penjelasan
  const [penjelasan, setPenjelasan] = useState("");
  // PENAMPUNG INPUT
  const [pseudocode, setPseudocode] = useState([
    { id: 0, text: "mencari nilai yang dicari hingga ketemu atau tidak ada nilai tengah", color: color.default, colorText: "black", scale: 1 },
    { id: 1, text: "Cek nilai tengah apakah sesuai dengan target?", color: color.default, colorText: "black", scale: 1 },
    { id: 2, text: "Belum sesuai, cari kesebelah kiri", color: color.default, colorText: "black", scale: 1 },
    { id: 3, text: "Belum sesuai, cari kesebelah kanan", color: color.default, colorText: "black", scale: 1 },
    { id: 4, text: "Sudah sesuai, akhiri pencarian", color: color.default, colorText: "black", scale: 1 },
  ]);

  //>>>>>> state Pseudocode Anak IT
  const [pseudocodeIT, setPseudocodeIT] = useState([
    { id: 0, text: "start = 1", color: color.default, colorText: "black", scale: 1 },
    { id: 1, text: "end = array length", color: color.default, colorText: "black", scale: 1 },
    { id: 2, text: "While start < end", color: color.default, colorText: "black", scale: 1 },
    { id: 3, text: "___ Middle = (start + end) / 2", color: color.default, colorText: "black", scale: 1 },
    { id: 4, text: "___  If( Array[Middle] = target)", color: color.default, colorText: "black", scale: 1 },
    { id: 5, text: "______  return true", color: color.default, colorText: "black", scale: 1 },
    { id: 6, text: "___  else if (Array[middle] < target)", color: color.default, colorText: "black", scale: 1 },
    { id: 7, text: "______  start = middle + 1", color: color.default, colorText: "black", scale: 1 },
    { id: 8, text: "___  else end = middle - 1", color: color.default, colorText: "black", scale: 1 },
    { id: 9, text: "return false", color: color.default, colorText: "black", scale: 1 },
  ]);

  // METHOD UNTUK MEN HIGHLIGHT PSEUDOCODE
  const highLightPseudocode = (arr, idx) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Membuat pseudocode default terlebih dahulu
        for (let i = 0; i < pseudocode.length; i++) {
          arr[i].color = color.default;
          arr[i].colorText = "black";
          arr[i].scale = 1;
        }
        // Membuat highlight
        arr[idx].color = "#5a9cff";
        arr[idx].colorText = "white";
        arr[idx].scale = 1.4;
        resolve();
      }, delay);
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
        // * Membuat highlight

        if (code === 0) {
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
        } else if (code === 2) {
          arr[5].color = "#5a9cff";
          arr[5].colorText = "white";
        } else if (code === 3) {
          arr[6].color = "#5a9cff";
          arr[6].colorText = "white";

          arr[7].color = "#5a9cff";
          arr[7].colorText = "white";
        } else if (code === 4) {
          arr[8].color = "#5a9cff";
          arr[8].colorText = "white";
        } else {
          arr[9].color = "#5a9cff";
          arr[9].colorText = "white";
        }

        resolve();
      }, delay);
    });
  };

  // METHOD UNTUK MEBERIKAN PENJELASAN
  const ubahPenjelasan = (method, boxVal, target) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (method === "CEK") {
          setDesk("CEK");
          setPenjelasan("Apakah kotak dengan nilai " + boxVal + " sama dengan target (" + target + ")");
        } else if (method === "NEXT1") {
          setDesk("Cek sebelah kiri");
          setPenjelasan("Mencari kotak kesebelah kiri karena target (" + target + ") yang di cari lebih kecil dibandingkan dengan nilai tengah (" + boxVal + ")");
        } else if (method === "NEXT2") {
          setDesk("Cek sebelah kanan");
          setPenjelasan("Mencari kotak kesebelah kanan karena target (" + target + ") yang di cari lebih besar dibandingkan dengan nilai tengah (" + boxVal + ")");
        } else if (method === "KETEMU") {
          setDesk("KETEMU");
          setPenjelasan("Kotak dengan nilai " + boxVal + " ditemukan dalam array");
        } else {
          setDesk("TIDAK KETEMU");
          setPenjelasan("Tidak ada kotak yang bernilai sesuai target ");
        }
        resolve();
      }, delay);
    });
  };

  // >>>>>>> pengaturan transisi pseudocode
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

  // =============================================================

  // INPUT
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  // INPUT ARRAY
  const split = () => {
    if (input.indexOf(" ") >= 0) {
      alert("MASUKAN HARUS DIPISAH MENGGUNAKAN KOMA BUKAN SPASI");
    } else {
      let tempInput = input.split(",");
      let tempIsSorted = [...tempInput];
      tempIsSorted.sort();
      let newArray = [];
      if (JSON.stringify(tempInput) != JSON.stringify(tempIsSorted)) {
        alert("INPUT HARUS BERUPA KUMPULAN NILAI YANG SUDAH TERURUT. CONTOH : 1,2,3,4,5");
        setInput("");
      } else {
        setInput("");
        setDisable(false);
        setDisable2(false);
        for (let i = 0; i < tempInput.length; i++) {
          newArray.push({ id: i, val: parseInt(tempInput[i]), color: color.default, h: 50, scale: 1 });
        }
        console.log(newArray);
        setItemz(newArray);
      }
    }
  };
  // ====================

  //  PENGATURAN TRANSISI
  const transition2 = useTransition(itemz, (item) => item.id, {
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
      }, delay);
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
    setPseudocode([...newPseudo]);
    setPseudocodeIT([...newPseudoIT]);
    changeColor(newArray, 0, newArray.length - 1, color.default, 1);
    setItemz(newArray);
    setInput("");
  };

  // Method Pencarian Binary Search (PAKE RECTANGEL CLASS)
  const binarySearch = async () => {
    if (input === "") {
      alert("MASUKAN ANGKA YANG INGIN DICARI");
    } else {
      setDisable(true);
      let start = 0;
      let end = itemz.length - 1;
      let count = 0;
      let newPseudo = pseudocode;
      let newPseudoIT = pseudocodeIT;

      // Ubah Highlight Pseudocode
      await highLightPseudocode(newPseudo, 0);
      await highLightPseudocodeIT(newPseudoIT, 0);
      setPseudocodeIT(newPseudoIT);
      setPseudocode([...newPseudo]);
      // ===========

      while (start <= end) {
        let newItems = [...itemz];
        let middle = Math.floor((start + end) / 2);

        // Ubah Highlight Pseudocode
        await highLightPseudocodeIT(newPseudoIT, 1);
        await highLightPseudocode(newPseudo, 1);
        await ubahPenjelasan("CEK", newItems[middle].val, input);
        setPseudocode(newPseudo);
        setPseudocodeIT(newPseudoIT);
        // =========================

        changeColor(newItems, middle, middle, color.checked, 0.7);
        if (newItems[middle].val === parseInt(input)) {
          // NILAI DI TEMUKAN
          // Ubah Highlight Pseudocode
          await highLightPseudocodeIT(newPseudoIT, 2);
          await highLightPseudocode(newPseudo, 4);
          await ubahPenjelasan("KETEMU", newItems[middle].val, "");
          setPseudocode(newPseudo);
          setPseudocodeIT(newPseudoIT);
          // ===========================

          // Ubah Warna
          await changeSatu(newItems, middle, color.itIs, 1.2);
          // ===========================
          return setItemz(newItems);
        } else if (newItems[middle].val < parseInt(input)) {
          // CARI KE KANAN
          start = middle + 1;
          // Ubah Highlight Pseudocode
          await highLightPseudocodeIT(newPseudoIT, 3);
          await highLightPseudocode(newPseudo, 3);
          await ubahPenjelasan("NEXT2", newItems[middle].val, input);
          setPseudocode([...newPseudo]);
          setPseudocodeIT(newPseudoIT);
          // ==========================
          changeColor(newItems, start, end, color.identify[count], 1);
          setItemz(newItems);
        } else {
          // CARI KE KIRI
          end = middle - 1;
          // Ubah Highlight Pseudocode
          await highLightPseudocodeIT(newPseudoIT, 6, null);
          await highLightPseudocode(newPseudo, 2);
          await ubahPenjelasan("NEXT1", newItems[middle].val, input);
          setPseudocode([...newPseudo]);
          setPseudocodeIT(newPseudoIT);
          // ========================

          changeColor(newItems, start, end, color.identify[count], 1);
          setItemz(newItems);
        }
        count++;
      }
      // Ubah Highlight Pseudocode
      await highLightPseudocodeIT(newPseudoIT, 45);
      setPseudocodeIT(newPseudoIT);
      // target tidak ditemukan
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
              {transition2.map(({ item, props, key }) => (
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
                <Button onClick={() => setPro(!pro)} variant={pro ? "dark" : "light"} size="sm">
                  {pro ? "Pro" : "Awam"}
                </Button>

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
                  <FormControl placeholder="Contoh Input : 13,15,21,33  (Input Harus Terurut kecil ke besar)" aria-label="Recipient's username" aria-describedby="basic-addon2" value={input} onChange={handleInput} />
                  <InputGroup.Append>
                    <Button disabled={disable} onClick={binarySearch} variant={itemz.length === 0 ? "outline-secondary" : "dark"}>
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
                <p> Kotak yang tidak di cek</p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="rgb(255, 192, 55)" h={30} scale={1} />
                <p> Wilayah Pencarian</p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#3FB1B5" h={30} scale={1} />
                <p> Kotak dengan nilai yang dicari</p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#fff" h={30} scale={1} />
                <p> Nilai Tengah</p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mainTeoriArea">
          <Col className="mainTeori" lg="9">
            <div className="materiTeori">
              <h1>Binary Search</h1>
              <p>
                Binary Search merupakan sebuah teknik pencarian data dengan cara berulang kali membagi separuh dari jumlah data yang dicari sampai sehingga memperkecil lokasi pencarian menjadi satu data. Dengan teknik ini kita akan membuang
                setengah dari jumlah data. Apabila ditemukan kecocokan data maka program akan mengembalikan output, jika tidak pencarian akan terus berlanjut hingga akhir dari pembagian jumlah data tersebut. Algoritma ini biasanya banyak
                digunakan untuk mencari di program dengan jumlah data yang banyak, dimana kompleksitas dari algoritma ini adalah Ο(log n) dimana n adalah jumlah item. Pada saat menggunakan binary search, data yang berada di dalam array
                harus diurutkan terlebih dahulu.
              </p>
              <div>
                <h5>Kompleksitas</h5>
                <p>
                  Best Case : O(1) <br /> Average Case : O(log n){" "}
                </p>
              </div>
            </div>
          </Col>

          <Col className="nextMateri" lg="2">
            <h6>Materi Searching lainnya</h6>
            <br />
            <Button href="#/SequentialSearch">Sequential Search</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
