package lk.ijse.service.impl;

import lk.ijse.dto.BookingDTO;
import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.DriverDTO;
import lk.ijse.dto.VehicleDTO;
import lk.ijse.entity.Booking;
import lk.ijse.repo.*;
import lk.ijse.service.BookingService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class BookingServiceImpl implements BookingService {
    @Autowired
    AdminRepo adminRepo;
    @Autowired
    ModelMapper modelMapper;
    @Autowired
    CustomerRepo customerRepo;
    @Autowired
    DriverRepo driverRepo;
    @Autowired
    private VehicleRepo vehicleRepo;
    @Autowired
    private BookingRepo bookingRepo;


    @Override
    public void placeBooking(BookingDTO bookingDTO) {
        if (bookingRepo.existsById(bookingDTO.getBookingId())) {
            throw new RuntimeException("already booked try another !");
        } else {
            System.out.println(bookingDTO.toString());
            bookingRepo.save(modelMapper.map(bookingDTO, Booking.class));
        }

    }

    @Override
    public ArrayList<CustomerDTO> loadAllCustomersInTheCombo() {
        System.out.println(customerRepo.findAll());
        return modelMapper.map(customerRepo.findAll(), new TypeToken<ArrayList<CustomerDTO>>() {
        }.getType());
    }

    @Override
    public ArrayList<DriverDTO> loadAllItemsInTheCombo() {
        System.out.println(driverRepo.findAll());
        return modelMapper.map(driverRepo.findAll(), new TypeToken<ArrayList<DriverDTO>>() {
        }.getType());
    }

    @Override
    public ArrayList<VehicleDTO> loadAllVehiclesInToTheCombo() {
        System.out.println(vehicleRepo.findAll());
        return modelMapper.map(vehicleRepo.findAll(), new TypeToken<ArrayList<VehicleDTO>>() {
        }.getType());
    }

    @Override
    public long countBooking() {
        return bookingRepo.count();
    }

    @Override
    public List<BookingDTO> getBookingDetails() {
        List<BookingDTO> list = new ArrayList<>();
        List<Booking> all = bookingRepo.findAll();
        for (Booking b : all) {
            CustomerDTO dto = modelMapper.map(b.getCustomer(), CustomerDTO.class);
            BookingDTO b1 = new BookingDTO(b.getBookingId(), b.getPickUpDate(), b.getPickUpTime(), b.getReturnDate(), b.getDriverRequestType(), dto, b.getPickUpLocation());
            list.add(b1);
            System.out.println("==============================================================================");
            System.out.println(b.getDriverRequestType());
            System.out.println("==============================================================================");

        }
        return list;
    }
}