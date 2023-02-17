package lk.ijse.service.impl;

import lk.ijse.dto.DriverDTO;
import lk.ijse.entity.Customer;
import lk.ijse.entity.Driver;
import lk.ijse.repo.DriverRepo;
import lk.ijse.service.DriverService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class DriverServiceImpl implements DriverService {

    @Autowired
    DriverRepo driverRepo;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public void saveDriver(DriverDTO driverDTO) {
        if (driverRepo.existsById(driverDTO.getId())) {
            throw new RuntimeException("Customer Already Exist !");
        } else {
            driverRepo.save(modelMapper.map(driverDTO, Driver.class));
        }
    }

    @Override
    public void deleteDriver(String id) {
        if (!driverRepo.existsById(id)) {
            throw new RuntimeException("No such a admin !");
        } else {
            driverRepo.deleteById(id);
        }
    }

    @Override
    public void updateDriver(DriverDTO driverDTO) {
        if (!driverRepo.existsById(driverDTO.getId())) {
            throw new RuntimeException("Cannot find these customer id !");
        } else {
            driverRepo.save(modelMapper.map(driverDTO, Driver.class));

        }
    }

    @Override
    public List<DriverDTO> getAllDriver() {
        return modelMapper.map(driverRepo.findAll(), new TypeToken<ArrayList<DriverDTO>>() {
        }.getType());
    }
}
