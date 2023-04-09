package info4.gl.coopcycle.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A Livreur.
 */
@Entity
@Table(name = "livreur")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class Livreur implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "livreur_name", nullable = false)
    private String livreurName;

    @NotNull
    @Pattern(regexp = "^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$")
    @Column(name = "livreur_email", nullable = false, unique = true)
    private String livreurEmail;

    @NotNull
    @Pattern(regexp = "\\d+$")
    @Column(name = "livreur_phone", nullable = false)
    private String livreurPhone;

    @NotNull
    @Size(min = 3, max = 100)
    @Column(name = "livreur_address", length = 100, nullable = false)
    private String livreurAddress;

    @OneToMany(mappedBy = "livreur")
    @JsonIgnoreProperties(value = { "plats", "client", "restaurant", "livreur" }, allowSetters = true)
    private Set<Order> orders = new HashSet<>();

    @ManyToOne
    @JsonIgnoreProperties(value = { "restaurants", "livreurs", "client" }, allowSetters = true)
    private Cooperative cooperative;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Livreur id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLivreurName() {
        return this.livreurName;
    }

    public Livreur livreurName(String livreurName) {
        this.setLivreurName(livreurName);
        return this;
    }

    public void setLivreurName(String livreurName) {
        this.livreurName = livreurName;
    }

    public String getLivreurEmail() {
        return this.livreurEmail;
    }

    public Livreur livreurEmail(String livreurEmail) {
        this.setLivreurEmail(livreurEmail);
        return this;
    }

    public void setLivreurEmail(String livreurEmail) {
        this.livreurEmail = livreurEmail;
    }

    public String getLivreurPhone() {
        return this.livreurPhone;
    }

    public Livreur livreurPhone(String livreurPhone) {
        this.setLivreurPhone(livreurPhone);
        return this;
    }

    public void setLivreurPhone(String livreurPhone) {
        this.livreurPhone = livreurPhone;
    }

    public String getLivreurAddress() {
        return this.livreurAddress;
    }

    public Livreur livreurAddress(String livreurAddress) {
        this.setLivreurAddress(livreurAddress);
        return this;
    }

    public void setLivreurAddress(String livreurAddress) {
        this.livreurAddress = livreurAddress;
    }

    public Set<Order> getOrders() {
        return this.orders;
    }

    public void setOrders(Set<Order> orders) {
        if (this.orders != null) {
            this.orders.forEach(i -> i.setLivreur(null));
        }
        if (orders != null) {
            orders.forEach(i -> i.setLivreur(this));
        }
        this.orders = orders;
    }

    public Livreur orders(Set<Order> orders) {
        this.setOrders(orders);
        return this;
    }

    public Livreur addOrder(Order order) {
        this.orders.add(order);
        order.setLivreur(this);
        return this;
    }

    public Livreur removeOrder(Order order) {
        this.orders.remove(order);
        order.setLivreur(null);
        return this;
    }

    public Cooperative getCooperative() {
        return this.cooperative;
    }

    public void setCooperative(Cooperative cooperative) {
        this.cooperative = cooperative;
    }

    public Livreur cooperative(Cooperative cooperative) {
        this.setCooperative(cooperative);
        return this;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Livreur)) {
            return false;
        }
        return id != null && id.equals(((Livreur) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Livreur{" +
            "id=" + getId() +
            ", livreurName='" + getLivreurName() + "'" +
            ", livreurEmail='" + getLivreurEmail() + "'" +
            ", livreurPhone='" + getLivreurPhone() + "'" +
            ", livreurAddress='" + getLivreurAddress() + "'" +
            "}";
    }
}
