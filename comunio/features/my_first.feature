Feature: Login feature

  Scenario: As a valid user I can log into my app
    Given 
    When I press "Iniciar Sesión"
    Then I enter text "admin" into field with id "user"
    Then I enter text "admin" into field with id "pass"
    Then I press "Entrar"
    Then I should see "Noticias"
