package com.example.demo.api;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/data")
public class UserApi {
    //save
    @PostMapping("/check")
    public Map<String, Object> saveUser(@RequestBody HashMap<String, Object> dataSet) {
        Map<String, Object> res = new HashMap<String, Object>();

        if (dataSet != null) {
            String urls = String.valueOf(dataSet.get("url"));
            if(urls.contains("http://") || urls.contains("https://")) {
                String url = urls;
                String URL_EMPLOYEES = "http://www.fakenewsai.com/detect?url=" + url;
                // HttpHeaders
                HttpHeaders headers = new HttpHeaders();

                headers.setAccept(Arrays.asList(new MediaType[]{MediaType.APPLICATION_JSON}));
                // Request to return JSON format
                headers.setContentType(MediaType.APPLICATION_JSON);

                // HttpEntity<String>: To get result as String.
                HttpEntity<String> entity = new HttpEntity<String>(headers);

                // RestTemplate
                RestTemplate restTemplate = new RestTemplate();

                // Send request with GET method, and Headers.
                ResponseEntity<String> response = restTemplate.exchange(URL_EMPLOYEES,
                        HttpMethod.GET, entity, String.class);

                String result = response.getBody();
                res.put("success", true);
                res.put("result", result);
                return res;
            } else {
                String url = "http://" + urls;
                String URL_EMPLOYEES = "http://www.fakenewsai.com/detect?url=" + url;

                // HttpHeaders
                HttpHeaders headers = new HttpHeaders();

                headers.setAccept(Arrays.asList(new MediaType[]{MediaType.APPLICATION_JSON}));
                // Request to return JSON format
                headers.setContentType(MediaType.APPLICATION_JSON);

                // HttpEntity<String>: To get result as String.
                HttpEntity<String> entity = new HttpEntity<String>(headers);

                // RestTemplate
                RestTemplate restTemplate = new RestTemplate();

                // Send request with GET method, and Headers.
                ResponseEntity<String> response = restTemplate.exchange(URL_EMPLOYEES,
                        HttpMethod.GET, entity, String.class);

                String result = response.getBody();
                res.put("success", true);
                res.put("result", result);
                return res;
            }

        } else {
            res.put("success", true);
            return res;
        }
    }
}
