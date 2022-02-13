import Image from 'next/image';
import { StyledHeader } from './StyledHeader';

const Header = () => (
    <StyledHeader>
        <Image src="/logo.svg" alt="" width={80} height={80} />
        <h1>Github Trending</h1>
    </StyledHeader>
);

export { Header };
