package io.ahstn.DockerSpringVue.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String forename;
    private String surname;
    private String email;

    public long getId() {
                              return id;
                                        }

    public void setId(long id) {
                                     this.id = id;
                                                  }

    public String getForename() {
                                      return forename;
                                                      }

    public void setForename(String forename) {
                                                   this.forename = forename;
                                                                            }

    public String getSurname() {
                                     return surname;
                                                    }

    public void setSurname(String surname) {
                                                 this.surname = surname;
                                                                        }

    public String getEmail() {
                                   return email;
                                                }

    public void setEmail(String email) {
                                             this.email = email;
  }
}
