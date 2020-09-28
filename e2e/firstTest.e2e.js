import { device, by, element, expect } from 'detox';

//const isIos = (): boolean => device.getPlatform() === 'ios';
const isWeb = (): boolean => device.getPlatform() === 'web';

const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
    beforeEach(async () => {
        if (isWeb) {
            await device.disableSynchronization();
        } else {
            await reloadApp();
        }
    });

    it('should have home screen', async () => {
        const welcomeElement = element(by.id('welcome'));
        await expect(welcomeElement).toBeVisible();
    });

    it('should show world screen after tap', async () => {
        await element(by.id('go-to-link-screen-id')).tap();

        const linkListElement = element(by.id('links-list-id'));
        await expect(linkListElement).toBeVisible();

        //for slowing proces///
        await expect(linkListElement).toBeVisible();
        await expect(linkListElement).toBeVisible();
        await expect(linkListElement).toBeVisible();
        await expect(linkListElement).toBeVisible();
        await expect(linkListElement).toBeVisible();
        await expect(linkListElement).toBeVisible();
        await expect(linkListElement).toBeVisible();
        await expect(linkListElement).toBeVisible();
        await expect(linkListElement).toBeVisible();
        await expect(linkListElement).toBeVisible();
    });
});
