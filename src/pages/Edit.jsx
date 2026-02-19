import React from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const params = useParams()
  return (
    <div>{params.id} Edit페이지</div>
  )
}

export default Edit