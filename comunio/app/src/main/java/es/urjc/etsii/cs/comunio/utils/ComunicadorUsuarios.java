package es.urjc.etsii.cs.comunio.utils;

import es.urjc.etsii.cs.comunio.users.UsersList;

/**
 * Created by Carlos on 26/10/2015.
 *
 * Esta clase es utilizada como intermediaria para pasar los datos de una actividad a otra
 */
public class ComunicadorUsuarios {

    private static UsersList usuarios;


    public static void setUsuarios(UsersList us){
        usuarios = us;
    }

    public static UsersList getUsuarios(){
        return usuarios;
    }
}
