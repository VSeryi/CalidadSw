Feature: Team View
  The user can view the players that are in his Team
  If the user clicks on a player he can sell them

  Scenario: The user enters the team view
  Given the user has 1 or more players in the team
  When the user enters the team view
  Then the user should view the list of player in his team

  Scenario: The user has no players
  Given the user has 0 players in the team
  When the user enters the team view
  Then the application should display a no players in the team message

  Scenario: the user presses on a player
  Given the user has 1 or more players in the team
  When the user presses on a player
  Then the application should confirm if the user wants to sell the player
    And if the user accepts the player should be sold
