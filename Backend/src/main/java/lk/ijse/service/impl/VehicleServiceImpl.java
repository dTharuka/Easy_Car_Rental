package lk.ijse.service.impl;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.VehicleDTO;
import lk.ijse.entity.Customer;
import lk.ijse.entity.Vehicle;
import lk.ijse.repo.CustomerRepo;
import lk.ijse.repo.VehicleRepo;
import lk.ijse.service.VehicleService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    VehicleRepo vehicleRepo;
    @Autowired
    ModelMapper modelMapper;
    @Override
    public void saveVehicle(VehicleDTO vehicleDTO) {
        if (vehicleRepo.existsById(vehicleDTO.getVehicleId())) {
            throw new RuntimeException("Customer Already Exist !");
        } else {
            vehicleRepo.save(modelMapper.map(vehicleDTO, Vehicle.class));
        }
    }

    @Override
    public void deleteVehicle(String code) {
        if (vehicleRepo.existsById(code)) {
            vehicleRepo.deleteById(code);
        } else {
            throw new RuntimeException("No such a vehicle !");
        }
    }

    @Override
    public void updateVehicle(VehicleDTO vehicleDTO) {
        if (vehicleRepo.existsById(vehicleDTO.getVehicleId())) {
            vehicleRepo.save(modelMapper.map(vehicleDTO, Vehicle.class));
        } else {
            throw new RuntimeException("Cannot find these Vehicle id !");
        }
    }


    @Override
    public List<VehicleDTO> getAllVehicle() {
        return modelMapper.map(vehicleRepo.findAll(), new TypeToken<ArrayList<VehicleDTO>>() {
        }.getType());
    }
}
