import { Container } from './styles';

import ReadingChallenge from '../ReadingChallenge';
import WantToRead from '../WantToRead';

const LeftMenu: React.FC = () => {
    return (
        <Container className="container">
            <ReadingChallenge />
            <WantToRead />
        </Container>
    );
}

export default LeftMenu;