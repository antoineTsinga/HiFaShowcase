package org.onyx.showcasebackend.entities;

import javax.persistence.*;
;import java.util.Date;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private Date creationDate;

    @ManyToOne
    private User user;

    @ManyToOne
    private Client client;

    public User getUser() {
        return user;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order() {
    }

    public Order(Date creationDate, User user) {
        this.creationDate = creationDate;
        this.user = user;
    }




    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }
}
