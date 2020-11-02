import Head from 'next/head'

import LeftMenu from '../components/LeftMenu';
import Feed from '../components/Feed';
import RightMenu from '../components/RightMenu';
import Header from '../components/Header';
import GlobalStyle from '../styles/global';

import { Container, GridContainer } from '../styles/Main.styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap" rel="stylesheet"></link>
      </Head>


      <Container>
        <Header />
        <GridContainer>
          <LeftMenu />
          <Feed />
          <RightMenu />
        </GridContainer>
      </Container>
      <GlobalStyle />
    </>
  )
}
