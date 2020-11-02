import styled from 'styled-components'

import { TypesOfList } from '../BookList';

export const Container = styled.div<{ type: TypesOfList}>`
    display: ${({type}) => type === TypesOfList.Condensed ? 'grid' : 'block'};
    grid-template-columns: repeat(auto-fit, minmax(100px, auto));
`;