import Layout from '../components/Layout'
import Head from 'next/head'


export default function About(){
  return (
    <Layout>
      <Head>
        <title>About</title>
        <script type='application/ld+json'>{`{"@context":"https://schema.org","@type":"WebSite","@id":"https://www.casadeapostasa.tv/#website","url":"https://www.casadeapostasa.tv/","name":"casa de apostas tv"}`}</script>
      </Head>
      <p>This is the about page</p>
    </Layout>
  )
}