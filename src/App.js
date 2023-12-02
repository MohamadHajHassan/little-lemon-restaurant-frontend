import "./App.css";
import Home from "pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import UnderConstruction from "pages/UnderConstruction";
import Reservations from "pages/Reservations";
import ConfirmedBooking from "pages/ConfirmedBooking";

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<UnderConstruction />} />
                    <Route path="/menu" element={<UnderConstruction />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route
                        path="/order-online"
                        element={<UnderConstruction />}
                    />
                    <Route path="/login" element={<UnderConstruction />} />
                    <Route
                        path="/confirmed-booking"
                        element={<ConfirmedBooking />}
                    />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
