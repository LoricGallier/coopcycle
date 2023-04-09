package info4.gl.coopcycle.service.mapper;

import info4.gl.coopcycle.domain.Client;
import info4.gl.coopcycle.domain.Livreur;
import info4.gl.coopcycle.domain.Order;
import info4.gl.coopcycle.domain.Plat;
import info4.gl.coopcycle.domain.Restaurant;
import info4.gl.coopcycle.service.dto.ClientDTO;
import info4.gl.coopcycle.service.dto.LivreurDTO;
import info4.gl.coopcycle.service.dto.OrderDTO;
import info4.gl.coopcycle.service.dto.PlatDTO;
import info4.gl.coopcycle.service.dto.RestaurantDTO;
import java.util.Set;
import java.util.stream.Collectors;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Order} and its DTO {@link OrderDTO}.
 */
@Mapper(componentModel = "spring")
public interface OrderMapper extends EntityMapper<OrderDTO, Order> {
    @Mapping(target = "plats", source = "plats", qualifiedByName = "platIdSet")
    @Mapping(target = "client", source = "client", qualifiedByName = "clientId")
    @Mapping(target = "restaurant", source = "restaurant", qualifiedByName = "restaurantId")
    @Mapping(target = "livreur", source = "livreur", qualifiedByName = "livreurId")
    OrderDTO toDto(Order s);

    @Mapping(target = "removePlat", ignore = true)
    Order toEntity(OrderDTO orderDTO);

    @Named("platId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    PlatDTO toDtoPlatId(Plat plat);

    @Named("platIdSet")
    default Set<PlatDTO> toDtoPlatIdSet(Set<Plat> plat) {
        return plat.stream().map(this::toDtoPlatId).collect(Collectors.toSet());
    }

    @Named("clientId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ClientDTO toDtoClientId(Client client);

    @Named("restaurantId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    RestaurantDTO toDtoRestaurantId(Restaurant restaurant);

    @Named("livreurId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    LivreurDTO toDtoLivreurId(Livreur livreur);
}
