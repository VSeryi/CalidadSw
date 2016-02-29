package es.urjc.etsii.cs.comunio.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import es.urjc.etsii.cs.comunio.R;
import es.urjc.etsii.cs.comunio.users.User;
import es.urjc.etsii.cs.comunio.users.UsersList;
import es.urjc.etsii.cs.comunio.utils.AlertUtils;
import es.urjc.etsii.cs.comunio.utils.ComunicadorUsuarioLogged;
import es.urjc.etsii.cs.comunio.utils.ComunicadorUsuarios;

public class UserLoginActivity extends AppCompatActivity implements View.OnClickListener {

    private UsersList listU;
    private EditText user, pass;
    private Button acces;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_user_login);

        listU = ComunicadorUsuarios.getUsuarios();
        acces = (Button) findViewById(R.id.accesButton);

        user = (EditText) findViewById(R.id.userLoginNick);
        pass = (EditText) findViewById(R.id.userLoginPassword);

        acces.setOnClickListener(this);

    }



    @Override
    public void onClick(View v) {
        AlertUtils noti = new AlertUtils(this); // Notificador de errores y avisos
        String nickName = user.getText().toString().trim();
        String password = pass.getText().toString();
        switch (v.getId()){
            case (R.id.accesButton):
                User user = new User(nickName, password);
                if(listU.contains(user)){
                    User userReg = (User) listU.findUser(user); // Devuelve el usuario introducido
                    String passReg = userReg.getPassword();
                    String pass = user.getPassword();
                    if(passReg.contentEquals(pass)){
                        ComunicadorUsuarios.setUsuarios(listU);
                        ComunicadorUsuarioLogged.setUser(userReg);
                        Intent news = new Intent(this, NewsActivity.class);
                        startActivity(news);
                        finish();
                    }
                    else{
                        noti.error("La contraseña introducida es incorrecta");
                    }
                }
                else{
                    noti.error("El usuario introducido no está registrado");
                }
                break;
        }
    }

    public void onBackPressed(){
        Intent menu = new Intent (this, MenuStartedActivity.class);
        ComunicadorUsuarios.setUsuarios(listU);
        startActivity(menu);
        finish();
    }


}
