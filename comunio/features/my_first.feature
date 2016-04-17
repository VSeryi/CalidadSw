Feature: Login feature

  Scenario: As a new user I can sign into the app
    When I press "Registrarse"
    Then I enter text "Prueba" into field with id "NameEditText"
    Then I press the enter button
    Then I enter text "1234" into field with id "passwordEditText"
    Then I press the enter button
    Then I enter text "1234" into field with id "passwordEditText2"
    Then I press the enter button
    Then I press "Registrarse"
    Then I should see "El usuario ha sido registrado con éxito"

  Scenario: As a valid user I can log into my app
    When I press "Iniciar Sesión"
    Then I enter text "Dany" into field with id "userLoginNick"
    Then I press the enter button
    Then I enter text "1234" into field with id "userLoginPassword"
    Then I press the enter button
    Then I press "Entrar"
    Then I should see "Noticias"

  Scenario: As a logged user I can access the Menu
    When I press "Iniciar Sesión"
    Then I enter text "Dany" into field with id "userLoginNick"
    Then I press the enter button
    Then I enter text "1234" into field with id "userLoginPassword"
    Then I press the enter button
    Then I press "Entrar"
    Then I wait for 2 seconds
    Then I drag from 0:36 to 10:36 moving with 1 steps
    Then I should see "Clasificación"

  Scenario: As a logged user I can view the scoreboards
    When I press "Iniciar Sesión"
    Then I enter text "Dany" into field with id "userLoginNick"
    Then I press the enter button
    Then I enter text "1234" into field with id "userLoginPassword"
    Then I press the enter button
    Then I press "Entrar"
    Then I wait for 2 seconds
    Then I drag from 0:36 to 10:36 moving with 1 steps
    Then I press "Clasificación"
    Then I should see "Puntos"
    
Scenario: As a logged user I can view the Market
    When I press "Iniciar Sesión"
    Then I enter text "Dany" into field with id "userLoginNick"
    Then I press the enter button
    Then I enter text "1234" into field with id "userLoginPassword"
    Then I press the enter button
    Then I press "Entrar"
    Then I wait for 2 seconds
    Then I drag from 0:36 to 10:36 moving with 1 steps
    Then I press "Mercado"
    Then I should see "Luka"
