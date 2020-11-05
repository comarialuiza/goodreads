import { Container } from './styles';

import CommentList from '../CommentList';

const Feed: React.FC = () => {
    return (
        <Container className="container">
           <CommentList />
        </Container>
    );
}

export default Feed;