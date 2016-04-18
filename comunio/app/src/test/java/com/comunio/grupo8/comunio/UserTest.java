package com.comunio.grupo8.comunio;

/**
 * Created by Dany on 11/4/16.
 */
import com.jugadores.comunio.Delantero;
import com.jugadores.comunio.aJugadores;
import com.usuarios.comunio.Usuario;
import com.usuarios.comunio.aUsuario;

import org.junit.runner.RunWith;

import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

import static junit.framework.Assert.assertEquals;


public class UserTest {
    aUsuario user;

    @Given("^a user with nick '(.+)' and password '(.+)'$")
    public void a_user_with_nick_prueba_and_password_1234(final String nick,final String pass) throws Throwable {
        user = new Usuario(nick,pass);
        user.getLista().cargarJugadoresMercado();
    }

    @When("^the user wants to change his pass to '(.+)'$")
    public void the_user_wants_to_change_his_pass_to_4321(final String pass) throws Throwable {
        user.changePassword(pass);
    }

    @When("^the user wants to change his nick to '(.+)'$")
    public void the_user_wants_to_change_his_nick_to_abcd(final String nick) throws Throwable {
        user.setNick(nick);
    }

    @When("^the user wants to sign for a player with name '(.+)' and value '(\\d+)' from the team '(.+)' and have enough money$")
    public void the_user_wants_to_sign_for_a_player_with_name_karim_benzema_and_value_100000_from_the_team_real_madrid_and_have_enough_money(final String name,final int value,final String team) throws Throwable {
        aJugadores player = new Delantero(name,team,value);
        user.setDinero(100000000);
        user.fichar(player);
    }

    @When("^the user wants to sign for a player with name '(.+)' and value '(\\d+)' from the team '(.+)' and doesn't have enough money$")
    public void the_user_wants_to_sign_for_a_player_with_name_karim_benzema_and_value_100000_from_the_team_real_madrid_and_doesnt_have_enough_money(final String name,final int value,final String team) throws Throwable {
        aJugadores player = new Delantero(name,team,value);
        user.fichar(player);
    }

    @When("^the user wants to sell a player with name '(.+)'$")
    public void the_user_wants_to_sell_a_player_with_name_bruno_soriano(final String name) throws Throwable {
        aJugadores player = user.getLista().get(name);
        user.getLista().remove(player);
        user.setDinero(user.getDinero() + player.getValor());
    }

    @Then("^the password should be '(.+)'$")
    public void the_password_should_be_4321(final String pass) throws Throwable {
        assertEquals(user.getPassword().equals(pass), true);
    }

    @Then("^the nick should be '(.+)'$")
    public void the_nick_should_be_abcd(final String nick) throws Throwable {
        assertEquals(user.getNick().equals(nick),true);
    }

    @Then("^the player with name '(.+)' and value '(\\d+)' from the team '(.+)' should be in the user's team$")
    public void the_player_with_name_karim_benzema_and_value_100000_from_the_team_real_madrid_should_be_in_the_users_team(final String name,final int value,final String team) throws Throwable {
        aJugadores jug = new Delantero(name,team,value);
        assertEquals(user.getLista().contains(jug),true);
    }

    @Then("^the player with name '(.+)' and value '(\\d+)' from the team '(.+)' should not be in the user's team$")
    public void the_player_with_name_karim_benzema_and_value_100000_from_the_team_real_madrid_should_not_be_in_the_users_team(final String name,final int value,final String team) throws Throwable {
        aJugadores jug = new Delantero(name,team,value);
        assertEquals(user.getLista().contains(jug),false);
    }

    @Then("^the player with name '(.+)' and value '(\\d+)' from the team '(.+)' shouldn't be in the user's team$")
    public void the_player_with_name_bruno_soriano_and_value_4000000_from_the_team_villareal_shouldnt_be_in_the_users_team(final String name,final int value,final String team) throws Throwable {
        aJugadores jug = new Delantero(name,team,value);
        assertEquals(user.getLista().contains(jug),false);
    }



}
