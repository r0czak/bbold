package com.ws.bbold.entities;

import com.ws.bbold.entities.enums.BloodType;
import com.ws.bbold.entities.enums.Gender;
import lombok.ToString;
import org.hibernate.Hibernate;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@ToString
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

  public UserDetailEntity() {}

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

  public UserEntity getUser() {
    return user;
  }

  public void setUser(UserEntity user) {
    this.user = user;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public LocalDate getBirthDate() {
    return birthDate;
  }

  public void setBirthDate(LocalDate birthDate) {
    this.birthDate = birthDate;
  }

  public Gender getGender() {
    return gender;
  }

  public void setGender(Gender gender) {
    this.gender = gender;
  }

  public String getPesel() {
    return pesel;
  }

  public void setPesel(String pesel) {
    this.pesel = pesel;
  }

  public BloodType getBloodType() {
    return bloodType;
  }

  public void setBloodType(BloodType bloodType) {
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
