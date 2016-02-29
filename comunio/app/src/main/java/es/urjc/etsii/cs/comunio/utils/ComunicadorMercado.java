package es.urjc.etsii.cs.comunio.utils;

import es.urjc.etsii.cs.comunio.players.ListaJugadores;

/**
 * Created by Dany on 10/11/15.
 */
public class ComunicadorMercado {
    private static ListaJugadores mercado;

    public static ListaJugadores getMercado() {
        return mercado;
    }

    public static void setMercado(ListaJugadores mercado) {
        ComunicadorMercado.mercado = mercado;
    }
}
