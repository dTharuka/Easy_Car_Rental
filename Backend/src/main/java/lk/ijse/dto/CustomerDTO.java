package lk.ijse.dto;

import lk.ijse.embeded.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CustomerDTO {
    private String id;
    private String nic;
    private Name name;
    private String address;
    private String drivingLicenseNo;
    private String email;
    private String contactNo;
    private UserDTO user;
}
