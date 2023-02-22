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

public class AdminDTO {

    private String adminId;
    private String adminNic;
    private Name adminName;
    private String adminAddress;
    private String adminEmail;
    private String adminContact;
    private UserDTO user;

}
