import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import axios from "axios";
import Test from "../components/Test";
import BackIcon from "../img/back.png";
import LogoIcon from "../img/logo.png";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedContainer = styled.div`
  animation: ${fadeIn} 0.5s ease-out;
  opacity: 1;
  transform: translateY(0);
`;

const LoginContainer = styled.div`
  background-color: #fee5ce;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  justify-content: flex-start;
`;

const BackButton = styled.img`
  width: 25px;
  height: 25px;
  margin: 20px;
  margin-left: 30px;
  cursor: pointer;
`;

const ServiceInfo = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const LogoImgBox = styled.div`
  width: 130px;
  height: 120px;
  background-color: #fff9d7;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-bottom: 10px;
`;

const LogoImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

const LogoText = styled.div`
  font-family: "Nanum Pen Script", cursive;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  font-size: 23px;
  color: #ff832b;
`;

const LoginText = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: #797979;
`;

const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 250px;
  gap: 20px;
`;

const IdBox = styled.input`
  width: 280px;
  height: 40px;
  background-color: #ffffff;
  border-color: #ffffff;
  border-style: none;
  border-radius: 30px;
  outline-color: #ffffff;
  font-size: 13px;
`;

const PwBox = styled.input`
  width: 280px;
  height: 40px;
  background-color: #ffffff;
  border-color: #ffffff;
  border-style: none;
  border-radius: 30px;
  outline-color: #ffffff;
  font-size: 13px;
`;

const LoginButton = styled.button`
  width: 280px;
  height: 45px;
  border: none;
  background-color: #ff832b;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
    color: #ff832b;
  }
`;

const Line = styled.div`
  background-color: #afafaf;
  width: 350px;
  height: 1px;
  margin-bottom: 20px;
`;

const RegisterBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 150px;
  gap: 10px;
`;

const RegisterText = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: underline;
  margin-bottom: 10px;
  font-size: 15px;
  color: #686868;
`;

const RegisterButton = styled.button`
  width: 280px;
  height: 43px;
  border: none;
  background-color: #ffffff;
  color: #ff832b;
  font-size: 20px;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #ff832b;
    color: #ffffff;
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 70px;
`;

function LoginForm() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleRegisterClick = () => {
    navigate("/RegisterForm");
  };

  const handleBackClick = () => {
    navigate("/");
  };
  const [isVisible, setIsVisible] = useState(true);
  const handleLoginClick = async () => {
    try {
      const requestData = {
        identifier: id,
        password: pw,
      };

      const response = await axios.post(
        "https://healthwarning.kro.kr/users/login/",
        requestData,
        { headers: { "Content-Type": "application/json" } }
      );

      const { access_token, user_id } = response.data;

      localStorage.setItem("token", access_token);

      navigate(`/PostList/${user_id}`);
    } catch (error) {
      console.error("Error logging in:", error);
      alert("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
  };

  const fillTestCredentials = () => {
    setId("healthwarning01");
    setPw("bbiyong!");
    console.log("ID:", "healthwarning01");
    console.log("Password:", "bbiyong!");
  };

  return (
    <>
      <AnimatedContainer>
        <LoginContainer>
          <Header>
            <BackButton src={BackIcon} alt="Back" onClick={handleBackClick} />
          </Header>
          <ServiceInfo>
            <LogoImgBox>
              <LogoImg src={LogoIcon} alt="Logo" />
            </LogoImgBox>
            <LogoText>
              삐용삐용! 매일의 건강을 감독해주는
              <br />
              완벽한 맞춤형 건강 보호사 서비스
            </LogoText>
          </ServiceInfo>
          <LoginText>회원 로그인</LoginText>
          <LoginBox>
            <IdBox
              placeholder=" ID : 아이디를 입력하세요"
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <PwBox
              placeholder=" PW : 비밀번호를 입력하세요"
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <LoginButton onClick={handleLoginClick}>로 그 인</LoginButton>
          </LoginBox>
          <Line />
          <RegisterBox>
            <RegisterText>아직 회원이 아니신가요?</RegisterText>
            <RegisterButton onClick={handleRegisterClick}>
              회원가입하기
            </RegisterButton>
          </RegisterBox>
        </LoginContainer>
        <Footer />
        <Test fillTestCredentials={fillTestCredentials} />
      </AnimatedContainer>
    </>
  );
}

export default LoginForm;
