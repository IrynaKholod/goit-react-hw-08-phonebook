import styled from '@emotion/styled';

export const Container = styled.div`
  align-items: 'center';
  justify-content: 'center';
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    padding: 40px 40px;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: flex-start;
  }
  @media screen and (min-width: 1280px) {
    max-width: 800px;
  }
`;