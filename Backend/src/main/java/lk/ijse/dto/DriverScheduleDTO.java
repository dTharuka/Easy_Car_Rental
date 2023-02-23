package lk.ijse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;



@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverScheduleDTO {

    private String driverId;
    private String bookingId;
    private DriverDTO driver;
    private BookingDTO booking;
}