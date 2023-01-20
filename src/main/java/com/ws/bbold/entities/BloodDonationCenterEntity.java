package com.ws.bbold.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.List;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "blood_donation_center")
public class BloodDonationCenterEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private AddressEntity address;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<OpeningHoursEntity> openingHours = new java.util.ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private FileDBEntity image;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private BloodAmountsEntity bloodAmounts;

    private Double lattitude;

    private Double longitude;

    private String description;

    @Size(max = 20)
    private String phoneNumber;

    @Size(max = 50)
    private String email;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BloodDonationCenterEntity that = (BloodDonationCenterEntity) o;

        if (!Objects.equals(id, that.id)) return false;
        if (!Objects.equals(name, that.name)) return false;
        if (!Objects.equals(address, that.address)) return false;
        if (!Objects.equals(openingHours, that.openingHours)) return false;
        if (!Objects.equals(image, that.image)) return false;
        if (!Objects.equals(bloodAmounts, that.bloodAmounts)) return false;
        if (!Objects.equals(lattitude, that.lattitude)) return false;
        if (!Objects.equals(longitude, that.longitude)) return false;
        if (!Objects.equals(description, that.description)) return false;
        if (!Objects.equals(phoneNumber, that.phoneNumber)) return false;
        return Objects.equals(email, that.email);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (name != null ? name.hashCode() : 0);
        result = 31 * result + (address != null ? address.hashCode() : 0);
        result = 31 * result + (openingHours != null ? openingHours.hashCode() : 0);
        result = 31 * result + (image != null ? image.hashCode() : 0);
        result = 31 * result + (bloodAmounts != null ? bloodAmounts.hashCode() : 0);
        result = 31 * result + (lattitude != null ? lattitude.hashCode() : 0);
        result = 31 * result + (longitude != null ? longitude.hashCode() : 0);
        result = 31 * result + (description != null ? description.hashCode() : 0);
        result = 31 * result + (phoneNumber != null ? phoneNumber.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        return result;
    }
}