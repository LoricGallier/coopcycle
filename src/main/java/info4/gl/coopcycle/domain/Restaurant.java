package info4.gl.coopcycle.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A Restaurant.
 */
@Entity
@Table(name = "restaurant")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Restaurant implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Pattern(regexp = "[a-z]")
    @Column(name = "name", nullable = false)
    private String name;

    @NotNull
    @Column(name = "restaurant_adresse", nullable = false)
    private String restaurantAdresse;

    @OneToMany(mappedBy = "restaurant")
    @JsonIgnoreProperties(value = { "restaurant", "orders" }, allowSetters = true)
    private Set<Plat> plats = new HashSet<>();

    @OneToMany(mappedBy = "restaurant")
    @JsonIgnoreProperties(value = { "plats", "client", "restaurant", "livreur" }, allowSetters = true)
    private Set<Order> orders = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties(value = { "restaurants", "livreurs", "client" }, allowSetters = true)
    private Cooperative cooperative;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Restaurant id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return this.name;
    }

    public Restaurant name(String name) {
        this.setName(name);
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRestaurantAdresse() {
        return this.restaurantAdresse;
    }

    public Restaurant restaurantAdresse(String restaurantAdresse) {
        this.setRestaurantAdresse(restaurantAdresse);
        return this;
    }

    public void setRestaurantAdresse(String restaurantAdresse) {
        this.restaurantAdresse = restaurantAdresse;
    }

    public Set<Plat> getPlats() {
        return this.plats;
    }

    public void setPlats(Set<Plat> plats) {
        if (this.plats != null) {
            this.plats.forEach(i -> i.setRestaurant(null));
        }
        if (plats != null) {
            plats.forEach(i -> i.setRestaurant(this));
        }
        this.plats = plats;
    }

    public Restaurant plats(Set<Plat> plats) {
        this.setPlats(plats);
        return this;
    }

    public Restaurant addPlat(Plat plat) {
        this.plats.add(plat);
        plat.setRestaurant(this);
        return this;
    }

    public Restaurant removePlat(Plat plat) {
        this.plats.remove(plat);
        plat.setRestaurant(null);
        return this;
    }

    public Set<Order> getOrders() {
        return this.orders;
    }

    public void setOrders(Set<Order> orders) {
        if (this.orders != null) {
            this.orders.forEach(i -> i.setRestaurant(null));
        }
        if (orders != null) {
            orders.forEach(i -> i.setRestaurant(this));
        }
        this.orders = orders;
    }

    public Restaurant orders(Set<Order> orders) {
        this.setOrders(orders);
        return this;
    }

    public Restaurant addOrder(Order order) {
        this.orders.add(order);
        order.setRestaurant(this);
        return this;
    }

    public Restaurant removeOrder(Order order) {
        this.orders.remove(order);
        order.setRestaurant(null);
        return this;
    }

    public Cooperative getCooperative() {
        return this.cooperative;
    }

    public void setCooperative(Cooperative cooperative) {
        this.cooperative = cooperative;
    }

    public Restaurant cooperative(Cooperative cooperative) {
        this.setCooperative(cooperative);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Restaurant)) {
            return false;
        }
        return id != null && id.equals(((Restaurant) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Restaurant{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", restaurantAdresse='" + getRestaurantAdresse() + "'" +
            "}";
    }
}
