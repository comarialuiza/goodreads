import Head from 'next/head'

import BookList from '../components/BookList';
import GlobalStyle from '../styles/global';

import { Container } from '../styles/Main.styles';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <BookList />
      </Container>
      <GlobalStyle />
    </>
  )
}
