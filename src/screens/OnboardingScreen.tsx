import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-web-linear-gradient';
import Swiper from 'react-native-web-swiper';
import { Button, Text } from '@ui-kitten/components';

import { PaginationArrowIcon } from '../components/PaginationArrowIcon';
import { PaginationDotIcon } from '../components/PaginationDotIcon';
import Logo from '../components/Logo';
import { OnboardingSlide } from '../components/OnboardingSlide';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 72,
        paddingHorizontal: 40
    },
    loginButton: {
        marginLeft: 4
    },
    loginContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    swiperContainer: {
        flex: 1,
        width: '100%'
    },
    welcomeHeader: {
        textAlign: 'center',
        lineHeight: 29
    }
});

const OnboardingScreen = () => (
    <LinearGradient
        style={styles.container}
        colors={['#d8eafc', '#fffae9']}
        locations={[0.26, 1]}
        useAngle
        angle={233}
    >
        <Logo />
        {/* @ts-expect-error NOTE: control components have wrong definitions in package */}
        <Swiper
            // NOTE: flatten the styles to fix error
            containerStyle={StyleSheet.flatten(styles.swiperContainer)}
            timeout={5}
            loop
            controlsProps={{
                prevPos: 'left',
                nextPos: 'right',
                PrevComponent: PaginationArrowIcon,
                NextComponent: PaginationArrowIcon,
                DotComponent: PaginationDotIcon
            }}
        >
            <OnboardingSlide
                title={'Welcome to\nTandem Diabetes'}
                text="At Tandem Diabetes Care, our whole reason for being is to make the lives of people with diabetes better and better, through relentless innovation and revolutionary customer experience."
            />
            <OnboardingSlide
                title={'Stay informed of your\ndiabetes management'}
                text="Find helpful instructional videos and other educational material all in one place with the ability to save content for later."
            />
            <OnboardingSlide
                title={'Stay up to date on\nyour order status'}
                text="View details about your order, any steps requiring your attention, & transparency around when you'll receive your shipment."
            />
            <OnboardingSlide
                title={'Learn more about your\npump and its features'}
                text="Starting insulin pump therapy is an exciting time. Chances are, you have questions and concerns. We are here to help you every step of the way."
            />
        </Swiper>
        <Button size="large">CREATE ACCOUNT</Button>
        <View style={styles.loginContainer}>
            <Text category="c2">Already have an account?</Text>
            <Text category="c2" status="primary" style={styles.loginButton}>
                Login
            </Text>
        </View>
    </LinearGradient>
);

export default OnboardingScreen;
