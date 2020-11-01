import styled from 'styled-components';

export const Container = styled.div`
    padding: 40px;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    grid-gap: 30px;
`;