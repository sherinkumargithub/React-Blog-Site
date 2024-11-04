import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      {/* <div className="">Navbar</div> */}
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
