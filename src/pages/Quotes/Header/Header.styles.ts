import styled from 'styled-components'

const HeaderTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const HeaderTitle = styled.h1`
    font-size: ${(p) => p.theme.sizes.lg};
    font-weight: 700;
    padding: 0;
    margin: 0;
`

const HeaderInput = styled.input`
    padding: ${(p) => p.theme.sizes.sm};
    line-height: 1.5;
    border-radius: ${(p) => p.theme.sizes.xs};
    border: 1px solid ${(p) => p.theme.colors.gray.light};
    width: 300px;
`

export { HeaderTop, HeaderInput, HeaderTitle }
