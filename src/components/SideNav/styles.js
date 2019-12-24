import styled from 'styled-components';

export const MainNav = styled.nav`
  background-color: #ccc;
  min-width: 20%;
  max-width: 20%;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5%;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #000;
  }
`;

export const Hr = styled.hr`
  margin: 0;
  border: none;
  background-color: black;
  height: .3%
`;

export const NoteButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: 500;
  padding: 10%;
  width: 100%;
  background-color: inherit;
  :hover {
    background-color: white;
  }
  :active {
    background-color: #29B6F6;
  }
`;

export const AddButton = styled(NoteButton)`
  font-weight: 800;
  background-color: black;
  color: white;
  :hover {
    background-color: white;
    color: black;
  }
  :active {
    background-color: black;
    color: white;
  }
`;