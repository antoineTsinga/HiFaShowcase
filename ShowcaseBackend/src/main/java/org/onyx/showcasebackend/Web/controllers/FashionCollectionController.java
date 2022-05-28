package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.FashionCollectionService;
import org.onyx.showcasebackend.entities.Client;
import org.onyx.showcasebackend.entities.FashionCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
public class FashionCollectionController {
    @Autowired
    private FashionCollectionService fashionCollectionService;

    @GetMapping(value = "/fashion_collections")
    private ResponseEntity<?> getAllFashionCollections(){
        HashMap<String,Object> data = new HashMap<>();
        List<FashionCollection> items = fashionCollectionService.getFashionCollections();
        data.put("results", items);
        data.put("count", items.size());
        return ResponseEntity.status(HttpStatus.OK).body(data);
    }

    @GetMapping(value = "/fashion_collections/{id}")
    private FashionCollection getIFashionCollection(@PathVariable("id") Long id) {
        return fashionCollectionService.getFashionCollectionsById(id);
    }

    @DeleteMapping(value = "/fashion_collections/{id}")
    private void deleteFashionCollection(@PathVariable("id") Long id) {
        fashionCollectionService.delete(id);
    }

    @PostMapping(value = "/fashion_collections")
    private FashionCollection saveFashionCollection(@RequestBody FashionCollection fashionCollection)
    {
        fashionCollectionService.save(fashionCollection);
        return fashionCollection;

    }

    @PutMapping(value = "/fashion_collections/{id}")
    private FashionCollection update(@RequestBody FashionCollection fashionCollection, @PathVariable("id") Long id) {
        fashionCollectionService.update(fashionCollection, id);
        return fashionCollection;
    }

}
