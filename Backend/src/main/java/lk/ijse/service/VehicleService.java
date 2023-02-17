package lk.ijse.service;

import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.VehicleDTO;

import java.util.List;

public interface VehicleService {
    void saveVehicle(VehicleDTO driverDTO);
    void deleteVehicle(String id);
    void updateVehicle(VehicleDTO driverDTO);
    List<VehicleDTO> getAllVehicle();
}
