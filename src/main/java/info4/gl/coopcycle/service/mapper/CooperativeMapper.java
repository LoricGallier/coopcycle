package info4.gl.coopcycle.service.mapper;

import info4.gl.coopcycle.domain.Client;
import info4.gl.coopcycle.domain.Cooperative;
import info4.gl.coopcycle.service.dto.ClientDTO;
import info4.gl.coopcycle.service.dto.CooperativeDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Cooperative} and its DTO {@link CooperativeDTO}.
 */
@Mapper(componentModel = "spring")
public interface CooperativeMapper extends EntityMapper<CooperativeDTO, Cooperative> {
    @Mapping(target = "client", source = "client", qualifiedByName = "clientId")
    CooperativeDTO toDto(Cooperative s);

    @Named("clientId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    ClientDTO toDtoClientId(Client client);
}
