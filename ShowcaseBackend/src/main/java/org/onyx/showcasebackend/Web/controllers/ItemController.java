package org.onyx.showcasebackend.Web.controllers;


import org.onyx.showcasebackend.Web.services.ItemService;
import org.onyx.showcasebackend.entities.Category;
import org.onyx.showcasebackend.entities.FashionCollection;
import org.onyx.showcasebackend.entities.Genre;
import org.onyx.showcasebackend.entities.Item;
import org.onyx.showcasebackend.payload.request.ItemRequest;
import org.onyx.showcasebackend.payload.request.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ItemController {

    @Autowired
    private ItemService itemService;

    @GetMapping(value = "/items")
    private ResponseEntity<?>  getAllItems(){

        HashMap<String,Object> data = new HashMap<>();
        List<Item> items = itemService.getItems();
        data.put("results", items);
        data.put("count", items.size());
        return ResponseEntity.status(HttpStatus.OK).body(data);

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
    private Long saveItem(@RequestBody ItemRequest itemRequest)
    {
        Item item = ItemRequestToItem(itemRequest);
        itemService.save(item);

        return item.getId();

    }

    @PutMapping(value = "/items/{id}")
    private Long updateItem(@RequestBody ItemRequest itemRequest, @PathVariable("id") Long id)
    {
        Item item = ItemRequestToItem(itemRequest);
        itemService.update(item, id);
        return item.getId();
    }

    private Item ItemRequestToItem(@RequestBody ItemRequest itemRequest){
        FashionCollection fashionCollection = new FashionCollection();
        fashionCollection.setId(itemRequest.getFashionCollection());
        Category category = Arrays.stream(Category.values()).filter(category1 -> category1.getCode()==itemRequest.getCategory()).findFirst().get();
        Genre genre = Arrays.stream(Genre.values()).filter(genre1 -> genre1.getCode()==itemRequest.getGenre()).findFirst().get();
        return new Item(itemRequest.getName(),itemRequest.getEstimatedPrice(),itemRequest.getInCatalog(),itemRequest.getInGallery(), itemRequest.getImage(), fashionCollection,null,category,genre);
    }


}
