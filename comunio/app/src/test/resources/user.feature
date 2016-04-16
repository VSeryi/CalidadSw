Feature: User
As a user
I want to win points
So that i win the league

  Scenario: change password
    Given a user with nick 'prueba' and password '1234'
     When the user wants to change his pass to '4321'
     Then the password should be '4321'
  
  Scenario: change nick
    Given a user with nick 'prueba' and password '1234'
     When the user wants to change his nick to 'abcd'
     Then the nick should be 'abcd'
  
  Scenario: a player signing
    Given a user with nick 'prueba' and password '1234'
     When the user wants to sign for a player with name 'Karim Benzema' and value '100000' from the team 'Real Madrid' and have enough money
     Then the player with name 'Karim Benzema' and value '100000' from the team 'Real Madrid' should be in the user's team
  
  Scenario: a failed player signing
    Given a user with nick 'prueba' and password '1234'
     When the user wants to sign for a player with name 'Karim Benzema' and value '100000' from the team 'Real Madrid' and doesn't have enough money
     Then the player with name 'Karim Benzema' and value '100000' from the team 'Real Madrid' should not be in the user's team
  
  Scenario: delete player 
    Given a user with nick 'prueba' and password '1234'
     When the user wants to sell a player with name 'Bruno Soriano'
     Then the player with name 'Bruno Soriano' and value '4000000' from the team 'Villareal' shouldn't be in the user's team
  
  
