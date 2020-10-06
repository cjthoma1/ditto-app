import React from 'react';
import { Image, Animated, Easing } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';
import Lottie from 'lottie-react-native';

import musicFly from '../../../assets/lottie-animations/music-fly.json';

import {
  Container,
  Details,
  Actions,
  Username,
  Tags,
  Music,
  MusicBox,
  BoxAction,
  TextAction,
  UserAdd,
  UserImage,
  styles
} from './styles';

interface Item {
  id: number;
  username: string;
  userImage: string;
  tags: string;
  music: string;
  likes: number;
  comments: number;
  uri: string;
}

interface Props {
  play: boolean;
  item: Item;
}

const Feed: React.FC<Props> = ({ play, item }) => {
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 10000,
      easing: Easing.linear,
      useNativeDriver: true
    })
  ).start();

  const rotateProp = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,.3)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '70%'
        }}
      />
      <Container>
        <Video
          source={{ uri: item.uri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={play}
          isLooping
          style={{
            width: '100%',
            height: '100%'
          }}
        />
      </Container>
      <Details>
        <Username>{item.username}</Username>
        <Tags>{item.tags}</Tags>
        <MusicBox>
          <FontAwesome name="music" size={15} color="#f5f5f5" />
          <Music>{item.music}</Music>
        </MusicBox>
      </Details>
      <Actions>
        <BoxAction>
          <UserImage resizeMode="contain" source={{ uri: item.userImage }} />
          <UserAdd>
            <FontAwesome style={styles.miniIconStyle} name="plus" />
          </UserAdd>
        </BoxAction>
        <BoxAction>
          <FontAwesome style={styles.generalIconStyle} name="heart" />
          <TextAction>{item.likes}</TextAction>
        </BoxAction>
        <BoxAction>
          <FontAwesome style={styles.generalIconStyle} name="commenting" />
          <TextAction>{item.comments}</TextAction>
        </BoxAction>
        <BoxAction>
          <FontAwesome style={styles.greenIconStyle} name="whatsapp" />
          <TextAction>Share</TextAction>
        </BoxAction>
        <BoxAction>
          <Animated.View
            style={{
              borderRadius: 50,
              borderWidth: 12,
              borderColor: '#292929',
              transform: [
                {
                  rotate: play ? rotateProp : 0
                }
              ]
            }}
          >
            <Image
              style={{
                width: 26,
                height: 26,
                borderRadius: 25
              }}
              source={{
                uri: 'https://avatars3.githubusercontent.com/u/45601574'
              }}
            />
          </Animated.View>

          <Lottie
            source={musicFly}
            progress={play ? spinValue : 0}
            style={{
              width: 100,
              position: 'absolute',
              bottom: 0,
              right: 0
            }}
          />
        </BoxAction>
      </Actions>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.4)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '50%'
        }}
      />
    </>
  );
};

export default Feed;
