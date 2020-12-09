import styled from 'styled-components'
import { TypesOfList } from '../../types/BookTypes';

export const Visual = styled.div`
    margin-right: 20px;

    img {
        border-radius: 4px;
        width: 100%;
    }
`;

export const Container = styled.div<{ type: TypesOfList}>`      
    display: ${({type}) => type === TypesOfList.Expanded ? 'flex' : 'block'};
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: ${({type}) => type === TypesOfList.Expanded ? '20px' : '0'};

    > ${Visual} {
        width: ${({type}) => type === TypesOfList.Expanded ? '100px' : '100%'};
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
    color: var(--color-tertiary);
    overflow: hidden;
    text-align: justify;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

