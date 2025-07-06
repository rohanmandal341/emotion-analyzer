package com.ai.emotion_detection.DTOs;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MentalResponse {

    private String emotion;
    private double confidence;
    private String tip;

}
