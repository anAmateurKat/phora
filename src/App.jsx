import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import WriteReflection from "./components/WriteReflection/WriteReflection";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/reflect" element={<WriteReflection />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
