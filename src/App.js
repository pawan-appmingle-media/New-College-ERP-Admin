import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Batch from "./components/Batch/Batch.jsx";
import Chat from "./components/Chat.jsx";
import CommonLayout from "./components/CommonLayout.jsx";
import AddCourse from "./components/Course/AddCourse.jsx";
import AllCourses from "./components/Course/AllCourses.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Department from "./components/Department/Department.jsx";
import FeeManagement from "./components/FeeManagment/FeeManagement.jsx";
import InfoPortal from "./components/InfoPortal.jsx";
import Profiles from "./components/Profiles/Profiles.jsx";
import Session from "./components/Session/Session.jsx";
import AllStudentList from "./components/Student/AllStudentList/AllStudentList.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path={"/login"} element={<Login />} /> */}
          <Route element={<CommonLayout />}>
            <Route index element={<Profiles />} />
            <Route path={"/dashboard"} element={<Dashboard />} />
            <Route path={"/student"} element={<AllStudentList />} />
            <Route path={"/department"} element={<Department />} />
            <Route path={"/add-course"} element={<AddCourse />} />
            <Route path={"/course"} element={<AllCourses />} />
            <Route path={"/session"} element={<Session />} />
            <Route path={"/batch"} element={<Batch />} />
            <Route path={"/fee-management"} element={<FeeManagement />} />
            <Route path={"/chat"} element={<Chat />} />
            <Route path={"/info-portal"} element={<InfoPortal />} />
            {/* <Route path={"/create-department"} element={<AddNewDepartment />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
