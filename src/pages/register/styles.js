import styled from "styled-components";

export const Container = styled.main`
  font-family: "Open Sans";
  /* background-color: red; */
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Wrapper = styled.div`
  max-width: 320px;

  form {
    margin: 16px 0;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  font-style: normal;
`;

export const TitleRegister = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 44px;
`;

export const SubtitleRegister = styled.p`
  font-weight: 400px;
  font-size: 16px;
  line-height: 44px;
`;

export const PrivacyPolicyTerms = styled.p`
  font-weight: 400px;
  font-size: 16px;
  font-weight: 400;
  margin-top: 32px;
`;
