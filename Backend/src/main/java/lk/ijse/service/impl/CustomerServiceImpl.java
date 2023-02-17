package lk.ijse.service.impl;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.entity.Customer;
import lk.ijse.repo.CustomerRepo;
import lk.ijse.service.CustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    CustomerRepo customerRepo;
    @Autowired
    ModelMapper modelMapper;

    @Override
    public void saveCustomer(CustomerDTO customerDTO) {
        if (customerRepo.existsById(customerDTO.getId())) {
            throw new RuntimeException("Customer Already Exist !");
        } else {
            customerRepo.save(modelMapper.map(customerDTO, Customer.class));
        }
    }

    @Override
    public void updateCustomer(CustomerDTO customerDTO) {
        if (customerRepo.existsById(customerDTO.getId())) {
            customerRepo.save(modelMapper.map(customerDTO, Customer.class));
        } else {
            throw new RuntimeException("Cannot find these customer id !");
        }
    }

    @Override
    public void deleteCustomer(String id) {
        if (customerRepo.existsById(id)) {
            customerRepo.deleteById(id);
        } else {
            throw new RuntimeException("No such a customer !");
        }
    }

    @Override
    public List<CustomerDTO> getAllCustomer() {
        return modelMapper.map(customerRepo.findAll(), new TypeToken<ArrayList<CustomerDTO>>() {
        }.getType());
    }
}
