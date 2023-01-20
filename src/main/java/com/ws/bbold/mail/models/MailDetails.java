package com.ws.bbold.mail.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MailDetails {
  private String recipient;
  private String msgBody;
  private String subject;
  private String attachment;
}
