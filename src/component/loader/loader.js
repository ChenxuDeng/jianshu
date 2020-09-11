import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        width:'30px',
        margin:'0 auto'
    },
}));

export default function Loader(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress color="secondary" size={props.size}/>
        </div>
    );
}