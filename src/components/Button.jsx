import React from "react";

function Button({ prev, next, onPrevious, onNext }) {
    
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevious}>
              previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="  page-item ">
            <button className="page-link" onClick={handleNext}>
              next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

export default Button;
