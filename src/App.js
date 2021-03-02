import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { CreatePage, HomePage } from "./pages";
import { Header } from "./commons";
import store, { persistor } from "./store";

function App() {
  return (
    <Router>
      <Header />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/create" component={CreatePage} />
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
