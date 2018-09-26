import styled from 'styled-components';
import colors from '../../colors';

export const ButtonBase = styled.button`
  border: 0;
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: ${props => (props.size === 'large' ? '18px' : '16px')};

  &:hover {
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }
`;

export default styled(ButtonBase)`
  background-color: ${colors.primaryColor};
  color: ${colors.primaryColorText};
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  &:hover {
    background-color: ${colors.primaryColorDark};
  }
  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`;

export const TextButton = styled(ButtonBase)`
  background-color: transparent;
  color: ${colors.primaryTextColor};

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
