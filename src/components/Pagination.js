import React from 'react';

import { Link } from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="pagination">
        <a href="#">&laquo;</a>
        {pageNumbers.map((number) => (
          <div key={number} className="pagination">
            <Link onClick={() => paginate(number)} to="/" className="page-link">
              {number}
            </Link>
          </div>
        ))}

        <a href="#">&raquo;</a>
      </div>
    </nav>
  );
};
export default Pagination;
