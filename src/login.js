import React, { Component } from "react";
import styled, { css } from "styled-components";
import InputDefault from "../components/InputDefault";
import ButtonDefaultStateFocus from "../components/ButtonDefaultStateFocus";
import ButtonDefaultPrimary from "../components/ButtonDefaultPrimary";

function SignUp(props) {
  return (
    <Root>
      <Rectangle3>
        <Image
          src={require("../public/logo.png")}
        ></Image>
        <NewsDeck>NewsDeck</NewsDeck>
        <InputDefault
          style={{
            width: 277,
            height: 47,
            backgroundColor: "transparent",
            opacity: 1,
            marginTop: 178,
            alignSelf: "center"
          }}
        ></InputDefault>
        <ButtonDefaultStateFocus
          style={{
            width: 277,
            height: 52,
            backgroundColor: "transparent",
            opacity: 1,
            marginTop: 11,
            alignSelf: "center"
          }}
          text1=""
        ></ButtonDefaultStateFocus>
        <ButtonDefaultPrimary
          style={{
            width: 179,
            height: 47,
            backgroundColor: "transparent",
            opacity: 1,
            marginTop: 17,
            alignSelf: "center"
          }}
        ></ButtonDefaultPrimary>
        <LoremIpsum>Don&#39;t have an account yet?</LoremIpsum>
      </Rectangle3>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Rectangle3 = styled.div`
  width: 534px;
  height: 768px;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  display: flex;
  margin-top: 12px;
  align-self: center;
`;

const Image = styled.img`
  width: 113px;
  height: 100%;
  margin-top: 26px;
  margin-left: 210px;
  object-fit: contain;
`;

const NewsDeck = styled.span`
  font-family: System;
  width: 146px;
  height: 54px;
  color: #121212;
  font-size: 30px;
  font-weight: regular;
  font-style: normal;
  margin-left: 194px;
`;

const LoremIpsum = styled.span`
  font-family: System;
  width: 170px;
  height: 50px;
  color: #121212;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  margin-top: 37px;
  align-self: center;
`;

export default SignUp;
