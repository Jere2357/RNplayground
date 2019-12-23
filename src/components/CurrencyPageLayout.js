import React from 'react';
import NavBar, {
  NavButton,
  NavButtonText,
  NavTitle,
  NavGroup,
} from 'react-native-nav';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Button,
  Left,
  Icon,
} from 'native-base';

const CurrencyPageLayout = ({history}) => {
  return (
    <Container>
      <NavBar>
        <NavTitle>{'Currency'}</NavTitle>
        <NavGroup>
          <NavButton onPress={() => alert('hi')}>
            <NavButtonText>{'Create'}</NavButtonText>
          </NavButton>
          <NavButton onPress={() => alert('hi')}>
            <NavButtonText>{'Read'}</NavButtonText>
          </NavButton>
          <NavButton onPress={() => alert('hi')}>
            <NavButtonText>{'Update'}</NavButtonText>
          </NavButton>
          <NavButton onPress={() => alert('hi')}>
            <NavButtonText>{'Delete'}</NavButtonText>
          </NavButton>
        </NavGroup>
      </NavBar>
    </Container>
  );
};

export default CurrencyPageLayout;
