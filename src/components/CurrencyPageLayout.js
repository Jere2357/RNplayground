import React from 'react';
import NavBar, {
  NavButton,
  NavButtonText,
  NavTitle,
  NavGroup,
} from 'react-native-nav';

const CurrencyPageLayout = ({history}) => {
  return (
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
  );
};

export default CurrencyPageLayout;
