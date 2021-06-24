import React, { useState } from "react";
import { AppBar, Toolbar, Button, InputBase } from "@material-ui/core";

import Search_Icon from "@material-ui/icons/Search";
import Menu_Icon from "@material-ui/icons/Menu";

import styled from "styled-components";

export default (props) => {
  const [searchVideo, setSearchVideo] = useState();

  const handleChange = (event) => {
    setSearchVideo(event.target.value);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      props.onSubmit(searchVideo);
    }
  };
  return (
    <AppBar position="static">
      <Navi>
        <Menu_Icon></Menu_Icon>

        <Search>
          <SearchIcon></SearchIcon>
          <SearchInput
            placeholder="검색..."
            onChange={handleChange}
            onKeyPress={handleSearch}
          ></SearchInput>
        </Search>
        <MenuTtile onClick={props.onGoHome}>Video Platform 🎬</MenuTtile>
      </Navi>
    </AppBar>
  );
};

const Navi = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  position: relative;
  background-color: red;
`;

const MenuTtile = styled(Button)`
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "NanumBarunGothic", sans-serif;
  color: white;
`;

const Search = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  transition: background-color ease 0.7s;
  &:hover {
    background-color: #d63031;
    transition: background-color ease 0.7s;
  }
`;

const SearchIcon = styled(Search_Icon)`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-left: 1rem;
`;

const SearchInput = styled(InputBase)`
  width: 100%;
  padding-left: 3rem;
`;
