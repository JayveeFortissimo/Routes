import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
  <nav className="bg-[#775491] text-[#EEE8DA]  min-h-20 flex justify-between items-center  px-11 ">

        <h1 className="text-2xl">Chows</h1>

    <div className="flex gap-5">
    <NavLink to ="/"   end>Home</NavLink>
    <NavLink to ="/About">About</NavLink>
    </div>

  </nav>
  )
}

export default Navigation