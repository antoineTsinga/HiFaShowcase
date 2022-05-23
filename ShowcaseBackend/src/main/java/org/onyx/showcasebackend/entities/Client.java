package org.onyx.showcasebackend.entities;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public class Client extends User{
    @OneToMany(mappedBy = "client")
    private Collection<Order> orders;

    @OneToOne
    private Cart cart;


    public Client(String username, String email, String password, Collection<Order> orders) {
        super(username, email, password);
        this.orders = orders;
    }

    public Client() {

    }

    public Collection<Order> getOrders() {
        return orders;
    }

    public void setOrders(Collection<Order> orders) {
        this.orders = orders;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }




}
