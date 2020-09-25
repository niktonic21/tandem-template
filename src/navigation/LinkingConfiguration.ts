import * as Linking from 'expo-linking';

export default {
    prefixes: [Linking.makeUrl('/')],
    config: {
        screens: {
            Root: {
                screens: {
                    HomeScreen: 'home',
                    LinksScreen: 'links',
                    OnboardingScreen: 'onboarding'
                }
            },
            NotFound: '*'
        }
    }
};
