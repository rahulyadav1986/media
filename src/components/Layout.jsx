import Script from "next/script";
import Footer from "./shared/footer/footer";
import Header from "./shared/header/header";

const Layout = ({children})=>{
    return(
        <>
            <Header />
            {children}  
            <Footer />
            
        </>
    )
}

export default Layout;