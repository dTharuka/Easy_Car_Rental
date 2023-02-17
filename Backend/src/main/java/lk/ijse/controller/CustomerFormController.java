package lk.ijse.controller;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.service.CustomerService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("customer")
public class CustomerFormController {

    @Autowired
    public CustomerService customerService;


    @PostMapping(value = "save_customer",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveCustomer(@ModelAttribute CustomerDTO customerDTO) {
        customerService.saveCustomer(customerDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }


    @GetMapping(value = "get_all",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllCustomers(){
        return new ResponseUtil("OK","Successful",customerService.getAllCustomer());
    }

    @DeleteMapping
    public ResponseUtil deleteCustomer(String code) {
        customerService.deleteCustomer(code);
        return new ResponseUtil("OK", "Successfully Deleted ! " + code, "");
    }

    @PutMapping(value = "update_customer")
    public ResponseUtil updateCustomer(@RequestBody CustomerDTO customerDTO) {
        customerService.updateCustomer(customerDTO);
        return new ResponseUtil("OK", "Successfully updated ! " + customerDTO.getId(), "");
    }
}
