import Layout from '../components/Layout';
import Link from 'next/link';
// import style from '../public/teste.module.scss'
// import '../public/teste.css'
import Button from '@material-ui/core/Button';
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';
import { useEffect, useState } from 'react'
import axios from 'axios'

// import '../styles/style.css'

function Index(props) {
  // const [data, setData] = useState([])

  // useEffect(() => {
  //   axios.get('https://api.tvmaze.com/search/shows?q=batman')
  //     .then((res) => setData(res.data.map(entry => entry.show)))
  // }, [])

  return (
    <Layout>
      <Head>
        <title>Página Principal</title>
        <script type='application/ld+json'>{`{ "@context": "https://schema.org", "@type": "Organization", "url": "https://www.casadeapostasa.tv/", "sameAs": [], "@id": "https://www.casadeapostasa.tv/#organization", "name": "casa de apostas tv", "logo": "https://www.casadeapostas.tv/img/logo-white.png" }`}</script>
      </Head>

      <Button variant="contained" color="secondary">Teste</Button>
      <h1>Batman TV Shows</h1>
      <ul>
        {props.shows.map(show => (
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
  // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  // const data = await res.json();
  const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman');

  console.log(`Show data fetched. Count: ${res.data.length}`);

  return {
    shows: res.data.map(entry => entry.show)
  };
};

export default Index;