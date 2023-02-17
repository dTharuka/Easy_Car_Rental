package lk.ijse.embeded;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Embeddable;
import javax.persistence.Embedded;

@Embeddable
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Name {
    private String firstName;
    private String lastName;
}
