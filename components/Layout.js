import { Children } from "react/cjs/react.production.min";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({children}) => { // children are the children component of Layout component
    return (
        <div className="content">
            <Navbar/>
            {children}
            <Footer/>

        </div>
    );
}
 
export default Layout;