
import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
export const Recuired=()=>{
    const[person,setPerson]=useState({
        "StudentName":"",
        "StudentAge":0,
        "SelectDepartment":"",
        "resSkills":new Array()
    })

    const track=(manoj)=>{
        const{name,value}=manoj.target
        setPerson(
            (old)=>{
                return{
                    ...old,
                    [name]:value
                }
        }
        )
    }
    const gopi=()=>{
        alert("enrolled" +JSON.stringify(person))
    }
    const dhana=()=>{
        alert("rejected")
    }
    return(
        <>
            <div className="container-fluid mt-5">
                <h1 className="text-center text-warning display-4 text-uppercase"> student details</h1>
                <div className="row justify-content-center">
                    <div className="col-1-lg7 col-md-10 col-sm-12 shaddow-lg-p-3">
                        <div className="form-group">
                            <label>student name</label>
                            <input type="text"
                                name="StudentName"
                                onChange={track}
                                value={person.StudentName}
                                placeholder="student name"
                                className="form-control"
                            />
                        </div>

                        <div className="row justify-content-between">
                            <div className="col-md-6 col-sm-12">
                                <label>student age</label>
                                <input
                                onChange={track}
                                    type="number"
                                    value={person.StudentAge}
                                    name="StudentAge"
                                    placeholder="student age"
                                    className="form-control"
                                />    
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label>select depatment</label>
                                <select name="SelectDepartment" className="form-select">
                                    onChange={track}
                                    value={person.SelectDepartment}
                                    <option>Select depatment</option>
                                    <option>it</option>
                                    <option>bca</option>
                                    <option>mach</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-check-inline">
                            <label className="me-sm-5 me-lg-5">student skill</label>
                            <input 
                                type="checkbox" 
                                name="cricket" 
                                value="sports" 
                                className="form-check-input"/>cricket
                            <input 
                                type="checkbox" 
                                name="books" 
                                value="books"
                                className="form-check-input ms-sm-5 ms-md-5 ms-lg-5"/>books
                            <input 
                                type="checkbox" 
                                name="technicalskills" 
                                value="technicalskills" 
                                className="form-check-input ms-sm-5 ms-md-5 ms-lg-5"/>technicalskills
                        </div>
                        <div className="mt-4 row justify-content-around">
                            <button onClick={gopi} className="col-2 btn btn-outline-success">enroll</button>
                            <button onClick={dhana} className="col-2 btn btn-outline-danger">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}