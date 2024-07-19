import Head from "next/head";
import "../src/app/globals.css";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 py-16 flex items-center">
      <Head>
        <title>Contact Us - Travello</title>
      </Head>
      <div className="container mx-auto px-6 text-gray-100 md:px-12 xl:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our
            app, need assistance, or just want to share your travel experiences,
            we're here to help.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center lg:items-start gap-12">
          <div className="lg:w-1/2 xl:w-5/12">
            <form className="bg-white rounded-xl shadow-2xl p-8 text-gray-800">
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  rows="6"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-white mb-4">
              Contact Information
            </h3>
            <p className="text-lg text-gray-200 mb-6">
              Feel free to reach out to us through any of the following
              channels. We aim to respond to all inquiries within 24 hours.
            </p>
            <div className="space-y-4">
              <p className="text-lg text-gray-200">
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:support@travellogapp.com" className="underline">
                  support@travelloapp.com
                </a>
              </p>
              <p className="text-lg text-gray-200">
                <span className="font-semibold">Phone:</span>{" "}
                <a href="tel:+1234567890" className="underline">
                  +92 3015294124
                </a>
              </p>
              <p className="text-lg text-gray-200">
                <span className="font-semibold">Address:</span>Travel Road,
                Adventure City, Karachi 56789
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
