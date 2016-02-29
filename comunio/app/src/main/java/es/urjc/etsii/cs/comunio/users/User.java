package es.urjc.etsii.cs.comunio.users;

import java.io.Serializable;

/**
 * Created by Dany on 16/10/2015.
 */
public class User extends AbstratUser implements Serializable{
    public User(String nick, String pass){
        super (nick);
        this.setPassword(pass);
    }

    @Override
    public boolean equals(Object o) {
        return (this.getNick().contentEquals(((User) o).getNick()));
    }
}
