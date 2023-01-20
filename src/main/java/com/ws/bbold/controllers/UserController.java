package com.ws.bbold.controllers;

import com.ws.bbold.security.services.UserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/user")
public class UserController {
    @Autowired
    private UserDetailService userDetailService;

    @PostMapping("/center")
    @ResponseBody
    public void setUserBloodDonationCenter(@RequestParam Long userId, @RequestParam Long centerId) {
        userDetailService.setUserBloodDonationCenter(userId, centerId);
    }
}
