# JS ECS Benchmarks

Includes:

-   [Ape ECS](https://github.com/fritzy/ape-ecs)
-   [bitECS](https://github.com/NateTheGreatt/bitECS)
-   [ecsy](https://github.com/ecsyjs/ecsy)\*
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

Pull requests are welcome! This project uses `node v14.15.4`.

**NOTE**: [ecsy](https://ecsy.io/) is included in this benchmarking suite, but it is EXTREMELY slow (tens of thousands of times slower) and it chokes on larger datasets. It can be included by uncommenting it from `/libraries/index.js`;

```
Suite Add/Remove (5000 iterations)
  - piecs           41ms    203547ms    25010000 updates       0.0% fastest
  - bitecs          49ms    246856ms    25010000 updates      21.3% slower
  - wolf-ecs        53ms    264642ms    25010000 updates      30.0% slower
  - harmony-ecs     56ms    282153ms    25010000 updates      38.6% slower
  - uecs            92ms    457850ms    25010000 updates     124.9% slower
  - perform-ecs     99ms    496099ms    25010000 updates     143.7% slower
  - miniplex       164ms    819070ms    25010000 updates     302.4% slower
  - goodluck       183ms    913904ms    25010000 updates     349.0% slower
  - yagl-ecs       252ms   1257650ms    25010000 updates     517.9% slower
  - geotic         258ms   1292302ms    25010000 updates     534.9% slower
  - tiny-ecs       284ms   1422130ms    25010000 updates     598.7% slower
  - picoes         321ms   1606788ms    25010000 updates     689.4% slower
  - nano-ecs       405ms   2027211ms    25010000 updates     895.9% slower
  - ape-ecs        979ms   4897472ms    25010000 updates    2306.1% slower

Suite Destroy (100000 iterations)
  - goodluck         0ms     42782ms       0.0% fastest
  - bitecs           1ms     61244ms      43.2% slower
  - wolf-ecs         1ms    114987ms     168.8% slower
  - piecs            1ms    129913ms     203.7% slower
  - harmony-ecs      3ms    291961ms     582.4% slower
  - picoes           4ms    401801ms     839.2% slower
  - uecs             5ms    480525ms    1023.2% slower
  - tiny-ecs         5ms    512136ms    1097.1% slower
  - nano-ecs         6ms    589675ms    1278.3% slower
  - perform-ecs      7ms    742392ms    1635.3% slower
  - miniplex        10ms    982957ms    2197.6% slower
  - geotic          11ms   1099709ms    2470.5% slower
  - ape-ecs         15ms   1537808ms    3494.6% slower
  - yagl-ecs        69ms   6891374ms   16008.3% slower

Suite Velocity (2000 iterations)
  - piecs           13ms     26879ms     2001000 updates       0.0% fastest
  - harmony-ecs     15ms     29351ms     2001000 updates       9.2% slower
  - wolf-ecs        20ms     39912ms     2001000 updates      48.5% slower
  - bitecs          20ms     40414ms     2001000 updates      50.4% slower
  - uecs            23ms     45615ms     2001000 updates      69.7% slower
  - perform-ecs     23ms     45795ms     2001000 updates      70.4% slower
  - geotic          29ms     57445ms     2001000 updates     113.7% slower
  - yagl-ecs        40ms     79714ms     2001000 updates     196.6% slower
  - miniplex        52ms    103231ms     2001000 updates     284.1% slower
  - picoes          67ms    133133ms     2001000 updates     395.3% slower
  - tiny-ecs        75ms    149682ms     2001000 updates     456.9% slower
  - goodluck        99ms    197520ms     2001000 updates     634.8% slower
  - nano-ecs       103ms    205202ms     2001000 updates     663.4% slower
  - ape-ecs        254ms    508728ms     2001000 updates    1792.6% slower
```
