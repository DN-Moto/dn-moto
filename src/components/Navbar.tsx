export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-6">

        <h1 className="text-2xl font-bold tracking-widest text-white">
          DN MOTO
        </h1>

        <ul className="hidden md:flex gap-10 text-white font-medium">
          <li className="hover:text-blue-400 transition cursor-pointer">Home</li>
          <li className="hover:text-blue-400 transition cursor-pointer">Services</li>
          <li className="hover:text-blue-400 transition cursor-pointer">Gallery</li>
          <li className="hover:text-blue-400 transition cursor-pointer">About</li>
          <li className="hover:text-blue-400 transition cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  );
}