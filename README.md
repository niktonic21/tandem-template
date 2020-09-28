# expoTemplate
Expo web and mobile template with redux

# Instalation
 - remove node_modules, yarn.lock, pods and podfile.lock if exist
 - yarn install
 - yarn ios
 - yarn web


# detox
 If ios and web build is working correctly: 

  For testing iOS, in project root directory: 
    - run "detox build --configuration ios" 
    - run ios simualtor with metro "yarn ios"
    - then run "detox test --configuration ios"

  For testing web, in project root directory:
    - create web build "yarn web-build"
    - install web local server "yarn global add serve"
    - start server "serve web-build", (local server e.g. "http://localhost:5000" have to be same as in package.json web configuration)
    - run "detox test --configuration web"
