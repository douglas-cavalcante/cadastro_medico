import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  bahavion: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const Form = styled.View`
  align-self: stretch;
`;
