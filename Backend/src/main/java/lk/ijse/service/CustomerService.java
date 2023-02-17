package lk.ijse.service;

import lk.ijse.dto.CustomerDTO;

import java.util.ArrayList;
import java.util.List;

public interface CustomerService {
    void saveCustomer(CustomerDTO customerDTO);

    void updateCustomer(CustomerDTO customerDTO);

    void deleteCustomer(String id);

    List<CustomerDTO> getAllCustomer();


}
