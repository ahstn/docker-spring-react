package io.ahouston.repositories;

import io.ahouston.entities.Employee;
import org.springframework.data.repository.CrudRepository;

/**
 * Repository for Employee entity using Spring Data's CrudRepository
 * @author Adam Houston
 */
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
