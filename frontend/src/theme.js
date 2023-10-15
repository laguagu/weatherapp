import { createTheme , alpha} from "@mui/material";

const blackBase = '#000000';
const blackMain = alpha(blackBase, 0.5);

const theme = createTheme({
    palette:{
        primary:{
            main:"#cccccc",
        },
        secondary: {
            main: '#f44336'
        },
        black:{
            main: blackMain
        }
    }
})

export default theme;