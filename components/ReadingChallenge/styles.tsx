import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 30px;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
`;

export const Visual = styled.div`
    width: 100px;
    margin-right: 20px;
    background-color: var(--color-primary);
    border-radius: 4px;
    color: var(--color-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 44px;
    line-height: 46px;
    font-weight: bold;
`;

export const Content = styled.div`
    width: calc(100% - 120px);
`;

export const Description = styled.p`
    color: var(--color-text-complement);
    font-size: 16px;
    line-height: 22px;
`;

export const Detail = styled.span`
    color: var(--color-text-title);
`;

export const Button = styled.button`
    border: 0;
    font-size: 14px;
    padding: 12px;
    margin-top: 16px;
    border-radius: 4px;
    background-color: var(--color-primary);
    color: var(--color-white);
`;