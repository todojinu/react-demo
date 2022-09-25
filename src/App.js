import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run only once.");
  }, []); // 최초 실행
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // 최초 실행 or keyword 변경될 때 실행
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]); // 최초 실행 or counter 변경될 때 실행
  useEffect(() => {
    console.log("I run when keyword & counter change.");
  }, [keyword, counter]); // 최초 실행 or keyword or counter 변경될 때 실행
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}
export default App;
