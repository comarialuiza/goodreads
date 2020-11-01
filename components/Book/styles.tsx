import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Visual = styled.div`
    width: 100px;
    margin-right: 20px;

    img {
        border-radius: 4px;
    }
`;

export const Content = styled.div`
    width: calc(100% - 120px);
`;

export const Title = styled.h3`
    color: var(--color-text-title);
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 10px;
    max-height: 26px;
    overflow: hidden;
`;

export const Author = styled.p`
    color: var(--color-text-complement);
    font-size: 14px;
    margin-bottom: 10px;
`;

export const Description = styled.p`
    font-size: 14px;
    line-height: 20px;
    max-height: 82px;
    overflow: hidden;
    color: var(--color-tertiary);
`;

