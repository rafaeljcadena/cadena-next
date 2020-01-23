import Layout from '../components/Layout';
import Link from 'next/link';
// import style from '../public/teste.module.scss'
// import '../public/teste.css'
import Button from '@material-ui/core/Button';
import Head from 'next/head'
import fetch from 'isomorphic-unfetch';

// import '../styles/style.css'

function Index({ shows }) {
  return (
    <Layout>
      <Head>
        <title>Página Principal</title>
        <script type='application/ld+json'>{`{ "@context": "https://schema.org", "@type": "Organization", "url": "https://www.casadeapostasa.tv/", "sameAs": [], "@id": "https://www.casadeapostasa.tv/#organization", "name": "casa de apostas tv", "logo": "https://www.casadeapostas.tv/img/logo-white.png" }`}</script>
      </Head>

      <Button variant="contained" color="secondary">Teste</Button>
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

export default Index;