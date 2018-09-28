import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledComponent = styled.div``;
const MyReactComponentWithBlacklistedProp = ({
  nonDivAttributeProp,
  ...other
}) => <StyledComponent totallyFine={nonDivAttributeProp} {...other} />;

const MyReactComponent = ({ className, ...props }) => (
  <div className={className} {...props} />
);

const ComponentWithPropThatShouldBeBlacklisted = styled(MyReactComponent)`
  color: ${props => props.color};
`;

const BestPractiseComponents = () => (
  <Fragment>
    <ComponentWithPropThatShouldBeBlacklisted randomPropThatShouldBeBlacklisted="1337">
      Component with prop that is not blacklisted
    </ComponentWithPropThatShouldBeBlacklisted>
    <MyReactComponentWithBlacklistedProp
      href="mypage.com"
      randomBlacklistedProp="1337"
    >
      Component with prop that is automatically blacklisted by
      styled-components.
    </MyReactComponentWithBlacklistedProp>
  </Fragment>
);

BestPractiseComponents.propTypes = {};
export default BestPractiseComponents;
