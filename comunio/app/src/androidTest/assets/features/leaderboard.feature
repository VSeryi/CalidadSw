Feature: Leaderboard
  the user can access a leaderboard to check the positions of all users
  the leaderboard shows the points each user has
  the users appear ranked by points

  Scenario: Access to Leaderboard
    Given There are users in the application
    When the user presses the Leaderboard button
    Then the user should view the leaderboard
      And all the users should appear with their points

  Scenario: A user gains points
    When an user wins a match
    Then the match points should be added to the user's score
      And it should be reflected in the Leaderboard

  Scenario: A user wins more points than other
    When an user wins a match
      And his points are grater than other user
    Then the user's position in the leaderboard should change according to his score
