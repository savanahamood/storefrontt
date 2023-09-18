import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Categories from "./Components/Categories/Categories";
import Products from "./Components/Products/Products";
import { Provider } from 'react-redux';
import store from './store/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Categories />
        <Products />
      </Provider>
      <Footer />
    </div>
  );
}

export default App;