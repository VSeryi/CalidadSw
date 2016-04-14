package com.usuarios.comunio;

import com.jugadores.comunio.ListaJugadores;
import com.jugadores.comunio.aJugadores;

import java.io.Serializable;

/**
 * Created by Dany on 16/10/15.
 */
public abstract class aUsuario implements Serializable {
    private ListaJugadores lista;
    private String nick;
    private String password;
    private double dinero;

    public aUsuario(String nick){
        lista=new ListaJugadores();
        this.nick=nick;
        this.dinero = 0;
    }

    @Override
    public boolean equals(Object o) {
        return this.getNick().equals(((Usuario) o).getNick());
    }

    public ListaJugadores getLista() {
        return lista;
    }

    public void setLista(ListaJugadores lista) {
        this.lista = lista;
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getPassword() {
        return password;
    }

    public void changePassword(String password) {
        this.password = password;
    }

    public double getDinero() {
        return dinero;
    }

    public void setDinero(double dinero) {
        this.dinero = dinero;
    }

    public void fichar(aJugadores player) {
        if (this.dinero >= player.getValor()) {
            this.getLista().add(player);
            this.dinero = this.dinero - player.getValor();
        }
    }
}
