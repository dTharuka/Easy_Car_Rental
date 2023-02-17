package lk.ijse.controller;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.VehicleDTO;
import lk.ijse.service.CustomerService;
import lk.ijse.service.VehicleService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("vehicle")
public class VehicleController {
    @Autowired
    public VehicleService vehicleService;


    @PostMapping(value = "save_vehicle",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveVehicle(@ModelAttribute VehicleDTO vehicleDTO) {
        vehicleService.saveVehicle(vehicleDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }

    @GetMapping(value = "get_all",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicle(){
        return new ResponseUtil("OK","Successful",vehicleService.getAllVehicle());
    }

    @DeleteMapping
    public ResponseUtil deleteVehicle(String code) {
        vehicleService.deleteVehicle(code);
        System.out.println(code+" vehicle service impl");

        return new ResponseUtil("OK", "Successfully Deleted ! " + code, "");
    }

    @PutMapping(value = "update_vehicle")
    public ResponseUtil updateVehicle(@RequestBody VehicleDTO vehicleDTO) {
        vehicleService.updateVehicle(vehicleDTO);
        return new ResponseUtil("OK", "Successfully updated ! " + vehicleDTO.getVehicleId(), "");
    }

}
