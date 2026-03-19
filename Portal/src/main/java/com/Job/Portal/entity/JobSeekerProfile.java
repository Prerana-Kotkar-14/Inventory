package com.Job.Portal.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data

@Entity
@Table(name = "job_seeker_profiles")
public class JobSeekerProfile {

    @Id
    private Long userId;

    private String phone;
    private LocalDate dateOfBirth;
    private Integer experienceYear;
    private String skills;
    private String education;
    private String currentCompany;
    private Long expectedSalary;

    @Column(name="created_at")
    private LocalDateTime createdAt;

    @OneToOne
    @MapsId
    @JoinColumn(name="user_id")
    private User user;
}
