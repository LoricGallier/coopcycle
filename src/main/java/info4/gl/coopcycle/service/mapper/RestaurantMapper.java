package info4.gl.coopcycle.service.mapper;

import info4.gl.coopcycle.domain.Cooperative;
import info4.gl.coopcycle.domain.Restaurant;
import info4.gl.coopcycle.service.dto.CooperativeDTO;
import info4.gl.coopcycle.service.dto.RestaurantDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Restaurant} and its DTO {@link RestaurantDTO}.
 */
@Mapper(componentModel = "spring")
public interface RestaurantMapper extends EntityMapper<RestaurantDTO, Restaurant> {
    @Mapping(target = "cooperative", source = "cooperative", qualifiedByName = "cooperativeId")
    RestaurantDTO toDto(Restaurant s);

    @Named("cooperativeId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    CooperativeDTO toDtoCooperativeId(Cooperative cooperative);
}
