import http from "k6/http";
// zasadniczo testy w K6 dzielone sa na dwie czesci: opcje i zestawy testowe

//Opcje -  definiujemy tu wszystkie parametry testow i ich progi
export const options = {
  vus: 15,
  duration: "15s",
};

//Zestawy testowe - definiujemy tu zestawy testow ktore beda wykonywane w trakcie testu
export default function () {
  http.get("https://test.k6.io");
}

//aby uruchomic taki test nalezy wpisac komende
("k6 run path/do/file.js");

// po mineciu testu zostanie wygenerowany raport ktory bedzie mozna przegladnac
/*
     execution: local
        script: firstTest.TS
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 35s max duration (incl. graceful stop):
              /* default: 10 looping VUs for 5s (gracefulStop: 30s)


     data_received..................: 619 kB 102 kB/s
     data_sent......................: 8.2 kB 1.4 kB/s                                     //percele. zawsze sprawdzac po tych parametrach
     http_req_blocked...............: avg=62.88ms  min=1µs      med=5µs      max=316.26ms p(90)=307.35ms p(95)=312.48ms
     http_req_connecting............: avg=26.22ms  min=0s       med=0s       max=132.61ms p(90)=129.86ms p(95)=130.02ms 
     http_req_duration..............: avg=138.06ms min=122.37ms med=128.75ms max=252.25ms p(90)=133.01ms p(95)=244.81ms //dlugosc trwania wszytkich requestow (200, 300, 400, 500)
       { expected_response:true }...: avg=138.06ms min=122.37ms med=128.75ms max=252.25ms p(90)=133.01ms p(95)=244.81ms //dlugosc trwania tylko udanych requestow (200, 300)
     http_req_failed................: 0.00%  ✓ 0        ✗ 49  
     http_req_receiving.............: avg=10.05ms  min=28µs     med=74µs     max=123.96ms p(90)=654.4µs  p(95)=120.09ms
   ✓ http_req_sending...............: avg=56.91µs  min=6µs      med=18µs     max=1.8ms    p(90)=41.8µs   p(95)=49.99µs // oznacene ze dany tarshhold przeszedl
   ✗ http_req_tls_handshaking.......: avg=28.77ms  min=0s       med=0s       max=153.76ms p(90)=138.92ms p(95)=144.05ms // oznaczenie ze nie przeszedl
     http_req_waiting...............: avg=127.95ms min=122.25ms med=128.16ms max=135.67ms p(90)=130.96ms p(95)=132.21ms
     http_reqs......................: 49     8.071074/s // liczba requestow ktore wykonaly sie przez caly czas trwania testu
     iteration_duration.............: avg=1.2s     min=1.12s    med=1.13s    max=1.44s    p(90)=1.43s    p(95)=1.44s   
     iterations.....................: 49     8.071074/s // liczba wywolanych funckji przez caly czas trwania testu
     vus............................: 2      min=2      max=10
     vus_max........................: 10     min=10     max=10


running (06.1s), 00/10 VUs, 49 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  5s
*/
