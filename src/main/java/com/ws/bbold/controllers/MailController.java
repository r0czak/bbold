package com.ws.bbold.controllers;

import com.ws.bbold.mail.services.MailService;
import com.ws.bbold.mail.models.MailDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/mail")
public class MailController {
    @Autowired private MailService mailService;

    @PostMapping("/sendmail")
    public String sendMail(@RequestBody MailDetails details) {
        String status = mailService.sendSimpleMail(details);

        return status;
    }

    @PostMapping("/sendmailwithattachment")
    public String sendMailWithAttachment(@RequestBody MailDetails details) {
        String status = mailService.sendMailWithAttachment(details);

        return status;
    }
}
