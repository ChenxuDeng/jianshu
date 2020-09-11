import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const white='#fff'
const orange='#ea6f5a'
export const theme=createMuiTheme({
    palette:{
        common:{
            white:white,
            orange:orange
        },
        primary:{
            main:orange
        },
        secondary:{
            main:white
        }
    },
    overrides: {
        MuiTab: {
            wrapper: {
                flexDirection:'row',
            },
        },
        MuiTooltip: {
            tooltip: {
                backgroundColor: "white"
            },
            arrow:{
                color:'white'
            }
        }
    },
})