import styled from "styled-components";
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {
  NavLink
} from "react-router-dom";

export const Container = styled.div`
  display: flex;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const WrapperDrawerAction = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const HomeIconWrapper = styled.span`
  width: 15px;
  height: 15px;
`;

export const MenuIconWrapper = styled.span`
  width: 12px;
  height: 12px;
  display: flex;
`;

export const IconButtonCustom = styled(IconButton)`
  &&{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46px;
    height: 46px;
    margin-right: 7px;
    margin-left: 7px;
    margin-bottom: 7px;
    .MuiIconButton-label{
      width: auto;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg{
      transition: all .2s ease-out;
      path{
        transition: all .2s ease-out;
        fill: white
      }
    }
  }
`;

export const ListItemTextCustom = styled(ListItemText)`
  &&{
    width: 100%;
    height: 100%;
    overflow: visible;
    margin: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span{
      font-size: 13px;
      font-weight: 600;
      color: #fff;
      letter-spacing: 0;
      line-height: 10px;
      transition: all .3s ease-out;
    }
  }
`;

export const ListItemIconCustom = styled(ListItemIcon)`
  &&{
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: auto;
    width: 46px;
    height: 46px;
    max-width: 100%;
    margin: 0;
    padding: 0;
    box-sizing: initial;
    border-radius: 6px;
    background-color: transparent;
    transition: all .2s ease-out;

    svg{
      transition: all .2s ease-out;
      path{
        transition: all .2s ease-out;
        fill: white
      }
    }
  }
`;


export const ListItemCustomHome = styled.a`
  &&{
    display: flex;
    text-decoration: none;
    padding: 0;
    margin: 0 0 10px 7px;
    width: calc(100% - 14px);
    border-radius: 6px;
    transition: all .2s ease-out;
    &:first-child{
      margin: 0 0 10px 7px;
    }
    &:hover,
    &.isActive{
      background-color: #fff;
      ${ListItemIconCustom}{
        svg{
          &.homeIcon{
            path{
              stroke: #ffffff;
            }
          }
          path{
            fill: #ffffff;
          }
        }
      }
      ${ListItemTextCustom}{
        span{
          color: black;
        }
      }
    }
  }
`;

export const ListItemCustom = styled(NavLink)`
  &&{
    display: flex;
    text-decoration: none;
    padding: 0;
    margin: 0 0 10px 7px;
    width: calc(100% - 14px);
    border-radius: 6px;
    transition: all .2s ease-out;
    &:first-child{
      margin: 0 0 10px 7px;
    }
    &:hover,
    &.isActive{
      background-color: #fff;
      ${ListItemIconCustom}{
        svg{
          &.homeIcon{
            path{
              stroke: black;
            }
          }
          path{
            fill: black;
          }
        }
      }
      ${ListItemTextCustom}{
        span{
          color: black;
        }
      }
    }
  }
`;

export const ListCustom = styled(List)`
  &&{
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const DrawerCustom = styled(Drawer)`
  &&{
    border: 0;
    flex-shrink: 0;
    white-space: nowrap;
    display: flex;
    width: ${props => props.open ? 250 : 60}px;
    transition: ${props => props.open ? 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms' : 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'};
    overflow-x: ${props => props.open ? 'initial' : 'hidden'};
    .MuiDrawer-paper{
      border: 0;
      background-color: #3FB388;
      display: flex;
      width: ${props => props.open ? 250 : 60}px;
      transition: ${props => props.open ? 'width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms' : 'width 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms'};
      overflow-x: ${props => props.open ? 'initial' : 'hidden'};
    }
    ${ListItemTextCustom} {
      width: ${props => props.open ? '100%' : '0'};
      overflow: ${props => props.open ? 'visible' : 'hidden'};
    }
  }
`;
