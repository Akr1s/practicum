import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CreateLaboratory from './pages/CreateLaboratory';
import EditLaboratory from './pages/EditLaboratory';
import Home from './pages/Home';
import Laborataries from './pages/Laboratories';
import ViewLaboratory from './pages/ViewLaboratory';

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
                    <Route path="/:subjectName/:laboratoryName/edit" element={<EditLaboratory />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
