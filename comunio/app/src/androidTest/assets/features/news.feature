Feature: News View
  the user can access a page to check recent events in the application
  
  Scenario: There are no events in the application
    Given There are 0 events
    When the user acceses the News View
    Then the application should show a message saying that there are no news

  Scenario: an user enters the news view
    Given there are 1 or more news in the application
    When the user enters the News View
    Then the application should show the list of news

  Scenario: A new event happens
    Given The event is of interest for the users
    When the event happens
    Then the event should appear in the News View
      And all the users should be able to see it
