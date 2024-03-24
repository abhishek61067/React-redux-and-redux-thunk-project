import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer />
        <HooksIceCreamContainer />
        {/* <IceCreamContainer /> */}
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
