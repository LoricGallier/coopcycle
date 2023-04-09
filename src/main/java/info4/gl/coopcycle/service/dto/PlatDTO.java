package info4.gl.coopcycle.service.dto;

import java.io.Serializable;
import java.util.Objects;
import javax.validation.constraints.*;

/**
 * A DTO for the {@link info4.gl.coopcycle.domain.Plat} entity.
 */
@SuppressWarnings("common-java:DuplicatedBlocks")
public class PlatDTO implements Serializable {

    private Long id;

    @NotNull
    @Size(min = 4)
    private String name;

    @NotNull
    @DecimalMin(value = "0")
    private Float price;

    @NotNull
    @Min(value = 0)
    private Integer quantity;

    private RestaurantDTO restaurant;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public RestaurantDTO getRestaurant() {
        return restaurant;
    }

    public void setRestaurant(RestaurantDTO restaurant) {
        this.restaurant = restaurant;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof PlatDTO)) {
            return false;
        }

        PlatDTO platDTO = (PlatDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, platDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "PlatDTO{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", price=" + getPrice() +
            ", quantity=" + getQuantity() +
            ", restaurant=" + getRestaurant() +
            "}";
    }
}
