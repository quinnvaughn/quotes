import styled from 'styled-components'

const QuotesContainer = styled.div`
    padding-bottom: ${(p) => p.theme.sizes.xl};
    max-width: 700px;
    margin: auto;

    @media (max-width: 700px) {
        width: calc(100% - 40px);
    }
`

export { QuotesContainer }
