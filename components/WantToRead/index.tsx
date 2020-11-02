import { Container } from './styles';
import { Title } from '../../styles/global';
import BookList from '../BookList';

import { TypesOfList } from '../BookList';

const WantToRead: React.FC = () => {
    return(
        <Container>
            <Title>Want to read</Title>
            <BookList type={ TypesOfList.Condensed }/>
        </Container>    
    );
}

export default WantToRead;