import React from 'react';

const List = props => (
  <ul>
    {
     props.toDos.map((item, index) => (
       <li key={index}>
         {item}
         <button onClick={()=>props.deleteItem(index)}>Delete</button>
       </li>
      ))
    }
  </ul>
);

export default List; 
