import { Container } from './styles';

import { BookListProps } from '../../types/BookTypes';

import Book from '../Book';

const BookList: React.FC<BookListProps> = ({type}) => {
  return (
    <Container type={ type }>
      <Book type={ type }/>
      <Book type={ type }/>
      <Book type={ type }/>
      <Book type={ type }/>
      <Book type={ type }/>
    </Container>
  );
}

export default BookList;