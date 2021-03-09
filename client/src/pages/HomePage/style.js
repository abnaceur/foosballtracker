import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  min-height: 100vh;
`;

export const StatsCards = styled.div`
  display: flex;
  padding: 40px;
`
export const StatCard = styled.div`
  padding: 20px;
  background-color: #2196F3;
  margin-right: 20px;
  border-radius: 5px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 34px;
  span {
    font-size: 54px;
  }
  `

export const StatsTitle = styled.div`
  font-size: 48px;
  padding: 40px 0px 0px 40px;
  font-weight: bold;
  `