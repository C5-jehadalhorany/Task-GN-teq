import axios from "axios"
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import("./style.css")
const Adduser = () => {
    const [Name, setName] = useState("");
    const [Mobile, setMobile] = useState("");
    const [Email, setEmail] = useState("");
    const [Country, setCountry] = useState("");
    const [City, setCity] = useState("");
    const [Date_of_Birth, setDate_of_Birth] = useState("");
    const [Contract_Start_Date, setContract_Start_Date] = useState("");
    const [Contract_End_Date, setContract_End_Date] = useState("");
    const [is_Status, setis_Status] = useState("");


    const [massege, setMassege] = useState("");

    const navigate = useNavigate();
    const current = new Date().toLocaleDateString('en-CA')

    const adduser = () => {
        console.log(Name, Mobile, Email);
        axios.post("http://localhost:5000/user", {
            Name,
            Mobile,
            Email,
            Country,
            City,
            Date_of_Birth,
            Contract_Start_Date,
            Contract_End_Date,
        }).then((result) => {
            navigate("/")
        }).catch((err) => {
            console.log(err);
        })
    }

    const handeladduser = () => {

        console.log(Contract_End_Date > Contract_Start_Date)
        if (Contract_End_Date > Contract_Start_Date) {
            if (current > Contract_Start_Date && current < Contract_End_Date) {
                console.log(2222, true);
                setis_Status("active")
                adduser()
            } else {
                setis_Status("not_active")
                adduser()
            }
        } else {
            setMassege("Invalid date range")
        }
    }

    useEffect(() => {
        adduser()
    }, [])
    // Name, Mobile, Email, Country, City, Date_of_Birth, Contract_Start_Date, Contract_End_Date, Status
    return <div className="center">
        <h3>Add user</h3>
        <div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Enter Name"
                        onChange={(e) => {

                            setName(e.target.value)
                        }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Mobile"
                        onChange={(e) => {
                            setMobile(e.target.value)
                        }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter Country"
                        onChange={(e) => {
                            setCountry(e.target.value)
                        }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter City"
                        onChange={(e) => {
                            setCity(e.target.value)
                            console.log(City);
                        }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="date" placeholder="Enter Date_of_Birth"
                        onChange={(e) => {
                            setDate_of_Birth(e.target.value)
                        }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="date" placeholder="Enter Contract_Start_Date"
                        onChange={(e) => {
                            setContract_Start_Date(e.target.value)
                        }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="date" placeholder="Enter Contract_End_Date"
                        onChange={(e) => {
                            setContract_End_Date(e.target.value)
                        }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Status"
                        onChange={(e) => {
                            setis_Status(e.target.value)
                        }} />
                </Form.Group>
                <Button variant="primary" type="button"
                    onClick={() => {
                        console.log(false);
                        handeladduser()
                    }}>
                    Submit
                </Button>
            </Form>
        </div>
    </div>

}

export default Adduser