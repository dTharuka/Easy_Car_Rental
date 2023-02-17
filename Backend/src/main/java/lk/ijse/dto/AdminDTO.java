package lk.ijse.dto;


import lk.ijse.embeded.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


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

    public AdminDTO(String adminId, String adminNic, Name adminName, String adminAddress, String adminEmail, String adminContact, UserDTO user) {
        this.adminId = adminId;
        this.adminNic = adminNic;
        this.adminName = adminName;
        this.adminAddress = adminAddress;
        this.adminEmail = adminEmail;
        this.adminContact = adminContact;
        this.user = user;
    }

    public AdminDTO() {
    }
}
