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
  - fastecs         12ms     58676ms   15000 updates       0.0% fastest      
  - bitecs          22ms    109762ms      87.1% slower
  - uecs            58ms    290600ms25010000 updates     395.3% slower       
  - geotic (v4)     67ms    335551ms25010000 updates     471.9% slower       
  - perform-ecs     78ms    388813ms25010000 updates     562.6% slower       
  - tiny-ecs       146ms    730810ms25010000 updates    1145.5% slower       
  - yagl-ecs       156ms    779772ms25010000 updates    1228.9% slower       
  - nano-ecs       227ms   1132586ms25010000 updates    1830.2% slower       
  - ape-ecs        455ms   2274293ms25010000 updates    3776.0% slower       
  - geotic (v3)   2447ms  12236633ms25010000 updates   20754.4% slower       

Suite Additions (100000 iterations)
  - bitecs           4ms    386376ms       0.0% fastest
  - yagl-ecs         4ms    413290ms       7.0% slower
  - uecs             5ms    500984ms      29.7% slower
  - tiny-ecs         5ms    505968ms      31.0% slower
  - fastecs          5ms    544726ms      41.0% slower
  - nano-ecs         5ms    546879ms      41.5% slower
  - perform-ecs      7ms    677929ms      75.5% slower
  - geotic (v4)      7ms    717797ms      85.8% slower
  - ape-ecs         11ms   1054465ms     172.9% slower
  - geotic (v3)     15ms   1501210ms     288.5% slower

Suite Destroy (100000 iterations)
  - bitecs           4ms    399222ms       0.0% fastest
  - fastecs          6ms    578431ms      44.9% slower
  - tiny-ecs         6ms    596888ms      49.5% slower
  - uecs             6ms    608797ms      52.5% slower
  - nano-ecs         7ms    676583ms      69.5% slower
  - perform-ecs      7ms    681472ms      70.7% slower
  - geotic (v4)     11ms   1053981ms     164.0% slower
  - ape-ecs         13ms   1268104ms     217.6% slower
  - geotic (v3)     17ms   1722395ms     331.4% slower
  - yagl-ecs        26ms   2557626ms     540.7% slower

Suite Velocity (2000 iterations)
  - bitecs          12ms     24129ms       0.0% fastest
  - uecs            15ms     29780ms 2001000 updates      23.4% slower       
  - tiny-ecs        19ms     38431ms 2001000 updates      59.3% slower       
  - perform-ecs     20ms     39170ms 2001000 updates      62.3% slower       
  - fastecs         21ms     42543ms 2001000 updates      76.3% slower       
  - geotic (v4)     22ms     43844ms 2001000 updates      81.7% slower       
  - nano-ecs        24ms     48026ms 2001000 updates      99.0% slower       
  - yagl-ecs        31ms     62761ms 2001000 updates     160.1% slower       
  - ape-ecs        119ms    238968ms 2001000 updates     890.4% slower       
  - geotic (v3)    410ms    819635ms 2001000 updates    3296.9% slower
```
