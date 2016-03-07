package com.comunio.grupo8.comunio;

/**
 * Created by sobremesa on 27/02/16.
 */

        import org.junit.runner.RunWith;
        import cucumber.api.junit.Cucumber;
        import cucumber.api.PendingException;
        import cucumber.api.java.en.Given;
        import cucumber.api.java.en.When;
        import cucumber.api.java.en.Then;
        import cucumber.api.java.en.And;

        import static junit.framework.Assert.assertEquals;

public class EquipoTest {

        @Given("^the user has 1 or more players in the team$")
        public void the_user_has_1_or_more_players_in_the_team() throws Throwable {
                assertEquals(1,1);
        }

        @Given("^the user has 0 players in the team$")
        public void the_user_has_0_players_in_the_team() throws Throwable {
                throw new PendingException();
        }

        @When("^the user enters the team view$")
        public void the_user_enters_the_team_view() throws Throwable {
                throw new PendingException();
        }

        @When("^the user presses on a player$")
        public void the_user_presses_on_a_player() throws Throwable {
                throw new PendingException();
        }

        @Then("^the user should view the list of player in his team$")
        public void the_user_should_view_the_list_of_player_in_his_team() throws Throwable {
                throw new PendingException();
        }

        @Then("^the application should display a no players in the team message$")
        public void the_application_should_display_a_no_players_in_the_team_message() throws Throwable {
                throw new PendingException();
        }

        @Then("^the application should confirm if the user wants to sell the player$")
        public void the_application_should_confirm_if_the_user_wants_to_sell_the_player() throws Throwable {
                throw new PendingException();
        }

        @And("^if the user accepts the player should be sold$")
        public void if_the_user_accepts_the_player_should_be_sold() throws Throwable {
                throw new PendingException();
        }

}