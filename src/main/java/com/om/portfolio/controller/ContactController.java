package com.om.portfolio.controller;

import com.om.portfolio.dto.ContactResponse;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import com.om.portfolio.dto.ContactRequest;
import com.om.portfolio.service.ContactService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = {"http://localhost:5500", "http://127.0.0.1:5500", "https://om-folio.vercel.app"})
public class ContactController {

    private final ContactService service;

    public ContactController(ContactService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<ContactResponse> sendMessage(@Valid @RequestBody ContactRequest request) {

        ContactResponse response = service.processContact(request);
        return ResponseEntity.status(201).body(response);
    }

    @GetMapping
    public ResponseEntity<Page<ContactResponse>> getAllMessages(@PageableDefault(sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable) {

        return ResponseEntity.ok(service.getAllMessages(pageable));
    }
}
