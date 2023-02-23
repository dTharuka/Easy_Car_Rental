package lk.ijse.service.impl;

import lk.ijse.dto.AdminDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.entity.Admin;
import lk.ijse.entity.Customer;
import lk.ijse.repo.AdminRepo;
import lk.ijse.service.AdminService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
@Service
@Transactional
public class AdminServiceImpl implements AdminService {

    @Autowired
    AdminRepo adminRepo;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public void saveAdmin(AdminDTO adminDTO) {
        if (adminRepo.existsById(adminDTO.getAdminId())) {
            throw new RuntimeException("Admin Already Exist !");
        } else {
            adminRepo.save(modelMapper.map(adminDTO, Admin.class));
        }
    }


    @Override
    public void updateAdmin(AdminDTO adminDTO) {

        if (!adminRepo.existsById(adminDTO.getAdminId())) {
            throw new RuntimeException("Cannot find these customer id !");
        } else {
            adminRepo.save(modelMapper.map(adminDTO, Admin.class));
        }
    }

    @Override
    public void deleteAdmin(String id) {
        if (adminRepo.existsById(id)) {
            adminRepo.deleteById(id);
        } else {
            throw new RuntimeException("No such a admin !");
        }
    }

    @Override
    public List<AdminDTO> getAllAdmin() {
        return modelMapper.map(adminRepo.findAll(), new TypeToken<ArrayList<AdminDTO>>() {
        }.getType());
    }
}