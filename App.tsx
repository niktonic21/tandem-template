import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { tandemTheme } from './src/theme/custom-theme'
import { default as mapping } from './src/theme/mapping.json'

import store from './src/redux/store';
import useCachedResources from './src/utils/hooks/useCachedResources';
import useColorScheme from './src/utils/hooks/useColorScheme';
import Navigation from './src/navigation';

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store.reduxStore}>
                <PersistGate loading={null} persistor={store.persistor}>
                    <SafeAreaProvider>
                        <ApplicationProvider {...eva} theme={tandemTheme} customMapping={mapping}>
                            <Navigation colorScheme={colorScheme} />
                            <StatusBar />
                        </ApplicationProvider>
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        );
    }
}
