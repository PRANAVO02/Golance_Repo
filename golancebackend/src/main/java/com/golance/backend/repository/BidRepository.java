package com.golance.backend.repository;

import com.golance.backend.model.Bid;
import com.golance.backend.model.Task;
import com.golance.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface BidRepository extends JpaRepository<Bid, Long> {
    List<Bid> findByTask(Task task);
    Optional<Bid> findByTaskAndUser(Task task, User user);

}
