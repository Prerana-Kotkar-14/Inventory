package com.Job.Portal.repository;

import com.Job.Portal.entity.JobSeekerProfile;
import com.Job.Portal.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}