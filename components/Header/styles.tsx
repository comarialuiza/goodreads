import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    background-color: var(--color-white);
    margin-bottom: 30px;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Logo = styled.div``;

export const Navigation = styled.div`
    a {
        font-size: 16px;
        color: var(--color-tertiary);
        text-decoration: none;
        transition: color .3s;

        &:hover {
            color: var(--color-title);
        }

        &:not(:last-of-type) {
            margin-right: 20px;
        }
    }
`;

export const Search = styled.form``;

export const UserInfo = styled.div``;

export const Input = styled.input`
    padding: 12px;
    font-size: 14px;
    color: var(--color-tertiary);

    border: 3px solid var(--color-background);
    border-radius: 8px;
`;

export const User = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    outline: 0;
    border: 0;
    color: var(--color-primary);
`;