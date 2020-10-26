import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Fullstack from "./pages/FullStack";

function App() {
    return (
        <div className="App">
            <Header/>
            <Fullstack/>
            <Footer/>
        </div>
    );
}

export default App;
