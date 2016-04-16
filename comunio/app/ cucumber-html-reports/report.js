$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Equipo.feature");
formatter.feature({
  "line": 1,
  "name": "Team View",
  "description": "The user can view the players that are in his Team\nIf the user clicks on a player he can sell them",
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
  "duration": 197057087,
  "status": "passed"
});
formatter.match({
  "location": "EquipoTest.the_user_enters_the_team_view()"
});
formatter.result({
  "duration": 3193018,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.comunio.grupo8.comunio.EquipoTest.the_user_enters_the_team_view(EquipoTest.java:31)\n\tat ✽.When the user enters the team view(Equipo.feature:7)\n",
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
  "duration": 372522,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.comunio.grupo8.comunio.EquipoTest.the_user_has_0_players_in_the_team(EquipoTest.java:26)\n\tat ✽.Given the user has 0 players in the team(Equipo.feature:11)\n",
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
  "duration": 188038,
  "status": "passed"
});
formatter.match({
  "location": "EquipoTest.the_user_presses_on_a_player()"
});
formatter.result({
  "duration": 542894,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.comunio.grupo8.comunio.EquipoTest.the_user_presses_on_a_player(EquipoTest.java:36)\n\tat ✽.When the user presses on a player(Equipo.feature:17)\n",
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
formatter.uri("Mercado.feature");
formatter.feature({
  "line": 1,
  "name": "Player market",
  "description": "Players in possesion of a team should not appear in the market\r\nIf a team buys a Player it should be added to the team",
  "id": "player-market",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Buy a Player",
  "description": "",
  "id": "player-market;buy-a-player",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "there is at least 1 Player in the market",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "the user presses the Buy button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the Player should be added to the user\u0027s team",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the Player should be removed from the market",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 11,
  "name": "Sell a Player",
  "description": "",
  "id": "player-market;sell-a-player",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "the team at least has 1 Player",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user presses the Sell button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the Player should be removed from the user\u0027s team",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "the Player should be added to the market",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "There are no Players in the market",
  "description": "",
  "id": "player-market;there-are-no-players-in-the-market",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "the market is empty",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "the user acceses the market",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "it should display a message saying the market is empty",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login interface",
  "description": "The users have to log into the application before accessing to it\r\nThe users have a username and a password to Login\r\nIf the user introduces a wrong username or password it should display an error",
  "id": "login-interface",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "User Login",
  "description": "",
  "id": "login-interface;user-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "The username and password combination exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "They are correct",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user introduces their username",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "The user introduces their password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "The user should be logged into the application",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTest.the_username_and_password_combination_exists()"
});
formatter.result({
  "duration": 443608,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.comunio.grupo8.comunio.LoginTest.the_username_and_password_combination_exists(LoginTest.java:17)\n\tat ✽.Given The username and password combination exists(login.feature:7)\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginTest.they_are_correct()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.the_user_introduces_their_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.the_user_introduces_their_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.the_user_should_be_logged_into_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "Wrong username or password",
  "description": "",
  "id": "login-interface;wrong-username-or-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "The password and username doesnt match or exist",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "The user introduces the wrong username",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The user introduces the wrong password",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "The user should not be logged into the application",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "The application should display a Login failed message",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.the_password_and_username_doesnt_match_or_exist()"
});
formatter.result({
  "duration": 395880,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.comunio.grupo8.comunio.LoginTest.the_password_and_username_doesnt_match_or_exist(LoginTest.java:22)\n\tat ✽.Given The password and username doesnt match or exist(login.feature:14)\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginTest.the_user_introduces_the_wrong_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.the_user_introduces_the_wrong_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.the_user_should_not_be_logged_into_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.the_application_should_display_a_login_failed_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 20,
  "name": "User sign up",
  "description": "",
  "id": "login-interface;user-sign-up",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "the username the user chooses is not in use",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "The user clicks the sign up button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "fills the registration form",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "The user should be registered in the application",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the user should be able to log in",
  "keyword": "And "
});
formatter.match({
  "location": "LoginTest.the_username_the_user_chooses_is_not_in_use()"
});
formatter.result({
  "duration": 406053,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.comunio.grupo8.comunio.LoginTest.the_username_the_user_chooses_is_not_in_use(LoginTest.java:27)\n\tat ✽.Given the username the user chooses is not in use(login.feature:21)\n",
  "status": "pending"
});
formatter.match({
  "location": "LoginTest.the_user_clicks_the_sign_up_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.fills_the_registration_form()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.the_user_should_be_registered_in_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginTest.the_user_should_be_able_to_log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("noticias.feature");
formatter.feature({
  "line": 1,
  "name": "News View",
  "description": "the user can access a page to check recent events in the application",
  "id": "news-view",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "There are no events in the application",
  "description": "",
  "id": "news-view;there-are-no-events-in-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "There are 0 events",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "the user acceses the News View",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "the application should show a message saying that there are no news",
  "keyword": "Then "
});
formatter.match({
  "location": "NoticiasTest.there_are_0_events()"
});
formatter.result({
  "duration": 658244,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.comunio.grupo8.comunio.NoticiasTest.there_are_0_events(NoticiasTest.java:20)\n\tat ✽.Given There are 0 events(noticias.feature:5)\n",
  "status": "pending"
});
formatter.match({
  "location": "NoticiasTest.the_user_acceses_the_news_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NoticiasTest.the_application_should_show_a_message_saying_that_there_are_no_news()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 9,
  "name": "an user enters the news view",
  "description": "",
  "id": "news-view;an-user-enters-the-news-view",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "there are 1 or more news in the application",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "the user enters the News View",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "the application should show the list of news",
  "keyword": "Then "
});
formatter.match({
  "location": "NoticiasTest.there_are_1_or_more_news_in_the_application()"
});
formatter.result({
  "duration": 422467,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.comunio.grupo8.comunio.NoticiasTest.there_are_1_or_more_news_in_the_application(NoticiasTest.java:25)\n\tat ✽.Given there are 1 or more news in the application(noticias.feature:10)\n",
  "status": "pending"
});
formatter.match({
  "location": "NoticiasTest.the_user_enters_the_news_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NoticiasTest.the_application_should_show_the_list_of_news()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "A new event happens",
  "description": "",
  "id": "news-view;a-new-event-happens",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "The event is of interest for the users",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "the event happens",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "the event should appear in the News View",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "all the users should be able to see it",
  "keyword": "And "
});
formatter.match({
  "location": "NoticiasTest.the_event_is_of_interest_for_the_users()"
});
formatter.result({
  "duration": 568321,
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat com.comunio.grupo8.comunio.NoticiasTest.the_event_is_of_interest_for_the_users(NoticiasTest.java:30)\n\tat ✽.Given The event is of interest for the users(noticias.feature:15)\n",
  "status": "pending"
});
formatter.match({
  "location": "NoticiasTest.the_event_happens()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NoticiasTest.the_event_should_appear_in_the_news_view()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NoticiasTest.all_the_users_should_be_able_to_see_it()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("user.feature");
formatter.feature({
  "line": 1,
  "name": "User",
  "description": "As a user\nI want to win points\nSo that i win the league",
  "id": "user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "change password",
  "description": "",
  "id": "user;change-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "a user with nick \u0027prueba\u0027 and password \u00271234\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "the user wants to change his pass to \u00274321\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the password should be \u00274321\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "prueba",
      "offset": 18
    },
    {
      "val": "1234",
      "offset": 40
    }
  ],
  "location": "UserTest.a_user_with_nick_prueba_and_password_1234(String,String)"
});
formatter.result({
  "duration": 17236358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4321",
      "offset": 38
    }
  ],
  "location": "UserTest.the_user_wants_to_change_his_pass_to_4321(String)"
});
formatter.result({
  "duration": 948830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4321",
      "offset": 24
    }
  ],
  "location": "UserTest.the_password_should_be_4321(String)"
});
formatter.result({
  "duration": 289547,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "change nick",
  "description": "",
  "id": "user;change-nick",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "a user with nick \u0027prueba\u0027 and password \u00271234\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "the user wants to change his nick to \u0027abcd\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "the nick should be \u0027abcd\u0027",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "prueba",
      "offset": 18
    },
    {
      "val": "1234",
      "offset": 40
    }
  ],
  "location": "UserTest.a_user_with_nick_prueba_and_password_1234(String,String)"
});
formatter.result({
  "duration": 222918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 38
    }
  ],
  "location": "UserTest.the_user_wants_to_change_his_nick_to_abcd(String)"
});
formatter.result({
  "duration": 167245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd",
      "offset": 20
    }
  ],
  "location": "UserTest.the_nick_should_be_abcd(String)"
});
formatter.result({
  "duration": 102388,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "a player signing",
  "description": "",
  "id": "user;a-player-signing",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "a user with nick \u0027prueba\u0027 and password \u00271234\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "the user wants to sign for a player with name \u0027Karim Benzema\u0027 and value \u0027100000\u0027 from the team \u0027Real Madrid\u0027 and have enough money",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "the player with name \u0027Karim Benzema\u0027 and value \u0027100000\u0027 from the team \u0027Real Madrid\u0027 should be in the user\u0027s team",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "prueba",
      "offset": 18
    },
    {
      "val": "1234",
      "offset": 40
    }
  ],
  "location": "UserTest.a_user_with_nick_prueba_and_password_1234(String,String)"
});
formatter.result({
  "duration": 214761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karim Benzema",
      "offset": 47
    },
    {
      "val": "100000",
      "offset": 73
    },
    {
      "val": "Real Madrid",
      "offset": 96
    }
  ],
  "location": "UserTest.the_user_wants_to_sign_for_a_player_with_name_karim_benzema_and_value_100000_from_the_team_real_madrid_and_have_enough_money(String,int,String)"
});
formatter.result({
  "duration": 1051914,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karim Benzema",
      "offset": 22
    },
    {
      "val": "100000",
      "offset": 48
    },
    {
      "val": "Real Madrid",
      "offset": 71
    }
  ],
  "location": "UserTest.the_player_with_name_karim_benzema_and_value_100000_from_the_team_real_madrid_should_be_in_the_users_team(String,int,String)"
});
formatter.result({
  "duration": 256522,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "a failed player signing",
  "description": "",
  "id": "user;a-failed-player-signing",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "a user with nick \u0027prueba\u0027 and password \u00271234\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "the user wants to sign for a player with name \u0027Karim Benzema\u0027 and value \u0027100000\u0027 from the team \u0027Real Madrid\u0027 and doesn\u0027t have enough money",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "the player with name \u0027Karim Benzema\u0027 and value \u0027100000\u0027 from the team \u0027Real Madrid\u0027 should not be in the user\u0027s team",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "prueba",
      "offset": 18
    },
    {
      "val": "1234",
      "offset": 40
    }
  ],
  "location": "UserTest.a_user_with_nick_prueba_and_password_1234(String,String)"
});
formatter.result({
  "duration": 148939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karim Benzema",
      "offset": 47
    },
    {
      "val": "100000",
      "offset": 73
    },
    {
      "val": "Real Madrid",
      "offset": 96
    }
  ],
  "location": "UserTest.the_user_wants_to_sign_for_a_player_with_name_karim_benzema_and_value_100000_from_the_team_real_madrid_and_doesnt_have_enough_money(String,int,String)"
});
formatter.result({
  "duration": 199204,
  "status": "passed"
});
formatter.match({
  "location": "UserTest.the_player_with_name_karim_benzema_and_value_100000_from_the_team_real_madrid_should_not_be_in_the_users_team(String,int,String)"
});
formatter.result({
  "duration": 474402,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027com.comunio.grupo8.comunio.UserTest.the_player_with_name_karim_benzema_and_value_100000_from_the_team_real_madrid_should_not_be_in_the_users_team(String,int,String) in file:/Users/Dany/Documents/GitHub/CalidadSw/comunio/app/build/intermediates/classes/test/debug/\u0027 with pattern [^the player with name \u0027Karim Benzema\u0027 and value \u0027100000\u0027 from the team \u0027Real Madrid\u0027 should not be in the user\u0027s team$] is declared with 3 parameters. However, the gherkin step has 0 arguments []. \nStep: Then the player with name \u0027Karim Benzema\u0027 and value \u0027100000\u0027 from the team \u0027Real Madrid\u0027 should not be in the user\u0027s team\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.runTestClass(JUnitTestClassExecuter.java:105)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassExecuter.execute(JUnitTestClassExecuter.java:56)\n\tat org.gradle.api.internal.tasks.testing.junit.JUnitTestClassProcessor.processTestClass(JUnitTestClassProcessor.java:64)\n\tat org.gradle.api.internal.tasks.testing.SuiteTestClassProcessor.processTestClass(SuiteTestClassProcessor.java:50)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.messaging.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.messaging.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.messaging.dispatch.ContextClassLoaderDispatch.dispatch(ContextClassLoaderDispatch.java:32)\n\tat org.gradle.messaging.dispatch.ProxyDispatchAdapter$DispatchingInvocationHandler.invoke(ProxyDispatchAdapter.java:93)\n\tat com.sun.proxy.$Proxy2.processTestClass(Unknown Source)\n\tat org.gradle.api.internal.tasks.testing.worker.TestWorker.processTestClass(TestWorker.java:106)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.gradle.messaging.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:35)\n\tat org.gradle.messaging.dispatch.ReflectionDispatch.dispatch(ReflectionDispatch.java:24)\n\tat org.gradle.messaging.remote.internal.hub.MessageHub$Handler.run(MessageHub.java:360)\n\tat org.gradle.internal.concurrent.ExecutorPolicy$CatchAndRecordFailures.onExecute(ExecutorPolicy.java:54)\n\tat org.gradle.internal.concurrent.StoppableExecutorImpl$1.run(StoppableExecutorImpl.java:40)\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1142)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:617)\n\tat java.lang.Thread.run(Thread.java:745)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 26,
  "name": "delete player",
  "description": "",
  "id": "user;delete-player",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "a user with nick \u0027prueba\u0027 and password \u00271234\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "the user wants to sell a player with name \u0027Bruno Soriano\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "the player with name \u0027Bruno Soriano\u0027 and value \u00274000000\u0027 from the team \u0027Villareal\u0027 shouldn\u0027t be in the user\u0027s team",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "prueba",
      "offset": 18
    },
    {
      "val": "1234",
      "offset": 40
    }
  ],
  "location": "UserTest.a_user_with_nick_prueba_and_password_1234(String,String)"
});
formatter.result({
  "duration": 161018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bruno Soriano",
      "offset": 43
    }
  ],
  "location": "UserTest.the_user_wants_to_sell_a_player_with_name_bruno_soriano(String)"
});
formatter.result({
  "duration": 187410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bruno Soriano",
      "offset": 22
    },
    {
      "val": "4000000",
      "offset": 48
    },
    {
      "val": "Villareal",
      "offset": 72
    }
  ],
  "location": "UserTest.the_player_with_name_bruno_soriano_and_value_4000000_from_the_team_villareal_shouldnt_be_in_the_users_team(String,int,String)"
});
formatter.result({
  "duration": 201997,
  "status": "passed"
});
});