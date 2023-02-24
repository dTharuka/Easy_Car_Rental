package lk.ijse.controller;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.PaymentDTO;
import lk.ijse.service.BookingService;
import lk.ijse.service.PaymentService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("payment")
public class PaymentFormController {
    @Autowired
    PaymentService paymentService;

    @Autowired
    BookingService bookingService;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping(value = "save_payment",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil savePayment(@ModelAttribute PaymentDTO paymentDTO,@RequestParam String bookingId){
//        System.out.println("Payment Controller SOOUT================================================"+paymentDTO.getBooking().getBookingId());
        paymentService.savePayment(paymentDTO);
        return new ResponseUtil("OK","Saved",null);
    }

    @GetMapping(value = "get_all_payment_details",produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseUtil getAllPayments(){
        return new ResponseUtil("OK","Successful",paymentService.getAllPayment());
    }

    @GetMapping(path = "get_all_bookings")
    public ResponseUtil getAllBookingDetails(@ModelAttribute BookingDTO bookingDTO) {
        System.out.println(paymentService.loadAllBookingDetails());
        return new ResponseUtil("OK", "Successfully Loaded ! ", paymentService.loadAllBookingDetails());
    }
}