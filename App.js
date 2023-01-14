import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './app/components/Card';
import ListingScreen from './app/screen/ListingScreen';
import MessagesScreen from './app/screen/MessagesScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import WelcomeScreen from './app/screen/WelcomeScreen';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItems from './app/components/ListItems';
import AccountScreen from './app/screen/AccountScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker'


const data = [
  {label : 'Phone', id : 1},
  {label : 'Clothing', id : 2},
  {label : 'Technology', id : 3},
  {label : 'Grocery', id : 4},
]
export default function App() {
  return (
    // <WelcomeScreen/>
    // <View style = {{marginTop : 50, paddingHorizontal : 20, width : '100%'}}>
    //   <Card/>
    //   <Card/>
    //   <Card/>
    //   <Card/>
    // </View>

    // <ViewImageScreen/>
    // <ListingScreen/>
    // <MessagesScreen/>
    // <Screen><Icon name = 'trash-can-outline' size = {50} backgoundColor/></Screen>
    // <Screen><ListItems title = {'This is Naman Goyal'} IconComponent = {<Icon name = 'trash-can-outline' size = {50} />}/></Screen>
    <Screen>
      {/* <AppTextInput/> */}
     <AppPicker data = {data} iconName = 'apps' placeholder = 'naman'/>
    </Screen>
    // <AccountScreen/>
    // <ListingScreen/>
  );
}