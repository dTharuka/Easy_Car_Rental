package lk.ijse.repo;

import lk.ijse.embeded.PriceRate;
import lk.ijse.entity.Vehicle;
import lk.ijse.enums.FuelType;
import lk.ijse.enums.TransmissionType;
import lk.ijse.enums.VehicleType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VehicleRepo extends JpaRepository<Vehicle,String> {
    @Query(value = "SELECT vehicleId FROM vehicle ORDER BY vehicleId DESC LIMIT 1", nativeQuery = true)
    String generateVehicleId();

    List<Vehicle> findAllByNumberOfPassenger(int noOfPassenger);

    List<Vehicle>findAllByFuelType(FuelType fuelType);


    List<Vehicle>findAllByVehiclePriceRate(PriceRate priceRate);

    List<Vehicle> findAllByVehicleBrand(String brand);

    List<Vehicle> findAllByTransmissionType(TransmissionType transmissionType);

    List<Vehicle> findAllByVehicleType(VehicleType type);

}