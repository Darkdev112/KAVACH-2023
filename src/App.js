import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './routes/Home';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Home/>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
