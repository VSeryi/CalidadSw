package es.urjc.etsii.cs.comunio.activities;


import android.test.ActivityUnitTestCase;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class AlineacionTest extends ActivityUnitTestCase<LineupsActivity> {

    public AlineacionTest() {
        super(LineupsActivity.class);
    }

    @Given("^the user has at least 1 player in his team$")
    public void the_user_has_at_least_1_player_in_his_team() throws Throwable {
        System.out.println("YO ME LLAMO RALPH");
        throw new PendingException();
    }

    @Given("^the user has 1 or more player available for 1 position$")
    public void the_user_has_1_or_more_player_available_for_1_position() throws Throwable {
        throw new PendingException();
    }

    @Given("^The user has 1 or more players available for 1 position$")
    public void the_user_has_1_or_more_players_available_for_1_position() throws Throwable {
        throw new PendingException();
    }

    @Given("^The user has 0 player for one position$")
    public void the_user_has_0_player_for_one_position() throws Throwable {
        throw new PendingException();
    }

    @When("^the user accesses the Lineups view pressing the button$")
    public void the_user_accesses_the_lineups_view_pressing_the_button() throws Throwable {
        throw new PendingException();
    }

    @When("^the user presses on one position button$")
    public void the_user_presses_on_one_position_button() throws Throwable {
        throw new PendingException();
    }

    @When("^the user presses on a player other than the one he has selected$")
    public void the_user_presses_on_a_player_other_than_the_one_he_has_selected() throws Throwable {
        throw new PendingException();
    }

    @When("^the user acceses the Lineups view$")
    public void the_user_acceses_the_lineups_view() throws Throwable {
        throw new PendingException();
    }

    @Then("^the application should show the current Lineups for the user's team$")
    public void the_application_should_show_the_current_lineups_for_the_users_team() throws Throwable {
        throw new PendingException();
    }

    @Then("^the application should show the list of players available for this position$")
    public void the_application_should_show_the_list_of_players_available_for_this_position() throws Throwable {
        throw new PendingException();
    }

    @Then("^the player for the position selected should be the player pressed$")
    public void the_player_for_the_position_selected_should_be_the_player_pressed() throws Throwable {
        throw new PendingException();
    }

    @Then("^the application should display a  no players for the position message$")
    public void the_application_should_display_a_no_players_for_the_position_message() throws Throwable {
        throw new PendingException();
    }

    @And("^The user has the position player list open$")
    public void the_user_has_the_position_player_list_open() throws Throwable {
        throw new PendingException();
    }

}