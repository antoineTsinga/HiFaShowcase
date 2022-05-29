package org.onyx.showcasebackend.Web.controllers;


import net.kaczmarzyk.spring.data.jpa.domain.Between;
import net.kaczmarzyk.spring.data.jpa.domain.Equal;
import net.kaczmarzyk.spring.data.jpa.domain.Like;
import net.kaczmarzyk.spring.data.jpa.web.annotation.And;
import net.kaczmarzyk.spring.data.jpa.web.annotation.Spec;
import org.onyx.showcasebackend.Web.services.ItemService;
import org.onyx.showcasebackend.entities.Category;
import org.onyx.showcasebackend.entities.FashionCollection;
import org.onyx.showcasebackend.entities.Genre;
import org.onyx.showcasebackend.entities.Item;
import org.onyx.showcasebackend.payload.request.ItemRequest;
import org.onyx.showcasebackend.payload.request.OrderRequest;
import org.onyx.showcasebackend.payload.request.PagingHeaders;
import org.onyx.showcasebackend.payload.request.PagingResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
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

    @Transactional
    @GetMapping(value = "/items_filter", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<List<Object>> get(
            @And({
                    @Spec(path = "name", params = "name", spec = Like.class),
                    @Spec(path = "genre", params = "genre", spec = Equal.class),
                    @Spec(path = "estimatedPrice", params = {"estimatedPriceGt", "estimatedPriceLt"}, spec = Between.class)
            }) Specification<Item> spec,
            Sort sort,
            @RequestHeader HttpHeaders headers) {
        final PagingResponse response = itemService.get(spec, headers, sort);
        return new ResponseEntity<>(response.getElements(), returnHttpHeaders(response), HttpStatus.OK);
    }



    static HttpHeaders returnHttpHeaders(PagingResponse response) {
        HttpHeaders headers = new HttpHeaders();
        headers.set(PagingHeaders.COUNT.getName(), String.valueOf(response.getCount()));
        headers.set(PagingHeaders.PAGE_SIZE.getName(), String.valueOf(response.getPageSize()));
        headers.set(PagingHeaders.PAGE_OFFSET.getName(), String.valueOf(response.getPageOffset()));
        headers.set(PagingHeaders.PAGE_NUMBER.getName(), String.valueOf(response.getPageNumber()));
        headers.set(PagingHeaders.PAGE_TOTAL.getName(), String.valueOf(response.getPageTotal()));
        return headers;
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
