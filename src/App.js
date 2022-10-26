import {Routes, Route} from 'react-router-dom';
import HomeScreen from './components/homeComponents/HomeScreen'
import NewRecipeScreen from './components/newRecipeComponents/NewRecipeScreen';
import DetailScreen from './components/detailComponents/DetailScreen';
import NotFound from './pages/NotFound';


import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
         <Route index element={<HomeScreen />}/>
         <Route path='new-recipe' element={<NewRecipeScreen />} />
         <Route path='recipe/:id' element={<DetailScreen/>}/>
         <Route path='*' element={<NotFound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
