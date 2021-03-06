import Image from 'next/image';
import { Container, Title, Author, Description, Visual, Content } from './styles';

import { BookListProps, TypesOfList } from '../../types/BookTypes';

interface Props extends BookListProps {

}

const Book: React.FC<Props> = ({ type }) => {
    return (
        <Container type={ type }>
            <Visual>
                <Image
                    src='/images/bookcover.jpg'
                    alt='Plain Bad Heroines'
                    width={150}
                    height={226}
                />
            </Visual>

            { type === TypesOfList.Expanded && (
                <Content>
                    <Title>Plain Bad Heroines</Title>
                    <Author>Emily M. Danforth</Author>
                    <Description>
                    Our story begins in 1902, at The Brookhants School for Girls. Flo and Clara, two impressionable students, are obsessed with each other and with a daring young writer named Mary MacLane, the author of a scandalous bestselling memoir. To show their devotion to Mary, the girls establish their own private club and call it The Plain Bad Heroine Society. They meet in secret in a nearby apple orchard, the setting of their wildest happiness and, ultimately, of their macabre deaths. This is where their bodies are later discovered with a copy of Mary’s book splayed beside them, the victims of a swarm of stinging, angry yellow jackets. Less than five years later, The Brookhants School for Girls closes its doors forever—but not before three more people mysteriously die on the property, each in a most troubling way.
                    </Description>
                </Content>
            ) }
        </Container>
    );
}

export default Book;