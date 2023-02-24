package lk.ijse.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lk.ijse.enums.PaymentType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class PaymentDTO {

    private String paymentId;
    @JsonFormat(pattern="yyyy-MM-dd")
    private String paymentDate;
    private String invoiceNo;
    private double amount;
    private PaymentType paymentType;
    private BookingDTO booking;


}