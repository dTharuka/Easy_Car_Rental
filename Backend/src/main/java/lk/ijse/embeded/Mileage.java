package lk.ijse.embeded;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embeddable;


@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Mileage {

    private int dailyMileage;
    private int monthlyMileage;
}
