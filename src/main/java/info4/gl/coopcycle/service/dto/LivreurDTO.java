package info4.gl.coopcycle.service.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link info4.gl.coopcycle.domain.Livreur} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class LivreurDTO implements Serializable {

    private Long id;

    @NotNull
    private String livreurName;

    @NotNull
    @Pattern(regexp = "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")
    private String livreurEmail;

    @NotNull
    @Pattern(regexp = "\\d+$")
    private String livreurPhone;

    @NotNull
    @Size(min = 3, max = 100)
    private String livreurAddress;

    private CooperativeDTO cooperative;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLivreurName() {
        return livreurName;
    }

    public void setLivreurName(String livreurName) {
        this.livreurName = livreurName;
    }

    public String getLivreurEmail() {
        return livreurEmail;
    }

    public void setLivreurEmail(String livreurEmail) {
        this.livreurEmail = livreurEmail;
    }

    public String getLivreurPhone() {
        return livreurPhone;
    }

    public void setLivreurPhone(String livreurPhone) {
        this.livreurPhone = livreurPhone;
    }

    public String getLivreurAddress() {
        return livreurAddress;
    }

    public void setLivreurAddress(String livreurAddress) {
        this.livreurAddress = livreurAddress;
    }

    public CooperativeDTO getCooperative() {
        return cooperative;
    }

    public void setCooperative(CooperativeDTO cooperative) {
        this.cooperative = cooperative;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof LivreurDTO)) {
            return false;
        }

        LivreurDTO livreurDTO = (LivreurDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, livreurDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "LivreurDTO{" +
            "id=" + getId() +
            ", livreurName='" + getLivreurName() + "'" +
            ", livreurEmail='" + getLivreurEmail() + "'" +
            ", livreurPhone='" + getLivreurPhone() + "'" +
            ", livreurAddress='" + getLivreurAddress() + "'" +
            ", cooperative=" + getCooperative() +
            "}";
    }
}
