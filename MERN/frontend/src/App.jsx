import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Header from './components/Header';

import Intro from './pages/Intro';
import Algorithm from './pages/Algorithm';
import Sort from './pages/Sort';
import Tree from './pages/Tree';
import Graph from './pages/Graph';
import MotionPlan from './pages/MotionPlan';
import Ideology from './pages/Ideology';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Resource from './pages/Resource';

// morePage
import CourseOutline from './pages/morePage/CourseOutline';
import CourseContent from './pages/morePage/CourseContent';
import Seminar from './pages/morePage/Seminar';

function App() {
  return (
    <div className='app'>
      <Router>
        <div className='app-container'>
          <Header />
          <Routes>
            <Route path='/' element={<Intro />} />
            <Route path='/algorithm' element={<Algorithm />} />
            <Route path='/algorithm/sort' element={<Sort />} />
            <Route path='/algorithm/tree' element={<Tree />} />
            <Route path='/algorithm/graph' element={<Graph />} />
            <Route path='/algorithm/motionplan' element={<MotionPlan />} />
            <Route path='/ideology' element={<Ideology />}/>
            <Route path='/user' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/resource' element={<Resource />} />
            <Route path='/courseoutline' element={<CourseOutline />} />
            <Route path='/coursecontent' element={<CourseContent />} />
            <Route path='/seminar' element={<Seminar />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
