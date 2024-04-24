/* eslint-disable react/jsx-no-undef */
import './App.css';
import DashBoard from './components/Dashboard';
import { AuthContextProvider } from './helpers/AuthContext';
import store from './store/redux-store';
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Provider store={store}>
           <DashBoard />
        </Provider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
