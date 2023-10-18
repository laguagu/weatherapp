import { createTheme , alpha} from "@mui/material";

const blackBase = '#000000';
const blackMain = alpha(blackBase, 0.5);

const theme = createTheme({
    palette:{
        primary:{
            main:"#f5f5f5",
        },
        secondary: {
            main: '#f44336'
        },
        black:{
            main: blackMain
        }
    },
    typography: {
        fontFamily: 'kanit, cursive',
    }
})

const sharedPaperStyle = {
    padding: "100px", height: 100, bgcolor:"black.main", border:1.5, borderColor: "#9e9e9e"
}

export default theme;
export {sharedPaperStyle}