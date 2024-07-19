import Link from "next/link";

const CustomLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <span className="text-gray-400 hover:text-gray-500 cursor-pointer px-4">
        {children}
      </span>
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2 mb-8">
          <CustomLink href="/AboutUs">About</CustomLink>
          <CustomLink href="/blog">Blog</CustomLink>
          <CustomLink href="/Teams">Team</CustomLink>
          <CustomLink href="/Pricing">Pricing</CustomLink>
          <CustomLink href="/Contact">Contact</CustomLink>
          <CustomLink href="/Terms">Terms</CustomLink>
        </nav>

        <div className="flex justify-center mb-8">
          <a
            href="https://web.facebook.com/?_rdc=1&_rdr"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Facebook</span>
            <svg  
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Instagram</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.568 0-2.913.011-3.937.058-.896.04-1.383.191-1.705.317-.429.166-.733.364-1.056.686-.322.323-.52.627-.686 1.056-.126.322-.277.809-.317 1.705-.047 1.024-.058 1.369-.058 3.937v.468c0 2.568.011 2.913.058 3.937.04.896.191 1.383.317 1.705.166.429.364.733.686 1.056.323.322.627.52 1.056.686.322.126.809.277 1.705.317 1.024.047 1.369.058 3.937.058h.468c2.568 0 2.913-.011 3.937-.058.896-.04 1.383-.191 1.705-.317.429-.166.733-.364 1.056-.686.322-.323.52-.627.686-1.056.126-.322.277-.809.317-1.705.047-1.024.058-1.369.058-3.937v-.468c0-2.568-.011-2.913-.058-3.937-.04-.896-.191-1.383-.317-1.705a3.1 3.1 0 00-.686-1.056 3.1 3.1 0 00-1.056-.686c-.322-.126-.809-.277-1.705-.317-1.024-.047-1.369-.058-3.937-.058zM12 7.284a4.716 4.716 0 110 9.432 4.716 4.716 0 010-9.432zm0 1.802a2.915 2.915 0 100 5.83 2.915 2.915 0 000-5.83zm5.836-.266a1.09 1.09 0 11-2.18 0 1.09 1.09 0 012.18 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/"
            className="text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Twitter</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.494 0-.175 0-.349-.012-.522A8.18 8.18 0 0022 5.92a8.366 8.366 0 01-2.357.636A4.077 4.077 0 0021.448 4.1a8.263 8.263 0 01-2.606.975 4.114 4.114 0 00-6.993 3.746A11.675 11.675 0 013.15 4.977a4.034 4.034 0 00-.554 2.07 4.102 4.102 0 001.827 3.414 4.077 4.077 0 01-1.858-.507v.05a4.114 4.114 0 003.292 4.026 4.136 4.136 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.261 8.261 0 012 18.407a11.65 11.65 0 006.29 1.84"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        <p className="mt-8 text-base leading-6 text-gray-400 text-center">
          &copy; 2024 Travello, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
