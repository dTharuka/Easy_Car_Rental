package lk.ijse.dto;

import lk.ijse.embeded.Name;
import lk.ijse.enums.AvailabilityType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class DriverDTO {
    private String id;
    private String nic;
    private Name name;
    private String address;
    private String drivingLicenseNo;
    private String email;
    private String contactNo;
    private UserDTO user;
    private AvailabilityType driverAvailability;
}
