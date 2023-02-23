package lk.ijse.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.ijse.enums.RequestType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class BookingDTO {

    private String bookingId;

    @JsonFormat(pattern="yyyy-MM-dd")
    private String pickUpDate;
    @JsonFormat(pattern="HH:mm:ss")
    private String pickUpTime;
    @JsonFormat(pattern="yyyy-MM-dd")
    private String returnDate;
    private RequestType DriverRequestType;
    private CustomerDTO customer;
    private String pickUpLocation;
//    private List<BookingDetailsDTO> bookingDetails;
//    private List<DriverScheduleDTO> driverSchedules;

    private List<BookingDetailsDTO> bookingDetails;
    private List<DriverScheduleDTO> driverSchedules;

    public BookingDTO(String bookingId, String pickUpDate, String pickUpTime, String returnDate, RequestType driverRequestType, CustomerDTO customer, String pickUpLocation) {
        this.bookingId = bookingId;
        this.pickUpDate = pickUpDate;
        this.pickUpTime = pickUpTime;
        this.returnDate = returnDate;
        DriverRequestType = driverRequestType;
        this.customer = customer;
        this.pickUpLocation = pickUpLocation;
    }

    public BookingDTO(String bookingId) {
        this.bookingId = bookingId;
    }
}