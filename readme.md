# JS ECS Benchmarks

Includes:

-   [Ape ECS](https://github.com/fritzy/ape-ecs)
-   [bitECS](https://github.com/NateTheGreatt/bitECS)
-   [ecsy](https://github.com/ecsyjs/ecsy)
-   [geotic](https://github.com/ddmills/geotic)
-   [goodluck](https://github.com/piesku/goodluck)
-   [harmony-ecs](https://github.com/3mcd/harmony-ecs)
-   [miniplex](https://github.com/hmans/miniplex)
-   [nano-ecs](https://github.com/noffle/nano-ecs)
-   [perform-ecs](https://github.com/fireveined/perform-ecs)
-   [piecs](https://github.com/sondresj/piecs)
-   [tiny-ecs](https://github.com/bvalosek/tiny-ecs)
-   [uecs](https://github.com/jprochazk/uecs)
-   [wolf-ecs](https://github.com/EnderShadow8/wolf-ecs)
-   [yagl-ecs](https://github.com/yagl/ecs)
-   [javelin-ecs](https://github.com/3mcd/javelin)

Pull requests are welcome! Benchmarks were generated using `node v20.11.0`.

```
Suite Add/Remove (5000 iterations)
  - miniplex         6ms     31215ms       0.0% fastest
  - javelin-ecs     19ms     95191ms     205.0% slower
  - piecs           44ms    219419ms    25010000 updates     602.9% slower
  - harmony-ecs     45ms    223144ms    25010000 updates     614.9% slower
  - uecs            46ms    231230ms    25010000 updates     640.8% slower
  - wolf-ecs        51ms    253657ms    25010000 updates     712.6% slower
  - bitecs          57ms    287444ms    25010000 updates     820.9% slower
  - perform-ecs     64ms    317697ms    25010000 updates     917.8% slower
  - yagl-ecs       105ms    522601ms    25010000 updates    1574.2% slower
  - goodluck       110ms    552137ms    25010000 updates    1668.8% slower
  - tiny-ecs       136ms    681056ms    25010000 updates    2081.8% slower
  - picoes         183ms    915267ms    25010000 updates    2832.1% slower
  - nano-ecs       184ms    918645ms    25010000 updates    2843.0% slower
  - geotic         287ms   1435262ms    25010000 updates    4498.0% slower
  - ape-ecs       1648ms   8242377ms    25010000 updates   26305.2% slower
  - ecsy          2023ms  10114657ms    25010000 updates   32303.2% slower

Suite Destroy (100000 iterations)
  - goodluck         0ms     12093ms       0.0% fastest
  - wolf-ecs         0ms     28108ms     132.4% slower
  - piecs            0ms     36629ms     202.9% slower
  - bitecs           1ms     95630ms     690.8% slower
  - uecs             1ms    111110ms     818.8% slower
  - harmony-ecs      1ms    137665ms    1038.4% slower
  - picoes           1ms    147665ms    1121.1% slower
  - javelin-ecs      2ms    179922ms    1387.9% slower
  - miniplex         2ms    187686ms    1452.1% slower
  - tiny-ecs         2ms    198277ms    1539.7% slower
  - nano-ecs         3ms    269009ms    2124.6% slower
  - perform-ecs      3ms    277335ms    2193.4% slower
  - geotic           3ms    339714ms    2709.3% slower
  - ape-ecs          7ms    698951ms    5680.0% slower
  - yagl-ecs        17ms   1709361ms   14035.7% slower
  - ecsy            21ms   2148195ms   17664.6% slower

Suite Velocity (2000 iterations)
  - javelin-ecs      4ms      7924ms       0.0% fastest
  - miniplex         5ms     10567ms      33.3% slower
  - piecs           11ms     21200ms     2001000 updates     167.5% slower
  - harmony-ecs     11ms     22825ms     2001000 updates     188.0% slower
  - wolf-ecs        12ms     23737ms     2001000 updates     199.5% slower
  - bitecs          15ms     29763ms     2001000 updates     275.6% slower
  - uecs            15ms     30763ms     2001000 updates     288.2% slower
  - yagl-ecs        18ms     36477ms     2001000 updates     360.3% slower
  - goodluck        19ms     38793ms     2001000 updates     389.6% slower
  - geotic          20ms     39195ms     2001000 updates     394.6% slower
  - perform-ecs     23ms     45061ms     2001000 updates     468.7% slower
  - picoes          30ms     60755ms     2001000 updates     666.7% slower
  - tiny-ecs        39ms     78818ms     2001000 updates     894.6% slower
  - nano-ecs        48ms     95667ms     2001000 updates    1107.3% slower
  - ape-ecs        306ms    611193ms     2001000 updates    7612.9% slower
  - ecsy           442ms    884718ms     2001000 updates   11064.7% slower
```
