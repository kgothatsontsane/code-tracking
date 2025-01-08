import React from 'react'
import { NavLink } from 'react-router-dom'
import { MdHomeWork } from 'react-icons/md'
const Navbar = () => {
  return (
    <nav className="hidden md:flex gap-x-4">
        <NavLink to={"/"} className={({ isActive }) => isActive ? "active-link flexCenter gap-x-1 rounded-xl px-2 py-1" : "flexCenter gap-x-1 rounded-md px-2 py-1"}>
        <MdHomeWork />
        <div>Home</div>
        </NavLink>
        <a href="/listings" className="text-slate-900 hover:text-slate-700">Listings</a>
        <a href="/add-property" className="text-slate-900 hover:text-slate-700">Add Property</a>
        <a href="/bookings" className="text-slate-900 hover:text-slate-700">Bookings</a>
        <a href="/favourites" className="text-slate-900 hover:text-slate-700">Favourites</a>
    </nav>
  )
}

export default Navbar