# expoTemplate
Expo web and mobile template with redux

# Instalation
 - yarn install
 - yarn ios
 - yarn web


# detox
 If ios and web build is working correctly: 

  For testing iOS, first download this build and copy it to e2e/bin/ folder. Name of the build have to be "Exponent.app" (e2e/bin/Exponent.app) then run in project root directory "detox test --configuration ios"

  For testing web, first install web local server "yarn global add serve" and start it with "serve public", then run "detox test --configuration web"


