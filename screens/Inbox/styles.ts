import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  paddingTop: getStatusBarHeight()
})`
  flex: 1;
  background: #fff;
`;

export const BoxAction = styled.TouchableOpacity.attrs({ activeOpacity: 0.3 })`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0 10px;
`;

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom-width: 0.5px;
  border-bottom-color: #dadada;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ScrollView = styled.ScrollView`
  padding: 5px 10px;
`;

export const Occasion = styled.Text`
  color: #444;
`;

export const ActivityBoxAction = styled.TouchableOpacity.attrs({
  activeOpacity: 0.3
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
`;

export const ActivityImage = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border-color: #333;
  border-width: ${StyleSheet.hairlineWidth}px;
`;

export const ActivityTextContainer = styled.View`
  width: 50%;
`;

export const ActivityTextHeader = styled.Text`
  font-weight: bold;
`;

export const ActivityText = styled.Text`
  color: #333;
`;

export const ActivityAction = styled.View`
  width: 25%;
  align-items: center;
  justify-content: center;
`;

export const ActivityActionButton = styled(ActivityAction)`
  padding: 5px;
  border: 1px solid #e5e5e5;
`;

export const ActivityActionText = styled.Text`
  color: #010101;
`;
