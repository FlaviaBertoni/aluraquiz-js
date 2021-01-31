import styled from 'styled-components'
import Head from 'next/head'

import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

import db from '../db.json'

const QuizContainer = styled.div`
width: 100%;
max-width:350px;
padding-top: 45px;
margin:auto 10%;
@media screen and (max-width: 500px) {
  margin: auto;
  padding: 15px
}
`

export default function Home() {
  return (
    <>
      <Head>
        <title>{db.title}</title>
        <meta name="title" content={db.title}/>
        <meta name="description" content={db.description}/>

        {/*  Open Graph / Facebook  */}
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://aluraquiz-js.flaviabertoni.vercel.app/"/>
        <meta property="og:title" content={db.title}/>
        <meta property="og:description" content={db.description}/>
        <meta property="og:image" content={db.bg}/>

        {/*  Twitter  */}
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://aluraquiz-js.flaviabertoni.vercel.app/"/>
        <meta property="twitter:title" content={db.title}/>
        <meta property="twitter:description" content={db.description}/>
        <meta property="twitter:image" content={db.bg}/>
      </Head>
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>Lorem ipsum dolor sit amet, consectetur...</p>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>
              <p>Lorem ipsum dolor sit amet, consectetur...</p>
            </Widget.Content>
          </Widget>
          <Footer/>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/FlaviaBertoni/aluraquiz-js"/>
      </QuizBackground>
    </>
  )
}
