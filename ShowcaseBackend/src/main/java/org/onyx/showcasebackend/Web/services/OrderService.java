package org.onyx.showcasebackend.Web.services;

import org.onyx.showcasebackend.dao.OrderRepository;
import org.onyx.showcasebackend.entities.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getOrders(){
        List<Order> orders = new ArrayList<Order>();
        orderRepository.findAll().forEach(order -> orders.add(order));
        return  orders;
    }

    public Order getOrdersById(Long id){
        return orderRepository.findById(id).get();
    }

    public void save(Order order){
        orderRepository.save(order);
    }

    public void delete(Long id){
        orderRepository.deleteById(id);
    }

    public void update(Order order, Long id){
        order.setId(id);
        orderRepository.save(order);
    }
}
