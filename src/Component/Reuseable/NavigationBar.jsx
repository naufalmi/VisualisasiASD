import React, { useState } from "react";
import { Nav, Navbar, Container, NavDropdown, Modal, Button, Badge, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";

export const NavigationBar = () => {
  // TOGGEL MODAL
  const [show, setShow] = useState(false);

  return (
    <div>
      <Navbar className="nav-bar" bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link className="nav-link brand" to="/">
              VISUALISASI ALGORITMA
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Struktur Data" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="nav-link" to="/Stack">
                    Stack
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/Queue">
                    Queue
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/PriorityQueue">
                    Priority Queue
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/DoublyLinkedList">
                    Doubly Linked List
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Algoritma Sorting" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="nav-link" to="/InsertionSort">
                    Insertion Sort
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/QuickSort">
                    Quick Sort
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/MergeSort">
                    Merge Sort
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Algoritma Searching" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="nav-link" to="/SequentialSearch">
                    Sequential Search
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="nav-link" to="/BinarySearch">
                    Binary Search
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Button size="sm" variant="outline-info" onClick={() => setShow(true)}>
              Tutorial
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal
        // SETTING MODAL
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Cara Penggunaan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="itemModal">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>
                  <Badge variant="warning">Untuk Algoritma Sorting dan Searching</Badge>
                </h4>
                <dl>
                  <dt>
                    <h5>Input</h5>
                  </dt>
                  <dd>• Masukan angka yang dipisah menggunakan koma</dd>
                  <dd>
                    <span>contoh : </span> 43,65,79, dst
                  </dd>
                  <dd>
                    • setelah memasukan angka yang diinginkan, tekan tombol <span> Input</span>
                  </dd>
                  {/* >>>>> RULE */}
                  <dd>
                    • <Badge variant="danger">Penting</Badge> khusus untuk <span>Binary Search</span>, input harus angka yang sudah terurut.
                  </dd>
                </dl>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>
                  <Badge variant="warning">Untuk Doubly Linked List</Badge>
                </h4>
                <dl>
                  <dt>
                    <h5>Input</h5>
                  </dt>
                  <dd>• Untuk method add after memiliki 2 parameter. yang pertama adalah posisi yang diingkan dan yang kedua adalah nilai dari node. Masukan input yang dipisahkan dengan koma.</dd>
                  <dd>
                    <span>contoh : </span> 2,5 ; Maka dengan input seperti itu, akan membuat node yang bernilai 5 di posisi ke 2.
                  </dd>
                </dl>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
