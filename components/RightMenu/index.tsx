import { Container, Title, Description } from './styles';

import { TypesOfList } from '../../types/BookTypes';

import BookList from '../BookList';

const RightMenu: React.FC = () => {
    return (
        <Container className="container">
            <Title>Recommendations</Title>
            <Description>Because you are currently reading Bad Plain Heroines...</Description>
            <BookList type={ TypesOfList.Expanded } />
        </Container>
    );
}

export default RightMenu;