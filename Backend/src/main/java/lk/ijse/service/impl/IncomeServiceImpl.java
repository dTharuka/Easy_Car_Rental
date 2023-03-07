package lk.ijse.service.impl;

import lk.ijse.dto.PaymentDTO;
import lk.ijse.repo.IncomeRepo;
import lk.ijse.service.IncomeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class IncomeServiceImpl implements IncomeService {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    IncomeRepo incomeRepo;

    @Override
    public List getCurrentIncomeByDate() {
        return incomeRepo.getRevenueByDate();
    }

    @Override
    public List getCurrentIncomeByMonth() {
        return incomeRepo.getRevenueByMonth();
    }

    @Override
    public List getCurrentIncomeByYear() {
        return incomeRepo.getRevenueByYear();
    }

}