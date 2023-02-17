package lk.ijse.config;


import lk.ijse.advisor.AppWideExceptionHandler;
import lk.ijse.controller.AdminFormController;
import lk.ijse.controller.CustomerFormController;
import lk.ijse.controller.DriverFormController;
import lk.ijse.controller.VehicleController;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@EnableWebMvc
@ComponentScan(basePackageClasses = {CustomerFormController.class,AppWideExceptionHandler.class, AdminFormController.class, DriverFormController.class, VehicleController.class})
public class WebAppConfig {

}
