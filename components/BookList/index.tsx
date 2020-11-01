import { Container, Title, Description } from './styles';

import Book from '../Book';

const BookList: React.FC = () => {
  return (
    <Container>
      <Title>Recommendations</Title>
      <Description>Because you are currently reading Bad Plain Heroines...</Description>
      <Book />
      <Book />
      <Book />
      <Book />
    </Container>
  );
}

export default BookList;