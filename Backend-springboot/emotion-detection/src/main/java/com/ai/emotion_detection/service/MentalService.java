package com.ai.emotion_detection.service;


import com.ai.emotion_detection.DTOs.MentalRequest;
import com.ai.emotion_detection.DTOs.MentalResponse;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
@RequiredArgsConstructor
public class MentalService {

    private final WebClient webClient;

    public MentalRequest buildRequest(String text){
        return new MentalRequest(text);
    }
    public Mono<MentalResponse> createResponse(String text) {
        return webClient.post()
                .uri("/analyze")
                .bodyValue(buildRequest(text))
                .retrieve()
                .bodyToMono(MentalResponse.class)
                .doOnNext(response -> {
                    System.out.println("➡️ Parsed Response:");
                    System.out.println("Emotion: " + response.getEmotion());
                    System.out.println("Confidence: " + response.getConfidence());
                    System.out.println("Tip: " + response.getTip());
                });
    }

   }

