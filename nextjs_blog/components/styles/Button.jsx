import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.green};
  color: ${props => props.theme.white};
  padding: 0.5rem 1.25rem;
  border: 0;
  border-radius: 2px;
  box-shadow: 0px 13px 20px rgba(118, 196, 125, 0.411204);
  font-weight: normal;
`;
