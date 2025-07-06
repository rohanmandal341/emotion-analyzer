package com.ai.emotion_detection.controller;


import com.ai.emotion_detection.DTOs.MentalRequest;
import com.ai.emotion_detection.DTOs.MentalResponse;
import com.ai.emotion_detection.service.MentalService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/mental")
public class MentalController {

    private final MentalService service;


    @PostMapping
    public Mono<ResponseEntity<MentalResponse>>  create(@RequestBody MentalRequest request){
        return service.createResponse(request.getText())
                .map(ResponseEntity::ok);
    }

}
