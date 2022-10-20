import React, { useState } from "react";

import './Form.css';


const Form = () => {

    const getCurrentDate = () => {
        const date = new Date();
        let day, month, year;
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();
        const currentDate = `${year}-${month}-${day}`;
        return currentDate;
    }

    const [formValue, setFormValues] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            salary: 80000,
            dateOfBirth: getCurrentDate(),
            favouriteColour: "#fef200"
        }
    )

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValue);
    }

    return (
        <>
            <h1>👋</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-wrapper">
                    <div className="first-name-wrapper input-wrapper">
                        <label>
                            <div>First Name</div>
                            <input 
                                type="text" 
                                maxLength="100" 
                                minLength="1" 
                                required 
                                name="firstName" 
                                onChange={(e) => setFormValues({...formValue, firstName: e.target.value})}
                                value={formValue.firstName}
                                placeholder="Joe"
                            >
                            </input>
                        </label>
                    </div>
                    <div className="last-name-wrapper input-wrapper">
                        <label>
                            <div>Last Name</div>
                            <input 
                                type="text" 
                                name="lastName" 
                                maxLength="100" 
                                minLength="1" 
                                required 
                                onChange={(e) => setFormValues({...formValue, lastName: e.target.value})}
                                value={formValue.lastName}
                                placeholder="Blogs"
                            >
                            </input>
                        </label>
                    </div>
                    <div className="email-wrapper input-wrapper">
                        <label>
                            <div>Email</div>
                            <input 
                                type="email" 
                                minLength="3" 
                                onChange={(e)=> setFormValues({...formValue, email: e.target.value})}
                                required
                                name="email"
                                value={formValue.email}
                            >
                            </input>
                        </label>
                    </div>
                    <div className="dob-wrapper input-wrapper">
                        <label>
                            <div>Date Of Birth</div>
                            <input 
                                type="date"
                                min="1900-01-01" 
                                max={getCurrentDate()} 
                                required 
                                name="dob"
                                onChange={(e)=> setFormValues({...formValue, dateOfBirth: e.target.value})}
                                value={formValue.dateOfBirth}
                            >
                            </input>
                        </label>
                    </div>
                    <div className="color-wrapper input-wrapper">
                        <label>
                            <div>Favourite Colour</div>
                            <input 
                                className="color-input" 
                                autoComplete="on" 
                                required 
                                type="color" 
                                name="color"
                                onChange={(e)=> setFormValues({...formValue, favouriteColour: e.target.value})}
                                value={formValue.favouriteColour}
                            />
                        </label>
                    </div>
                    <div className="salary-wrapper input-wrapper">
                        <label>
                            <div>Salary</div>
                            <input 
                                className="salary-input" 
                                max="140000" 
                                min="0" 
                                name="salary" 
                                required 
                                step="5000"
                                type="range" onChange={(e)=> setFormValues({...formValue, salary: e.target.value})}
                                value={formValue.salary}
                            />
                            <div className="salary-range">
                                £{formValue.salary}
                            </div>
                        </label>
                    </div>
                    <div className="submit-wrapper">
                        <button className="form-submit-button" type="submit">Send</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form;

