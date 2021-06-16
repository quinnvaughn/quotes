import styled from 'styled-components'
import { FaTrash } from 'react-icons/fa'
import { darken } from 'polished'

const QuoteContainer = styled.div`
    border-radius: ${(p) => p.theme.sizes.xs};
    padding: ${(p) => p.theme.sizes.md};
    border: 1px solid ${(p) => p.theme.colors.gray.light};
`

const QuoteLine = styled.p`
    padding: ${(p) => p.theme.sizes.xs} 0;
    margin: 0;
    font-size: ${(p) => p.theme.sizes.md};
    line-height: 1.5;
    flex-wrap: wrap;
`

const QuoteShow = styled.div`
    font-size: ${(p) => p.theme.sizes.mdplus};
    padding-bottom: ${(p) => p.theme.sizes.sm};
    font-weight: 700;
`

const DeleteQuote = styled(FaTrash)`
    color: ${(p) => p.theme.colors.brand.tertiary};

    cursor: pointer;

    :hover {
        color: ${(p) => darken(0.1, p.theme.colors.brand.tertiary)};
    }
`

const QuoteLink = styled.a`
    display: block;
    font-size: ${(p) => p.theme.sizes.md};
    padding-top: ${(p) => p.theme.sizes.mdplus};
    color: ${(p) => p.theme.colors.brand.primary};
    cursor: pointer;
    white-space: pre-wrap;
    word-break: break-all;
`

const QuoteTop = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: ${(p) => p.theme.sizes.mdplus};
`

export { QuoteContainer, QuoteLine, QuoteShow, QuoteLink, DeleteQuote, QuoteTop }
