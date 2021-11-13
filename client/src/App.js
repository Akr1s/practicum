import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <section className="content">
                    <Routes>
                        <Route path="/" element={<p>Home</p>} />
                        <Route path="/:subjectName" element={<p>Laborataries</p>} />
                    </Routes>
                </section>
            </BrowserRouter>
        </div>
    );
}

export default App;
