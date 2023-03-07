package lk.ijse.config;


import lk.ijse.advisor.AppWideExceptionHandler;
import lk.ijse.controller.*;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackageClasses = {CustomerFormController.class,AppWideExceptionHandler.class, AdminFormController.class, DriverFormController.class, VehicleController.class, BookingController.class,PaymentFormController.class,SearchingController.class,IncomeFormController.class})
public class WebAppConfig {

}