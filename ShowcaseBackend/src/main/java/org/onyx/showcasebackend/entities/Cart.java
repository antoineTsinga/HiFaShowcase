package org.onyx.showcasebackend.entities;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @ManyToMany(mappedBy = "")
    private Collection<Item> articles;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Cart() {
    }

    public Cart(Collection<Item> articles) {
        this.articles = articles;
    }




    public Collection<Item> getArticles() {
        return articles;
    }

    public void setArticles(Collection<Item> articles) {
        this.articles = articles;
    }
}
