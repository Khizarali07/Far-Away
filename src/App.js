import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import "./index.css";
import { useState } from "react";
import Itemlist from "./components/Itemlist";

function App() {
  const [itemlist, setitemlist] = useState([]);

  const deleteitem = (id) => {
    setitemlist((items) => items.filter((items) => items.id !== id));
  };

  const toggleitem = (id) => {
    setitemlist((items) =>
      items.map((items) =>
        items.id !== id ? items : { ...items, packed: !items.packed }
      )
    );
  };

  const clearall = () => {
    if (itemlist.length > 0) {
      const confirm = window.confirm("Do you really want to Clear out ?");
      if (confirm) setitemlist([]);
    }
  };

  return (
    <>
      <Header />
      <Form itemlist={itemlist} setitemlist={setitemlist} />
      <Itemlist
        itemlist={itemlist}
        deleteitem={deleteitem}
        toggleitem={toggleitem}
        clearall={clearall}
      />
      <Footer items={itemlist} />
    </>
  );
}

export default App;
