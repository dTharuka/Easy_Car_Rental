package lk.ijse.config;

import lk.ijse.service.VehicleService;
import lk.ijse.service.impl.*;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@Import(JPAConfig.class)
@ComponentScan(basePackageClasses = {CustomerServiceImpl.class, AdminServiceImpl.class, DriverServiceImpl.class, VehicleServiceImpl.class, BookingServiceImpl.class, PaymentServiceImpl.class,SearchingServiceImpl.class})
public class WebRootConfig {
    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
}