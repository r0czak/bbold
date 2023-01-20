package com.ws.bbold.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "address")
public class AddressEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(max = 50)
    private String country;

    @Size(max = 50)
    private String city;

    @Size(max = 50)
    private String street;

    @Size(max = 10)
    private String streetNumber;

    @Size(max = 10)
    private String houseNumber;

    @Size(max = 10)
    private String zipCode;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AddressEntity that = (AddressEntity) o;

        if (!id.equals(that.id)) return false;
        if (!Objects.equals(country, that.country)) return false;
        if (!Objects.equals(city, that.city)) return false;
        if (!Objects.equals(street, that.street)) return false;
        if (!Objects.equals(streetNumber, that.streetNumber)) return false;
        if (!Objects.equals(houseNumber, that.houseNumber)) return false;
        return Objects.equals(zipCode, that.zipCode);
    }

    @Override
    public int hashCode() {
        int result = id.hashCode();
        result = 31 * result + (country != null ? country.hashCode() : 0);
        result = 31 * result + (city != null ? city.hashCode() : 0);
        result = 31 * result + (street != null ? street.hashCode() : 0);
        result = 31 * result + (streetNumber != null ? streetNumber.hashCode() : 0);
        result = 31 * result + (houseNumber != null ? houseNumber.hashCode() : 0);
        result = 31 * result + (zipCode != null ? zipCode.hashCode() : 0);
        return result;
    }
}
