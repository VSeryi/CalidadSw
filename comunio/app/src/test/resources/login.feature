Feature: Login interface
  The users have to log into the application before accessing to it
  The users have a username and a password to Login
  If the user introduces a wrong username or password it should display an error

  Scenario: User Login
    Given The username and password combination exists
      And They are correct
    When The user introduces their username
      And The user introduces their password
    Then The user should be logged into the application

  Scenario: Wrong username or password
    Given The password and username doesnt match or exist
    When The user introduces the wrong username
      And The user introduces the wrong password
    Then The user should not be logged into the application
      And The application should display a Login failed message

  Scenario: User sign up
    Given the username the user chooses is not in use
    When The user clicks the sign up button
      And fills the registration form
    Then The user should be registered in the application
      And the user should be able to log in
