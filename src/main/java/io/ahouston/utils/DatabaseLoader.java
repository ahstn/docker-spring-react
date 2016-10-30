package io.ahouston.utils;

import io.ahouston.entities.Employee;
import io.ahouston.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Class to inject initial data to the DB
 * @author Adam Houston
 */
@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository repository;

    @Autowired
    public DatabaseLoader(EmployeeRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new Employee(
                "Frodo", "Baggins", "Ring Bearer"
        ));
    }
}
