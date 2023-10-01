import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
const pageNumbers = [];
for (let i = 1; i <= totalPages; i++) {
  pageNumbers.push(
    <Link
      to={`/page/${i}`}
      key={i}
      className={i === currentPage ? 'active' : ''}
      onClick={() => onPageChange(i)}
    >
      {i}
    </Link>
  );
  }
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link
          to={`/page/${currentPage - 1}`}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Previous
        </Link>
      )}

      {pageNumbers}

      {currentPage < totalPages && (
        <Link
          to={`/page/${currentPage + 1}`}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination