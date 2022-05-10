package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.CartService;
import org.onyx.showcasebackend.entities.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class CartController {
    @Autowired
    private CartService cartService;

    @GetMapping("/carts")
    private List<Cart> getAllCarts() {
        return cartService.getCarts();
    }

    // creating a get mapping that retrieves the detail of a specific cart
    @GetMapping("/carts/{id}")
    private Cart getBooks(@PathVariable("id") long cartId) {
        return cartService.getCartById(cartId);
    }

    // creating a deleted mapping that deletes a specified cart
    @DeleteMapping("/carts/{id}")
    private void deleteBook(@PathVariable("id") long cartId) {
        cartService.deleteCart(cartId);
    }

    // creating post mapping that post the cart detail in the database
    @PostMapping("/carts")
    private long saveBook(@RequestBody Cart cart) {
        cartService.saveCart(cart);
        return cart.getId();
    }

    // creating put mapping that updates the cart detail
    @PutMapping("/carts")
    private Cart update(@RequestBody Cart cart) {
        cartService.saveCart(cart);
        return cart;
    }

}
