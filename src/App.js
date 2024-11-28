import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import CommonLayout from "./components/CommonLayout.jsx";
import AddCourse from "./components/Course/AddCourse.jsx";
import AllCourses from "./components/Course/AllCourses.jsx";
import Department from "./components/Department/Department.jsx";
import Profiles from "./components/Profiles/Profiles.jsx";
import AllStudentList from "./components/Student/AllStudentList/AllStudentList.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path={"/login"} element={<Login />} /> */}
          <Route element={<CommonLayout />}>
            <Route index element={<Profiles />} />
            {/* <Route path={"/student/add-student"} element={<AddStudent />} /> */}
            <Route path={"/student"} element={<AllStudentList />} />
            <Route path={"/department"} element={<Department />} />
            <Route path={"/add-course"} element={<AddCourse />} />
            <Route path={"/course"} element={<AllCourses />} />
            {/* <Route path={"/create-department"} element={<AddNewDepartment />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
