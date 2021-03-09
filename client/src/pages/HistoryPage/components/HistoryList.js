import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import {
    HsHeading,
    HsDesc
} from '../style';

const useStyles = makeStyles((theme) => ({
    root: {
        // width: '100%',
        width: "auto",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function HistortList() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    Thur 4th march 2021
        </ListSubheader>
            }
            className={classes.root}
        >

            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                </ListItemIcon>

                <HsHeading>AAAAA + CCCCCC 0 : 1 VVVV + BBBBB</HsHeading>
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <HsDesc>AAAAA Shots 2 goals </HsDesc>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <HsDesc>AAAAA Shots 2 goals </HsDesc>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <HsDesc>AAAAA Shots 2 goals </HsDesc>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <HsDesc>AAAAA Shots 2 goals </HsDesc>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <HsDesc>This match took 5 seconds</HsDesc>
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );
}