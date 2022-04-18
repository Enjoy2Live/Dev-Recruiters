import styled from "styled-components";

export const FiltersWrapper = styled.div`
  padding-left: 2rem;
`;

export const SectionTitle = styled.p`
 font-family: ${({ theme }) => theme.fonts.normal}, sans-serif;
  font-size: 1.6rem;
  color: #fff;
  padding-bottom: 1.25rem;
  padding-left: 1.5rem;
  margin: 0;
`;

export const Wrapper = styled.div`
  padding-left: 0;
  padding-bottom: 6.25rem;
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  
  padding: 0rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  width: 100%;
`;

export const Section = styled.div`

`

export const DropDownContainer = styled.div`
display: flex;
flex-direction: row;
column-gap: 1.5rem;
`

export const ChipsList = styled.ul`
  padding-top: 2rem;
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 1.25rem;
  row-gap: 1.25rem;
`;

export const ChipsListItem = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  background-color: #7E8288;
  font-size: 1rem;
  padding: .5rem 1.5rem;
  padding-right: 0;
  border-radius: 1.25rem;
  width: full;
  color: #F1F4F5;

  &:hover {
    filter: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04))
      drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1));
  }

  & p {
    padding: 0;
    margin: 0;
    width: 100%;
  
  }

  & button {
    background-color: transparent;
    color: #F1F4F5;
    border: none;
    padding-right: 1rem;
  }
`;