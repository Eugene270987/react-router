import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from "../NotFound/NotFound";
import About from "../About/About";
import Contacts from "../Contacts/Contacts";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home";
import Courses from "../Courses/Courses";
import SingleCourse from "../Courses/SingleCourse/SingleCourse";
function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route path="/" element={<MainLayout/>}>
                      <Route index element={<Home/>}/>
                      <Route path="about" element={<About/>}/>
                      <Route path="contacts" element={<Contacts/>}/>
                      <Route path="courses" element={<Courses/>}/>
                      <Route path="courses/:slug" element={<SingleCourse/>}/>
                      <Route path="*" element={<NotFound/>}/>
                  </Route>
              </Routes>
          </div>
      </Router>
  );
}
export default App;
