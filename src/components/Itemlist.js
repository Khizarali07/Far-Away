import { useState } from "react";

function Itemlist({ itemlist, deleteitem, toggleitem, clearall }) {
  const [sortby, setsortby] = useState("input");

  let sorteditems;

  if (sortby === "input") {
    sorteditems = itemlist;
  }
  if (sortby === "description") {
    sorteditems = itemlist
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortby === "packed") {
    sorteditems = itemlist
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <div className="list" style={{ width: "100vw" }}>
        <div className="row d-flex justify-content-center">
          {itemlist.length <= 0
            ? ""
            : sorteditems.map((items) => {
                return (
                  <div
                    className="d-flex align-items-center cols-4 fitwidth"
                    style={
                      items.packed === true
                        ? { textDecorationLine: "line-through" }
                        : {}
                    }
                  >
                    <input
                      type="checkbox"
                      className="mx-2"
                      onChange={() => toggleitem(items.id)}
                      checked={items.packed}
                    ></input>
                    <span className="mx-2">{items.quantity}</span>
                    <span className="mx-2">{items.description}</span>
                    <button
                      className="mx-2 list-button"
                      onClick={() => deleteitem(items.id)}
                    >
                      ❌
                    </button>
                  </div>
                );
              })}
        </div>
        <div>
          <select
            value={sortby}
            onChange={(evt) => setsortby(evt.target.value)}
            className="actions"
          >
            <option value="input">Sort by Input</option>
            <option value="description">Sort by item name</option>
            <option value="packed">Sort by Packed status</option>
          </select>
          <button onClick={clearall} className="actions">
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}

export default Itemlist;
