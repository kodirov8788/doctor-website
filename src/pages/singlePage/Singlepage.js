import React from 'react'
import { useParams } from 'react-router-dom';

function Singlepage() {
  const id =  useParams().id
  return (
    <div>
      <h1>{id}</h1>
    </div>
  )
}

export default Singlepage;
