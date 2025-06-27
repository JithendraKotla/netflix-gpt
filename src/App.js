import Body from "./components/Body";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
// if you have a Redux store

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
