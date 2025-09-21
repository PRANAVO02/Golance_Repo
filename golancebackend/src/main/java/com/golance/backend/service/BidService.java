package com.golance.backend.service;

import com.golance.backend.model.Bid;
import com.golance.backend.model.Task;
import com.golance.backend.model.User;
import com.golance.backend.repository.BidRepository;
import com.golance.backend.repository.TaskRepository;
import com.golance.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BidService {

    @Autowired
    private BidRepository bidRepository;

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private UserRepository userRepository;

    public Bid createBid(Long taskId, Long userId, int credits) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        // Check if the user already has a bid on this task
        Bid bid = bidRepository.findByTaskAndUser(task, user)
                .orElseGet(() -> {
                    Bid newBid = new Bid();
                    newBid.setTask(task);
                    newBid.setUser(user);
                    newBid.setCreditsBid(0); // start from 0
                    return newBid;
                });

        // Increment the user's bid
        bid.setCreditsBid(bid.getCreditsBid() + credits);
        bidRepository.save(bid);

        // Update total credits offered for the task
        task.setCreditsOffered(task.getCreditsOffered() + credits);
        taskRepository.save(task);

        return bid;
    }

    public List<Bid> getBidsForTask(Long taskId) {
        Task task = taskRepository.findById(taskId)
                .orElseThrow(() -> new RuntimeException("Task not found"));
        return bidRepository.findByTask(task);
    }
}
