package io.ahouston.controllers;

import io.ahouston.entities.Employee;
import io.ahouston.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

/**
 * REST Controller for {@link Employee} which maps to /api/employees
 * @author Adam Houston
 */
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<Collection<Employee>> getAllEmployees(){
        return new ResponseEntity<>((Collection<Employee>) repository.findAll(), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{id}")
    public ResponseEntity<Employee> getEmployeeWithId(@PathVariable Long id) {
        return new ResponseEntity<>(repository.findOne(id),HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.GET, params = {"forename"})
    public ResponseEntity<Collection<Employee>> findEmployeeWithName(@RequestParam(value="forename") String name) {
        return new ResponseEntity<>(repository.findByForename(name), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> addEmployee(@RequestBody Employee input) {
        return new ResponseEntity<>(repository.save(input), HttpStatus.CREATED);
    }

    @RequestMapping(method = RequestMethod.DELETE, value = "/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id) {
        repository.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
