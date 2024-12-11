import { StyleSheet, Image, Platform } from 'react-native';
import * as React from 'react';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useSession } from '@/components/ctx';
import { Avatar, Card, IconButton, TouchableRipple, Divider,Portal,Dialog,Button ,Text,MD2Colors} from 'react-native-paper';
export default function TabTwoScreen() {
  const { signOut } = useSession();
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);
  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="index.account"
          style={styles.headerImage}
        />
      }>


<Portal>
      <Dialog dismissable={false} visible={visible} onDismiss={hideDialog}>
        <Dialog.Icon icon="alert" />
        <Dialog.Title style={styles.title}>Confirm SignOut</Dialog.Title>
        <Dialog.Content>
          <Text variant="bodyMedium">Do you really want to signout?</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button textColor={MD2Colors.red500} onPress={() => {signOut(); }}>Ok</Button>
          <Button onPress={() => {hideDialog();}}>Cancel</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>

      <Card.Title
        title="Account Details"
        left={(props) => <Avatar.Icon {...props} icon="account" />}
        right={(props) => <IconButton {...props} icon="chevron-right" />}
      />
      <Divider />

      <TouchableRipple
        onPress={() => { setVisible(true) }}
        
      >
        <Card.Title
          title="Sign Out"
          left={(props) => <Avatar.Icon {...props} icon="logout" />}
          right={(props) => <IconButton {...props} icon="chevron-right" />}
        />
      </TouchableRipple>
      <Divider />



    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
