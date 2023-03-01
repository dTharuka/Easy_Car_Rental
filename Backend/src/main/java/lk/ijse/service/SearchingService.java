package lk.ijse.service;

import lk.ijse.dto.VehicleDTO;
import lk.ijse.embeded.PriceRate;
import lk.ijse.enums.FuelType;
import lk.ijse.enums.TransmissionType;
import lk.ijse.enums.VehicleType;

import java.time.LocalDate;
import java.util.List;

public interface SearchingService {
    List<VehicleDTO> getAllNoOfPassenger(int no_of_passengers);

    List<VehicleDTO> getAllFuelType(FuelType fuel_type);

    List<VehicleDTO> getPriceRate(PriceRate price_rate);

    List<VehicleDTO> getVehicleByBrand(String brand);

    List<VehicleDTO> getVehicleByType(VehicleType type);

    List<VehicleDTO> getVehicleByTransmissionType(TransmissionType transmission_type);

//    List<VehicleDTO> load_all_available_vehicles(String pickup_date, String return_date);


}