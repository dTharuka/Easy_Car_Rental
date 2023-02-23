package lk.ijse.entity;

import lk.ijse.enums.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
@ToString
public class Payment {

    @Id
    @Column(name = "payment_id")
    private String paymentId;
    @Column(name = "date")
    private String paymentDate;
    @Column(name = "invoice_no")
    private String invoiceNo;
    @Column(name = "amount")
    private double amount;
    @Enumerated(EnumType.STRING)
    @Column(name = "payment_type")
    private PaymentType paymentType;

    @ManyToOne(cascade = {CascadeType.REFRESH})
    @JoinColumn(name = "bookingId",referencedColumnName = "bookingId",insertable = false,updatable = false)
    private Booking booking;

}