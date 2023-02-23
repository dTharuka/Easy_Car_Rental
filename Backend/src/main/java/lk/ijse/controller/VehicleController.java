package lk.ijse.controller;

import lk.ijse.dto.VehicleDTO;
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

    @DeleteMapping
    public ResponseUtil deleteVehicle(String code) {
        vehicleService.deleteVehicle(code);
        System.out.println(code+" vehicle service impl");

        return new ResponseUtil("OK", "Successfully Deleted ! " + code, "");
    }

    @GetMapping(value = "get_all",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllVehicle(){
        return new ResponseUtil("OK","Successful",vehicleService.getAllVehicle());
    }

    @PutMapping(value = "update")
    public ResponseUtil updateDriver(@RequestBody VehicleDTO vehicleDTO) {
        vehicleService.updateVehicle(vehicleDTO);
        return new ResponseUtil("OK", "Successfully updated ! " + vehicleDTO.getVehicleId(), "");
    }

    @GetMapping(path ="/vehicleCount/{count}",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil countVehicles(@PathVariable String count){
        return new ResponseUtil("Ok", "", vehicleService.countVehicle());
    }


}