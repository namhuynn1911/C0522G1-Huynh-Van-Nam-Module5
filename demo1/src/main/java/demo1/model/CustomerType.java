package demo1.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class CustomerType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int customerTypeId;
    private String customerTypeName;

    @OneToMany(mappedBy = "customerType",cascade = CascadeType.ALL)
    private Set<Customer> customers;
}
