package org.onyx.showcasebackend.Web.services;


import org.onyx.showcasebackend.dao.ItemRepository;
import org.onyx.showcasebackend.dao.OrderRepository;
import org.onyx.showcasebackend.entities.Item;
import org.onyx.showcasebackend.entities.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getItems(){
        List<Item> items = new ArrayList<Item>();
        itemRepository.findAll().forEach(item -> items.add(item));
        return  items;
    }

    public Item getItemsById(Long id){
        return itemRepository.findById(id).get();
    }

    public void save(Item item){
        itemRepository.save(item);
    }

    public void delete(Long id){
        itemRepository.deleteById(id);
    }

    public void update(Item item, Long id){
        item.setId(id);
        itemRepository.save(item);
    }


}
