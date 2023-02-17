package lk.ijse.entity;

import lk.ijse.embeded.Name;
import lk.ijse.enums.AvailabilityType;
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
public class Driver {

    @Id
    private String id;
    @Column(name = "user_name")
    private String nic;
    @Column(name = "license_no")
    private String drivingLicenseNo;
    @Embedded
    @Column(name = "name")
    private Name name;
    @Column(name = "address")
    private String address;
    @Column(name = "email")
    private String email;
    @Column(name = "contact_no")
    private String contactNo;
    @Enumerated(EnumType.STRING)
    @Column(name = "availability")
    private AvailabilityType driverAvailability;
    @OneToOne(cascade = CascadeType.ALL)
    private User user;



}
