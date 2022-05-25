package org.onyx.showcasebackend.Web.controllers;

import org.hibernate.mapping.Collection;
import org.onyx.showcasebackend.Web.services.OrderService;
import org.onyx.showcasebackend.entities.Client;
import org.onyx.showcasebackend.entities.Item;
import org.onyx.showcasebackend.entities.Order;
import org.onyx.showcasebackend.payload.request.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping(value = "/orders")
    private List<Order> getAllOrders(){
        return orderService.getOrders();
    }

    @GetMapping(value = "/orders/{id}")
    private Order getOrder(@PathVariable("id") Long id) {
        return orderService.getOrderById(id);
    }

    @DeleteMapping(value = "/orders/{id}")
    private void deleteOrder(@PathVariable("id") Long id) {
        orderService.delete(id);
    }

    @PostMapping(value = "/orders")
    private Long saveOrder(@RequestBody OrderRequest orderRequest)
    {
        Order order = OrderRequestToOrder(orderRequest);
        orderService.save(order);

        return order.getId();

    }

    @PutMapping(value = "/orders/{id}")
    private Long updateOrder(@RequestBody OrderRequest orderRequest, @PathVariable("id") Long id)
    {
        Order order = OrderRequestToOrder(orderRequest);
        orderService.update(order, id);
        return order.getId();
    }

    private Order OrderRequestToOrder(@RequestBody OrderRequest orderRequest) {
        Client client = new Client();
        client.setId(orderRequest.getClient_id());
        List<Item> items = new ArrayList<>();

        for (long item_id: orderRequest.getItems()) {
            Item item = new Item();
            item.setId(item_id);
            items.add(item);
        }
         return new Order(client, items);
    }

}
