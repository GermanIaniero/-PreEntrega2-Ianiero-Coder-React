import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter,  Routes, Route} from "react-router-dom"
/*import ItemDetailContainer from "./components/ItemDetailContainer";  */
import Error from "./components/Error";
import Pc from "./components/Pc";
import Celulares from "./components/Celulares";
import Notebook from "./components/Notebook";

function App() { 
  return (
     <div className="App">     
        <BrowserRouter>
          <NavBar />
          <Routes>
                <Route path='/' exact element={<ItemListContainer />} />
                <Route path='/pc/:id' exact element={<Pc />} />
                <Route path= '/celulares/:id' exact element={<Celulares />} />
                <Route path= '/notebook/:id' exact element={<Notebook />} />
                <Route path= '*' exact element={<Error />} />
          </Routes>           
        </BrowserRouter>
    </div>
    
  );
}

export default App;
