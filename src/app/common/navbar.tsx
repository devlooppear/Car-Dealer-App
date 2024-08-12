import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-neutral-100">
        <div className="px-2 py-1 font-semibold text-orange-500 border-2 border-neutral-400 my-1 mx-2 rounded-md shadow-md">
          <h2>Car Dealer App</h2>
        </div>
        <ul className="flex justify-center align-middle items-center gap-3 mx-2">
          <li className="mx-1 p-1 bg-neutral-100 border-2 border-neutral-300 shadow-md rounded-md text-neutral-600 hover:font-semibold hover:bg-neutral-50">
            <Link href="/" className="no-underline">
              Home
            </Link>
          </li>
          <li className="mx-1 p-1 bg-neutral-100 border-2 border-neutral-300 shadow-md rounded-md text-neutral-600 hover:font-semibold hover:bg-neutral-50">
            <Link href="/about" className="no-underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-b-2 border-neutral-300"></div>
    </div>
  );
};

export default Navbar;
