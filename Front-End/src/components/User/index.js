import axios from "axios"
import { useEffect, useState } from "react"
import { Table, Button, Form, Modal, Caption } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';
import("./style.css")





const Alluser = () => {


    const current = new Date().toLocaleDateString('en-CA')


    const [massege, setMassege] = useState("");


    const [all, setAll] = useState([]);
    const [update, setUpdate] = useState([])
    const [userid, setuser] = useState("")
    const [ref, setref] = useState(true)

    //update
    // Name, Mobile, Email, Country, City, Date_of_Birth, Contract_Start_Date, Contract_End_Date, Status
    const [Name, setName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Email, setEmail] = useState("");
    const [Country, setCountry] = useState("");
    const [City, setCity] = useState("");
    const [Date_of_Birth, setDate_of_Birth] = useState("");
    const [Contract_Start_Date, setContract_Start_Date] = useState("");
    const [Contract_End_Date, setContract_End_Date] = useState("");
    const [Status, setis_Status] = useState("");
    const [test, Settst] = useState("")

    //to model
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getAll = async () => {
        await axios.get("http://localhost:5000/user").then((reslut) => {
            let res = reslut.data.result;
            setUpdate(res)
            setAll(res)
            console.log(reslut.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    const deleteuser = async (id) => {
        await axios.put(`http://localhost:5000/user/delete/${id}`).then((result) => {
            getAll()
        }).catch((err) => {
            console.log(err);
        })
    }

    const updateuser = async (id, Status) => {
        console.log(Status);
        await axios.put(`http://localhost:5000/user/update/${id}`, {
            Name, Mobile, Email, Country, City, Date_of_Birth, Contract_Start_Date, Contract_End_Date, Status, id
        }).then((result) => {
            console.log(result);
            ref ? setref(false) : setref(true)
            getAll()


        }).catch((err) => {
            console.log(err);
        })
    }


    useEffect(() => {
        getAll()
    }, [ref])


    return <div className="apple">

        <div className="ddd"><p>index</p></div>
        <Table striped bordered hover responsive="md">
            <thead>
                {/* <caption>Index</caption> */}
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>City</th>
                    <th>Date_of_Birth</th>
                    <th>Contract_Start_Date</th>
                    <th>Contract_End_Date</th>
                    <th>Status</th>
                    <th>update/delete</th>
                </tr>

            </thead>
            {all && all.map((element, index) => {
                return <tbody key={element.id}>
                    <tr>
                        <td>{element.Name}</td>
                        <td>{element.Mobile}</td>
                        <td>{element.Email}</td>
                        <td>{element.Country}</td>
                        <td>{element.City}</td>
                        <td>{element.Date_of_Birth?.slice(0, 10)}</td>
                        <td>{element.Contract_Start_Date?.slice(0, 10)}</td>
                        <td>{element.Contract_End_Date?.slice(0, 10)}</td>
                        <td>{element.is_Status}</td>
                        <td > <Button variant="primary" className="kkk" onClick={() => {
                            console.log("fromupdate");
                            handleShow()
                            setuser(element.id)
                            setName(element.Name)
                            setMobile(element.Mobile)
                            setEmail(element.Email)
                            setCountry(element.Country)
                            setCity(element.City)
                            setDate_of_Birth(element.Date_of_Birth)
                            setContract_Start_Date(element.Contract_Start_Date)
                            setContract_End_Date(element.Contract_End_Date)
                            // setis_Status(element.is_Status)
                        }}>
                            update
                        </Button>

                            <Button variant="primary" onClick={() => {
                                deleteuser(element.id)
                            }}>delete</Button></td>
                    </tr>
                </tbody>
            })}
        </Table>


        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>update heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                                type="text"
                                value={Name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={(e) => {
                                    setMobile(e.target.value)
                                }}
                                type="text"
                                value={Mobile}

                            />
                            {/* Name, Mobile, Email, Country, City, Date_of_Birth, Contract_Start_Date, Contract_End_Date, Status */}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                type="text"
                                value={Email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={(e) => {
                                    setCountry(e.target.value)
                                }}
                                type="text"
                                value={Country}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={(e) => {
                                    setCity(e.target.value)
                                }}
                                type="text"
                                value={City}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={(e) => {
                                    setDate_of_Birth(e.target.value)
                                }}
                                type="date"
                                value={Date_of_Birth}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={(e) => {
                                    setContract_Start_Date(e.target.value)
                                }}
                                type="date"
                                value={Contract_Start_Date}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={(e) => {
                                    setContract_End_Date(e.target.value)
                                }}
                                type="date"
                                value={Contract_End_Date}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onChange={(e) => {
                                    setis_Status(e.target.value)
                                    console.log(Status);
                                }}
                                type="text"
                                readOnly
                                value={Status}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={() => {
                        if (Contract_End_Date > Contract_Start_Date) {
                            if (current >= Contract_Start_Date && current < Contract_End_Date) {

                                handleClose()
                                console.log("active", "active");
                                updateuser(userid, "active")
                            } else {
                                setis_Status("not_active")
                                updateuser(userid, "not_active")
                                console.log("asdadsw2222", "not_active");
                                handleClose()
                            }
                        } else {
                            setMassege("Invalid date range")
                        }
                    }}>
                        Save Changes
                    </Button>
                    <h3>{massege}</h3>
                </Modal.Footer>
            </Modal>
        </div>
    </div >
}

export default Alluser;