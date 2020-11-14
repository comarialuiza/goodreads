import styled from 'styled-components';

export const Container = styled.div`
    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
`;

export const CommentUser = styled.div``;

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