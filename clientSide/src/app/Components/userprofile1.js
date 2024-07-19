// pages/index.js

import Head from 'next/head';
import ProfileCard from '../components/ProfileCard';

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Travello </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="w-full text-white bg-blue-700">
  <div className="max-w-screen-xl px-4 mx-auto flex items-center justify-between py-4">
    <div className="flex items-center space-x-2">
      <img src="logo4.jpg" alt="Travello Logo" className="h-12 w-15" />
      <a href="#" className="text-lg font-semibold tracking-widest uppercase rounded-lg focus:outline-none focus:shadow-outline">
        Travello
      </a>
    </div>
    <div className="flex items-center space-x-4">
      <span>Abrar Hassan</span>
      <img className="inline h-10 rounded-full" src="profile1.jpg" alt="profile" />
    </div>
  </div>
</nav>



      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2">
          <ProfileCard />

          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">First Name</div>
                    <div className="px-4 py-2">Abrar</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">Hassan</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">Male</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                    <div className="px-4 py-2">+92 319xxxx78</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Current Address</div>
                    <div className="px-4 py-2">DHA Phase 8, Karachi, Pakistan</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Permanent Address</div>
                    <div className="px-4 py-2">Ali Heights, Lahore, Pakistan</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <a className="text-blue-800" href="wildlensbyabrar@gmail.com">wildlensbyabrar@gmail.com</a>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Birthday</div>
                    <div className="px-4 py-2">Jul 04, 1998</div>
                  </div>
                </div>
              </div>
              <button className="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Show Full Information
              </button>
            </div>

            <div className="my-4"></div>

            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="tracking-wide">Experience</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">Traveler & Blogger</div>
                      <div className="text-gray-500 text-xs">March 2019 - Now</div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span className="tracking-wide">Education</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">Masters Degree in Computational Mechanics.</div>
                      <div className="text-gray-500 text-xs">March 2012 - May 2014</div>
                    </li>
                    <li>
                      <div className="text-teal-600">Bachelors Degree in Aerospace </div>
                      <div className="text-gray-500 text-xs">March 2008 - Feb 2012</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
