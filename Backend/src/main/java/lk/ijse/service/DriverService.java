package lk.ijse.service;


import lk.ijse.dto.DriverDTO;

import java.util.List;

public interface DriverService {
    void saveDriver(DriverDTO driverDTO);
    void deleteDriver(String id);
    void updateDriver(DriverDTO driverDTO);
    List<DriverDTO> getAllDriver();
}
