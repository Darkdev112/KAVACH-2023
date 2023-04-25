import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './routes/Home';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Home/>
          </Layout>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
