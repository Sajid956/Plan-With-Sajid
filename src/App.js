import { Product } from "./component/Product";
import data from './data';
import { useState } from "react";
import { RefreshPage } from "./component/RefreshPage";

function App() {

  const [tours, setTours] = useState(data);

  function removeCardHandler (id) {
    const newData = tours.filter((e) => e.id !== id);
    setTours(newData);
  }

  function refreshHandler () {
    setTours(data);
  }

  if(tours.length === 0) {
    return <RefreshPage refreshHandler = {refreshHandler}></RefreshPage>
  }

  return (
    <Product temp = {tours} removeCardHandler = {removeCardHandler}></Product>
  );
}

export default App;
