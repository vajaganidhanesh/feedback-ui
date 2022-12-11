import React from 'react'
import { useParams } from 'react-router-dom'

function Posts() {
    const params = useParams()
  return (
    <div>
    <h1>Posts : {params.id}</h1>
    <h1>Name : {params.name}</h1>
    </div>
  )
}

export default Posts
