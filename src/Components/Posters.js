import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { setPosters } from '../redux/actions';

function Posters() {

  const dispatch = useDispatch();

  const [items, setItems] = useState([]);
  const [noMore, setNoMore] = useState(true);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const filter = useSelector((state) => state.allPosters.filtered);

  const getContents = async () => {
    await axios.get('https://6320d2f182f8687273a8877b.mockapi.io/api/posts/posts?page=1&limit=9').then((res) => {
      console.log(res.data)
      setItems(res.data);
    })
  };

  useEffect(() => {

    getContents();
  }, [])

  const fetchContents = async () => {
    const res = await axios.get(`https://6320d2f182f8687273a8877b.mockapi.io/api/posts/posts?page=${page}&limit=9`)
    const data = await res.data;
    if (res.status === 'pending') {
      setLoading(true)
    }
    return data;
  }

  const posters = useSelector((state) => state.allPosters.posters);

  const fetch = async () => {
    const contentsFromServer = await fetchContents();
    setItems([...items, ...contentsFromServer]);
    if (contentsFromServer.length === 0 || contentsFromServer.length < 9) {
      setNoMore(false)
    }
    setPage(page + 1);
  }

  dispatch(setPosters(items))

  const renderList = items.map((poster) => {
    return (
      <div class="px-2 mb-16">
        <img src={poster.posterimage} alt="poster 1" class="h-34 w-28 mb-1" />
        <p class="text-white">{poster.name}</p>
      </div>
    )
  })

  const filteredList = filter.map((poster) => {
    return (
      <div class="px-2 mb-16">
        <img src={poster.posterimage} alt="poster 1" class="w-28 mb-1 h-84 " />
        <p class="text-white">{poster.name}</p>
      </div>
    )
  })

  return (


    <InfiniteScroll dataLength={posters.length} next={fetch} hasMore=
      {noMore} loader={<div class="flex justify-center items-center">
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>} class="">
      {loading === true ? <div class="flex justify-center items-center">
        <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div> :
        <div class="grid grid-cols-3 mt-3 overflow-auto mt-24  ">

          {
            filter.length === 0 ? renderList : filteredList
          }

        </div>}
    </InfiniteScroll>
  )
}

export default Posters