package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.FashionCollectionService;
import org.onyx.showcasebackend.entities.FashionCollection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class FashionCollectionController {
    @Autowired
    private FashionCollectionService fashionCollectionService;

    @GetMapping(value = "/fashion_collections")
    private List<FashionCollection> getAllFashionCollections(){
        return fashionCollectionService.getFashionCollections();
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
