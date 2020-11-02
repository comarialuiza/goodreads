import { Container } from './styles';

import BookList from '../BookList';

const Feed: React.FC = () => {
    return (
        <Container className="container">
           <BookList />
        </Container>
    );
}

export default Feed;