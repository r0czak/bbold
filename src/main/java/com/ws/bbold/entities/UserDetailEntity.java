package com.ws.bbold.entities;

import com.ws.bbold.entities.enums.BloodType;
import com.ws.bbold.entities.enums.Gender;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.Hibernate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.Objects;


@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(
    name = "user_details",
    uniqueConstraints = {
      @UniqueConstraint(columnNames = "pesel"),
    })
public class UserDetailEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @OneToOne
  @JoinColumn(name = "user_id", referencedColumnName = "id")
  private UserEntity user;

  @NotBlank
  @Size(max = 40)
  private String firstName;

  @NotBlank
  @Size(max = 40)
  private String lastName;

  private LocalDate birthDate;

  @Enumerated(EnumType.STRING)
  @Column(length = 20)
  private Gender gender;

  @NotBlank
  @Size(max = 11)
  private String pesel;

  @Enumerated(EnumType.STRING)
  @Column(length = 20)
  private BloodType bloodType;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "blood_donation_center_id")
  @ToString.Exclude
  private BloodDonationCenterEntity bloodDonationCenter;

  public UserDetailEntity(
      String firstName,
      String lastName,
      LocalDate birthDate,
      Gender gender,
      String pesel,
      BloodType bloodType) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.gender = gender;
    this.pesel = pesel;
    this.bloodType = bloodType;
  }
  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
    UserDetailEntity userDetail = (UserDetailEntity) o;
    return id != null && Objects.equals(id, userDetail.id);
  }

  @Override
  public int hashCode() {
    return getClass().hashCode();
  }
}
