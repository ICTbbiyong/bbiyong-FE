import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import singleLogo from "../img/SingleLogo.png";
import logoText from "../img/LogoText.png";

const WrapNavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 14px 20px;
  background-color: transparent;
  top: 0;
  z-index: 10000;
  margin: 0;
  border: none;
  cursor: pointer;
  transition: height 0.5s ease;
  position: relative;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  cursor: pointer;
`;

const CustomLogo = styled.svg`
  width: 40px;
  height: 50px;
  fill: #ff832b;
`;

const TitleWrapper = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 110px;
  height: 30px;
  margin-top: 5px;
  margin-left: 3px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavBarIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 8px;
  transform: scale(2);
  margin-top: 3px;
  margin-right: 6px;
`;

const NavBar = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const currentPath = window.location.pathname;
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleHomeLogoClick = () => {
    navigate("/");
  };

  const handleEditLogoClick = async () => {
    try {
      if (currentPath === "/LoginForm" || currentPath === "/RegisterForm") {
        alert("먼저 로그인을 진행해주세요!");
        return;
      }

      navigate(`/EditProfile/${userId}`);
    } catch (error) {
      console.error("Error checking token:", error);
      alert("유저 정보를 가져오는 데 실패했습니다.");
    }
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <>
      <WrapNavBar
        className={isExpanded ? "expanded" : ""}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconWrapper onClick={handleHomeLogoClick}>
          <NavBarIcon src={singleLogo} alt="singlelogo" />
          <TitleWrapper src={logoText} alt="logotext" />
        </IconWrapper>
        <LogoWrapper onClick={handleEditLogoClick}>
          <CustomLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 0 0-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 0 0-2.282.819l-.922 1.597a1.875 1.875 0 0 0 .432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 0 0 0 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 0 0-.432 2.385l.922 1.597a1.875 1.875 0 0 0 2.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 0 0 2.28-.819l.923-1.597a1.875 1.875 0 0 0-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 0 0 0-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 0 0-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 0 0-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 0 0-1.85-1.567h-1.843ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
              clipRule="evenodd"
            />
          </CustomLogo>
        </LogoWrapper>
      </WrapNavBar>
    </>
  );
};

export default NavBar;
