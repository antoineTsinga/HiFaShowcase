package org.onyx.showcasebackend.payload.request;

import java.util.Collection;

public class OrderRequest {
    private long id;
    private long client_id;
    private Collection<Long> items;

    public OrderRequest() {
    }

    public OrderRequest(long id, long client_id, Collection<Long> items) {
        this.id = id;
        this.client_id = client_id;
        this.items = items;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getClient_id() {
        return client_id;
    }

    public void setClient_id(long client_id) {
        this.client_id = client_id;
    }

    public Collection<Long> getItems() {
        return items;
    }

    public void setItems(Collection<Long> items) {
        this.items = items;
    }
}
