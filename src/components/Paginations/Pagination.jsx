/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Pagination.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Pagination = ({ numOfPages, setPage, page }) => {
  const arr = [];

  for (let i = 1; i <= numOfPages; i++) {
    arr.push(i);
  }
  const [isActive, setIsActive] = useState(false);
  const changeColor = () => {
    if (isActive) {
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
      >
        {" "}
        <FaArrowLeft />
      </button>
      {arr.map((num) => {
        const isPageActive = page === setPage
        return (
          <button
            className="pagination-btn"
            key={num}
            style={{backgroundColor: isPageActive ? "" : ""}}
            onClick={() => {
              setPage(num);
            }}
          >
            {num}
          </button>
        );
      })}
      <button
        className="pagination-btn"
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={page === numOfPages}
      >
        {" "}
        <FaArrowRight />{" "}
      </button>
    </div>
  );
};

export default Pagination;
