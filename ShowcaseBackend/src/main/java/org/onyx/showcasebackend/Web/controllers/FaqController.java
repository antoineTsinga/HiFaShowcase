package org.onyx.showcasebackend.Web.controllers;

import org.onyx.showcasebackend.Web.services.FaqService;
import org.onyx.showcasebackend.entities.Faq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class FaqController {
    @Autowired
    private FaqService faqService;

    @GetMapping("/faqs")
    private List<Faq> getAllFaqs() {
        return faqService.getFaqs();
    }

    // creating a get mapping that retrieves the detail of a specific faq
    @GetMapping("/faqs/{id}")
    private Faq getBooks(@PathVariable("id") long faqId) {
        return faqService.getFaqById(faqId);
    }

    // creating a deleted mapping that deletes a specified faq
    @DeleteMapping("/faqs/{id}")
    private void deleteBook(@PathVariable("id") long faqId) {
        faqService.deleteFaq(faqId);
    }

    // creating post mapping that post the faq detail in the database
    @PostMapping("/faqs")
    private long saveBook(@RequestBody Faq faq) {
        faqService.saveFaq(faq);
        return faq.getId();
    }

    // creating put mapping that updates the faq detail
    @PutMapping("/faqs")
    private Faq update(@RequestBody Faq faq) {
        faqService.saveFaq(faq);
        return faq;
    }

}
