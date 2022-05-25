package org.onyx.showcasebackend.payload.request;

import java.util.Collection;

public class CartRequest {

    private Long id;
    private Long client_id;
    private Collection<Long> items;

    public CartRequest() {
    }

    public CartRequest(Long id, Long client_id, Collection<Long> items) {
        this.id = id;
        this.client_id = client_id;
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getClient_id() {
        return client_id;
    }

    public void setClient_id(Long client_id) {
        this.client_id = client_id;
    }

    public Collection<Long> getItems() {
        return items;
    }

    public void setItems(Collection<Long> items) {
        this.items = items;
    }
}
