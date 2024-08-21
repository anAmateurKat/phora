import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";

function App() {
    return (
        <div className="app">
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}

export default App;
