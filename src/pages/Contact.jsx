import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      name,
      email,
      message,
    };

    try {
      const { status } = await axios.post(import.meta.env.VITE_APP_URL, data);

      if (status === 200) {
        setName("");
        setEmail("");
        setMessage("");
        setIsLoading(false);
        Swal.fire(
          "Thank You!",
          "I will try to answer as soon as possible.",
          "success"
        );
      }
    } catch (error) {
      console.error("Error is - " + error);
      Swal.fire(
        "Error",
        "An error occurred while processing your request. Please try again later.",
        "error"
      );
    }
  };
  return (
    <div>
      <section className="dark:bg-gray-800 text-gray-900 dark:text-gray-200 body-font relative font-roboto_slob font-bold">
        <div className="container px-5 min-h-screen mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 h-[600px] mt-8 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29331.06097488066!2d87.04244626113761!3d23.229159707857008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7a58c5fc2b411%3A0xfdbd0b45c0b4aa70!2sBankura%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1693398844360!5m2!1sen!2sin"
            ></iframe>

            <div className="bg-white dark:bg-gray-800 rounded-lg relative flex flex-wrap py-6 shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-bold font-serif tracking-widest">
                  ADDRESS
                </h2>
                <p className="mt-1">Bankura, West Bengal, India</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-bold font-serif tracking-widest">
                  EMAIL
                </h2>
                <a
                  href="mailto:hello@dsourav.com"
                  className="text-indigo-500 leading-relaxed"
                >
                  hello@dsourav.com
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h1 className="text-3xl mb-1 font-bold font-mono title-font">
              Any question
            </h1>
            <p className="leading-relaxed mb-5 ">
              Type your question here. I will try to answer as soon as possible.
            </p>
            <form onSubmit={onSubmitHandle} className="mb-4 sm:mb-0">
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="You email address"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message..."
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              {isLoading ? (
                <button
                  type="button"
                  className="px-4 py-2 bg-indigo-500 text-white border rounded-md"
                  disabled
                >
                  <svg
                    aria-hidden="true"
                    className="inline w-6 h-8 mr-3 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  Sending...
                </button>
              ) : (
                <button
                  type="submit"
                  className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                  Send
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;