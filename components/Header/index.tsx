import Image from 'next/image';
import Link from 'next/link'
import { Container, Logo, Navigation, Search, UserInfo, Input, User } from './styles';

const Header: React.FC = () => {
    return (
        <Container>
            <Logo>
                <Image
                    src='/images/logo.svg'
                    alt='Picture of the author'
                    width={140}
                    height={57}
                />
            </Logo>

            <Navigation>
                <Link href='/'>Home</Link>
                <Link href='/'>My Books</Link>
                <Link href='/'>Browse</Link>
                <Link href='/'>Community</Link>
            </Navigation>

            <Search>
                <Input type='text' placeholder='Search books'/>
            </Search>

            <UserInfo>
                <User />
            </UserInfo>
        </Container>
    );
}

export default Header;