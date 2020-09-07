import styled from 'styled-components/native';

interface Props {
  home: boolean;
}

export const Container = styled.View`
  top: 3px;
  width: 35px;
  height: 30px;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  background: ${(props: Props) => (props.home ? '#fff' : '#000')};
  border-left-width: 2px;
  border-left-color: #20d5ea;
  border-right-width: 2px;
  border-right-color: #ec376d;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})``;
