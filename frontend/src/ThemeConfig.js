import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#386FA4',
            dark: '#133C55',
            light: '#59A5D8'
        },
    },
    props: {
        MuiTypography: {
            variantMapping: {
                h1: 'h2',
                h2: 'h2',
                h3: 'h2',
                h4: 'h2',
                h5: 'h2',
                h6: 'h2',
                subtitle1: 'h3',
                subtitle2: 'h3',
                body1: 'body1',
                body2: 'body1',
            }
        }
    }
})

export default theme;