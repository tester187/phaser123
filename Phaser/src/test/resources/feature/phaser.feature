Feature: To Test login functionalities

  Scenario Outline: Check login is successful with valid creditinals
    Given Chrome Browser is Open
    And User is on login page
    When User enters <username> and <password>
    And User clicks on the login button
    Then User is navigated to the home page

    Examples: 
      | username  | password |
      | Divyanshu |    12345 |
      | Ali       |    12345 |
