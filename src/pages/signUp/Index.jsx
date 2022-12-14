import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import TapBar from "../../components/TapBar";
import Swal from "sweetalert2";
import useToggle from "../../hooks/useToggle";
import { useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { LoginAPI, SignUpAPI } from "../../tools/instance";
import {
  StWrap,
  PageTitle,
  FirstPage,
  SecondPage,
  ThirdPage,
  ForthPage,
  ContentWrap,
  IdConfirmBtn,
  NextBtn,
  IdInput,
  PwInput,
  MySports,
  FavSports,
  SportsBlock,
  RecommendId,
  SportLabel,
  Logo,
  GrayBorder,
  FootballInput,
  TennisInput,
  BadmintonInput,
  RunningInput,
  SwimmingInput,
  BaseballInput,
  BasketballInput,
  GolfInput,
  HealthInput,
  FootballDiv,
  BadmintonDiv,
  TennisDiv,
  SwimmingDiv,
  BasketballDiv,
  RunningDiv,
  GolfDiv,
  HealthDiv,
  BaseballDiv,
  RecommendTitle,
  Agreement,
  AgreementTerm,
  AgreementWrap,
  AgreementBtn,
} from "./Styles";

const SignUp = () => {
  const [idAndPwPage, setIdAndPwPage] = useState(true);
  const [phoneCertify, setPhoneCertify] = useState(false);
  const [addInfoPage, setAddInfoPage] = useState(false);
  const [addSportsPage, setAddSportsPage] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [codeConfirm, setCodeConfirm] = useState(false);
  const [idConfirm, setIdConfirm] = useState(false);
  const [nnConfirm, setNnConfirm] = useState(false);
  const [code, setCode] = useState("");
  const [agree, setAgree, agreeHandler] = useToggle();
  const [agreementTerm, setAgreementTerm] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    getValues,
    formState: { errors },
  } = useForm({ mode: "all" });
  const password = useRef();
  password.current = watch("password");
  const navigate = useNavigate();

  const onIdPwPageHandler = (e) => {
    e.preventDefault();
    const loginId = getValues("loginId");
    const idRex = /^[a-zA-z0-9]{6,20}$/;
    if (loginId.trim() === "") {
      Swal.fire({
        text: "???????????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    if (!idRex.test(loginId)) {
      Swal.fire({
        text: "???????????? ????????? ?????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    const pw = getValues("password");
    const pwRex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,25}$/;
    if (pw.trim() === "") {
      Swal.fire({
        text: "??????????????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    if (!pwRex.test(pw)) {
      Swal.fire({
        text: "??????????????? ????????? ?????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    const pwConfirm = getValues("confirmPassword");
    if (pwConfirm.trim() === "") {
      Swal.fire({
        text: "??????????????? ?????? ?????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    if (!idConfirm) {
      Swal.fire({
        text: "ID ?????? ????????? ????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    setIdAndPwPage(false);
    setPhoneCertify(true);
    setAddInfoPage(false);
    setAddSportsPage(false);
  };

  const onNumberCertifiHandler = (e) => {
    e.preventDefault();
    if (!codeConfirm) {
      Swal.fire({
        text: "????????? ????????? ????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    setIdAndPwPage(false);
    setPhoneCertify(false);
    setAddInfoPage(true);
    setAddSportsPage(false);
  };

  const onAddInfoPageHandler = (e) => {
    e.preventDefault();
    const nickname = getValues("nickname");
    if (!nickname) {
      Swal.fire({
        text: "???????????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    if (!nnConfirm) {
      Swal.fire({
        text: "???????????? ??????????????? ????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    setIdAndPwPage(false);
    setPhoneCertify(false);
    setAddInfoPage(false);
    setAddSportsPage(true);
  };

  const onSubmit = async (data) => {
    const loginId = getValues("loginId");
    if (!agree) {
      Swal.fire({
        text: "??????????????? ???????????? ???????????? ????????????????? ????????? ???????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    SignUpAPI.signUp(data)
      .then((res) => {
        if (res.status === 201) {
          navigate("/welcome", {
            state: { loginId: loginId, password: password },
          });
        }
      })
      .catch((error) => {
        const errorMsg = error.response.data.code;
        if (errorMsg === -1) {
          Swal.fire({
            text: "?????? ?????? ??????????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
        }
        if (errorMsg === -2) {
          Swal.fire({
            text: "?????? ?????? ??????????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
        }
        if (errorMsg === -3) {
          Swal.fire({
            text: "?????? ?????? ????????? ???????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
        }
        if (errorMsg === -4) {
          Swal.fire({
            text: "?????? ????????? ???????????? ????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
        }
        if (errorMsg === -5) {
          Swal.fire({
            text: "??????????????? ??????????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
        }
      });
  };

  // ID ?????? ??????
  const checkId = () => {
    const loginId = getValues("loginId");
    const idRex = /^[a-zA-z0-9]{6,20}$/;
    if (loginId.trim() === "") {
      Swal.fire({
        text: "???????????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return {};
    }
    if (!idRex.test(loginId)) {
      Swal.fire({
        text: "???????????? ????????? ?????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    if (loginId.length <= 5) {
      Swal.fire({
        text: "???????????? ?????? ?????? ?????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return {};
    }
    SignUpAPI.checkId({ loginId })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            text: "?????? ????????? ??????????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
          setIdConfirm(true);
        }
      })
      .catch((error) => {
        if (error.response.status === 412) {
          Swal.fire({
            text: "?????? ?????? ?????? ??????????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
        }
      });
  };

  // ????????? ???????????? ??????
  const sendPhoneForCode = () => {
    const phone = getValues("phone");
    if (phone.length < 10 || phone.length > 11) {
      Swal.fire({
        text: "10-11????????? ????????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
    } else {
      LoginAPI.postforVCode({ phone })
        .then((res) => {
          Swal.fire({
            text: "??????????????? ?????????????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
          setCodeSent(true);
        })
        .catch((err) => {
          if (err.response.status === 412) {
            Swal.fire({
              text: "?????? ????????? ????????? ???????????????",
              width: "300px",
              confirmButtonText: "??????",
              confirmButtonColor: "#40d295",
              showClass: { popup: "animated fadeInDown faster" },
              hideClass: { popup: "animated fadeOutUp faster" },
            });
            return;
          } else {
            Swal.fire({
              text: "???????????? ?????? ????????? ???????????????",
              width: "300px",
              confirmButtonText: "??????",
              confirmButtonColor: "#40d295",
              showClass: { popup: "animated fadeInDown faster" },
              hideClass: { popup: "animated fadeOutUp faster" },
            });
            return;
          }
        });
    }
  };

  const checkVCode = () => {
    const phone = getValues("phone");
    LoginAPI.postforCheckVCode({ code, phone })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            text: "????????? ?????????????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
        }
        setCodeConfirm(true);
      })
      .catch((err) => {
        Swal.fire({
          text: "?????? ????????? ?????? ??????????????????",
          width: "300px",
          confirmButtonText: "??????",
          confirmButtonColor: "#40d295",
          showClass: { popup: "animated fadeInDown faster" },
          hideClass: { popup: "animated fadeOutUp faster" },
        });
      });
  };

  // ????????? ?????? ??????
  const checkNn = () => {
    const nickname = getValues("nickname");
    if (nickname.trim() === "") {
      Swal.fire({
        text: "???????????? ??????????????????",
        width: "300px",
        confirmButtonText: "??????",
        confirmButtonColor: "#40d295",
        showClass: { popup: "animated fadeInDown faster" },
        hideClass: { popup: "animated fadeOutUp faster" },
      });
      return;
    }
    SignUpAPI.checkNickname({ nickname })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            text: "?????? ????????? ??????????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
          setNnConfirm(true);
        }
      })
      .catch((error) => {
        if (error.response.status === 412) {
          Swal.fire({
            text: "?????? ?????? ?????? ??????????????????",
            width: "300px",
            confirmButtonText: "??????",
            confirmButtonColor: "#40d295",
            showClass: { popup: "animated fadeInDown faster" },
            hideClass: { popup: "animated fadeOutUp faster" },
          });
          return;
        }
      });
  };

  const agreementTermHandler = () => {
    setAgreementTerm(!agreementTerm);
  };

  return (
    <>
      <Layout>
        <Header />
        <StWrap>
          <form onSubmit={handleSubmit(onSubmit)}>
            {idAndPwPage ? (
              <FirstPage>
                <Logo>
                  <img alt="" src="/spotslogo.png" />
                </Logo>
                <ContentWrap>
                  <GrayBorder>
                    <BsFillPersonFill size={24} color={"#949494"} />
                    <IdInput
                      type="text"
                      {...register("loginId", {
                        required: true,
                        pattern: /^[A-za-z0-9]{6,20}$/,
                      })}
                      placeholder="?????????"
                      autoComplete="off"
                    />
                    <IdConfirmBtn type="button" onClick={checkId}>
                      ????????????
                    </IdConfirmBtn>
                  </GrayBorder>
                  {errors.loginId && errors.loginId.type === "required" && (
                    <p>??? ???????????? ??????????????????</p>
                  )}
                  {errors.loginId && errors.loginId.type === "pattern" && (
                    <p> ??? 6~20?????? ????????? ?????? ?????? ????????? ?????? ???????????????</p>
                  )}
                  <GrayBorder>
                    <IoIosLock size={24} color={"#949494"} />
                    <PwInput
                      type="password"
                      {...register("password", {
                        required: true,
                        pattern:
                          /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,25}$/,
                      })}
                      placeholder="????????????"
                    />
                  </GrayBorder>
                  {errors.password && errors.password.type === "required" && (
                    <p>??? ??????????????? ??????????????????</p>
                  )}
                  {errors.password && errors.password.type === "pattern" && (
                    <p>
                      ??? ????????? ??????, ??????????????? ???????????? 6?????? ?????? ??????????????????
                    </p>
                  )}
                  <GrayBorder>
                    <IoIosLock size={24} color={"#949494"} />
                    <PwInput
                      type="password"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) => value === password.current,
                      })}
                      placeholder="???????????? ??????"
                    />
                  </GrayBorder>
                  {errors.confirmPassword &&
                    errors.confirmPassword.type === "required" && (
                      <p>??? ?????? ?????? ??????????????? ??????????????????</p>
                    )}
                  {errors.confirmPassword &&
                    errors.confirmPassword.type === "validate" && (
                      <p>??? ??????????????? ???????????? ????????????</p>
                    )}
                  <NextBtn onClick={onIdPwPageHandler}>??????</NextBtn>
                </ContentWrap>
              </FirstPage>
            ) : null}

            {phoneCertify ? (
              <SecondPage>
                <Logo>
                  <img alt="" src="/spotslogo.png" />
                </Logo>
                <ContentWrap>
                  <GrayBorder>
                    <input
                      type="text"
                      {...register("phone", {
                        required: true,
                        minLegnth: 10,
                        pattern: /^[0-9]{3}[0-9]{3,4}[0-9]{4}/,
                      })}
                      placeholder="01012345678"
                      autoComplete="off"
                    />
                    {!codeSent ? (
                      <button
                        style={{
                          border: "none",
                          color: "#ff00b3",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        type="button"
                        onClick={sendPhoneForCode}
                      >
                        ????????????
                      </button>
                    ) : (
                      <button
                        style={{
                          border: "none",
                          color: "#ff00b3",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                        type="button"
                        onClick={sendPhoneForCode}
                      >
                        ????????????
                      </button>
                    )}
                  </GrayBorder>
                  {errors.phone && errors.phone.type === "required" && (
                    <p>????????? ????????? ??????????????????</p>
                  )}
                  {errors.phone && errors.phone.type === "pattern" && (
                    <p>10~11????????? ????????? ??????????????????</p>
                  )}
                  <GrayBorder>
                    <input
                      placeholder="??????????????? ???????????????"
                      type="text"
                      required
                      name="code"
                      autoComplete="off"
                      onChange={(e) => setCode(e.target.value)}
                    />
                    <button
                      style={{
                        border: "none",
                        color: "#ff00b3",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      type="button"
                      onClick={checkVCode}
                    >
                      ????????????
                    </button>
                  </GrayBorder>
                  <NextBtn onClick={onNumberCertifiHandler}>??????</NextBtn>
                </ContentWrap>
              </SecondPage>
            ) : null}

            {addInfoPage ? (
              <ThirdPage>
                <Logo>
                  <img alt="" src="/spotslogo.png" />
                </Logo>
                <ContentWrap>
                  <GrayBorder>
                    <input
                      type="text"
                      {...register("nickname", {
                        required: true,
                        minLegnth: 1,
                      })}
                      placeholder="???????????? ??????????????????"
                      autoComplete="off"
                    />
                    <button
                      style={{
                        border: "none",
                        color: "#ff00b3",
                        fontWeight: "600",
                      }}
                      type="button"
                      onClick={checkNn}
                    >
                      ????????????
                    </button>
                  </GrayBorder>
                  {errors.nickname && errors.nickname.type === "required" && (
                    <p>???????????? ??????????????????</p>
                  )}
                  {errors.nickname && errors.nickname.type === "minLegnth" && (
                    <p>???????????? ??? ?????? ?????? ??????????????????</p>
                  )}
                  <div>
                    <input
                      style={{
                        width: "30px",
                      }}
                      checked="checked"
                      type="radio"
                      value="??????"
                      {...register("gender", { required: true })}
                    />
                    ??????
                    <input
                      style={{
                        width: "30px",
                      }}
                      type="radio"
                      value="??????"
                      {...register("gender", { required: true })}
                    />
                    ??????
                    {errors.gender && errors.gender.type === "required" && (
                      <p>????????? ??????????????????</p>
                    )}
                  </div>
                  <NextBtn onClick={onAddInfoPageHandler}>??????</NextBtn>
                </ContentWrap>
              </ThirdPage>
            ) : null}

            {addSportsPage ? (
              <ForthPage>
                <PageTitle>?????? ????????? ?????????????</PageTitle>
                <SportsBlock>
                  <MySports>
                    <SportLabel>
                      <FootballInput
                        type="checkbox"
                        id="football"
                        value="football"
                        {...register("sports")}
                      />
                      <FootballDiv></FootballDiv>
                    </SportLabel>
                    <SportLabel>
                      <TennisInput
                        type="checkbox"
                        value="tennis"
                        {...register("sports")}
                      />
                      <TennisDiv />
                    </SportLabel>
                    <SportLabel>
                      <BadmintonInput
                        type="checkbox"
                        value="badminton"
                        {...register("sports")}
                      />
                      <BadmintonDiv></BadmintonDiv>
                    </SportLabel>
                  </MySports>
                  <PageTitle>?????? ????????? ???????????????????</PageTitle>
                  <FavSports>
                    <SportLabel>
                      <SwimmingInput
                        type="checkbox"
                        value="swim"
                        {...register("favSports")}
                      />
                      <SwimmingDiv />
                    </SportLabel>
                    <SportLabel>
                      <BaseballInput
                        type="checkbox"
                        value="baseball"
                        {...register("favSports")}
                      />
                      <BaseballDiv />
                    </SportLabel>
                    <SportLabel>
                      <BasketballInput
                        type="checkbox"
                        value="basketball"
                        {...register("favSports")}
                      />
                      <BasketballDiv />
                    </SportLabel>
                  </FavSports>{" "}
                  <FavSports>
                    <SportLabel>
                      <RunningInput
                        type="checkbox"
                        value="running"
                        {...register("favSports")}
                      />
                      <RunningDiv />
                    </SportLabel>
                    <SportLabel>
                      <GolfInput
                        type="checkbox"
                        value="golf"
                        {...register("favSports")}
                      />
                      <GolfDiv />
                    </SportLabel>
                    <SportLabel>
                      <HealthInput
                        type="checkbox"
                        value="health"
                        {...register("favSports")}
                      />
                      <HealthDiv />
                    </SportLabel>
                  </FavSports>
                  <RecommendTitle>????????? ID??? ??????????????????</RecommendTitle>
                  <GrayBorder>
                    <RecommendId
                      type="text"
                      {...register("recommendId", {})}
                      placeholder="5,000????????? ?????? ??????"
                      autoComplete="off"
                    />
                  </GrayBorder>
                  <Agreement>
                    <AgreementWrap>
                      <input
                        type="checkbox"
                        name="agreement"
                        value={agree}
                        onChange={agreeHandler}
                        // required
                        onInvalid="alert('??????????????? ???????????? ???????????? ????????? ????????????')"
                        style={{ width: "10px" }}
                      />
                      <div>???????????? ?????????????? ??????</div>
                      <AgreementBtn onClick={agreementTermHandler}>
                        ????????????
                      </AgreementBtn>
                    </AgreementWrap>
                  </Agreement>
                  {agreementTerm ? (
                    <AgreementTerm>
                      SPOTS??? ?????????????????????????????? ???????????? ????????? ?????? ????????????
                      ??????????????? ???????????? ????????????. ???????????? ????????? ?????? ?????????
                      ????????? ????????? ?????? ????????????, ?????? ?????? ????????? ????????????
                      ???????????? ????????????.
                      <br />
                      <br />
                      <b>??? ???????????? ?????? ?????? ??? ?????????????? ??????</b>
                      <br />
                      ???) ?????? ??????
                      <br />- ????????????(????????????) ??? ?????????
                      <br />
                      ???) ?????? ??? ?????? ??????
                      <br />- ?????? ?????? ??????(????????????) ??? ?????? ?????? ??????(?????????)
                      <br />
                      <b>??? ???????????? ?????? ??? ????????????</b>
                      <br />- ?????????????? ?????????????????? ??????????????? ???????????????????????
                      ????????? ?????????
                      <br />
                      <b> ??? ?????????????????? </b>
                      <br />- ??????????????? ??? ????????? ?????? ???????????? ??????, ?????????
                      ????????? ????????? ???????????? ????????? ????????????.
                    </AgreementTerm>
                  ) : null}
                  <NextBtn type="submit">????????????</NextBtn>
                </SportsBlock>
              </ForthPage>
            ) : null}
          </form>
        </StWrap>
        <TapBar />
      </Layout>
    </>
  );
};

export default SignUp;
