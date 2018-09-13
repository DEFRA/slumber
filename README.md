# Slumber

Selenium Webdriver + Page Object Pattern + Cucumber-based browser automation tests boilerplate project.

Ensure your application is started (default url is http://localhost:3000) then,

`$ npm run start`

Or

`$ npm run start-firefox`

Or

`$ npm run start-chrome`

Full options

`$ npm run start -- --world-parameters='{"origin": "http://localhost:8001", "browser": "firefox"}'`


Example of running a single feature file

`$ npm start -- features/person-name.feature`

Or

`$ npm run start-chrome -- features/person-name.feature`