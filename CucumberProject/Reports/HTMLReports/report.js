$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/LoginFeature.feature");
formatter.feature({
  "name": "Test the login functionality of OrangeHRM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Test the valid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on loginpage",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should land on home page",
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
        "admin",
        "admin123"
      ]
    },
    {
      "cells": [
        "admin1111",
        "admin1111"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Test the valid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_is_on_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin and admin123",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Test the valid login",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on loginpage",
  "keyword": "Given "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_is_on_loginpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters admin1111 and admin1111",
  "keyword": "When "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_enters_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should land on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.stepDefinition.LoginSteps.user_should_land_on_home_page()"
});
formatter.result({
  "status": "passed"
});
});