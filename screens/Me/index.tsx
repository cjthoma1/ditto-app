import React, { useState } from 'react';
import { ScrollView, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import Posts from '../../components/TabsProfile/Posts';
import Likeds from '../../components/TabsProfile/Likes';
import Privates from '../../components/TabsProfile/Privates';

import {
  Container,
  Title,
  Header,
  Avatar,
  Username,
  Content,
  Stats,
  Separator,
  StatsText,
  StatsColumn,
  StatsNumber,
  ProfileColumn,
  ProfileEdit,
  ProfileText,
  Bookmark,
  Tabs,
  Tab,
  BioContainer,
  HeaderTitleContainer,
  HeaderIconContainer
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Me: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'posts', title: 'posts' },
    { key: 'likeds', title: 'likeds' },
    { key: 'privates', title: 'privates' }
  ]);

  const renderScene = SceneMap({
    posts: Posts,
    likeds: Likeds,
    privates: Privates
  });
  return (
    <Container>
      <Header>
        {/* style={{ position: 'absolute', left: 10, top: 10 }} */}
        <HeaderIconContainer>
          <AntDesign name="adduser" size={24} color="black" />
        </HeaderIconContainer>

        <HeaderTitleContainer>
          <Title>Cray Thomas</Title>
          <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        </HeaderTitleContainer>

        <HeaderIconContainer>
          <FontAwesome name="ellipsis-v" size={24} color="black" />
        </HeaderIconContainer>
      </Header>
      <ScrollView>
        <Content>
          <Avatar
            source={{
              uri:
                'https://i.pinimg.com/originals/7b/8f/49/7b8f492529fd236dc59baf184faf8488.jpg'
            }}
          />
          <Username>@crayjthomas</Username>
          <Stats>
            <StatsColumn>
              <StatsNumber>1950</StatsNumber>
              <StatsText>Following</StatsText>
            </StatsColumn>
            <Separator>|</Separator>
            <StatsColumn>
              <StatsNumber>650</StatsNumber>
              <StatsText>Followers</StatsText>
            </StatsColumn>
            <Separator>|</Separator>
            <StatsColumn>
              <StatsNumber>950</StatsNumber>
              <StatsText>Likes</StatsText>
            </StatsColumn>
          </Stats>
          <ProfileColumn>
            <ProfileEdit>
              <ProfileText>Edit profile</ProfileText>
            </ProfileEdit>
            <TouchableOpacity>
              <Bookmark name="bookmark" size={24} color="black" />
            </TouchableOpacity>
          </ProfileColumn>

          <BioContainer>
            <StatsText>Tap to add bio</StatsText>
          </BioContainer>
        </Content>

        <TabView
          renderTabBar={(props) => (
            <Tabs>
              {props.navigationState.routes.map((tab, key) => (
                <Tab key={key} onPress={() => props.jumpTo(tab.key)}>
                  {tab.key === 'posts' && (
                    <FontAwesome
                      name="bars"
                      size={20}
                      color={
                        key === props.navigationState.index ? '#333' : '#E5E5E5'
                      }
                    />
                  )}
                  {tab.key === 'likeds' && (
                    <FontAwesome
                      name="heart"
                      size={20}
                      color={
                        key === props.navigationState.index ? '#333' : '#E5E5E5'
                      }
                    />
                  )}
                  {tab.key === 'privates' && (
                    <FontAwesome
                      name="lock"
                      size={20}
                      color={
                        key === props.navigationState.index ? '#333' : '#E5E5E5'
                      }
                    />
                  )}
                </Tab>
              ))}
            </Tabs>
          )}
          style={{ width: Dimensions.get('window').width }}
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: Dimensions.get('window').width, height: 200 }}
        />
      </ScrollView>
    </Container>
  );
};

export default Me;
