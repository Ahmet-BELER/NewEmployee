
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useState,useContext } from "react";

const AddForm = () => {

    const { addEmployee } = useContext(EmployeeContext);

    /*const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");*/
   
    const [newEmployee, setNewEmployee] = useState(
        {name:"",email:"",phone:"",address:""}
        );

        
    const {name,email,address,phone} = newEmployee;


    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }
const onInputChange = (e)=> {
    setNewEmployee({...newEmployee,[e.target.name]:e.target.value})
}

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <FormControl
                    type="text"
                    placeholder="name"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e)}
                    required
                />
            </FormGroup>

            <FormGroup>
                <FormControl
                    type="email"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e)}
                    required
                />
            </FormGroup>

            <FormGroup>
                <FormControl
                    as="textarea"
                    placeholder="address"
                    name="address"
                    value={address}
                    onChange={e => onInputChange(e)}
                    rows={3}
                />
            </FormGroup>

            <FormGroup>
                <FormControl
                    type="number"
                    placeholder="phone"
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e)}

                />
            </FormGroup>
            <Button variant="success" type="submit" block>
                Add New Employe

            </Button>
        </Form>
    )
};



export default AddForm; 