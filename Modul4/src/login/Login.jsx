import React, {Component} from 'react';
import './Login.css';

class Login extends Component{
    render(){
        return(
            <div className="Login">
                <h2>Form Login</h2>
                    <form>
                        <div className="imgcontainer">
                            <label><b>Tugas Pertemeuan Ke Tiga</b></label>
                        </div>

                    <div className="container">
                        <label><b>Username</b></label>
                        <input type="text" name="uname" placeholder="Enter Username" required/>

                        <label><b>Password</b></label>
                        <input type="password" name="psw" placeholder="Enter Password" required/>

                        <button type="submit">Login</button>
                        <input type="checkbox" defaultChecked/>Remember me
                    </div>

                    <div className="container" style={{backgroundColor:'#f1f1f1'}}>
                        <button type="button" className="cancelbtn">Cancel</button>
                        <span className="psw">Forget Password</span>
                    </div>
                </form>
            </div>
        );
    }
}
export default Login;