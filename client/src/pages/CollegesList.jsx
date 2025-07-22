import { useState } from "react";

import CollegeCard from "../components/CollegeCard.jsx";
import { collegeData } from "../context/AppContext.js";
import Pagination from "@mui/material/Pagination";

// Ensure collegeData is defined and has a default value
if (!collegeData || !Array.isArray(collegeData)) {
  console.error("collegeData is not defined or is not an array");
}

const pageSize = 12;

const CollegesList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const handleCollegeListPagination = (event, page) => {
    console.log(event);
    console.log(page);
    setCurrentPage(page);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {collegeData.slice(startIndex, endIndex).map((eachCollegeData) => (
          <div
            style={{
              flex: "1 1 calc(33.333% - 16px)",
              boxSizing: "border-box",
              minWidth: "300px",
            }}
            key={eachCollegeData.instituteCode}
          >
            <CollegeCard data={eachCollegeData} />
          </div>
        ))}
      </div>
      <div className="m-4 justify-items-center">
        <Pagination
          count={Math.ceil(collegeData.length / pageSize)}
          variant="outlined"
          color="primary"
          shape="rounded"
          page={currentPage}
          onChange={handleCollegeListPagination}
        />
      </div>
    </div>
  );
};

export default CollegesList;
