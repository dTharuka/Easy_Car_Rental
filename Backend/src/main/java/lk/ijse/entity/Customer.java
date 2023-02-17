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
@Entity
@ToString
public class Customer {

    @Id
    private String id;
    @Column(name = "nic_no")
    private String nic;
    @Embedded
    @Column(name = "name")
    private Name name;
    @Column(name = "address")
    private String address;
    @Column(name = "driving_license_no")
    private String drivingLicenseNo;
    @Column(name = "email")
    private String email;
    @Column(name = "contact_No")
    private String contactNo;

    @OneToOne(cascade = CascadeType.ALL)
    private User user;
}
