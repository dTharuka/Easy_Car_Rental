package lk.ijse.entity;


import lk.ijse.embeded.Name;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;


@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Admin {

    @Id
    @Column(name = "admin_id")
    private String adminId;
    @Column(name = "nic_no")
    private String adminNic;
    @Embedded
    @Column(name = "full_name")
    private Name adminName;
    @Column(name = "address")
    private String adminAddress;
    @Column(name = "email")
    private String adminEmail;
    @Column(name = "contact_no")
    private String adminContact;
    @OneToOne(cascade = CascadeType.ALL)
    private User user;
}
