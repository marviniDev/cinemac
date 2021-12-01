import React from 'react';
import { Nav } from './style'

const MAX_ITEMS = 3;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({
  limit,
  total,
  offset,
  setOffset
}) => {
  const current = offset / limit + 1 ;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <Nav>
    <ul className="pagination">
      <li className="page-item">
        <button className="page-link"
          onClick={() => onPageChange(current - 1)}
          disabled={current === 1}
        >
          <i style={{fontSize : '16px'}} className=" material-icons">chevron_left</i>
        </button>
      </li>
      {console.log(MAX_ITEMS, pages)}
      {Array.from({ length: Math.min(MAX_ITEMS, pages) })
        .map((_, index) => index + first)
        .map((page) => (
          page <= pages? 
          <li className="page-item" key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={
                page === current
                  ? 'page-link active'
                  : 'page-link'
              }
            >
              {page}
            </button>
          </li> : ""
        ))}
      <li className="page-item">
        <button className="page-link"
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          <i style={{fontSize : '16px'}} className=" material-icons">chevron_right</i>
        </button>
      </li>
    </ul>
    </Nav>
  );
};

export default Pagination;

