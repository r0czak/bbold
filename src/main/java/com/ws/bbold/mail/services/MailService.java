package com.ws.bbold.mail.services;

import com.ws.bbold.mail.models.MailDetails;

public interface MailService {
  String sendSimpleMail(MailDetails details);

  String sendMailWithAttachment(MailDetails details);
}
