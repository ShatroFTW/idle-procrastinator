import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/dashboard/Home";
import Layout from "./components/layout/Layout";
import {AnimatePresence} from "motion/react"
import Clicker from "./components/stage-1/Clicker";

function App() {
    return (
        <BrowserRouter>
            <AnimatePresence mode={"wait"}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/clicker" element={<Clicker/>}/>
                    </Route>
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    );
}

export default App;
