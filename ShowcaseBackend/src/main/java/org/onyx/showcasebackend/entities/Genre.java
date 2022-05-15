package org.onyx.showcasebackend.entities;

import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.v3.oas.annotations.media.Schema;

@Schema(type = "int", allowableValues = {"0", "1", "2"})
public enum Genre {
    MAN(0),WOMAN(1),CHILD(2);
    @JsonValue
    private final int code;

    Genre(int code){
        this.code = code;
    }

    public int getCode(){
        return this.code;
    }
}
