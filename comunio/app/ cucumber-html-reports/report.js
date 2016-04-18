$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("user.feature");
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
  "duration": 163126304,
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
  "duration": 108335,
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
  "duration": 2100118,
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
  "duration": 138027,
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
  "duration": 165685,
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
  "duration": 89500,
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
  "duration": 149272,
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
  "duration": 981280,
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
  "duration": 190098,
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
  "duration": 113785,
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
  "duration": 206714,
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
  "location": "UserTest.the_player_with_name_karim_benzema_and_value_100000_from_the_team_real_madrid_should_not_be_in_the_users_team(String,int,String)"
});
formatter.result({
  "duration": 223332,
  "status": "passed"
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
  "duration": 149588,
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
  "duration": 189477,
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
  "duration": 228103,
  "status": "passed"
});
});