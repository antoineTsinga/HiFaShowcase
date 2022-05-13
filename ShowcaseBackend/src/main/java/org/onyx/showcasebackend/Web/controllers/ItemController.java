package org.onyx.showcasebackend.Web.controllers;


import org.onyx.showcasebackend.Web.services.ItemService;
import org.onyx.showcasebackend.entities.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping(value = "/items")
    private List<Item> getAllItems(){
        return itemService.getItems();
    }

    @GetMapping(value = "/items/{id}")
    private Item getItem(@PathVariable("id") Long id) {
        return itemService.getItemsById(id);
    }

    @DeleteMapping(value = "/items/{id}")
    private void deleteItem(@PathVariable("id") Long id) {
        itemService.delete(id);
    }

    @PostMapping(value = "/items")
    private Item saveItem(@RequestBody Item item)
    {
        itemService.save(item);
        return item;

    }

    @PutMapping(value = "/items/{id}")
    private Item updateItem(@RequestBody Item item, @PathVariable("id") Long id)
    {
        itemService.update(item, id);
        return item;
    }


}
