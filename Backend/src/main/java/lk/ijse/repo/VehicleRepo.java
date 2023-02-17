package lk.ijse.repo;

import lk.ijse.entity.Driver;
import lk.ijse.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepo extends JpaRepository<Vehicle,String> {
}
