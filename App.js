import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './app/components/Card';
import ListingScreen from './app/screen/ListingScreen';
import MessagesScreen from './app/screen/MessagesScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import WelcomeScreen from './app/screen/WelcomeScreen';

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
    <MessagesScreen/> 
  );
}