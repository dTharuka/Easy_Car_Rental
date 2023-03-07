package lk.ijse.service;

import lk.ijse.dto.CustomerDTO;
import lk.ijse.dto.PaymentDTO;

import java.util.List;

public interface IncomeService {
    List<?> getCurrentIncomeByDate();

    List<?> getCurrentIncomeByMonth();

    List<?> getCurrentIncomeByYear();

}