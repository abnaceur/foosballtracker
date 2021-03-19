import React, { useEffect, useState } from 'react';
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

export default function HistortList({ logsList }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [listLogs, setListLogs] = useState([]);

    useEffect(() => {
        let sets = logsList.length / 2;
        let tmp = [];
        let i = 0;

        while (sets > 0) {
           

            tmp.push({
                team1: logsList[i],
                team2: logsList[i = i + 1]
            });
            sets--;
            i += 1;
            if (sets === 0) {
                setListLogs(tmp)
                break;
            }
        }
    }, [logsList])

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        listLogs ?
            listLogs.map((lg,idx) => {
                return <List
                    key={idx}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            {lg.team1?.startedAt}
                        </ListSubheader>
                    }
                    className={classes.root}
                >

                    <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                        </ListItemIcon>

                        <HsHeading>{lg.team1?.player1Name} + 
                        {" " + lg.team1?.player2Name} {" "}
                        {lg.team1?.pl1Goals + lg.team1?.pl2Goals}  
                        {" "}
                         : {" "} 
                         {lg.team2?.pl1Goals + lg.team2?.pl2Goals}  
                         {" "}
                         {lg.team2?.player1Name} + 
                        {" " + lg.team2?.player2Name} {" "}
                        
                         </HsHeading>
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <HsDesc>
                                    {lg.team1?.player1Name + " scored "
                                   + lg.team1?.pl1Goals + " goals" 
                                }   </HsDesc>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <HsDesc>
                                {lg.team1?.player2Name + " scored "
                                   + lg.team1?.pl2Goals + " goals" 
                                }   
                                </HsDesc>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <HsDesc> 
                                {lg.team2?.player1Name + " scored "
                                 + lg.team2?.pl1Goals + " goals" 
                            }
                                </HsDesc>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <HsDesc>
                                {lg.team2?.player2Name + " scored "
                                 + lg.team2?.pl2Goals + " goals" 
                            }

                                </HsDesc>
                            </ListItem>
                            <ListItem button className={classes.nested}>
                                <HsDesc>This match took {" " + 
                                lg.team2?.duration + " (mm:ss)"
                                }</HsDesc>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            })
            : null
    );
}