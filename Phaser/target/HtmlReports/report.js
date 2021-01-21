$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/phaser.feature");
formatter.feature({
  "name": "To Test login functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Check login is successful with valid creditinals",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome Browser is Open",
  "keyword": "Given "
});
formatter.step({
  "name": "User is on login page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "User is navigated to the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Divyanshu",
        "12345"
      ]
    },
    {
      "cells": [
        "Ali",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid creditinals",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome Browser is Open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.Steps.chrome_Browser_is_Open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Divyanshu and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Steps.user_enters_Username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Steps.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Steps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#logut\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027LAPTOP-0I1F5RRB\u0027, ip: \u0027192.168.87.231\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\DIVYAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57913}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 87e9863d8d195ec4134afc9e2aabf36b\n*** Element info: {Using\u003did, value\u003dlogut}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat StepDefinition.Steps.user_is_navigated_to_the_home_page(Steps.java:50)\r\n\tat ✽.User is navigated to the home page(file:///C:/Phasesoftesting/Phaser/src/test/resources/feature/phaser.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Check login is successful with valid creditinals",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Chrome Browser is Open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.Steps.chrome_Browser_is_Open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Steps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters Ali and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.Steps.user_enters_Username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.Steps.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.Steps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#logut\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0-alpha-5\u0027, revision: \u0027b3a0d621cc\u0027\nSystem info: host: \u0027LAPTOP-0I1F5RRB\u0027, ip: \u0027192.168.87.231\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\DIVYAN~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:57933}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4eb3c54284320b23f3547079bdb9e651\n*** Element info: {Using\u003did, value\u003dlogut}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:161)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:333)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:381)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:194)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:325)\r\n\tat StepDefinition.Steps.user_is_navigated_to_the_home_page(Steps.java:50)\r\n\tat ✽.User is navigated to the home page(file:///C:/Phasesoftesting/Phaser/src/test/resources/feature/phaser.feature:8)\r\n",
  "status": "failed"
});
});