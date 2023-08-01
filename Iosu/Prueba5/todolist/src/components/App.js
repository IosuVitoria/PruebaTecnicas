import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home/Home';
import Contact from './Contact/Contact';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
          <h1>Todo List</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
