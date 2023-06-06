import React, { useState } from "react";
import { observer } from "mobx-react";

function Navbar(props) {
  const [searchQuery, setSearchQuery] = useState("");

  const { addList, setFilter, filteredLists } = props.store;

  const prepareAddList = (e) => {
    e.preventDefault();
    addList(searchQuery);
    setSearchQuery("");
    setFilter(""); // Clear the filter
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setFilter(e.target.value);
  };

  return (
    <div className="container mt-3">
      <h1 className="title">Todo App</h1>
      <form onSubmit={prepareAddList} className="form-group">
        <div className="row">
          <div className="col-lg-9 col-sm-12">
            <input
              className="form-control-lg border border-secondary"
              value={searchQuery}
              type="text"
              onChange={handleSearchChange}
              placeholder="Search/Add list"
            />
          </div>
          <div className="col-lg-3 col-sm-12 mt-2 mt-lg-0">
            <button className="btn btn-success btn-lg btn-block font-weight-bold">
              Add to List
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default observer(Navbar);
