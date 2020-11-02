import { Container } from './styles';

import Book from '../Book';

export enum TypesOfList {
  Condensed,
  Expanded
}
export interface Props {
  type: TypesOfList
}

const BookList: React.FC<Props> = ({type}) => {
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