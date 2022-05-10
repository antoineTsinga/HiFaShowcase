package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.OrderService;
import org.onyx.showcasebackend.entities.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    private Order saveOrder(@RequestBody Order order)
    {
        orderService.save(order);
        return order;

    }

    @PutMapping(value = "/orders/{id}")
    private Order updateOrder(@RequestBody Order order, @PathVariable("id") Long id)
    {
        orderService.update(order, id);
        return order;
    }

}
