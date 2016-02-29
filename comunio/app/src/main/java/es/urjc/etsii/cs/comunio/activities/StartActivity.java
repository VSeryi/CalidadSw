package es.urjc.etsii.cs.comunio.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;

import es.urjc.etsii.cs.comunio.R;
import es.urjc.etsii.cs.comunio.players.*;
import es.urjc.etsii.cs.comunio.users.UsersList;
import es.urjc.etsii.cs.comunio.users.User;
import es.urjc.etsii.cs.comunio.utils.ComunicadorJugadores;
import es.urjc.etsii.cs.comunio.utils.ComunicadorMercado;
import es.urjc.etsii.cs.comunio.utils.ComunicadorUsuarios;

/* listU son los usuarios en la app. Cada actividad tiene unos atributos que seran los principales objetos
de cada una de ellas
 *
 */
public class StartActivity extends AppCompatActivity {

    private UsersList listU = new UsersList();



    protected void startLogin(UsersList u){
        Intent login = new Intent(this, UserLoginActivity.class);
       // Pasa al comunicador la lista que posteriormente recogemos en la siguiente activity
        ComunicadorUsuarios.setUsuarios(listU);
        startActivity(login);
        finish();
    }

    protected void startRegister(UsersList u){
        Intent register = new Intent(this, RegisterActivity.class);
        // Pasa al comunicador la lista que posteriormente recogemos en la siguiente activity
        ComunicadorUsuarios.setUsuarios(listU);
        startActivity(register);
        finish();
    }

    protected UsersList getListU(){
        return this.listU;
    }

    protected void setListU(UsersList u){
        this.listU = u;
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        Button buttonRegister = (Button) findViewById(R.id.button_register);
        Button buttonLogin = (Button) findViewById(R.id.button_login);

        User user = new User("Dany", "1234");
        listU.add(user);
        ListaJugadores merc=new ListaJugadores();
        ListaJugadores jugadores=new ListaJugadores();
        ListaJugadores jugadoresUsuario = new ListaJugadores();
        merc.cargarJugadoresMercado();
        jugadores.cargarJugadores();
        jugadoresUsuario.cargarJugadoresUsuario();
        user.setLista(jugadoresUsuario);

        ComunicadorMercado.setMercado(merc);
        ComunicadorJugadores.setJugadores(jugadores);


        buttonRegister.setOnClickListener(
                new Button.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        startRegister(listU);
                    }
                }
        );

        buttonLogin.setOnClickListener(
                new Button.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        startLogin(listU);
                    }
                }
        );

    }


}