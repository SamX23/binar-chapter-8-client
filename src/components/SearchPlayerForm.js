import { useState } from "react";
import { Dropdown, DropdownButton, Form, FormControl } from "react-bootstrap";

const SearchPlayerForm = () => {
  const [textFilter, setTextFilter] = useState("Filter");
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState("");

  const handleChange = (e) => setSearchValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSearch(searchValue);
  };

  return (
    <>
      <Form className="d-flex align-items-center mt-2" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="my-2"
          aria-label="Search"
          onChange={handleChange}
          value={searchValue}
        />
        <DropdownButton id="dropdown-basic-button" title={textFilter}>
          <Dropdown.Item
            onClick={(e) => setTextFilter(e.target.innerText)}
            href="#"
          >
            Username
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => setTextFilter(e.target.innerText)}
            href="#"
          >
            Email
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => setTextFilter(e.target.innerText)}
            href="#"
          >
            Experience
          </Dropdown.Item>
          <Dropdown.Item
            onClick={(e) => setTextFilter(e.target.innerText)}
            href="#"
          >
            Level
          </Dropdown.Item>
        </DropdownButton>
      </Form>

      {showSearch ? (
        <div className="mt-3">
          Searcing {textFilter !== "Filter" ? textFilter : null} for{" "}
          {showSearch} ...{" "}
        </div>
      ) : null}
    </>
  );
};

export default SearchPlayerForm;
