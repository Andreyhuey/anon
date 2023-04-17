// import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
// import React from "react";
import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  //   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email || !subject || !message) {
      return toast.error("Please fill email, subject and message");
    }

    try {
      setLoading(true);
      const { data } = await axios.post(`/api/email`, {
        email,
        subject,
        message,
      });

      setLoading(false);
      toast.success(data.message);
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  return (
    <div name="contact" className="w-full text-white my-24">
      <ToastContainer position="bottom-center" limit={1} />
      <div className="w-full h-[] bg-slate-900 mix-blend-overlay">
        <div className="max-w-[1240px] mx-auto py-12 md:px-24">
          <div className="text-center py-8 text-slate-300">
            <h2 className="text-3xl uppercase">Contact</h2>
            <h3 className="text-4xl text-white py-8 font-bold">
              Send an enquiry and we will get back to yoou
            </h3>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
            <form onSubmit={submitHandler}>
              {/* <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter Name"
                className="w-full p-2 mr-4 rounded-md mb-4 bg-slate text-"
                onChange={(e) => setName(e.target.value)}
              /> */}
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 mr-4 rounded-md mb-4 bg-slate text-blue"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="Enter Subject"
                className="w-full p-2 mr-4 rounded-md mb-4 bg-slate text-blue"
                onChange={(e) => setSubject(e.target.value)}
              />
              <label htmlFor="message">Message</label>
              <input
                id="message"
                type="text"
                placeholder="Enter Message"
                className="w-full h-40 p-2 mr-4 rounded-md mb-4 bg-slate text-blue"
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="rounded-md mb-4 p-2 text-black"
                disabled={loading}
                type="submit"
              >
                {loading ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
