package com.om.portfolio.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class ContactResponse {

    private Long id;
    private String fullName;
    private String email;
    private String phone;
    private String subject;
    private String message;
    private LocalDateTime createdAt;
}