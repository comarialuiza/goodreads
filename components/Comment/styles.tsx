import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

export const User = styled.div`
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const UserImage = styled(Image)`
    height: 50px;
    width: 50px;
    margin-right: 20px;
    border-radius: 50%;
`;

export const UserName = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: var(--color-text-title);
`;

export const ReadIn = styled.p`
    font-size: 12px;
    color: var(--color-text-complement);
    margin-bottom: 12px;
`;

export const CommentBody = styled.div`
    font-size: 14px;
    text-align: justify;

    p:not(:last-of-type) {
        margin-bottom: 12px;
    }
`;