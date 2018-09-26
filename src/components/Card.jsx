import styled from 'styled-components';
import { TextButton } from './Button/Button';

export const Card = styled.div`
  border-radius: 4px;
  background: #fff;;
  text-align: left;
  

  ${TextButton} {
    padding: 10px 10px;
    margin: 0 10px;
    font-weight: bold;
    font-size: 14px;
  }

  h2 {
    color: {colors.primaryTextColor};
  }

  p {
    margin: 0 20px 1rem;
  }
`;

export const CardImage = styled.div`
  height: 200px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.image});
`;

export const ShadowCard = styled(Card)`
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 02, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  border: none;
  padding: ${props => (props.hasImage ? '0 0 24px 0' : '24px 0')};

  ${CardImage} {
    margin-bottom: 18px;
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
  }
`;
