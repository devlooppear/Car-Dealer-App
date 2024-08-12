import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between bg-neutral-100">
        <div className="max-w-[50px] w-full">
          <img
          className="mx-2 my-1 rounded-md border-2 border-neutral-400 shadow-md"
          src="/apple-touch-icon.png" alt="logo-img" />
        </div>
        <ul className="flex justify-center align-middle items-center gap-3 mr-3 ml-1">
          <li className="p-1 bg-neutral-50 border-2 border-neutral-400 shadow-md rounded-md text-orange-600 font-semibold hover:font-bold hover:bg-orange-50">
            <Link href="/" className="no-underline">
              Home
            </Link>
          </li>
          <li className="p-1 bg-neutral-50 border-2 border-neutral-400 shadow-md rounded-md text-orange-600 font-semibold hover:font-bold hover:bg-orange-50">
            <Link href="/vehicles" className="no-underline">
              Vehicles
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-b-2 border-neutral-300"></div>
    </div>
  );
};

export default Navbar;
