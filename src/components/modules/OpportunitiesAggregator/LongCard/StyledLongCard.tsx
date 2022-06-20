import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.2rem;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_6};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  // @media (orientation: portrait) {
  //   margin-bottom: 5%;
  // }
`;

export const HeaderCard = styled.div`
  position: relative;
  border-bottom-right-radius: 40px;
  border-bottom-left-radius: 40px;
  font-weight: 500;
  font-size: 24px;
  height: 102px;
  background-color: ${({ theme }) => theme.colors.NEUTRAL_5};
  text-align: left;
  // @media (orientation: portrait) {
  // }
`;

export const FooterCard = styled.div`
  padding: 1rem 2.5rem;
  width: 50%;

  /* & > li {
    margin-left: 3rem;
    list-style: disc !important;
  } */
  // @media (orientation: portrait) {
  // }
`;

export const TextBold = styled.div`
  padding: 3rem;
`;
export const ButtonSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Input = styled.button`
  margin: 0 0.5rem 1rem 1rem;
  padding: 5px 5px;
  border-radius: 50px;
  background-color: rgba(123, 123, 123, 0.2);
`;
