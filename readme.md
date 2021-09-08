# JS ECS Benchmarks

Includes:

-   [Ape ECS](https://github.com/fritzy/ape-ecs)
-   [bitECS](https://github.com/NateTheGreatt/bitECS)
-   [ecsy](https://github.com/ecsyjs/ecsy)\*
-   [fastecs](https://github.com/octavetoast/fastecs)
-   [geotic](https://github.com/ddmills/geotic)
-   [nano-ecs](https://github.com/noffle/nano-ecs)
-   [perform-ecs](https://github.com/fireveined/perform-ecs)
-   [tiny-ecs](https://github.com/bvalosek/tiny-ecs)
-   [uecs](https://github.com/jprochazk/uecs)
-   [yagl-ecs](https://github.com/yagl/ecs)

Pull requests are welcome! This project uses `node v14.15.4`.

**NOTE**: [ecsy](https://ecsy.io/) is included in this benchmarking suite, but it is EXTREMELY slow (tens of thousands of times slower) and it chokes on larger datasets. It can be included by uncommenting it from `/libraries/index.js`;

```
Suite Add/Remove (5000 iterations)
  - fastecs         10ms     48844ms   15000 updates       0.0% fastest
  - bitecs          22ms    109934ms25010000 updates     125.1% slower
  - uecs            50ms    250022ms25010000 updates     411.9% slower
  - perform-ecs     57ms    283971ms25010000 updates     481.4% slower
  - geotic (v4)     58ms    289210ms25010000 updates     492.1% slower
  - yagl-ecs       244ms   1219993ms25010000 updates    2397.7% slower
  - picoes         244ms   1222132ms25010000 updates    2402.1% slower
  - tiny-ecs       299ms   1496981ms25010000 updates    2964.8% slower
  - nano-ecs       377ms   1883442ms25010000 updates    3756.0% slower
  - ape-ecs        687ms   3434138ms25010000 updates    6930.8% slower
  - geotic (v3)   2372ms  11862145ms25010000 updates   24185.5% slower

Suite Additions (100000 iterations)
  - bitecs           0ms     47258ms       0.0% fastest
  - yagl-ecs         1ms     75380ms      59.5% slower
  - uecs             2ms    165166ms     249.5% slower
  - picoes           2ms    165343ms     249.9% slower
  - tiny-ecs         2ms    197755ms     318.5% slower
  - fastecs          2ms    201716ms     326.8% slower
  - nano-ecs         2ms    224693ms     375.5% slower
  - perform-ecs      3ms    307812ms     551.3% slower
  - geotic (v4)      3ms    317151ms     571.1% slower
  - ape-ecs          7ms    660099ms    1296.8% slower
  - geotic (v3)     11ms   1054290ms    2130.9% slower

Suite Destroy (100000 iterations)
  - picoes           1ms    134809ms       0.0% fastest
  - bitecs           2ms    152649ms      13.2% slower
  - fastecs          2ms    181903ms      34.9% slower
  - uecs             2ms    195484ms      45.0% slower
  - tiny-ecs         2ms    238561ms      77.0% slower
  - perform-ecs      3ms    320774ms     137.9% slower
  - nano-ecs         3ms    322433ms     139.2% slower
  - geotic (v4)      4ms    394016ms     192.3% slower
  - ape-ecs          6ms    606267ms     349.7% slower
  - geotic (v3)     12ms   1223034ms     807.2% slower
  - yagl-ecs        25ms   2483086ms    1741.9% slower

Suite Velocity (2000 iterations)
  - perform-ecs     11ms     22009ms 2001000 updates       0.0% fastest
  - uecs            11ms     22214ms 2001000 updates       0.9% slower
  - geotic (v4)     14ms     27102ms 2001000 updates      23.1% slower
  - tiny-ecs        20ms     40449ms 2001000 updates      83.8% slower
  - fastecs         23ms     45584ms 2001000 updates     107.1% slower
  - bitecs          31ms     61922ms 2001000 updates     181.3% slower
  - nano-ecs        31ms     62209ms 2001000 updates     182.6% slower
  - picoes          43ms     85699ms 2001000 updates     289.4% slower
  - yagl-ecs        48ms     96474ms 2001000 updates     338.3% slower
  - ape-ecs        151ms    301849ms 2001000 updates    1271.4% slower
  - geotic (v3)    379ms    758416ms 2001000 updates    3345.9% slower
```
