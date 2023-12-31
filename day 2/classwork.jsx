import React, { useState } from 'react';

const DisplayDataComponent = () => {
  const initialData = [
    { category: "Fruits", price: "$1", stocked: "yes", name: "Apple" },
    { category: "Fruits", price: "$1", stocked: "yes", name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: "no", name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: "yes", name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: "no", name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: "yes", name: "Peas" }
  ];

  const [isDataVisible, setDataVisible] = useState(false);

  const displayData = () => {
   
    console.log('Data displayed!');
    setDataVisible(true);
  };

  return (
    <div>
      {!isDataVisible && (
        <button onClick={displayData}>
          Display Data
        </button>
      )}

      {isDataVisible && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stocked</th>
              </tr>
            </thead>
            <tbody>
              {initialData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                  <td>{item.stocked}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DisplayDataComponent;
