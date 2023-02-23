package lk.ijse.controller;

import lk.ijse.dto.AdminDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.service.AdminService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("admin")
public class AdminFormController {


//TODO Admin update method not implemented please setup get_all name
//TODO loading error and after setup the update method


    @Autowired
    public AdminService adminService;

    @PostMapping(value = "save_admin",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil saveAdmin(@ModelAttribute AdminDTO adminDTO) {
        adminService.saveAdmin(adminDTO);
        return new ResponseUtil("OK", "Successfully Registered !", "");
    }


    @DeleteMapping()
    public ResponseUtil deleteAdmin(String code) {
        adminService.deleteAdmin(code);
        return new ResponseUtil("OK", "Successfully Deleted ! " + code, "");
    }

    @PutMapping(value = "update")
    public ResponseUtil updateAdmin(@RequestBody AdminDTO adminDTO) {
        adminService.updateAdmin(adminDTO);
        return new ResponseUtil("OK", "Successfully updated ! " + adminDTO.getAdminId(), "");
    }

    @GetMapping(value = "get_all_admin", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllAdmin() {
        return new ResponseUtil("OK", "Successful", adminService.getAllAdmin());
    }



}