package lk.ijse.service;


import lk.ijse.dto.DriverDTO;
import lk.ijse.entity.Driver;
import lk.ijse.enums.AvailabilityType;

import java.time.LocalDate;
import java.util.List;

public interface DriverService {
    void saveDriver(DriverDTO driverDTO);
    void deleteDriver(String id);
    void updateDriver(DriverDTO driverDTO);
    List<DriverDTO> getAllDriver();
    long countDrivers();

}