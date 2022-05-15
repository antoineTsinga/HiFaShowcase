package org.onyx.showcasebackend.entities;

public enum Category {
    CHEMISES(0),
    JEANS(1),
    ENSEMBLES(2),
    VESTES(3),
    BAS(4),
    TOPS(5),
    ACCESSOIRES(6);

    private final int code;

    Category(int code){
        this.code = code;
    }

    public int getCode() {
        return this.code;
    }
}
