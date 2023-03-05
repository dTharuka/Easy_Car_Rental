package lk.ijse.repo;

import lk.ijse.dto.PaymentDTO;
import lk.ijse.entity.Customer;
import lk.ijse.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface IncomeRepo extends JpaRepository<Payment, String> {
    @Query(value = "SELECT SUM(amount),date FROM payment GROUP BY date", nativeQuery = true)
    List getRevenueByDate();

    @Query(value = "SELECT SUM(amount)FROM payment;", nativeQuery = true)
    List getRevenueByYear();
}