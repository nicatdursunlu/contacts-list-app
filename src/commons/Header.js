import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GoPlus } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";

export const Header = () => {
  return (
    <Container>
      <Title exact to={"/"}>
        <p>Contacts List App</p>
      </Title>
      <Icons>
        <StyledNavLink exact to="/">
          <AiOutlineHome className="home-icon" />
        </StyledNavLink>
        <StyledNavLink to="/create">
          <GoPlus className="plus-icon" />
        </StyledNavLink>
      </Icons>
    </Container>
  );
};

const Container = styled.header`
  background: rgb(30, 144, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 35px;
  font-weight: bold;
  &:hover {
    transform: scale(1.2);
  }
  &.active {
    color: crimson;
  }
`;

const Title = styled(NavLink)`
  color: white;
  font-size: 35px;
  text-decoration: none;
  font-weight: bold;
  
  :hover {
    color: crimson;
  }
`;

const Icons = styled.div`
  display: flex;
`;
