package com.om.portfolio.service;

import com.om.portfolio.dto.ContactRequest;
import com.om.portfolio.dto.ContactResponse;
import com.om.portfolio.entity.ContactMessage;
import com.om.portfolio.repository.ContactRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRepository repository;

    public ContactService(ContactRepository repository) {
        this.repository = repository;
    }

    public ContactResponse processContact(ContactRequest request) {

        ContactMessage message = new ContactMessage();
        message.setFullName(request.getFullName());
        message.setEmail(request.getEmail());
        message.setPhone(request.getPhone());
        message.setSubject(request.getSubject());
        message.setMessage(request.getMessage());

        ContactMessage saved = repository.save(message);

        return new ContactResponse(saved.getId(), saved.getFullName(), saved.getEmail(), saved.getPhone(),
                saved.getSubject(), saved.getMessage(), saved.getCreatedAt());
    }

    public Page<ContactResponse> getAllMessages(Pageable pageable) {
        return repository.findAll(pageable).map(message -> new ContactResponse(message.getId(),
                message.getFullName(), message.getEmail(), message.getPhone(), message.getSubject(),
                message.getMessage(), message.getCreatedAt()));
    }
}