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
import HomeIcon from '../../atoms/icons/home'
import MenuIcon from '../../atoms/icons/menu'

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
            <ListItemCustomHome
              href="/"
              key="home"
            >
            </ListItemCustomHome>

            <ListItemCustom
              activeClassName="isActive"
              to="/demo/Homepage"
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


          </ListCustom>
        </Wrapper>
      </DrawerCustom>
    </Container>
  );
}

export default SideNavbar;
