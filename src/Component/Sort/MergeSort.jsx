import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { useTransition, animated } from "react-spring";
import Rectangel from "../Reuseable/Rectangel";
import "../style.css";

export default function MergeSort() {
  // PENAMPUNG WARNA
  const color = { default: "rgb(173, 173, 173)", identify: "rgb(255, 192, 55)", itIs: "#5A9CFF", iteration: "#FF5247", ColorArray: ["#5A9CFF", "#FF5247", "#9A3B82", "#E57281", "3FB1B5", "#FFCF2D"] };
  // STATE UNTUK MENAMPUNG ARRAY KOTAK
  const [items, setItems] = useState([]);
  // DISABLE BUTTON
  const [disable, setDisable] = useState(true);
  const [disable2, setDisable2] = useState(true);
  // PRO BUTTON
  const [pro, setPro] = useState(true);
  // STATE UNTUK AUXILARY ARRAY (MERGE SORT)
  const [auxItems, setAux] = useState([]);
  // STATE UNTUK MENANDAI ITERASI DI AUXILARY ARRAY UNTUK PENGATURAN TRANSISI KOTAK DI AUXILARY ARRAY
  const [iteratorAuxAnim, setIteratorAux] = useState(0);
  // PENAMPUNG INPUT
  const [input, setInput] = useState("");
  // METHOD UNTUK HANDLE INPUT
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  // INPUT ARRAY
  const split = () => {
    let tempInput = input.split(",");
    setInput("");
    if (isNaN(tempInput[0])) {
      alert("MASUKAN HARUS BERUPA ANGKA! CONTOH : 20,33,29,56");
    } else {
      setDisable(false);
      setDisable2(false);
      setItems([]);
      let newArray = [];
      for (let i = 0; i < tempInput.length; i++) {
        newArray.push({ id: i, val: parseInt(tempInput[i]), color: color.default, h: parseInt(tempInput[i]), scale: 1 });
      }
      setItems([...newArray]);
    }
  };
  // ==========================

  // =======================================
  // PENAMPUNG PSEUDOCODE DAN PENJELASAN
  // =======================================
  // >>>>>> Penampung Deskripsi
  const [desk, setDesk] = useState("");

  // >>>>>> state Penjelasan
  const [penjelasan, setPenjelasan] = useState("");

  // >>>>>> state Pseudocode
  const [pseudocode, setPseudocode] = useState([
    { id: 0, text: "Membandingkan elemen array sebelah kiri dan kanan", color: color.default, colorText: "black", scale: 1 },
    { id: 1, text: "Elemen array sebelah kanan dimasukan ke array penampung", color: color.default, colorText: "black", scale: 1 },
    { id: 2, text: "Elemen array sebelah Kiri dimasukan ke array penampung", color: color.default, colorText: "black", scale: 1 },
    { id: 3, text: "Masukan sisa array sebelah kanan", color: color.default, colorText: "black", scale: 1 },
    { id: 4, text: "Masukan sisa array sebelah kiri ", color: color.default, colorText: "black", scale: 1 },
    { id: 5, text: "Salin array penampung kedalam array utama", color: color.default, colorText: "black", scale: 1 },
  ]);
  // >>>>>> state Pseudocode Anak IT
  const [pseudocodeIT, setPseudocodeIT] = useState([
    { id: 0, text: "for size = 1 to size < array.length", color: color.default, colorText: "black", scale: 1 },
    { id: 1, text: "_for leftStart = 0 to leftStart < array.length", color: color.default, colorText: "black", scale: 1 },
    { id: 2, text: "__left = leftStart; right = left + size; i = left", color: color.default, colorText: "black", scale: 1 },
    { id: 3, text: "___while left < leftLimit and right < rightLimit", color: color.default, colorText: "black", scale: 1 },
    { id: 4, text: "____if array[left] <= array[right]", color: color.default, colorText: "black", scale: 1 },
    { id: 5, text: "_____  aux[i] = array[left]; left++; i++;", color: color.default, colorText: "black", scale: 1 },
    { id: 6, text: "_____ else : aux[i] = array[right]; right++; i++;", color: color.default, colorText: "black", scale: 1 },
    { id: 7, text: "___ while left < leftLimit", color: color.default, colorText: "black", scale: 1 },
    { id: 8, text: "____ aux[i] = array[left]; left++; i++", color: color.default, colorText: "black", scale: 1 },
    { id: 9, text: "___ while right < rightLimit", color: color.default, colorText: "black", scale: 1 },
    { id: 10, text: "____ aux[i] = array[right]; right++; i++", color: color.default, colorText: "black", scale: 1 },
    { id: 11, text: "_ copy aux to original array;", color: color.default, colorText: "black", scale: 1 },
  ]);
  // >>>>>>> Method untuk mengubah penjelasan
  const ubahPenjelasan = (method, val1, val2) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (method === "BANDINGKAN") {
          setDesk("Membandingkan Elemen");
          setPenjelasan("Membandingkan elemen array sebelah kiri (" + val1 + ") dan kanan (" + val2 + ")");
        } else if (method === "KIRI1") {
          setDesk("Memasukan Elemen Array sebelah kiri");
          setPenjelasan("Karena nilai " + val1 + " lebih kecil dibandingkan " + val2 + ", maka " + val1 + " dimasukan kedalam array penampung");
        } else if (method === "KANAN1") {
          setDesk("Memasukan Elemen Array sebelah Kanan");
          setPenjelasan("Karena nilai " + val1 + " lebih besar dibandingkan " + val2 + ", maka " + val2 + " dimasukan kedalam array penampung");
        } else if (method === "KIRI2") {
          setDesk("Memasukan Sisa Elemen Kiri");
          setPenjelasan("Memasukan " + val1 + " pada array penampung");
        } else if (method === "KANAN2") {
          setDesk("Memasukan Sisa Elemen Kanan");
          setPenjelasan("Memasukan " + val2 + " pada array penampung");
        } else if (method === "SALIN") {
          setDesk("Menyalin Array");
          setPenjelasan("Menyalin array penapung kedalam array utama untuk melakukan perbandingan kembali");
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
        for (let i = 0; i < pseudocode.length; i++) {
          arr[i].color = color.default;
          arr[i].colorText = "black";
          arr[i].scale = 1;
        }
        // * Membuat highlight
        arr[idx].color = "#5a9cff";
        arr[idx].colorText = "white";
        arr[idx].scale = 1.4;
        resolve();
      }, 200);
    });
  };

  // >>>>>>> method penentu highlight pseudocode
  const highLightPseudocodeIT = (arr, idx1, idx2) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // * pseudocode default terlebih dahulu
        for (let i = 0; i < arr.length; i++) {
          arr[i].color = color.default;
          arr[i].colorText = "black";
        }
        // * Membuat highlight
        if (idx1 != null) {
          arr[idx1].color = "#5a9cff";
          arr[idx1].colorText = "white";
        }
        if (idx2 != null) {
          arr[idx2].color = "#5a9cff";
          arr[idx2].colorText = "white";
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
  const transition = useTransition(items, (item) => item.id, {
    from: { transform: "translate3d(0px,0px,0)", opacity: 1 },
    enter: (item) => [{ transform: "translate3d(" + items.indexOf(item) * 60 + "px,0%,0)", opacity: 1 }],
    update: (item) => [{ transform: "translate3d(" + items.indexOf(item) * 60 + "px,0%,0)" }],
    leave: { opacity: 0 },
    config: { tension: 400, mass: 2 },
  });

  const transitionAux = useTransition(auxItems, (item) => item.id, {
    from: { transform: "translate3d(" + iteratorAuxAnim * 60 + "px,-100px,0)", opacity: 1 },
    enter: (item) => [{ transform: "translate3d(" + auxItems.indexOf(item) * 60 + "px,0%,0)", opacity: 1 }],
    update: (item) => [{ transform: "translate3d(" + auxItems.indexOf(item) * 60 + "px,0%,0)" }],
    leave: { transform: "translateY(100px)", opacity: 0 },
    config: { tension: 400, mass: 2 },
  });

  const resetAux = () => {
    let newArr = auxItems;
    while (newArr.length) {
      newArr.pop();
    }
    setAux([...newArr]);
  };

  // ===== Method untuk Mereset array dan penjelasan =====
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
    setDesk("");
    setPenjelasan("");
    setPseudocode([...newPseudo]);
    setPseudocodeIT([...newPseudoIT]);
    // * Mereset array
    let newArr = items;
    while (newArr.length) {
      newArr.pop();
    }
    setItems([...newArr]);
  };

  // ===== METHOD UNTUK MERUBAH WARNA KOTAK =====
  const changeColor = (arr, idx, color) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        arr[idx].color = color;
        resolve();
      }, 300);
    });
  };

  // ===== UBAH WARNA KALO ARRAY SUDAH TERURUT ====
  const sorted = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].color = color.itIs;
    }
  };
  // ============================================

  //   ===== ITERATIVE MERGE SORT ====

  const iterativeMergeSort = async () => {
    setDisable(true);
    // copy array items
    let result = items;
    // set panjang array
    let len = result.length;
    // membuat auxilary array untuk penampung jawaban
    let buffer = auxItems;
    // variabel perubah pseudocode
    let newPseudo = pseudocode;
    let newPseudoIT = pseudocodeIT;

    // ukuran selalu dikalikan 2
    for (let size = 1; size < len; size *= 2) {
      // Ubah Pseudocode
      await highLightPseudocodeIT(newPseudoIT, 0, null);
      setPseudocodeIT(newPseudoIT);
      // ===================

      for (let leftStart = 0; leftStart < len; leftStart += 2 * size) {
        // Ubah Pseudocode
        await highLightPseudocodeIT(newPseudoIT, 1, 2);
        setPseudocodeIT(newPseudoIT);
        // ===================

        // inisiasi index kiri
        let left = leftStart;

        // inisiasi index kanan
        let right = Math.min(left + size, len);

        // set limit untuk subarray kiri
        let leftLimit = right;
        // set limit untuk subarray kanan
        let rightLimit = Math.min(right + size, len);
        // iterasi aux
        let i = left;
        setIteratorAux(i);

        while (left < leftLimit && right < rightLimit) {
          // ubah Pseudo dan penjelasan MEMBANDINGKAN
          await highLightPseudocodeIT(newPseudoIT, 3, null);
          await highLightPseudocode(newPseudo, 0);
          setPseudocodeIT(newPseudoIT);
          setPseudocode(newPseudo);
          await ubahPenjelasan("BANDINGKAN", result[left].val, result[right].val);
          // ========================

          await changeColor(result, left, color.identify);
          await changeColor(result, right, color.iteration);
          setItems([...result]);

          if (result[left].val <= result[right].val) {
            // ubah Pseudo dan penjelasan MEMASUKAN ELEMEN SEBELAH KIRI
            await highLightPseudocodeIT(newPseudoIT, 4, 5);
            await highLightPseudocode(newPseudo, 2);
            setPseudocodeIT(newPseudoIT);
            setPseudocode(newPseudo);
            await ubahPenjelasan("KIRI1", result[left].val, result[right].val);
            // ========================

            // Mengubah ke warna default sebelum dimasukan ke auxilary array
            await changeColor(result, left, color.default);
            setItems([...result]);

            // ========================
            await new Promise((resolve) => {
              setTimeout(() => {
                setIteratorAux(left);
                buffer[i] = result[left];
                setAux([...buffer]);
                resolve();
              }, 1500);
            });
            left++;
            i++;
          } else {
            // ubah Pseudo dan penjelasan MEMASUKAN ELEMEN SEBELAH KANAN
            await highLightPseudocodeIT(newPseudoIT, 6, null);
            await highLightPseudocode(newPseudo, 1);
            setPseudocodeIT([...newPseudoIT]);
            setPseudocode(newPseudo);
            await ubahPenjelasan("KANAN1", result[left].val, result[right].val);
            // ========================

            // Mengubah ke warna default sebelum dimasukan ke auxilary array
            await changeColor(result, right, color.default);
            setItems([...result]);
            // ========================

            await new Promise((resolve) => {
              setTimeout(() => {
                setIteratorAux(right);
                buffer[i] = result[right];
                setAux([...buffer]);
                resolve();
              }, 1500);
            });
            right++;
            i++;
          }
        }
        // Cek apakah array kiri iterasinya sudah melewati batas atau belum
        while (left < leftLimit) {
          // ubah Pseudo dan penjelasan MEMASUKAN SISA ELEMEN SEBELAH KIRI
          await highLightPseudocodeIT(newPseudoIT, 7, 8);
          await highLightPseudocode(newPseudo, 4);
          setPseudocodeIT(newPseudoIT);
          setPseudocode(newPseudo);
          await ubahPenjelasan("KIRI2", result[left].val, null);
          // ========================

          // Mengubah ke warna default sebelum dimasukan ke auxilary array
          await changeColor(result, left, color.default);
          setItems([...result]);
          // ========================

          await new Promise((resolve) => {
            setTimeout(() => {
              setIteratorAux(left);
              buffer[i] = result[left];
              setAux([...buffer]);
              left++;
              i++;
              resolve();
            }, 1500);
          });
        }
        // Cek apakah array kanan iterasinya sudah melewati batas atau belum
        while (right < rightLimit) {
          // ubah Pseudo dan penjelasan MEMASUKAN SISA ELEMEN SEBELAH KANAN
          await highLightPseudocodeIT(newPseudoIT, 9, 10);
          await highLightPseudocode(newPseudo, 3);
          setPseudocodeIT(newPseudoIT);
          setPseudocode(newPseudo);
          await ubahPenjelasan("KANAN2", null, result[right].val);
          // ========================

          // Mengubah ke warna default sebelum dimasukan ke auxilary array
          await changeColor(result, right, color.default);
          setItems([...result]);
          // ========================

          await new Promise((resolve) => {
            setTimeout(() => {
              setIteratorAux(right);
              buffer[i] = result[right];
              setAux([...buffer]);
              right++;
              i++;
              resolve();
            }, 1500);
          });
        }
      }
      // copy auxilary array ke array original

      // ubah Pseudo dan penjelasan SALIN
      await highLightPseudocodeIT(newPseudoIT, 11, null);
      await highLightPseudocode(newPseudo, 5);
      setPseudocodeIT([...newPseudoIT]);
      setPseudocode(newPseudo);
      await ubahPenjelasan("SALIN", null, null);
      // ========================

      await new Promise((resolve) => {
        setTimeout(() => {
          result = [...buffer];
          setItems([...result]);
          buffer = new Array([]);
          resetAux();
          resolve();
        }, 500);
      });
    }
    // membuat pseudocode IT default
    await highLightPseudocodeIT(newPseudoIT, null, null);
    setPseudocodeIT(newPseudoIT);
    // ===============================
    await ubahPenjelasan("", null, null);
    sorted(result);
    setItems([...result]);
    return console.log(result);
  };

  return (
    <div>
      <Container>
        <Row className="mainAnimationContainer">
          {/* ============== TEMPAT ANIMASI DI TAMPILKAN ============== */}
          <Col className="mainAnimationMerge" lg="9">
            <div className="mainAnimationArea">
              {transition.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                  <Rectangel id={item.id} val={item.val} color={item.color} h={item.h} scale={item.scale} />
                </animated.div>
              ))}
            </div>

            <div className="auxArray">
              {transitionAux.map(({ item, props, key }) => (
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
                    <Button disabled={disable} onClick={iterativeMergeSort} variant={items.length === 0 ? "outline-secondary" : "dark"}>
                      Sort
                    </Button>
                    <Button disabled={disable2} onClick={emptyArray} variant="outline-secondary">
                      Reset
                    </Button>
                    <Button disabled={input === "" ? true : false} onClick={split} variant={items.length === 0 ? "dark" : "outline-secondary"}>
                      Input
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mainKeterangan">
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="rgb(173, 173, 173)" h={30} scale={1} />
                <p> Belum Terurut </p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="rgb(255, 192, 55)" h={30} scale={1} />
                <p> Iterasi Array Kiri </p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#FF5247" h={30} scale={1} />
                <p> Iterasi Array Kanan </p>
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
            <div className="materiTeori">
              <h1> Merge Sort</h1>
              <p>
                Merge sort didasarkan pada operasi sederhana yang dikenal sebagai merging, menggabungkan dua array berurutan untuk membuat satu array terurut lebih besar. Operasi ini mengarah ke metode pengurutan rekursif sederhana yang
                dikenal sebagai mergesort untuk mengurutkan array, membaginya menjadi dua bagian, mengurutkan dua bagian (secara rekursif), lalu menggabungkan hasilnya. Keuntungan menggunakan algortima pengurutan ini adalah ia menjamin
                untuk mengurutkan setiap array dengan jumlah N item dalam waktu yang sebanding dengan N log N. Kerugian utamanya adalah ia menggunakan ruang ekstra yang sebanding dengan N.
              </p>
              <div>
                <h5>Kompleksitas</h5>
                <p>
                  Best Case : O(n)
                  <br /> Average Case : O(n log n) <br /> Worst Case : O(n log n)
                </p>
              </div>
            </div>
          </Col>

          <Col className="nextMateri" lg="2">
            <h6>Materi Sorting lainnya</h6>
            <br />
            <Button href="#/InsertionSort">Insertion Sort</Button>
            <Button href="#/QuickSort">Quick Sort</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
