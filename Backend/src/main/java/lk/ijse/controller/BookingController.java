package lk.ijse.controller;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.VehicleDTO;
import lk.ijse.service.BookingService;
import lk.ijse.service.CustomerService;
import lk.ijse.service.DriverService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    public DriverService driverService;

    @Autowired
    public BookingService bookingService;

    @Autowired
    public CustomerService customerService;

    @GetMapping(path = "/get_all_customers")
    public ResponseUtil getAllCustomersInToTheCombo(@ModelAttribute CustomerDTO customerDTO) {
        System.out.println(bookingService.loadAllCustomersInTheCombo());
        return new ResponseUtil("OK", "Successfully Loaded ! ", bookingService.loadAllCustomersInTheCombo());
    }

    @GetMapping("/get_all_drivers")
    public ResponseUtil getAllDriversInToTheCombo(@ModelAttribute DriverDTO driverDTO) {
        System.out.println(bookingService.loadAllItemsInTheCombo());
        return new ResponseUtil("OK", "Successfully Loaded ! ", bookingService.loadAllItemsInTheCombo());
    }

    @GetMapping("/get_all_vehicles")
    public ResponseUtil getAllVehiclesInToTheCombo(@ModelAttribute VehicleDTO vehicleDTO) {
        System.out.println(bookingService.loadAllVehiclesInToTheCombo());
        return new ResponseUtil("OK", "Successfully Loaded ! ", bookingService.loadAllVehiclesInToTheCombo());
    }


    @PostMapping(path = "/place_bookings")
    public ResponseUtil saveBooking(@ModelAttribute BookingDTO bookingDTO,
                                    @RequestParam String bookingId,
                                    @RequestParam String vehicleId) {

        System.out.println("vehicleID = "+vehicleId+" bookingId = "+bookingId);
        System.out.println("out put " + bookingDTO.toString());
        bookingService.placeBooking(bookingDTO);
        return new ResponseUtil("Ok", "Saved", null);
    }

    @GetMapping(path = "/bookingCount/{count}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil countBooking(@PathVariable String count) {
        return new ResponseUtil("Ok", "", bookingService.countBooking());
    }
}