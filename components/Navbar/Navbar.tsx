"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="p-4 bg-sky-900 text-white flex justify-between">
      <Link href="/">Recipe Book</Link>
      <Link href="private">Profile</Link>
    </nav>
  );
}
