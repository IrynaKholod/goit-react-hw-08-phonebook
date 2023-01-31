import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ContactItem = styled.li`
  display: flex;
  syle: none;
  font-size: 12;
  margin-bottom: 10;
  justify-content: space-between;
`;

export const ContactName = styled.p`
  margin: 10px 0;
  padding: 0;
  font-size: 12px;
`;

export const DeleteButton = styled.button`
  height: 20px;
  margin-top: 10px;

  svg {
    fill: #e776aa;
  }
`;
