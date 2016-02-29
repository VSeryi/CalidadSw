Feature: Lineups
  The users should be able to see and change their team's Lineups
  the players can only be selected in the positions they play


  @ScenarioId("FUNCTIONAL.AUTH.SCN.001") @UserStory("MyApp-135") @login-scenarios
  Scenario: View the Lineups
    Given the user has at least 1 player in his team
    When the user accesses the Lineups view pressing the button
    Then the application should show the current Lineups for the user's team

  @ScenarioId("FUNCTIONAL.AUTH.SCN.002") @UserStory("MyApp-135") @login-scenarios
  Scenario: View the players for one position
    Given the user has 1 or more player available for 1 position
    When the user presses on one position button
    Then the application should show the list of players available for this position

  @ScenarioId("FUNCTIONAL.AUTH.SCN.003") @UserStory("MyApp-135") @login-scenarios
  Scenario: Change a player
    Given The user has 1 or more players available for 1 position
      And The user has the position player list open
    When the user presses on a player other than the one he has selected
    Then the player for the position selected should be the player pressed

  @ScenarioId("FUNCTIONAL.AUTH.SCN.004") @UserStory("MyApp-135") @login-scenarios
  Scenario: The user has no players for one position
    Given The user has 0 player for one position
    When the user acceses the Lineups view
    Then the application should display a  no players for the position message
