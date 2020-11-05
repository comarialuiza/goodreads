import { Container } from './styles';

import Comment from '../Comment';

const CommentList: React.FC = () => {
    return (
        <Container>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    );
}

export default CommentList;