import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  paddingTop: getStatusBarHeight()
})`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 0.5px;
  border-bottom-color: #dadada;
`;

export const HeaderIconContainer = styled.TouchableOpacity`
  padding: 0 10px;
`;

export const HeaderTitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Content = styled.View`
  padding: 10px;
  align-items: center;
`;

export const Avatar = styled.Image`
  align-self: center;
  margin-top: 15px;
  width: 120px;
  height: 120px;
  border-radius: 60px;
  border-width: 1px;
  border-color: #e5e5e5;
  align-items: center;
  justify-content: center;
`;

export const Username = styled.Text`
  font-size: 18px;
  padding: 10px;
`;

export const Stats = styled.View`
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const StatsColumn = styled.View`
  align-items: center;
`;

export const StatsNumber = styled.Text`
  font-size: 18px;
  padding: 10px;
  font-weight: bold;
`;

export const Separator = styled.Text`
  color: #000;
  font-size: 20px;
  opacity: 0.1;
  padding: 0 10px;
`;

export const StatsText = styled.Text`
  color: #8f8f91;
`;

export const BioContainer = styled.TouchableOpacity`
  padding: 10px;
`;

export const ProfileColumn = styled.View`
  align-items: center;
  flex-direction: row;
  padding: 10px;
`;

export const ProfileText = styled.Text`
  font-weight: bold;
`;

export const ProfileEdit = styled.TouchableOpacity.attrs({
  activityOpacity: 1
})`
  border-width: 1.5px;
  padding: 10px 30px;
  border-color: #e6e6e6;
  border-radius: 2px;
  font-size: 12px;
`;

export const Bookmark = styled(Feather)`
  border-width: 1.5px;
  padding: 5px;
  margin-left: 5px;
  border-color: #e6e6e6;
  border-radius: 2px;
`;

export const ButtonAddBio = styled.TouchableOpacity`
  margin-left: 10px;
  display: flex;
  height: 52px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export const ButtonAddBioText = styled.Text`
  color: #333;
`;

export const Tabs = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #e5e5e5;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #e5e5e5;
`;

export const Tab = styled.TouchableOpacity`
  width: 33%;
  height: 50px;
  align-items: center;
  justify-content: center;
`;
