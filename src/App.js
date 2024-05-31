import { Helmet } from "react-helmet";
import Todos from "./components/todos";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Recoil Tutorial | jrazap</title>
      </Helmet>

      <div className="container">
        <h1 className="my-3 display-2">Learn Recoil</h1>
        <Todos />
      </div>
    </div>
  );
}

export default App;
