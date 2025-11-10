import { useEffect, useState } from "react";

function Search() {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    function demo() {
      console.log("useEffect called");
    }
    demo();
  }, [query]);
  return (
    <>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
      ></input>
    </>
  );
}

export default Search;
