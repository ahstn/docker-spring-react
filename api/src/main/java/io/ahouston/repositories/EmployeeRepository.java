package io.ahouston.repositories;

import io.ahouston.entities.Employee;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

/**
 * Repository for Employee entity using Spring Data's CrudRepository
 * @author Adam Houston
 */
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {
    List<Employee> findByForename(String name);
}
