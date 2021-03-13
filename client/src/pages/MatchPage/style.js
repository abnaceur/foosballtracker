import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  padding: 40px;
`;

export const Header = styled.div`

`

export const InfoPos = styled.div`
  font-size: 28px;
  font-weight: bold;
  padding-left: 100px;
`
export const Team1 = styled.div`
  font-size: 26px;
  font-weight: bold;
`

export const Team2 = styled.div`
  font-size: 26px;
  font-weight: bold;

`
export const PlayersList = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
`
export const PlayerItem = styled.span`
  margin-top: 40px;
  width: max-content;
  display:flex;
  flex-direction: column;

`
export const PlInfo = styled.span`
border-radius: 5px;
border: 1px solid black;
padding: 10px 20px;

`
export const Teams = styled.span`
  display: flex:
  justify-content: space-between;

  span {
    border-radius: 5px;
    border: 1px solid black;
    padding: 4px 8px;
    margin-right: 10px;
    cursor: pointer;
    background-color: #2196F3;  
    color: white;
    font-size: 16px;
    font-weight: bold;
    &:hover {
      background-color: black;    
    }
  }
`

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 400px;
`
export const TmRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`
export const TmPlayers = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  span {
    padding: 10px 30px;
    font-size: 28px;
    margin: 10px;
    cursor: pointer;
    border-radius: 10px;
    font-weight: bold;
    background-color: #2196F3;  
    color: white;
    &:hover {
      background-color: black;    
    }
  }
`

export const TmScore = styled.div`
  display: flex;
  justify-content: center;
  font-size: 48px;
  font-weight: bold;
  `