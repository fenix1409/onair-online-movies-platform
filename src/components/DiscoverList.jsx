import React, { useEffect, useState } from 'react'
import { instance } from '../hook/useAxios'
import { URL } from '../hook/useEnv'

const MovieList = ({ URL }) => {
    const [data, setData] = useState([])
    const [totalPage, setTotalPage] = useState(10)
    const [page, setPage] = useState(1)

    useEffect(() => {
    instance().get(`${URL}/movie?include_adult=false&include_video=false&language=en-US&page=${page}`).then(res => {
      setTotalPage(res.data.total_pages)
      setData(res.data.results.map(item => {
        item.isLiked = false
        item.isSaved = false
        return item
      }))
    })
  }, [page])
  console.log(data);

    return (
        <div></div>
    )
}

export default MovieList