package es.urjc.etsii.cs.comunio.utils;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import es.urjc.etsii.cs.comunio.R;
import es.urjc.etsii.cs.comunio.players.AbstractPlayer;

import java.util.List;

/**
 * Created by Dany on 10/11/15.
 */
public class JugadoresAdapter extends ArrayAdapter<AbstractPlayer> {
    public JugadoresAdapter(Context context, int resource, List<AbstractPlayer> objects) {
        super(context, resource, objects);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View v= convertView;
        if (v == null){
            LayoutInflater vi;
            vi=LayoutInflater.from(getContext());
            v=vi.inflate(R.layout.recuadro_jugadores,null);
        }

        AbstractPlayer p=getItem(position);

        if (p!=null){
            ImageView foto=(ImageView) v.findViewById(R.id.foto);
            TextView texto=(TextView) v.findViewById(R.id.nombre);
            TextView valor=(TextView) v.findViewById(R.id.valor);
            TextView estado=(TextView) v.findViewById(R.id.lesion);

            if (foto!=null){
                foto.setImageResource(p.getFoto());
            }
            if (texto!=null){
                texto.setText(p.getName()+" ");
            }
            if (valor!=null){
                valor.setText(Integer.toString(p.getValor())+" Duros");
            }
            if (estado!=null){
                estado.setText(p.getEstado());
            }


        }
        return v;
    }

}
