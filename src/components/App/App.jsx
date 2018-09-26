import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import Button, { TextButton } from '../Button';
import colors from '../../colors';
import { ShadowCard, CardImage } from '../Card';

const AppStyled = styled.div``;

const Header = styled.header`
  background-color: ${colors.primaryColorDark};
  color: ${colors.primaryColorLight};
  padding: 20px;
  margin-bottom: 64px;

  h1 {
    text-transform: uppercase;
    text-align: center;
  }
`;

const Section = styled.section`
  padding: 0 20px;

  ${Button} {
    margin: 0 20px 20px 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${ShadowCard} {
    width: 100%;
    margin-bottom: 20px;

    @media (min-width: 600px) {
      width: calc(50% - 10px);

      &:nth-of-type(2n + 1) {
        margin-right: 20px;
      }
    }
  }
`;

export default () => (
  <AppStyled>
    <div className="App">
      <Header>
        <h1>Styled components workshop</h1>
      </Header>
      <Section>
        <h2>Buttons</h2>
        <Button onClick={() => alert('My first styled button!')}>Button</Button>
        <Button as="a" href="http://www.knowit.no">
          Button - Anchor
        </Button>
        <Button as="a" href="http://www.knowit.no" size="large">
          Button - Large
        </Button>
        <TextButton as="a" href="http://www.knowit.no">
          TextButton
        </TextButton>
      </Section>
      <Section>
        <h2>Cards</h2>
        <Cards>
          <ShadowCard hasImage>
            <CardImage image="https://picsum.photos/5512/3708?image=1081" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <TextButton onClick={() => alert('My first styled button!')}>
              Learn more
            </TextButton>
          </ShadowCard>
          <ShadowCard hasImage>
            <CardImage image="https://picsum.photos/5616/3744?image=1048" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <TextButton onClick={() => alert('My first styled button!')}>
              Learn more
            </TextButton>
          </ShadowCard>
        </Cards>
      </Section>
    </div>
    <GlobalStyle />
  </AppStyled>
);
