import { useState } from "react";

function Form({ itemlist, setitemlist }) {
  const [item, setitems] = useState("");
  const [count, setcount] = useState(1);

  const handleitemlist = (items) => {
    setitemlist((item) => [...item, items]);
  };

  const handlesubmit = (evt) => {
    evt.preventDefault();

    const newitem = {
      description: item,
      quantity: count,
      packed: false,
      id: Date.now(),
    };

    handleitemlist(newitem);

    setitems("");
    setcount(1);
  };

  return (
    <>
      <form
        className="add-form"
        style={window.innerWidth <= 600 ? { flexDirection: "column" } : {}}
        onSubmit={handlesubmit}
      >
        <h3>What do you need for your trip ?</h3>
        <input
          type="number"
          placeholder="1"
          step="1"
          min="1"
          max="20"
          value={count}
          onChange={(evt) => setcount(evt.target.value)}
        />
        <input
          type="text"
          placeholder="...items"
          value={item}
          onChange={(evt) => setitems(evt.target.value)}
          required
        />
        <button>ADD</button>
      </form>
    </>
  );
}

export default Form;
