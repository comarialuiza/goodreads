
import { Container, ReadIn, CommentBody, User, UserImage, UserName } from './styles';
import Book from '../Book';
import { TypesOfList } from '../../types/BookTypes';

const Comment: React.FC = () => {
    return (
        <Container className="container">
            <User>
                <UserName>Bonbon Cake</UserName>
            </User>

            <Book type={ TypesOfList.Expanded } />
            <ReadIn>Read in Nov 2020</ReadIn>

            <CommentBody> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </CommentBody>
        </Container>
    );
}

export default Comment;