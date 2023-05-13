import React from "react";
import Bannar from "../Shared/Bannar/Bannar";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvidor/AuthProvidor";
import toast, { Toaster } from "react-hot-toast";

const CheckOut = () => {
  const navigate = useNavigate();
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const formData = {
      ...data,
      img: loadedData?.img,
      logMail: user?.email,
      price: loadedData?.price,
    };

    fetch("http://localhost:5000/checkout", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          toast.success("Successfully added !!!!");
          navigate("/");
        }
      });
  };
  return (
    <section id="checkout">
      <Bannar heading={`Check Out for ${loadedData.title}`}></Bannar>
      <div className="checkoutForm py-20">
        <div className="mycontainer">
          <div className="checkoutForm-wrapper bg-[#F3F3F3] rounded-md p-16">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="loginblock mb-5">
                <input
                  {...register("name")}
                  className="block bg-white w-full border border-gray-300 rounded-md px-4 py-3 outline-0 mt-2"
                  type="text"
                  required
                  placeholder="Your name"
                  defaultValue={user?.displayName}
                />
              </div>
              <div className="loginblock mb-5">
                <input
                  {...register("email")}
                  className="block bg-white w-full border border-gray-300 rounded-md px-4 py-3 outline-0 mt-2"
                  type="email"
                  required
                  placeholder="Your Email"
                  defaultValue={user?.email}
                />
              </div>
              <div className="loginblock mb-5">
                <input
                  {...register("phone")}
                  className="block bg-white w-full border border-gray-300 rounded-md px-4 py-3 outline-0 mt-2"
                  type="text"
                  required
                  placeholder="Your Phone"
                />
              </div>
              <div className="loginblock mb-5">
                <input
                  {...register("data")}
                  className="block bg-white w-full border border-gray-300 rounded-md px-4 py-3 outline-0 mt-2"
                  type="date"
                  required
                  placeholder="Your Email"
                />
              </div>
              <button
                className="bg-[#FF3811] border-2 border-[#FF3811] text-white py-3 px-6 inline-block w-full rounded-sm"
                type="submit"
              >
                Order Confirm
              </button>
            </form>
          </div>
          <Toaster />
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
