package es.urjc.etsii.cs.comunio.utils;

import es.urjc.etsii.cs.comunio.users.AbstratUser;

/**
 * Created by Carlos on 27/10/2015.
 */
public class ComunicadorUsuarioLogged {

    private static AbstratUser user;

    public static void setUser(AbstratUser u){
        user = u;
    }

    public static AbstratUser getUser(){
        return user;
    }
}
