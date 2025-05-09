
import { Outlet } from 'react-router'
import Footer from './Components/Footer/Footer'
import TopBar from './Components/NavBar/TopBar'

function layout() {
  return (
    <div>
        <TopBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default layout