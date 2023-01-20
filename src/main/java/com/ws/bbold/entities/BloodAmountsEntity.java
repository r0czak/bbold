package com.ws.bbold.entities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "blood_amounts_entity")
public class BloodAmountsEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer aPositive;

    private Integer aNegative;

    private Integer bPositive;

    private Integer bNegative;

    private Integer abPositive;

    private Integer abNegative;

    private Integer oPositive;

    private Integer oNegative;

    @OneToOne(mappedBy = "bloodAmounts")
    private BloodDonationCenterEntity bloodDonationCenterEntity;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        BloodAmountsEntity that = (BloodAmountsEntity) o;

        if (!Objects.equals(id, that.id)) return false;
        if (!Objects.equals(aPositive, that.aPositive)) return false;
        if (!Objects.equals(aNegative, that.aNegative)) return false;
        if (!Objects.equals(bPositive, that.bPositive)) return false;
        if (!Objects.equals(bNegative, that.bNegative)) return false;
        if (!Objects.equals(abPositive, that.abPositive)) return false;
        if (!Objects.equals(abNegative, that.abNegative)) return false;
        if (!Objects.equals(oPositive, that.oPositive)) return false;
        if (!Objects.equals(oNegative, that.oNegative)) return false;
        return Objects.equals(bloodDonationCenterEntity, that.bloodDonationCenterEntity);
    }

    @Override
    public int hashCode() {
        int result = id != null ? id.hashCode() : 0;
        result = 31 * result + (aPositive != null ? aPositive.hashCode() : 0);
        result = 31 * result + (aNegative != null ? aNegative.hashCode() : 0);
        result = 31 * result + (bPositive != null ? bPositive.hashCode() : 0);
        result = 31 * result + (bNegative != null ? bNegative.hashCode() : 0);
        result = 31 * result + (abPositive != null ? abPositive.hashCode() : 0);
        result = 31 * result + (abNegative != null ? abNegative.hashCode() : 0);
        result = 31 * result + (oPositive != null ? oPositive.hashCode() : 0);
        result = 31 * result + (oNegative != null ? oNegative.hashCode() : 0);
        result = 31 * result + (bloodDonationCenterEntity != null ? bloodDonationCenterEntity.hashCode() : 0);
        return result;
    }
}