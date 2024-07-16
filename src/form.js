import { useState } from 'react';

function Forms(){

    const[name,setName] = useState("");
    const[errorName,setErrorName] = useState(false);
    const[errorNameMinLength,setErrorNameMinLength] = useState(false);
    const[email,setEmail] = useState("");
    const[errorEmail,setErrorEmail] = useState(false);
    const[errorValidEmail,setErrorValidEmail] = useState(false);
    const[phno,setPhno] = useState("");
    const[errorPhno,setErrorPhno] = useState(false);
    const[errorValidPhno,setErrorValidPhno] = useState(false);
    const[password,setPassword] = useState("");
    const[errorPassword,setErrorPassword] = useState(false);
    const[errorValidPassword,setErrorValidPassword] = useState(false);


    const validateForm = () => {
        console.log("-----------validateForm---------------");
        let userName = name;
        let userEmail = email;
        let userPhno = phno;
        let userPassword = password;
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let phonenoformat = /^\d{10}$/;
        let pwdformat=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,}$/;

        if(userName) {
            if(userName.length >=3){
                setErrorNameMinLength(false);
            }
            else{
                setErrorNameMinLength(true);
            }
            setErrorName(false);
           
        }
        else {
            setErrorName(true);
          
        }
        

        if(userEmail) {
            if(userEmail.match(mailformat)){
                setErrorValidEmail(false);
            }
            else{
                setErrorValidEmail(true);
            }
            setErrorEmail(false);
           
        }
        else {
            setErrorEmail(true);
            
        }


        if(userPhno) {
            if(userPhno.match(phonenoformat)){
                setErrorValidPhno(false);
            }
            else{
                setErrorValidPhno(true);
            }
            setErrorPhno(false);
          
        }
        else {
            setErrorPhno(true);
          
        }


        if(userPassword) {
            if(userPassword.match(pwdformat)){
                setErrorValidPassword(false);
            }
            else{
                setErrorValidPassword(true);
            }
            setErrorPassword(false);
           
        }
        else {
            setErrorPassword(true);
           
        }


    }

    const handleInput = (e) => {
        console.log("-----------handleInput---------------",e.target.value);
        let value = e.target.value;
        let id = e.target.id;
        if(id == 'name')
            setName(value);
        if(id == 'email')
            setEmail(value);
        if(id == 'phno')
            setPhno(value);
        if(id == 'password')
            setPassword(value);

    }

    return(
        <section className="forms p-lg-5 p-0" id="form">
            <div className="conatiner py-md-3 py-2">
                <div className="row m-lg-0 m-3">

                    <div className="col-lg-4"></div>

                    <div className="col-lg-4 col-12 p-5 formbg rounded">
                        <h1>Sign in</h1>
                        <div className="mb-2">
                            <label className="d-flex justify-content-Start text-success">UserName:</label>
                            <input type="text" className="col-12 p-2 border border-primary border-2 rounded" id="name" value={name} onChange={handleInput} placeholder="Enter UserName"/>
                            {errorName?<label className="d-flex justify-content-Start text-danger" >UserName Required</label>:""}
                            {errorNameMinLength?<label className="d-flex justify-content-Start text-danger" >Enter Atleast 4 Character</label>:""}
                        </div>
                       
                        <div className="mb-2">
                            <label className="d-flex justify-content-Start text-success">Email:</label>
                            <input type="text" className="col-12 p-2 border border-primary border-2 rounded" value={email} onChange={handleInput}  id="email" placeholder="Enter your Email" /> 
                            {errorEmail?<label className="d-flex justify-content-Start text-danger" >Email is Required</label>:""}
                            {errorValidEmail?<label className="d-flex justify-content-Start text-danger" >Enter a Valid Email</label>:""}
                        </div>
                      
                        <div className="mb-2">
                            <label className="d-flex justify-content-Start text-success">Phone:</label>
                            <input type="number" className="col-12 p-2 border border-primary border-2 rounded" id="phno" onChange={handleInput} value={phno}  placeholder="Enter Phone Number" /> 
                            {errorPhno?<label className="d-flex justify-content-Start text-danger" >Phone Number is Required</label>:""}
                            {errorValidPhno?<label className="d-flex justify-content-Start text-danger" >Minimum 10 Numbers Required!</label>:""}
                        </div>
                       
                        <div className="mb-2">
                            <label className="d-flex justify-content-Start text-success">Password:</label>
                            <input type="text" className="col-12 p-2  border border-primary border-2 rounded" onChange={handleInput} id="password" value={password} placeholder="Enter your Password" /> 
                            {errorPassword?<label className="d-flex justify-content-Start text-danger" >Password is Required</label>:""}
                            {errorValidPassword?<label className="d-flex justify-content-Start text-danger" >Password must be(8)char</label>:""}
                        </div>

                        <div>
                            <input type="submit" className="btn mt-4 py-2 px-4 bg-success border border-success border-2 rounded" onClick={validateForm} id="submit" value="Submit"/>
                        </div>
                    </div>

                    <div className="col-lg-4"></div>
                    
                </div>
            </div>
      </section>
    )
}
export default Forms;