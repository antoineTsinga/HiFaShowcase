package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.CartService;
import org.onyx.showcasebackend.entities.Cart;
import org.onyx.showcasebackend.entities.Client;
import org.onyx.showcasebackend.entities.Item;
import org.onyx.showcasebackend.payload.request.CartRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("/carts")
    private List<Cart> getAllCarts() {
        return cartService.getCarts();
    }

    // creating a get mapping that retrieves the detail of a specific cart
    @GetMapping("/carts/{id}")
    private Cart getCarts(@PathVariable("id") long cartId) {
        return cartService.getCartById(cartId);
    }

    // creating a deleted mapping that deletes a specified cart
    @DeleteMapping("/carts/{id}")
    private void deleteCart(@PathVariable("id") long cartId) {
        cartService.deleteCart(cartId);
    }

    // creating post mapping that post the cart detail in the database
    @PostMapping("/carts")
    private long saveCart(@RequestBody CartRequest cartRequest) {
        Cart cart = CartRequestToCart(cartRequest);
        cartService.saveCart(cart);
        return cart.getId();
    }

    // creating put mapping that updates the cart detail
    @PutMapping("/carts")
    private Long updateCart(@RequestBody CartRequest cartRequest) {
        Cart cart = CartRequestToCart(cartRequest);
        cartService.saveCart(cart);
        return cart.getId();
    }

    private Cart CartRequestToCart(@RequestBody CartRequest cartRequest){
        Client client = new Client();
        client.setId(cartRequest.getClient_id());
        List<Item> items = new ArrayList<>();

        for (long item_id: cartRequest.getItems()) {
            Item item = new Item();
            item.setId(item_id);
            items.add(item);
        }
        return new Cart(items, client);
    }

}
