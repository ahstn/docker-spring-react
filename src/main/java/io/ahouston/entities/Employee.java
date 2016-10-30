package io.ahouston.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

/**
 * Basic Employee entity
 * @author Adam Houston
 */
@Data
@Entity
public class Employee {
    private @Id @GeneratedValue Long id;
    private String forename;
    private String surname;
    private String description;

    private Employee() {}

    public Employee(String forename, String surname, String description) {
        this.forename = forename;
        this.surname = surname;
        this.description = description;
    }
}
