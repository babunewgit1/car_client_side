import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvidor/AuthProvidor";
import Bannar from "../Shared/Bannar/Bannar";
import cross from "../../Assets/cross.png";
import toast, { Toaster } from "react-hot-toast";

const Booking = () => {
  const { user } = useContext(AuthContext);
  const [load, setLoad] = useState(true);
  const url = `http://localhost:5000/checkout?logMail=${user?.email}`;
  console.log(url);
  const [booking, setBooking] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [load]);

  const handelDelete = (id) => {
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setLoad(!load);
          toast.success("Delete successfull");
        }
      });
  };

  const updateStatus = (id) => {
    fetch(`http://localhost:5000/checkout/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          setLoad(!load);
          toast.success("Order confirmed!!");
        }
      });
  };

  console.log(booking);

  return (
    <div className="cartDetails">
      <Bannar heading="Cart Details"></Bannar>
      <div className="cartitems">
        <div className="mycontainer">
          <div className="cartItems-wraper bg-slate-400 p-24 mt-11">
            {booking.map((item) => {
              return (
                <div
                  className="cartItemsOne shadow-lg p-8 mt-6 bg-white rounded-md flex items-center justify-between"
                  key={item._id}
                >
                  <div className="delete">
                    <button onClick={() => handelDelete(item._id)}>
                      <img src={cross} alt="delete icon" />
                    </button>
                  </div>
                  <div className="cartDetails flex items-center gap-7">
                    <img className="block w-[320px]" src={item?.img} alt="" />
                    <div className="cartDetailstext">
                      <h3>{item.data}</h3>
                      <h2>{item.price}</h2>
                    </div>
                  </div>
                  <div className="cartStatus">
                    {item.status ? (
                      <span className="bg-success text-white px-6 py-2">
                        Confirmed
                      </span>
                    ) : (
                      <button
                        onClick={() => updateStatus(item._id)}
                        className="redbutton"
                      >
                        Click to confirm
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default Booking;
