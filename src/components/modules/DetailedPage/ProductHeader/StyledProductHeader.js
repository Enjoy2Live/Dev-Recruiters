import styled from "styled-components";

export const Tags = styled.div`
  color: #c4c4c4;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 21px;
  padding: 6px;
  border: 1px solid rgba(211, 212, 214, 0.9);
  border-radius: 20px;
`;

export const ColumnTitle = styled.div`
  margin-top: 1rem;
  font-family: Abel;
  color: #f1f4f5;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.125rem;
  padding: 0.375rem;
`;

export const HeaderBlock = styled.div`
  min-height: 7.5vh;
  font-family: Noto Sans;
`;

export const Column1 = styled.div`
  background-color: #30363e;
  display: flex;
  width: 50%;
  lign-items: flex-start;
  flex-direction: column;
  border-radius: 25px 25px 0px 0px;
  padding: 1rem;
`;
export const Column2 = styled.div`
  background-color: #4f5154;
  display: flex;
  width: 30%;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 25px 25px 0px 0px;
  padding: 1rem;
`;
export const Column3 = styled.div`
  background-color: #59687b;
  display: flex;
  width: 20%;
  align-items: flex-end;
  flex-direction: column;
  border-radius: 25px 25px 0px 0px;
  padding: 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > ${Tags} {
    margin-top: 1rem;
    margin-left: 1rem;
  }
`;

export const HeaderSubtitle = styled.div`
  color: #d3d4d6;
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  margin-top: 1rem;
  margin-left: 1rem;
  line-height: 40px;
`;

export const Description = styled.div`
  color: #d3d4d6;
  font-family: Noto Sans;
  font-size: 1.5rem;
  font-weight: 400;
  font-style: italic;
  margin-top: 1rem;
  margin-left: 1rem;
  line-height: 2.5rem;
`;

export const Username = styled.div`
  color: #c4c4c4;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-right: 1rem;
  line-height: 18px;
`;
export const UsernameAvatar = styled.div`
  width: 2.1875rem;
  height: 2.1875rem;
  margin-top: 1rem;
  margin-right: 1rem;
`;
export const Date = styled.div`
  color: #c4c4c4;
  font-size: 1.125rem;
  font-weight: 400;
  margin-top: 1rem;
  margin-right: 1rem;
  line-height: 18px;
`;
export const Commitment = styled.div`
  color: #c4c4c4;
  font-size: 1.875rem;
  font-weight: 400;
  margin-top: 3rem;
  margin-right: 1rem;
  line-height: 18px;
`;
