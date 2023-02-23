package lk.ijse.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class BookingDetailsDTO {

    private String vehicleId;
    private String bookingId;
    private VehicleDTO vehicle;
    private BookingDTO booking;

}