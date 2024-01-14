function SearchBar(props) {
  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Search"
        value={props.searchValue}
        onChange={props.HandleSearchValue}
        className="searchBar"
      ></input>
    </div>
  );
}

SearchBar.defaultProps = {
    searchValue: ""
}
export default SearchBar;
