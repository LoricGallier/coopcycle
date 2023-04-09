package info4.gl.coopcycle.service.mapper;

import info4.gl.coopcycle.domain.Plat;
import info4.gl.coopcycle.domain.Restaurant;
import info4.gl.coopcycle.service.dto.PlatDTO;
import info4.gl.coopcycle.service.dto.RestaurantDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Plat} and its DTO {@link PlatDTO}.
 */
@Mapper(componentModel = "spring")
public interface PlatMapper extends EntityMapper<PlatDTO, Plat> {
    @Mapping(target = "restaurant", source = "restaurant", qualifiedByName = "restaurantId")
    PlatDTO toDto(Plat s);

    @Named("restaurantId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    RestaurantDTO toDtoRestaurantId(Restaurant restaurant);
}
