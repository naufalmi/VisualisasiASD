import React, { useState } from "react";
import { Container, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { useTransition, animated } from "react-spring";
import Rectangel from "../Reuseable/Rectangel";
import "../style.css";

export default function QuickSort() {
  // Sebuah object yang menyimpan warna
  const color = { default: "rgb(173, 173, 173)", identify: "rgb(255, 192, 55)", itIs: "#5A9CFF", iteration: "#FF5247" };
  // STATE UNTUK RECTANGEL CLASS
  const [items, setItems] = useState([]);
  // DISABLE BUTTON
  const [disable, setDisable] = useState(false);
  // PRO BUTTON
  const [pro, setPro] = useState(true);

  // =================
  // PENAMPUNG INPUT
  // ================
  // >>>>>> State penampung input
  const [input, setInput] = useState("");
  // >>>>>> Method untuk handling input
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  // >>>>>> Method untuk memecah dan memasukan input kedalam array
  const split = () => {
    setItems([]);
    let tempInput = input.split(",");
    let newArray = [];
    for (let i = 0; i < tempInput.length; i++) {
      newArray.push({ id: i, val: parseInt(tempInput[i]), color: color.default, h: parseInt(tempInput[i]), scale: 1 });
    }
    console.log(newArray);
    setItems([...newArray]);
  };
  // ============================================

  // =======================================
  // PENAMPUNG PSEUDOCODE DAN PENJELASAN
  // =======================================
  // >>>>>> Penampung Deskripsi
  const [desk, setDesk] = useState("");

  // >>>>>> state Penjelasan
  const [penjelasan, setPenjelasan] = useState("");

  // >>>>>> state Pseudocode
  const [pseudocode, setPseudocode] = useState([
    { id: 0, text: "Menentukan posisi yang tepat untuk setiap nilai", color: color.default, colorText: "black", scale: 1 },
    { id: 1, text: "Menentukan nilai yang mau diurutkan atau pivot", color: color.default, colorText: "black", scale: 1 },
    { id: 2, text: "Bandingkan nilai pivot dengan nilai iterasi, apakah nilai iterasi lebih kecil?", color: color.default, colorText: "black", scale: 1 },
    { id: 3, text: "Lebih kecil, iterasi dan penanda tempat pivot berpindah ke posisi depannya ", color: color.default, colorText: "black", scale: 1 },
    { id: 4, text: "Tukar posisi pivot dengan penanda posisi pivot ", color: color.default, colorText: "black", scale: 1 },
  ]);

  // >>>>>> state Pseudocode Anak IT
  const [pseudocodeIT, setPseudocodeIT] = useState([
    { id: 0, text: "For each unsorted partition", color: color.default, colorText: "black", scale: 1 },
    { id: 1, text: "pivot = A[endIndex]", color: color.default, colorText: "black", scale: 1 },
    { id: 2, text: "i = startIndex - 1", color: color.default, colorText: "black", scale: 1 },
    { id: 3, text: "___ for j = startIndex to endIndex - 1", color: color.default, colorText: "black", scale: 1 },
    { id: 4, text: "______ if A[j] < pivot ", color: color.default, colorText: "black", scale: 1 },
    { id: 5, text: "_________ exchange A[i] with A[j])", color: color.default, colorText: "black", scale: 1 },
    { id: 6, text: "_________ storeIndex++", color: color.default, colorText: "black", scale: 1 },
    { id: 7, text: "___ exchange A[i+1] with A[End])", color: color.default, colorText: "black", scale: 1 },
    { id: 8, text: "return i + 1", color: color.default, colorText: "black", scale: 1 },
  ]);

  // >>>>>>> Method untuk mengubah penjelasan
  const ubahPenjelasan = (method, val1, val2) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (method === "Tentukan") {
          setDesk("Tentukan Nilai Pivot");
          setPenjelasan("Menentukan nilai pivot, nilai yang akan di jadikan pivot adalah nilai paling akhir dalam array (" + val1 + ")");
        } else if (method === "CEK") {
          setDesk("Cek Nilai Iterasi");
          setPenjelasan("Memandingkan nilai kotak kuning (" + val1 + ") dengan nilai pivot " + val2 + " (kotak merah)");
        } else if (method === "TUKAR") {
          setDesk("Tukar");
          setPenjelasan("Tukar posisi pivot (" + val1 + ") dengan penanda pivot " + val2 + " (kotak hijau)");
        } else if (method === "KECIL") {
          setDesk("Lebih Kecil");
          setPenjelasan("Karena nilai (" + val1 + ") (kotak kuning) lebih kecil dibandingkan nilai pivot (" + val2 + "), maka penanda tempat pivot dipindahkan kedepannya");
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
  const highLightPseudocodeIT = (arr, code) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // * pseudocode default terlebih dahulu
        for (let i = 0; i < pseudocodeIT.length; i++) {
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

          arr[6].color = "#5a9cff";
          arr[6].colorText = "white";
        } else if (code === 3) {
          arr[7].color = "#5a9cff";
          arr[7].colorText = "white";
        } else {
          arr[8].color = "#5a9cff";
          arr[8].colorText = "white";
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
    setDisable(false);
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

  // ============================================
  // ===== METHOD UNTUK MERUBAH WARNA KOTAK =====
  // ============================================
  // >>>>>>>> Merubah warna satu kotak
  const changeColor = (arr, idx, color) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        arr[idx].color = color;
        resolve();
      }, 1000);
    });
  };
  // >>>>>> Merubah Warna jika semua sudah terurut
  const sorted = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let newArr = items;
        for (let i = 0; i < newArr.length; i++) {
          newArr[i].color = color.itIs;
        }
        setItems([...newArr]);
        resolve();
      }, 500);
    });
  };
  // ============================================

  // ===== FUNCTION SWAPPING =====

  const swapping = (array, e1, e2) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        [array[e1], array[e2]] = [array[e2], array[e1]];
        resolve();
      }, 500);
    });
  };

  //   ===== PARTITION =====

  const partition = async (start, end) => {
    // Taking the last element as the pivot
    let newArr = items;
    let newPseudo = pseudocode;
    let newPseudoIT = pseudocodeIT;

    // ubah Pseudo dan penjelasan 1
    await highLightPseudocode(newPseudo, 1);
    await highLightPseudocodeIT(newPseudoIT, 0);
    setPseudocode(newPseudo);
    setPseudocodeIT(newPseudoIT);

    await ubahPenjelasan("Tentukan", newArr[end].val, "");
    // ========================

    const pivotValue = newArr[end];
    await changeColor(newArr, end, color.iteration);
    setItems([...newArr]);
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
      // ubah Pseudo dan penjelasan (CHECK)
      await highLightPseudocode(newPseudo, 2);
      await highLightPseudocodeIT(newPseudoIT, 1);
      setPseudocode(newPseudo);
      setPseudocodeIT(newPseudoIT);
      await ubahPenjelasan("CEK", newArr[i].val, pivotValue.val);
      // ========================

      await changeColor(newArr, pivotIndex, "#43C395");
      setItems([...newArr]);
      await changeColor(newArr, i, color.identify);
      setItems([...newArr]);
      if (newArr[i].val < pivotValue.val) {
        // ubah Pseudo dan penjelasan KECIL
        await highLightPseudocode(newPseudo, 3);
        await highLightPseudocodeIT(newPseudoIT, 2);
        setPseudocode(newPseudo);
        setPseudocodeIT(newPseudoIT);
        await ubahPenjelasan("KECIL", newArr[i].val, pivotValue.val);
        // ========================

        // Swapping elements
        await swapping(newArr, i, pivotIndex);
        setItems([...newArr]);
        await changeColor(newArr, pivotIndex, color.default);

        // Moving to next element
        pivotIndex++;
      }
      await changeColor(newArr, i, color.default);
      setItems([...newArr]);
    }
    // ubah Pseudo dan penjelasan TUKAR
    await highLightPseudocode(newPseudo, 4);
    await highLightPseudocodeIT(newPseudoIT, 3);
    setPseudocode(newPseudo);
    setPseudocodeIT(newPseudoIT);
    await ubahPenjelasan("TUKAR", pivotValue.val, newArr[pivotIndex].val);
    // ========================
    // Putting the pivot value in the middle
    await swapping(newArr, pivotIndex, end);
    await changeColor(newArr, end, color.default);
    await changeColor(newArr, pivotIndex, color.itIs);
    setItems([...newArr]);
    setItems([...newArr]);

    // Reset Pseudo IT
    await highLightPseudocodeIT(newPseudoIT, 4);
    setPseudocodeIT([...newPseudoIT]);
    // ====================
    return pivotIndex;
  };
  // ================================
  // ============= QUICK SORT =============
  const quickSortIterative = async () => {
    setDisable(true);
    //Membuat Array untuk penampung daerah menggunakan push() dan pop() functions
    let stack = [];
    let newPseudo = pseudocode;
    let newPseudoIT = pseudocodeIT;
    await highLightPseudocode(newPseudo, 0);
    setPseudocode([...newPseudo]);
    // inisialisasi daerah pivot
    stack.push(0);
    stack.push(items.length - 1);

    // Looping hingga array terurut
    while (stack[stack.length - 1] >= 0) {
      // mengekstrak subarray
      let end = stack.pop();
      let start = stack.pop();

      // Ubah Pseudocode IT
      await highLightPseudocodeIT(newPseudoIT, 0, null);
      setPseudocodeIT([...newPseudoIT]);
      // =====================

      let pivotIndex = await partition(start, end);

      // Membuat subarray sebelah kiri pivot
      if (pivotIndex - 1 > start) {
        stack.push(start);
        stack.push(pivotIndex - 1);
      }

      // Membuat subarray sebelah kanan pivot
      if (pivotIndex + 1 < end) {
        stack.push(pivotIndex + 1);
        stack.push(end);
      }
    }
    // ubah  penjelasan SELESAI
    await ubahPenjelasan("", "", "");
    // ========================

    await sorted();
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
                    <Button disabled={disable} onClick={quickSortIterative} variant="outline-secondary">
                      Sort
                    </Button>
                    <Button onClick={emptyArray} variant="outline-secondary">
                      Reset
                    </Button>
                    <Button onClick={split} variant="dark">
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
                <p> Nilai Pembanding </p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#FF5247" h={30} scale={1} />
                <p> Pivot </p>
              </Col>
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#3FB1B5" h={30} scale={1} />
                <p> Terurut</p>
              </Col>
            </Row>
            <Row className="mainKeterangan">
              <Col className="keteranganItem" lg="3">
                <Rectangel id="" val="" color="#43C395" h={30} scale={1} />
                <p> Penanda Pivot </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mainTeoriArea">
          <Col className="mainTeori" lg="9">
            <div className="materiTeoriPendek">
              <h1>Quick Sort</h1>
              <p>
                Dalam quick sort kita akan memilih elemen untuk dipartisi array menjadi subarray. elemen yang dipilih disebut pivot. Quicksort memiliki 2 langkah, Array dipartisi di sekitar nilai pivot, membuat subarray kiri yang berisi
                elemen kurang dari atau sama dengan pivot, dan subarray kanan yang berisi elemen lebih besar dari atau sama dengan pivot. Masing-masing subarray ini kemudian diurutkan secara rekursif.
              </p>
              <div>
                <h5>Kompleksitas</h5>
                <p>
                  Best Case : O(log n)
                  <br /> Average Case : O(n log n) <br /> Worst Case : O(n^2)
                </p>
              </div>
            </div>
          </Col>

          <Col className="nextMateri" lg="2">
            <h6>Materi Sorting lainnya</h6>
            <br />
            <Button href="/InsertionSort">Insertion Sort</Button>
            <Button href="/MergeSort">Merge Sort</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
