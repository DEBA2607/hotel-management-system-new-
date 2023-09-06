import React from "react";
import { useState } from "react";
function Table() {
  let [Adultcount, setAdultcount] = useState(1);
  let [Childrencount, setChildrencount] = useState(0);
  let Adultincrement = () => {
    setAdultcount(Adultcount + 1);
  };
  let Adultdecrement = () => {
    if (Adultcount > 1) {
      setAdultcount(Adultcount - 1);
    } else {
      setAdultcount(1);
    }
  };
  let Childincrement = () => {
    setChildrencount(Childrencount + 1);
  };
  let Childdecrement = () => {
    if (Childrencount > 0) {
      setChildrencount(Childrencount - 1);
    } else {
      setChildrencount(0);
    }
  };
  return (
    <>
      <div className="flex flex-col align-middle justify-evenly h-auto">
        <table>
          <thead>
            <tr className="flex align-middle justify-between">
              <th className=" p-2 bg-zinc-200 ">Adults </th>

              <button onClick={Adultincrement}>+</button>
              <p className="p-2">{Adultcount}</p>
              <button onClick={Adultdecrement}>-</button>

              <th className="p-2 bg-zinc-200">Children </th>
              <button onClick={Childincrement}>+</button>
              <p className="p-2">{Childrencount}</p>
              <button onClick={Childdecrement}>-</button>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default Table;
