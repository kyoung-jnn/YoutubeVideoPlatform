import React from "react";
import styled from "styled-components";

import HomeIcon from "@material-ui/icons/Home";
import ExploreIcon from "@material-ui/icons/Explore";
import SettingsIcon from "@material-ui/icons/Settings";

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideMenu>
        <HomeIcon></HomeIcon>
        <SideMenuText>홈</SideMenuText>
      </SideMenu>
      <SideMenu>
        <ExploreIcon></ExploreIcon>
        <SideMenuText>탐색</SideMenuText>
      </SideMenu>
      <SideMenu>
        <SettingsIcon></SettingsIcon>
        <SideMenuText>설정</SideMenuText>
      </SideMenu>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  width: 15rem;
  height: ${window.innerHeight};
  background-color: #fff;
  border-top-right-radius: 2rem;
  border-end-end-radius: 2rem;
  box-shadow: 10px 10px 20px #f0f0f0, -10px -10px 20px #ffffff;
  
`;

const SideMenu = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 4rem;
  padding-left: 2rem;
  cursor: pointer;
`;

const SideMenuText = styled.div`
  margin-left: 1rem;
  font-size: 1.1rem;
  font-family: "KOTRA_BOLD-Bold";
`;

export default SideBar;
