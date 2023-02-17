package lk.ijse.dto;

import lk.ijse.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class UserDTO {

    private String token;
    private int userId;
    private String userName;
    private String password;
    private Role role;

    public UserDTO(String userName, String password, Role role) {
        this.userName = userName;
        this.password = password;
        this.role = role;
    }

    public UserDTO(String token, int userId, String userName) {
        this.token = token;
        this.userId = userId;
        this.userName = userName;
    }

    public UserDTO(String userName, String password) {
        this.userName = userName;
        this.password = password;
    }
}
