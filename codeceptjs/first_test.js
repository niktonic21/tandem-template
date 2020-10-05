Feature('test');

Scenario('should open links screen', ({ I }) => {
    I.amOnPage('/');
    I.waitForText('Go to Link Screen');
    I.seeElement({ css: '[data-testid="go-to-link-screen-id"]' });
    I.click({ css: '[data-testid="go-to-link-screen-id"]' });
    I.waitForText('Read the Expo documentation');
});
