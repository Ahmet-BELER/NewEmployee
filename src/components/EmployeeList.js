import { useContext, useEffect, useState,useRef } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Employee from './Employee';
import { EmployeeContext } from '../contexts/EmployeeContext';
import AddForm from "./AddForm";

const EmployeeList = () => {

  const Ref = useRef(null);
  //console.log(Ref)


  const onButonClik = ()=> {
   // console.log(Ref.current)
    Ref.current.focus();
  }


  const { employees } = useContext(EmployeeContext)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    handleClose()
  }, [employees])

  
   //const [count,setCount] = useState(0)


  return (

    <>

      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>Manage <b>Employees</b></h2>
          </div>
          <div className="col-sm-6">
            <Button onClick={handleShow} className="btn btn-success " data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>

          </div>
        </div>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
{

employees.map((employee) => (
  <tr key={employee.id}>
    <Employee employee={employee}/>
  </tr>
))

}



        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>
            Add New Employe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>

      </Modal>
<input ref={Ref} type="text" ></input>
<button onClick={onButonClik}>Focus</button>


    </>

  )
}

export default EmployeeList;