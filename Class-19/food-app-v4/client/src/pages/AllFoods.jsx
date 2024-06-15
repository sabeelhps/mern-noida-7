import React, { Fragment, useEffect, useState } from 'react'
import FoodList from '../components/FoodList/FoodList';
import axios from 'axios';
import useToggle from '../hooks/useToggle';

const AllFoods = () => {

  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);


  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [foodList, setFoodList] = useState([]);

  const [isHappy, setIsHappy] = useToggle(true);


  useEffect(() => {
    console.log('First use effect without dependency array');
  });

  useEffect(() => {
    console.log('First use effect with empty dependency array');
    setIsLoading(true);
    axios.get('http://localhost:8080/foods')
      .then((res) => {
        setFoodList(() => [...res.data]);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
    })
  }, []);

  useEffect(() => {
    console.log('First use effect when value of count changes');
  }, [count]);

  useEffect(() => {
    console.log('First use effect when value of random changes');
  }, [random]);


  useEffect(() => {
    console.log('First use effect when value of random changes');
  }, [random, count]);


  if (isLoading) {
    return <p>Loading the data........</p>
  }

  if (error != null && isLoading == false) {
    return <p>Oops Something Went Wrong: { error }</p>
  }

  return (
    <Fragment>
      <h1>Count: {count}</h1>
      <h1>Random: {random}</h1>

      <h1>{isHappy ? '😄' : '😢'}</h1>
      
      <button onClick={()=> setIsHappy()}>Toggle Happy</button>

      <button onClick={() => setCount(count + 1)}>Increment++</button>

      <button onClick={()=> setRandom(Math.random())}>Generate Random</button>
      <FoodList foodList={ foodList} />
    </Fragment>
   
  )
}

export default AllFoods