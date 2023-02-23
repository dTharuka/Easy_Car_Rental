package lk.ijse.entity;

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
@IdClass(DriverSchedule_PK.class)
public class DriverSchedule {

    @Id
    @Column(name = "driver_id")
    private String driverId;
    @Id
    @Column(name = "booking_id")
    private String bookingId;


    @ManyToOne
    @JoinColumn(name = "driverId",referencedColumnName = "id",insertable = false,updatable = false)
    private Driver driver;

    @ManyToOne
    @JoinColumn(name = "bookingId",referencedColumnName = "bookingId",insertable = false,updatable = false)
    private Booking booking;

}