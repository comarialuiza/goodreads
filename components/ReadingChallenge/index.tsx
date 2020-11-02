import { Container, Visual, Content, Detail, Description, Button } from './styles';
import { Title } from '../../styles/global';

const ReadingChallenge: React.FC = () => {
    return (
        <>  
            <Title>2020 Reading Challenge</Title>
            <Container>
                <Visual>
                    20<br/>20
                </Visual>
                <Content>
                    <Description>Congrats! You have read <Detail>43 books</Detail> of your goal of <Detail>30</Detail>!</Description>
                    <Button>View challenge</Button>
                </Content>
            </Container>
        </>
    );
}

export default ReadingChallenge;