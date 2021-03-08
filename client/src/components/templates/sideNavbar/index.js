import React, { useEffect, useState } from 'react';
import {
  useRouteMatch,
} from "react-router-dom";

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

// Icons Components
import HomeIcon from '../../atoms/icons/home';
import MenuIcon from '../../atoms/icons/menu'
import SportsSoccerIcon from '../../atoms/icons/sportsSoccer';
import EqualizerIcon from '../../atoms/icons/equalizerIcon';
import HistoryIcon from '../../atoms/icons/historyIcon';
import SettingsIcon from '../../atoms/icons/settingsIcon';

// Styles
import {
  Container,
  Wrapper,
  WrapperDrawerAction,
  IconButtonCustom,
  DrawerCustom,
  ListCustom,
  ListItemCustom,
  ListItemCustomHome,
  ListItemIconCustom,
  ListItemTextCustom,
  HomeIconWrapper,
  MenuIconWrapper
} from "./style";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: -10,
  },
  hide: {
    display: 'none',
  },
}));

const SideNavbar = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { path } = useRouteMatch();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Container>
      <CssBaseline />
      <DrawerCustom
        variant="permanent"
        open={open}
      >
        <WrapperDrawerAction>{
          open ?
            <IconButtonCustom onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButtonCustom>
            :
            <IconButtonCustom
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIconWrapper>
                <MenuIcon />
              </MenuIconWrapper>
            </IconButtonCustom>
        }
        </WrapperDrawerAction>

        <Wrapper>
          <ListCustom>
  
            <ListItemCustom
              activeClassName="isActive"
              to="/dashboard"
              key="Homepage"
            >
              <ListItemIconCustom
              >
                <HomeIconWrapper >
                  <HomeIcon />
                </HomeIconWrapper>
              </ListItemIconCustom>
              <ListItemTextCustom primary="Dashboard" />
            </ListItemCustom>

            <ListItemCustom
              activeClassName="isActive"
              to="/match"
              key="Match"
            >
              <ListItemIconCustom>
                <HomeIconWrapper >
                  <SportsSoccerIcon />
                </HomeIconWrapper>
              </ListItemIconCustom>
              <ListItemTextCustom primary="New match" />
            </ListItemCustom>

            <ListItemCustom
              activeClassName="isActive"
              to="/ranking"
              key="Ranking"
            >
              <ListItemIconCustom>
                <HomeIconWrapper >
                  <EqualizerIcon />
                </HomeIconWrapper>
              </ListItemIconCustom>
              <ListItemTextCustom primary="Ranking" />
            </ListItemCustom>

            <ListItemCustom
              activeClassName="isActive"
              to="/history"
              key="History"
            >
              <ListItemIconCustom>
                <HomeIconWrapper >
                  <HistoryIcon />
                </HomeIconWrapper>
              </ListItemIconCustom>
              <ListItemTextCustom primary="History" />
            </ListItemCustom>

            <ListItemCustom
              activeClassName="isActive"
              to="/setting"
              key="Settings"
            >
              <ListItemIconCustom>
                <HomeIconWrapper >
                  <SettingsIcon />
                </HomeIconWrapper>
              </ListItemIconCustom>
              <ListItemTextCustom primary="Settings" />
            </ListItemCustom>
                        
          </ListCustom>
        </Wrapper>
      </DrawerCustom>
    </Container>
  );
}

export default SideNavbar;
