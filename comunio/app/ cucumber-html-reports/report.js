$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Equipo.feature");
formatter.feature({
  "line": 1,
  "name": "Team View",
  "description": "The user can view the players that are in his Team\r\nIf the user clicks on a player he can sell them",
  "id": "team-view",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "The user enters the team view",
  "description": "",
  "id": "team-view;the-user-enters-the-team-view",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "the user has 1 or more players in the team",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user enters the team view",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the user should view the list of player in his team",
  "keyword": "Then "
});
formatter.match({
  "location": "EquipoTest.the_user_has_1_or_more_players_in_the_team()"
});
formatter.result({
  "duration": 119159407,
  "status": "passed"
});
formatter.match({
  "location": "EquipoTest.the_user_enters_the_team_view()"
});
formatter.result({
  "duration": 2376489,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.comunio.grupo8.comunio.EquipoTest.the_user_enters_the_team_view(EquipoTest.java:31)\r\n\tat ✽.When the user enters the team view(Equipo.feature:7)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "EquipoTest.the_user_should_view_the_list_of_player_in_his_team()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "The user has no players",
  "description": "",
  "id": "team-view;the-user-has-no-players",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "the user has 0 players in the team",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "the user enters the team view",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the application should display a no players in the team message",
  "keyword": "Then "
});
formatter.match({
  "location": "EquipoTest.the_user_has_0_players_in_the_team()"
});
formatter.result({
  "duration": 365361,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.comunio.grupo8.comunio.EquipoTest.the_user_has_0_players_in_the_team(EquipoTest.java:26)\r\n\tat ✽.Given the user has 0 players in the team(Equipo.feature:11)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "EquipoTest.the_user_enters_the_team_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EquipoTest.the_application_should_display_a_no_players_in_the_team_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "the user presses on a player",
  "description": "",
  "id": "team-view;the-user-presses-on-a-player",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "the user has 1 or more players in the team",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "the user presses on a player",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "the application should confirm if the user wants to sell the player",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "if the user accepts the player should be sold",
  "keyword": "And "
});
formatter.match({
  "location": "EquipoTest.the_user_has_1_or_more_players_in_the_team()"
});
formatter.result({
  "duration": 63630,
  "status": "passed"
});
formatter.match({
  "location": "EquipoTest.the_user_presses_on_a_player()"
});
formatter.result({
  "duration": 354688,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat com.comunio.grupo8.comunio.EquipoTest.the_user_presses_on_a_player(EquipoTest.java:36)\r\n\tat ✽.When the user presses on a player(Equipo.feature:17)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "EquipoTest.the_application_should_confirm_if_the_user_wants_to_sell_the_player()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EquipoTest.if_the_user_accepts_the_player_should_be_sold()"
});
formatter.result({
  "status": "skipped"
});
});