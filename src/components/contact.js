import { useState } from "react";
import contact from "../assets/images/Contact-Us.13c5d28a.png";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className=" flex flex-col md:flex-row items-center bg-gray-100 py-16">
      <div className="md:w-1/2 p-4">
        <img src={contact} alt="Contact Us" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 p-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Contact us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            placeholder="Type your Message here..."
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        {message && (
          <span className="text-green-500 mt-2">
            Thanks for contacting FoodFire, We will reply ASAP.
          </span>
        )}
      </div>
    </div>
  );
};

export default Contact;
