import { Container } from './styles';

import Book from '../Book';

const BookList: React.FC = () => {
  return (
    <Container>
      <Book />
      <Book />
      <Book />
      <Book />
    </Container>
  );
}

export default BookList;