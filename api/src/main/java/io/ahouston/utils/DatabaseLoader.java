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
        this.repository.save(new Employee("Frodo",    "Baggins",    "Ring Bearer"));
        this.repository.save(new Employee("Ewart",    "Prichard",   "Design Manager"));
        this.repository.save(new Employee("Vincent",  "Dorr",       "Media Manager"));
        this.repository.save(new Employee("Chico",    "Ball",       "Systems Analyst"));
        this.repository.save(new Employee("Mikel",    "Fonso",      "Financial Advisor"));
        this.repository.save(new Employee("Clemente", "Myford",     "Power Engineer"));
        this.repository.save(new Employee("Delainey", "Dooland",    "Programmer"));
        this.repository.save(new Employee("Garrett",  "Milham",     "Social Worker"));
        this.repository.save(new Employee("Rabbi",    "Zoane",      "Community Outreach"));
        this.repository.save(new Employee("Moe",      "Confort",    "Financial Analyst"));
        this.repository.save(new Employee("Carson",   "Sharphurst", "Statistician"));
    }
}
