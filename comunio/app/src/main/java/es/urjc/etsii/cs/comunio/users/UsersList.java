package es.urjc.etsii.cs.comunio.users;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

/**
 * Created by Dany on 16/10/2015.
 */
public class UsersList implements Serializable{
    private ArrayList<AbstratUser> users;


    public UsersList(){
        this.users = new ArrayList();
    }

    public ArrayList<AbstratUser> getUsers(){
        return this.users;
    }

    public void setUsers(ArrayList<AbstratUser> users){
        this.users = users;
    }
    public boolean add (AbstratUser usr){
        return this.users.add(usr);
    }

    public Object[] toArray() {
        return users.toArray();
    }

    public void clear() {
        users.clear();
    }

    public void ensureCapacity(int minimumCapacity) {
        users.ensureCapacity(minimumCapacity);
    }

    public void trimToSize() {
        users.trimToSize();
    }

    public AbstratUser set(int index, AbstratUser object) {
        return users.set(index, object);
    }

    public boolean removeAll(Collection<?> collection) {
        return users.removeAll(collection);
    }

    public boolean containsAll(Collection<?> collection) {
        return users.containsAll(collection);
    }

    public boolean contains(Object object) {
        return users.contains(object);
    }

    public Iterator<AbstratUser> iterator() {
        return users.iterator();
    }

    public <T> T[] toArray(T[] contents) {
        return users.toArray(contents);
    }

    public boolean retainAll(Collection<?> collection) {
        return users.retainAll(collection);
    }

    public int size() {
        return users.size();
    }

    public AbstratUser get(int index) {
        return users.get(index);
    }

    public int indexOf(Object object) {
        return users.indexOf(object);
    }

    public boolean isEmpty() {
        return users.isEmpty();
    }

    public List<AbstratUser> subList(int start, int end) {
        return users.subList(start, end);
    }

    public ListIterator<AbstratUser> listIterator(int location) {
        return users.listIterator(location);
    }

    public int lastIndexOf(Object object) {
        return users.lastIndexOf(object);
    }

    public AbstratUser remove(int index) {
        return users.remove(index);
    }

    public boolean remove(Object object) {
        return users.remove(object);
    }

    public boolean addAll(int index, Collection<? extends AbstratUser> collection) {
        return users.addAll(index, collection);
    }

    public ListIterator<AbstratUser> listIterator() {
        return users.listIterator();
    }

    public boolean addAll(Collection<? extends AbstratUser> collection) {
        return users.addAll(collection);
    }

    public AbstratUser findUser(User user){
        Iterator<AbstratUser> iter = this.users.iterator();
        boolean encontrado = false;
        AbstratUser userAux;
        AbstratUser foundUser = null;
        while(iter.hasNext() && (!encontrado)){
            userAux = iter.next();
            if(user.equals(userAux)){
               foundUser = userAux;
                encontrado = true;
            }
        }
        return foundUser;
    }
}
