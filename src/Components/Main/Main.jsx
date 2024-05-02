import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
    return (
        <>
        <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>           
        </div>
        <Footer></Footer>
        </>
        
    );
};

export default Main;