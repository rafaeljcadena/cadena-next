import Layout from '../components/Layout';
import Link from 'next/link';
// import style from '../public/teste.module.scss'
// import '../public/teste.css'
import Button from '@material-ui/core/Button';
import Head from 'next/head'

// import '../styles/style.css'

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
  ];
}

function Index() {
  return (
    <Layout>
      <Head>
        <title>Página Principal</title>
        <script type='application/ld+json'>{`{ "@context": "https://schema.org", "@type": "Organization", "url": "https://www.casadeapostasa.tv/", "sameAs": [], "@id": "https://www.casadeapostasa.tv/#organization", "name": "casa de apostas tv", "logo": "https://www.casadeapostas.tv/img/logo-white.png" }`}</script>
      </Head>

      <h1>My Blog</h1>
      <Button variant="contained" color="secondary">Teste</Button>
      <ul>
        {getPosts().map(post => (
          <li key={post.id}>
            {/* <Link href="/posts/[id]" as={`/posts/${post.id}`}> */}
              {/* <a className={style.teste}>{post.title}</a> */}
              {/* <a className='teste'>{post.title}</a> */}
            {/* </Link> */}
            {post.title}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

Index.getInitialProps = async ctx => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js')
  // const json = await res.json()
  return { stars: 'Foo' }
}

export default Index;