import styled from 'styled-components'

import { TypesOfList } from '../../types/BookTypes';

export const Container = styled.div<{ type: TypesOfList }>`
    display: ${({type}) => type === TypesOfList.Condensed ? 'grid' : 'block'};
    grid-template-columns: repeat(auto-fit, minmax(100px, auto));
    grid-gap: 20px;
`;