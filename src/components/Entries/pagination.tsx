import React from 'react';
import { Button } from 'carbon-components-react';
import { CaretLeft24, CaretRight24 } from '@carbon/icons-react';

interface ComponentProps {
  page: number;
  numPages: number;
  goPage: (page: number) => void;
  setNext: () => void;
  setPrev: () => void;
}

const Pagination: React.FC<ComponentProps> = ({
  page,
  numPages,
  setNext,
  goPage,
  setPrev,
}) => {
  // Fill array with page numbers to display
  const pages = new Array(numPages).fill(0).map((_, index) => index);

  return (
    <div className="pagination">
      <Button
        className="pagination__navigation"
        kind="ghost"
        onClick={setPrev}
        disabled={page === 0}
      >
        <CaretLeft24 />
      </Button>
      {pages.map((pageNumber) => (
        <div
          onClick={() => goPage(pageNumber)}
          className={`pagination__item ${
            pageNumber === page ? 'pagination__item__selected' : ''
          }`}
          key={pageNumber}
        >
          {pageNumber + 1}
        </div>
      ))}
      <Button
        className="pagination__navigation"
        kind="ghost"
        onClick={setNext}
        disabled={page === numPages - 1}
      >
        <CaretRight24 />
      </Button>
    </div>
  );
};

export default Pagination;
