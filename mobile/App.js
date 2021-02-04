import React, { useRef, useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { NavigationContainer, useLinking } from "@react-navigation/native";
import { Provider } from "react-redux";
import PushNotification from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import { enableScreens } from "react-native-screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AnimatedSplash from "react-native-animated-splash-screen";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { PersistGate } from "redux-persist/integration/react";
import AppNavigator from "./src/navigation/app.navigator";
import configureStore from "./src/redux/configureStore";
import baseTheme from "./src/theme.js";
import {
  useFonts,
  Inter_900Black,
  AllertaStencil_400Regular,
  Amarante_400Regular,
} from "@expo-google-fonts/dev";

enableScreens();

const { store, persistor } = configureStore();
const App = () => {
  const [theme, setTheme] = useState(baseTheme);

  let [fontsLoaded] = useFonts({
    Inter_900Black,
    AllertaStencil_400Regular,
    Amarante_400Regular,
  });

  // Notifications;

  // useEffect(() => {
  //   PushNotification.configure({
  //     // (optional) Called when Token is generated (iOS and Android)
  //     onRegister: function (token) {
  //       // console.log('TOKEN:', token);
  //     },

  //     // (required) Called when a remote or local notification is opened or received
  //     onNotification: function (notification) {
  //       console.log("NOTIFICATION:", notification);

  //       // process the notification

  //       // required on iOS only (see fetchCompletionHandler docs: https://github.com/react-native-community/react-native-push-notification-ios)
  //       notification.finish(PushNotificationIOS.FetchResult.NoData);
  //     },

  //     // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  //     senderID: "669736199672",

  //     // IOS ONLY (optional): default: all - Permissions to register.
  //     permissions: {
  //       alert: true,
  //       badge: true,
  //       sound: true,
  //     },

  //     // Should the initial notification be popped automatically
  //     // default: true
  //     popInitialNotification: true,

  //     /**
  //      * (optional) default: true
  //      * - Specified if permissions (ios) and token (android and ios) will requested or not,
  //      * - if not, you must call PushNotificationsHandler.requestPermissions() later
  //      */
  //     requestPermissions: true,
  //   });
  // }, []);
  const ref = useRef();
  const { getInitialState } = useLinking(ref, {
    prefixes: ["https://*", "*://"],
  });
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  useEffect(() => {
    Promise.race([
      getInitialState(),
      new Promise((resolve) =>
        // Timeout in 150ms if `getInitialState` doesn't resolve
        // Workaround for https://github.com/facebook/react-native/issues/25675
        setTimeout(resolve, 150)
      ),
    ])
      .catch((e) => {
        console.error(e);
      })
      .then((state) => {
        if (state !== undefined) {
          setInitialState(state);
        }

        setIsReady(true);
      });
  }, [getInitialState]);

  if (!isReady) {
    return <></>;
  }
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={theme["color-primary-transparent-100"]}
      />
      <IconRegistry icons={EvaIconsPack} />

      <PersistGate loading={null} persistor={persistor}>
        <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
          <SafeAreaProvider>
            <NavigationContainer initialState={initialState} ref={ref}>
              <AppNavigator />
            </NavigationContainer>
          </SafeAreaProvider>
        </ApplicationProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
