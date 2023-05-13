import React, { useContext } from "react";
import login from "../../Assets/login.png";
import s1 from "../../Assets/s1.png";
import s2 from "../../Assets/s2.png";
import s3 from "../../Assets/s3.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvidor/AuthProvidor";
import toast, { Toaster } from "react-hot-toast";

const SignIn = () => {
  const { register, handleSubmit } = useForm();
  const { loginuser, signIngoogle, signInGithub } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    loginuser(data.email, data.password)
      .then(() => {
        toast.success("Login Successfull!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const gSignIn = () => {
    signIngoogle()
      .then((result) => {
        const user = result.user;
        toast.success("LogIn successfull!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const gitSignInAuto = () => {
    signInGithub()
      .then((result) => {
        const user = result.user;
        toast.success("LogIn successfull!!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <section id="login" className="py-16">
      <div className="mycontainer">
        <div className="loginWrapper items-center grid grid-cols-2 gap-10">
          <div className="loginLeft">
            <img className="block w-full" src={login} alt="login images" />
          </div>
          <div className="loginRight border border-gray-300 rounded-md p-12">
            <h2 className="text-3xl font-semibold text-center mb-7">Sign Up</h2>
            <div className="loginForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="loginblock mb-5">
                  <label className="block font-semibold text-[#444444]">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    className="block bg-white w-full border border-gray-300 rounded-md px-4 py-3 outline-0 mt-2"
                    type="email"
                    required
                    placeholder="Your email"
                  />
                </div>
                <div className="loginblock mb-5">
                  <label className="block font-semibold text-[#444444]">
                    Password
                  </label>
                  <input
                    autoComplete="off"
                    {...register("password")}
                    className="block bg-white w-full border border-gray-300 rounded-md px-4 py-3 outline-0 mt-2"
                    type="password"
                    required
                    placeholder="Your Password"
                  />
                </div>
                <button type="submit" className="redbutton w-full">
                  Sign In
                </button>
              </form>
            </div>
            <div className="socialLogin text-center mt-5">
              <p className="font-semibold">Or Sign In with</p>
              <ul className="flex gap-4 justify-center mt-5">
                <li>
                  <button onClick={gitSignInAuto}>
                    <img className="w-10 h-10" src={s1} alt="social login" />
                  </button>
                </li>
                <li>
                  <button onClick={gSignIn}>
                    <img className="w-10 h-10" src={s3} alt="social login" />
                  </button>
                </li>
              </ul>
              <p className="mt-7">
                New User?
                <Link
                  className="inline-block text-red-600 font-bold"
                  to="/signup"
                >
                  <span> Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Toaster></Toaster>
      </div>
    </section>
  );
};

export default SignIn;
