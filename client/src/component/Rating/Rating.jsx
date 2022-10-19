import React, { useEffect, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent() {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (e) => {
    setRating(e)
  }

  useEffect(()=> {
    console.log(rating)
  }, [rating])

  

  return (
    <div className='App'>

      <Rating onClick={handleRating}/>

    </div>
  )
}