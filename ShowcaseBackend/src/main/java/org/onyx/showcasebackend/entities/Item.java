package org.onyx.showcasebackend.entities;


import javax.persistence.*;
import java.util.ArrayList;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    private String name;
    private int estimatedPrice;
    private boolean isInCatalog ;
    private boolean isInGallery;
    private String image;
    @ManyToOne()
    private FashionCollection fashionCollection;

    private static category category;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    private enum category{
        CHEMISES(1),
        JEANS(2),
        ENSEMBLES(3),
        VESTES(4),
        BAS(5),
        TOPS(6),
        ACCESSOIRE(7);

        private final int value;

        category(int value){
            this.value = value;
        }

        public int getValue(){
            return value;
        }

        public Item.category categoryOfValue(int value){
            for (Item.category e : values() ){
                if (e.value == value){
                    return e;
                }
            }
            return null;
        }
    }

    public Item() {
    }

    public Item(String name, int estimatedPrice, boolean isInCatalog, boolean isInGallery, String image, FashionCollection fashionCollection, int categoryValue) {
        this.name = name;
        this.estimatedPrice = estimatedPrice;
        this.isInCatalog = isInCatalog;
        this.isInGallery = isInGallery;
        this.image = image;
        this.fashionCollection = fashionCollection;
        category = Item.category.categoryOfValue(categoryValue);
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getEstimatedPrice() {
        return estimatedPrice;
    }

    public void setEstimatedPrice(int estimatedPrice) {
        this.estimatedPrice = estimatedPrice;
    }

    public boolean isInCatalog() {
        return isInCatalog;
    }

    public void setInCatalog(boolean inCatalog) {
        isInCatalog = inCatalog;
    }

    public boolean isInGallery() {
        return isInGallery;
    }

    public void setInGallery(boolean inGallery) {
        isInGallery = inGallery;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public FashionCollection getFashionCollection() {
        return fashionCollection;
    }

    public void setFashionCollection(FashionCollection fashionCollection) {
        this.fashionCollection = fashionCollection;
    }

    public static int getCategory() {
        return category.value;
    }

    public static void setCategory(int categoryValue) {
        Item.category = Item.category.categoryOfValue(categoryValue);
    }


}
