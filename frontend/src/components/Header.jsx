import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-white">
      <Link href="/">
        <h1
          className="
            cursor-pointer
            text-3xl
            font-bold
            text-green-500
            transition-colors
            hover:text-green-600
          "
        >
          Tickethack
        </h1>
      </Link>

      <nav className="flex gap-6">
        <Link href="/cart" className="text-gray-700 hover:text-green-500">
          Cart
        </Link>

        <Link href="/bookings" className="text-gray-700 hover:text-green-500">
          Bookings
        </Link>
      </nav>
    </header>
  );
}
