import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const fileInputRef = useRef(null);

  const handleUpload = () => {
    fileInputRef.current.click();
  };

  const handleRegister = () => {
    // Perform registration actions here
    
    // Redirect to the login page
    history.push("/login");
  };

  return (
   <section className="signup">
    <div className="container mt-5">
      <div className="signup-content">
        <div className="signup-form">
          <h2 className="form-title">Sign Up</h2>
          <form className="register-form" id="register-form">

            <div className="form-group">
              <label htmlFor="name">
                <i class="zmdi zmdi-account material-icons-name"></i>
              </label>
              <input type="text" name="name" id="name" autoComplete="off" placeholder="Name"/>
            </div>

            <div className="form-group">
              <label htmlFor="Email">
                <i class="zmdi zmdi-email material-icons-name"></i>
              </label>
              <input type="Email" name="Email" id="Email" autoComplete="off" placeholder="Email"/>
            </div>

            <div className="form-group">
              <label htmlFor="Phone">
                <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
              </label>
              <input type="Number" name="Number" id="Number" autoComplete="off" placeholder=" Phone Number"/>
            </div>

            <div className="form-group">
              <label htmlFor="Bank Account Number">
                <i class="zmdi zmdi-balance material-icons-name"></i>
              </label>
              <input type="text" name="text" id="text" autoComplete="off" placeholder="Account No."/>
            </div>

            <div className="form-group">
              <label htmlFor="Password">
                <i class="zmdi zmdi-lock material-icons-name"></i>
              </label>
              <input type="Password" name="Password" id="Password" autoComplete="off" placeholder="Password"/>
            </div>

            <div className="form-group form-button">
              <h4>Upload your Palm Image</h4>
              <input type="file" name="file" id="file" ref={fileInputRef} style={{ display: "none" }} />
              <input type="submit" name="signup" id="signup" className="form-submit" value="Upload"  onClick={handleUpload} />
            </div>
            <div className="form-group form-button">
              <input type="submit" name="signup" id="signup" className="form-submit1" value="Register" onClick={handleRegister} />
            </div>

          </form>
          </div>

          <div className="signup-img">

            <img
                src="./images/signupimg.jpg"
                alt="signupimg"
                className="img-fluid"
              />
          
            <div/>
      </div>
    </div>
    </div>

   </section>
    
  );
};

export default Signup;