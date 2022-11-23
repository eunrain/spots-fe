import React from "react";
import Layout from "../../components/Layout";
import FlexibleHeader from "../../components/FlexibleHeader";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TapBar from "../../components/TapBar";

const UserPage = () => {
  const title = "MyPage";
  const navigate = useNavigate();
  const nickname = localStorage.getItem("nickname");
  const userPoint = localStorage.getItem("point");

  return (
    <Layout>
      <FlexibleHeader title={title} />
      <Container>
        <Profile>
          <img alt="프로필이미지" src="/myprofile_logo.png" />
          <div>
            <p>안녕하세요!</p>
            <p>
              {nickname}
              <span>님</span>
            </p>
          </div>
        </Profile>
        <PointBox>
          <div>총 보유 포인트</div>
          <div>
            <h1>{Number(userPoint).toLocaleString("ko-KR")}</h1>
            <p>P</p>
          </div>
        </PointBox>
        <MenuBox>
          <img
            alt="나의정보"
            src="/my.png"
            onClick={() => navigate("/mypage")}
          />
          <img
            alt="팀관리"
            src="/Teamsetting.png"
            onClick={() => navigate("/teampage")}
          />
          <img
            alt="나의예약리스트"
            src="/myreservationlist.png"
            onClick={() => navigate("/reservpage")}
          />
          <img
            alt="나의구장등록"
            src="/myplace.png"
            onClick={() => navigate("/hostlist")}
          />
        </MenuBox>
      </Container>
      <TapBar />
    </Layout>
  );
};

export default UserPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  padding-top: 120px;
  padding-left: 100px;
  background-color: #000000;
  position: relative;
  z-index: 1;
  img {
    width: 88px;
    height: 88px;
    border: 4px solid #1746c7;
    border-radius: 50px;
    margin-top: -20px;
  }
  div {
    margin-top: -18px;
    margin-left: 90px;
    font-size: 20px;
    font-weight: 700;
    color: #fefefe;
  }
  p:first-child {
    text-align: right;
  }
  p:last-child {
    font-size: 40px;
    margin-top: -5px;
    margin-left: -35px;
    span {
      font-size: 20px;
      margin-left: 10px;
    }
  }
`;

const PointBox = styled.div`
  width: 75%;
  height: 119px;
  border-radius: 8px;
  background-color: #1746c7;
  position: relative;
  z-index: 2;
  top: -60px;
  color: #fefefe;

  div:first-child {
    margin: 18px 0 0 20px;
  }

  div:last-child {
    display: flex;
    justify-content: flex-end;
    margin-right: 13px;

    h1 {
      text-align: right;
      margin-right: 10px;
      margin-top: 18px;
    }
    p {
      color: #49e7a5;
      width: 30px;
      height: 30px;
      text-align: center;
      line-height: 35px;
      border-radius: 40px;
      font-size: 20px;
      font-weight: 700;
      background-color: black;
    }
  }
`;

const MenuBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 380px;
  height: 390px;
  margin-top: -40px;
  padding: auto;
  padding-bottom: 70px;
  img {
    width: 170px;
    height: 170px;
    margin: auto;
    cursor: pointer;
  }
`;
