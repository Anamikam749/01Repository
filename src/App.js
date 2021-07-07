import Dummy from "./component/dummy";
function App() {
  let x =0
  const addFunc = ()=>{
    x=x+2
  return x}
  console.log(x)
  return (
    <div>
      <h2>{x}</h2>
    <button onClick={addFunc}>Click to Add 2</button>
    </div>
  );
}

export default App;
