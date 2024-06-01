import React from "react";

function Demo() {

  const luckyNum = Math.floor(Math.random() * 100);
  let element = null;
  // if (luckyNum % 2 === 0) {
  //   element = <h2>Random number is even</h2>
  // } else {
  //   element = <h2>Random number is odd</h2>
  // }

  const todos = ["Go to Gym", "Buy Groceries", "Watch Movies"];

  return (
    <div>
      <h1>My Lucky Number : {luckyNum}</h1>
      <h2>This is some h2</h2>
      <p>This is some para</p>
      {/* {element} */}

      <h2>{ luckyNum%2==0 ? <h2>Random number is even</h2> : <h2>Random number is odd</h2> }</h2>
      {luckyNum < 10 && <img src="https://media0.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=6c09b9524x48zg8o00jz57cw5g8ch7ranweuprojy7ls9cjj&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g" alt="this is alt"/>}
    
      <ul>
        {
          todos.map((todo) => <li>{ todo }</li>)
        }
      </ul>
    </div>
  );
}

export default Demo;
