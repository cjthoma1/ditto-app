import { Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import React from 'react';
import {
  ActivityAction,
  ActivityActionButton,
  ActivityActionText,
  ActivityBoxAction,
  ActivityImage,
  ActivityText,
  ActivityTextContainer,
  ActivityTextHeader,
  BoxAction,
  Container,
  Header,
  Occasion,
  ScrollView,
  Title
} from './styles';

import server from '../../mock-server.json';

interface Activity {
  id: number;
  username: string;
  userImage: string;
  message: string;
  live: boolean;
}
const Inbox: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>All activity</Title>
        <MaterialIcons name="arrow-drop-down" size={24} color="black" />
        <BoxAction>
          <Feather name="send" size={24} color="black" />
        </BoxAction>
      </Header>

      <ScrollView>
        <Occasion>This Month</Occasion>
        {server.inbox.map((activity: Activity) => (
          <ActivityBoxAction key={activity.id}>
            <ActivityImage source={{ uri: activity.userImage }} />
            <ActivityTextContainer>
              <ActivityTextHeader>{activity.username}</ActivityTextHeader>
              <ActivityText>{activity.message}</ActivityText>
            </ActivityTextContainer>

            {activity.live ? (
              <ActivityAction>
                <FontAwesome name="chevron-right" size={20} color="#E5E5E5" />
              </ActivityAction>
            ) : (
              <ActivityActionButton>
                <ActivityActionText>Friends</ActivityActionText>
              </ActivityActionButton>
            )}
          </ActivityBoxAction>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Inbox;
