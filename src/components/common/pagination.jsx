import React from "react";
import _ from "lodash";
import "./pagination.css";

const Pagination = (props) => {
  const { totalLines, linesPerPage, onPageChange, currentPage } = props;
  let pagesCount = Math.ceil(totalLines / linesPerPage);
  let pages = _.range(1, pagesCount + 1);
  if (pagesCount === 1) return null;

  return (
    <>
      <div className="pagination-center">
        {pages.map((p) => (
          <div
            key={p}
            onClick={() => onPageChange(p)}
            className={p === currentPage ? "pagination active" : "pagination"}
          >
            {p}
          </div>
        ))}
      </div>
    </>
  );
};

export default Pagination;
