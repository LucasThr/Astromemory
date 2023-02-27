// import {FontAwesome} from '@expo/vector-icons';
// import * as Font from 'expo-font';
// import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
// import mobileAds, {MaxAdContentRating} from 'react-native-google-mobile-ads';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // SplashScreen.preventAutoHideAsync();
        // Load fonts
        // await Font.loadAsync({
        //   ...FontAwesome.font,
        //   'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        // });
        // mobileAds()
        //   .setRequestConfiguration({
        //     // Update all future requests suitable for parental guidance
        //     maxAdContentRating: MaxAdContentRating.PG,
        //     // Indicates that you want your content treated as child-directed for purposes of COPPA.
        //     tagForChildDirectedTreatment: true,
        //     // Indicates that you want the ad request to be handled in a
        //     // manner suitable for users under the age of consent.
        //     tagForUnderAgeOfConsent: true,
        //     // An array of test device IDs to allow.
        //     testDeviceIdentifiers: ['EMULATOR'],
        //   })
        //   .then(() => {
        //     // Request config successfully set!
        //     console.log('ADMOB : Configuration set !');
        //     mobileAds()
        //       .initialize()
        //       .then(adapterStatuses => {
        //         console.log(
        //           'ADMOB : Initialization complete !',
        //           adapterStatuses,
        //         );
        //         // Initialization complete!
        //       });
        //   });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        // SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
