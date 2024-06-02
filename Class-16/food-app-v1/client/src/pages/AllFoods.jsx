import React, { Fragment } from 'react'
import FoodList from '../components/FoodList/FoodList'

const AllFoods = () => {

  const foodList = [
    {
      name: "Burger",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea, molestiae vel vero molestias animi illum saepe quam maxime libero architecto officia, quibusdam deleniti tenetur voluptate dolorum impedit nemo odit.",
      imageUrl:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww"
    },
    {
      name: "Pizza",
      price: 200,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea, molestiae vel vero molestias animi illum saepe quam maxime libero architecto officia, quibusdam deleniti tenetur voluptate dolorum impedit nemo odit.",
      imageUrl:"https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpenphfGVufDB8fDB8fHww"
    },
    {
      name: "Corn Pizza",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea, molestiae vel vero molestias animi illum saepe quam maxime libero architecto officia, quibusdam deleniti tenetur voluptate dolorum impedit nemo odit.",
      imageUrl:"https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29ybiUyMHBpenphfGVufDB8fDB8fHww"
    },
    {
      name: "Drinks",
      price: 140.5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea, molestiae vel vero molestias animi illum saepe quam maxime libero architecto officia, quibusdam deleniti tenetur voluptate dolorum impedit nemo odit.",
      imageUrl:"https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U29mdCUyMERyaW5rc3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Pepsi",
      price: 120.66,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea, molestiae vel vero molestias animi illum saepe quam maxime libero architecto officia, quibusdam deleniti tenetur voluptate dolorum impedit nemo odit.",
      imageUrl:"https://images.unsplash.com/photo-1546695259-ad30ff3fd643?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U29mdCUyMERyaW5rc3xlbnwwfHwwfHx8MA%3D%3D"
    },
  ]



  return (
    <Fragment>
      <FoodList foodList={ foodList} />
    </Fragment>
   
  )
}

export default AllFoods