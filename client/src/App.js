import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CreateLaboratory from './pages/CreateLaboratory';
import EditLaboratory from './pages/EditLaboratory';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Laborataries from './pages/Laboratories';
import ViewLaboratory from './pages/ViewLaboratory';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<ProtectedRoute component={Home} />} exact />
                    <Route
                        path="/:subjectName"
                        element={<ProtectedRoute component={Laborataries} />}
                    />
                    <Route
                        path="/:subjectName/create"
                        element={<ProtectedRoute component={CreateLaboratory} />}
                    />
                    <Route
                        path="/:subjectName/:laboratoryName"
                        element={<ProtectedRoute component={ViewLaboratory} />}
                    />
                    <Route
                        path="/:subjectName/:laboratoryName/edit"
                        element={<ProtectedRoute component={EditLaboratory} />}
                    />
                    <Route path="/signin" element={<Login />} exact />
                    <Route path="/signup" element={<Register />} exact />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
