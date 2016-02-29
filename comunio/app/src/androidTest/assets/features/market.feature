Feature: Market
  Players in possesion of a team should not appear in the market
  If a team buys a Player it should be added to the team

  Scenario: Buy a Player
    Given there is at least 1 Player in the market
    When the user presses the Buy button
    Then the Player should be added to the user's team
      And the Player should be removed from the market

  Scenario: Sell a Player
    Given the team at least has 1 Player
    When the user presses the Sell button
    Then the Player should be removed from the user's team
      And the Player should be added to the market

  Scenario: There are no Players in the market
    Given the market is empty
    When the user acceses the market
    Then it should display a message saying the market is empty
