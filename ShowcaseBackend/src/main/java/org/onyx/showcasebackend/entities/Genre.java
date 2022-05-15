package org.onyx.showcasebackend.entities;

public enum Genre {
    MAN(0),WOMAN(1),CHILD(2);

    private final int code;

    Genre(int code){
        this.code = code;
    }

    public int getCode(){
        return this.code;
    }
}
