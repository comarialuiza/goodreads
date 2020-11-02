import styled from 'styled-components'
import { TypesOfList } from '../BookList';

export const Container = styled.div<{ type: TypesOfList}>`      
    display: ${({type}) => type === TypesOfList.Expanded ? 'flex' : 'block'};
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
`;

export const Visual = styled.div`
    margin-right: 20px;
    max-width: 100px;

    img {
        border-radius: 4px;
        width: 100%;
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

