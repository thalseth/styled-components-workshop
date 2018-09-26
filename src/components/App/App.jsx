import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyle';
import { TextButton } from '../Button';
import colors from '../../colors';
import { ShadowCard, CardImage } from '../Card';

// Specify your global application style
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

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${ShadowCard} {
    width: 100%;
    @media (min-width: 600px) {
      width: calc(50% - 40px);
      margin: 20px;
    }
  }
`;

const Article = styled.article`
  padding: 0 20px;

  ${ShadowCard} {
    margin-bottom: 24px;
  }
`;

export default () => (
  <AppStyled>
    <div className="App">
      <Header>
        <h1>Styled components workshop</h1>
      </Header>
      {/* <Button onClick={() => alert('My first styled button!')}>
        My first styled-component
      </Button>
      <Button as="a" href="http://www.vg.no" size="large">
        Another tag (link)
      </Button> */}
      <Article>
        {/* <Card>Card</Card> */}
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
      </Article>
    </div>
    <GlobalStyle />
  </AppStyled>
);
