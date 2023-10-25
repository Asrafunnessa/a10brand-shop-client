/* eslint-disable no-undef */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const {signIn, googleLogIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        
        signIn(email, password)
        .then(result => {
            console.log(result.user);
              //navigate after login
              navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })

    }

    const handleGoogleLogIn = () =>{
        googleLogIn()
        .then((result) => {
            console.log(result);
        }) 
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <div>
                <h2 className="text-5xl font-bold my-10 text-center">Please Login</h2>
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleGoogleLogIn} className="btn btn-outline btn-secondary">
                            Login With Google
                        </button>
                    </div>
                </form>
                <p className="text-center mt-4">Do not have an account Please <Link className="text-blue-600 font-bold" to="/register">Register</Link></p>
            </div>



        </div>
    );
};

export default Login;