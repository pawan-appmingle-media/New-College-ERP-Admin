import React from "react";
import Profiles from "./Profiles/Profiles.jsx";
import StudentCard from "./Profiles/StudentCard.jsx";
import UpcommingHoliday from "./Profiles/UpcommingHoliday.jsx";

const MainPage = () => {
  return (
    <>
      <div id="main-page-wrapper" className="">
        <div>
          <h1 className="text-2xl font-semibold mb-4">Department</h1>
          <div className="flex gap-4">
            <Profiles />
            <UpcommingHoliday />
          </div>
          <div className="flex flex-col gap-4 mt-4 w-[96%]">
            <h1 className="my-2 text-2xl font-medium">Employee</h1>
            <StudentCard />
            <StudentCard />
            <StudentCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
