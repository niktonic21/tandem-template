const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
    tests: './codeceptjs/*_test.js',
    output: './codeceptjs/output',
    helpers: {
        WebDriver: {
            url: 'http://localhost:19006',
            browser: 'chrome',
            desiredCapabilities: {
                chromeOptions: {
                    args: ['--headless', '--disable-gpu', '--no-sandbox']
                }
            }
        }
    },
    include: {
        I: './steps_file.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'tandem-template',
    plugins: {
        retryFailedStep: {
            enabled: true
        },
        screenshotOnFail: {
            enabled: true
        },
        wdio: {
            enabled: true,
            services: ['selenium-standalone'],
            seleniumLogs: './codeceptjs/output/logs'
            // seleniumInstallArgs: {
            //     drivers: {
            //         chrome: { version: '85.0.4183.87' },
            //         firefox: { version: '0.27.0' }
            //     }
            // },
            // seleniumArgs: {
            //     drivers: {
            //         chrome: { version: '85.0.4183.87' },
            //         firefox: { version: '0.27.0' }
            //     }
            // }
        }
    }
};
