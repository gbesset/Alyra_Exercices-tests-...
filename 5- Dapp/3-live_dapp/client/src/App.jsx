import { EthProvider } from "./contexts/EthContext";
import Footer from "./components/Footer";
import Mint from "./components/Mint";
import Account from "./components/Account";

function App() {
  return (
    <EthProvider>
      <div id="App">
        <div className="container">
          <Account/>
          <Mint />
          <hr />
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
