import styled from 'styled-components/';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border-bottom: 1px solid black;
  margin: 0px 10px
`;

export const LinkText = styled.div`
    font-family: 'Roboto';
    font-size: 14px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    margin-left: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  > img{
    height: 100px
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
  a{
    font-family: 'Roboto';
    font-size: 14px;
    text-decoration: none;
    color: #4169e1;
    font-weight: bold;
    margin-left: 10px;
    &:first-child{
      margin-left: 0;  
    }
  }
`;

export const SearchInput = styled.input`
  height: 40px;
  width: 400px;
  margin-right: 30px;
  margin-bottom: 15px;
`;

export const SearchButton = styled.button`
  padding: 0 15px;
  height: 45px;
`;
