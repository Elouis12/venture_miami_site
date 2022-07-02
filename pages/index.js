import { Container } from '../components/container'
import { Hero } from '../components/hero'
import { MayorSection } from '../components/mayor'
import { CallToAction } from '../components/callToAction'
import { SecondaryFeatures } from '../components/secondaryFeatures'
import Layout from '../components/layout'
import Head from 'next/head'
import { Client } from '../lib/api'


export default function Index(props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Venture Miami - Innovation and Economic Development Office</title>
        </Head>
        <Container>
          <Hero content={props.hero}/>
          <MayorSection content={props.mayor} />
          <SecondaryFeatures content={props.actions} />
          <CallToAction content={props.cta} />
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  
  const hero = await Client.getEntry('6WLwahfXarspVrYhJzVyUY')
  const mayor = await Client.getEntry('2m2xTF7Yyl3unkoXwEFs4U')
  const actions = await Client.getEntry('7gs8HupYmj0jeWzQHHryJj')
  const cta = await Client.getEntry('1l4KOGbKXloI5m3NU3UC0w')

  return {
    props: {
      hero: hero.fields,
      mayor: mayor.fields,
      actions: actions.fields,
      cta: cta.fields,
    }
  }
}