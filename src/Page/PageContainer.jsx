import Footer from "./Footer"
import Header from "./Header"
import Navbar from "./Navbar"


const PageContainer =(a)=>{
    return(
        <>
            <Header/>
            <Navbar/>
            <main>{a.children}</main>
            <Footer/>
        </>
    )
}
export default PageContainer