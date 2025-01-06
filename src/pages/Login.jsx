import { useContext, useEffect, useState } from "react";
import coverImg from "../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  // const [showPassword, setShowPassword] = useState(false);
  const { signIn } = useContext(AuthContext);

  // const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "User Login successfully",
      });
      navigate(location?.state ? location.state : "/");
      console.log(location.state);
      
    });
  };

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Bistro | Sign In</title>
      </Helmet>
      <div className="hero bg-[url('https://i.ibb.co.com/1KtTyqx/authentication.png')] min-h-screen">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={coverImg} alt="" />
          </div>
          <div className="card bg-[url('https://i.ibb.co.com/1KtTyqx/authentication.png')] md:w-1/2 max-w-sm shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  // type={showPassword ? "text" : "password"}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                {/* <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn btn-xs absolute right-10 top-44"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button> */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="type the text you see above"
                  className="input input-bordered"
                  required
                />
                {/* <button
                  className="btn btn-outline btn-xs mt-3"
                >
                  Validate
                </button> */}
              </div>
              <div className="form-control mt-6">
                {/* TODO: apply disabled for captcha */}
                <input
                  className="btn text-white bg-[#d19f54ce] hover:bg-[#D1A054]"
                  disabled={disabled}
                  type="submit"
                  value="Login"
                />
              </div>
              <p className="text-[#D1A054] text-center font-semibold">
                <small>
                  New Here?{" "}
                  <Link className="font-bold" to="/signUp">
                    Create a New Account
                  </Link>
                </small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
