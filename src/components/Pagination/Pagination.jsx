export const Pagination = ({
  prevBtnClicked,
  nextBtnClicked,
  itemsPerPage,
  currentPage,
  isLastPage,
}) => {
  return (
    <div style={{ display: "flex", position: "fixed", marginTop: "30%" }}>
      <button disabled={currentPage === 1} onClick={prevBtnClicked}>
        Prev
      </button>
      <p style={{ margin: "0px 10px 0px 10px" }}>1 of {itemsPerPage}</p>
      <button disabled={isLastPage} onClick={nextBtnClicked}>
        Next
      </button>
    </div>
  );
};
