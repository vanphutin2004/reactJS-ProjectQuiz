import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
  const { listUsers, pageCount } = props;

  const handlePageClick = (event) => {
    props.fetchListUserWithPaginate(+event.selected + 1);
    props.setCurrentPage(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
  };

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">email</th>
            <th scope="col">username</th>
            <th scope="col">role</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.username}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={() => {
                        props.handleClickBtnView(item);
                      }}
                    >
                      view
                    </button>
                    <button
                      className="btn btn-warning mx-3"
                      onClick={() => props.handleClickBtnUpdate(item)}
                    >
                      update
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => props.handleClickBtnDelete(item)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td scope={"4"}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="user-paginate">
        <ReactPaginate
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
          forcePage={props.currentPage - 1}
        />
      </div>
    </>
  );
};

export default TableUserPaginate;
