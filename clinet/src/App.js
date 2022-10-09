import  './app.css'
import FoodShop from './pages/Food/FoodShop';
import Navbar from './pages/Navbar/Navbar';
const App=()=> {
  return (
   <div className="bg">
   <Navbar/>
   <FoodShop/>
    </div>
  );
}

export default App;