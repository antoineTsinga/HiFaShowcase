package org.onyx.showcasebackend.entities;

import org.springframework.lang.Nullable;

import javax.persistence.*;
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
    @JoinColumn(name = "client_id")
    private Client client;

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

    public Order() {
    }

    public Optional<LocalDateTime> getCreatedDate() {
        return null == this.createdDate ? Optional.empty() : Optional.of(LocalDateTime.ofInstant(this.createdDate.toInstant(), ZoneId.systemDefault()));
    }

    public void setCreatedDate(LocalDateTime createdDate) {

        this.createdDate = java.util.Date.from(createdDate.atZone(ZoneId.systemDefault()).toInstant());
    }


}
