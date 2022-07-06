import Footer from "./Footer"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"


const Layout = (props: any) => {
  return (
    <div>
      <Topbar />
      <main className="flex">
        <aside>
          <Sidebar />
        </aside>
        <div className='flex-1'>{props.children}</div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout