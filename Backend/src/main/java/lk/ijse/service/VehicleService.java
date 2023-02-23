package lk.ijse.service;

import lk.ijse.dto.VehicleDTO;

import java.util.List;

public interface VehicleService {
    void saveVehicle(VehicleDTO driverDTO);
    void deleteVehicle(String code);
    void updateVehicle(VehicleDTO driverDTO);
    List<VehicleDTO> getAllVehicle();
    long countVehicle();
}