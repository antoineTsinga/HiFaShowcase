package org.onyx.showcasebackend.Web.controllers;


import org.onyx.showcasebackend.dao.ItemRepository;
import org.onyx.showcasebackend.entities.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {
    @Autowired
    private ItemRepository itemRepository;


}
