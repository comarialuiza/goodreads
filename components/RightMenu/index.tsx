import { Container } from './styles';

import BookList from '../BookList';

const RightMenu: React.FC = () => {
    return (
        <Container className="container">
            <BookList />
        </Container>
    );
}

export default RightMenu;