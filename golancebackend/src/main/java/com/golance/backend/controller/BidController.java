package com.golance.backend.controller;

import com.golance.backend.model.Bid;
import com.golance.backend.service.BidService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bids")
@CrossOrigin(origins = "http://localhost:5173")
public class BidController {

    @Autowired
    private BidService bidService;

    // POST a bid for a task
    @PostMapping
    public Bid createBid(@RequestParam Long taskId,
                         @RequestParam Long userId,
                         @RequestParam int credits) {
        return bidService.createBid(taskId, userId, credits);
    }

    // GET all bids for a task
    @GetMapping("/task/{taskId}")
    public List<Bid> getBidsForTask(@PathVariable Long taskId) {
        return bidService.getBidsForTask(taskId);
    }


}
