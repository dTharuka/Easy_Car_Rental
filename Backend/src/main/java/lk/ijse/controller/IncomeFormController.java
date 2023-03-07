package lk.ijse.controller;

import lk.ijse.repo.IncomeRepo;
import lk.ijse.service.IncomeService;
import lk.ijse.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/income")
public class IncomeFormController {

    @Autowired
    public IncomeService incomeService;

    @GetMapping("/by_daily")
    public ResponseUtil getRevenueByDate(){
        return new ResponseUtil("OK", "Successfully Loaded ! ", incomeService.getCurrentIncomeByDate());
    }

    @GetMapping("/by_month")
    public ResponseUtil getRevenueByMonth(){
        return new ResponseUtil("OK", "Successfully Loaded ! ", incomeService.getCurrentIncomeByMonth());
    }

    @GetMapping("/by_year")
    public ResponseUtil getRevenueByYear(){
        return new ResponseUtil("OK", "Successfully Loaded ! ", incomeService.getCurrentIncomeByYear());
    }

}