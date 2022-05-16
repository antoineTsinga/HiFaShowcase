package org.onyx.showcasebackend.entities;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.Collection;
import java.util.Date;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Optional;

@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

    @ManyToOne
    @JoinColumn()
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    private Client client;

    @ManyToMany
    private Collection<Item> items;

    public Order() {

    }

    public Order( Date createdDate, Client client, Collection<Item> items) {
        this.createdDate = createdDate;
        this.client = client;
        this.items = items;
    }

    @PrePersist
    void preInsert() {
        if (this.createdDate == null)
            this.createdDate = java.util.Date.from((LocalDateTime.now()).atZone(ZoneId.systemDefault()).toInstant());
    }
    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Optional<LocalDateTime> getCreatedDate() {
        return null == this.createdDate ? Optional.empty() : Optional.of(LocalDateTime.ofInstant(this.createdDate.toInstant(), ZoneId.systemDefault()));
    }

    public void setCreatedDate(LocalDateTime createdDate) {

        this.createdDate = java.util.Date.from(createdDate.atZone(ZoneId.systemDefault()).toInstant());
    }


    public Collection<Item> getItems() {
        return items;
    }

    public void setItems(Collection<Item> items) {
        this.items = items;
    }
}
