import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import CreateLaboratory from './pages/CreateLaboratory/CreateLaboratory';
import Home from './pages/Home/Home';
import Laborataries from './pages/Laboratories/Laboratories';
import ViewLaboratory from './pages/ViewLaboratory/ViewLaboratory';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} exact />
                    <Route path="/:subjectName" element={<Laborataries />} />
                    <Route path="/:subjectName/create" element={<CreateLaboratory />} />
                    <Route path="/:subjectName/:laboratoryName" element={<ViewLaboratory />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
