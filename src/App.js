import Contacts from './component/contacts/Contacts';
import Navbar from './component/element/Navbar';
import logo from './logo.svg';
import './styles/App.scss';
import { provider, Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddContacts from "./component/contacts/AddContact";
import EditContact from "./component/contacts/EditContact";

// import Navbar from "./components/elements/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contacts/add" component={AddContacts}/>
              <Route exact path="/contacts/edit/:id" component={EditContact}/>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
