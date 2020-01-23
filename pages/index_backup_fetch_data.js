import Layout from '../components/Layout';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';


const PostLink = props => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Index({ shows }) {
  const [data, setData] = useState([])

  useEffect(() => {
    // axios.get('/api/randomQuote')
    //   .then((res) => console.log(res.data))
    axios.get('https://api.tvmaze.com/search/shows?q=batman')
      .then((res) => setData(res.data))
  }, [])
  
  return (
    <Layout>
      <h1>Batman TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <Link href="/posts/[id]" as={`/posts/${show.id}`}>
              <a>{show.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

Index.getInitialProps = async function () {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};