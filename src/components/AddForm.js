
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useState } from "react";

const AddForm = () => {

    const { addEmployee } = useState(EmployeeContext)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormControl
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
            </FormGroup>

            <FormGroup>
                <FormControl
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
            </FormGroup>

            <FormGroup>
                <FormControl
                    as="textarea"
                    placeholder="adress"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    rows={3}
                />
            </FormGroup>

            <FormGroup>
                <FormControl
                    type="text"
                    placeholder="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}

                />
            </FormGroup>
            <Button variant="success" type="submit" block>
                Add New Employe

            </Button>
        </Form>
    )
};



export default AddForm; 