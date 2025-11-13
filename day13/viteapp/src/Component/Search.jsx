const Search = ({ searchHandler }) => {
  return (
    <div className="search">
      <input
        type="text"
        className="searchInput"
        placeholder="Search products..."
        onChange={(e) => searchHandler(e.target.value)}
      />
    </div>
  );
};

export default Search;
