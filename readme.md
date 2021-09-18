# JS ECS Benchmarks

Includes:

-   [Ape ECS](https://github.com/fritzy/ape-ecs)
-   [bitECS](https://github.com/NateTheGreatt/bitECS)
-   [ecsy](https://github.com/ecsyjs/ecsy)\*
-   [fastecs](https://github.com/octavetoast/fastecs)
-   [geotic](https://github.com/ddmills/geotic)
-   [goodluck](https://github.com/piesku/goodluck)
-   [nano-ecs](https://github.com/noffle/nano-ecs)
-   [perform-ecs](https://github.com/fireveined/perform-ecs)
-   [tiny-ecs](https://github.com/bvalosek/tiny-ecs)
-   [uecs](https://github.com/jprochazk/uecs)
-   [wolf-ecs](https://github.com/EnderShadow8/wolf-ecs)
-   [yagl-ecs](https://github.com/yagl/ecs)

Pull requests are welcome! This project uses `node v14.15.4`.

**NOTE**: [ecsy](https://ecsy.io/) is included in this benchmarking suite, but it is EXTREMELY slow (tens of thousands of times slower) and it chokes on larger datasets. It can be included by uncommenting it from `/libraries/index.js`;

```
Suite Add/Remove (5000 iterations)
  - bitecs          28ms    141298ms    25010000 updates       0.0% fastest
  - wolf-ecs        33ms    166274ms    25010000 updates      17.7% slower
  - perform-ecs     57ms    283892ms    25010000 updates     100.9% slower
  - uecs            63ms    314054ms    25010000 updates     122.3% slower
  - geotic (v4)     94ms    468902ms    25010000 updates     231.9% slower
  - goodluck        99ms    495523ms    25010000 updates     250.7% slower
  - picoes         130ms    652380ms    25010000 updates     361.7% slower
  - yagl-ecs       161ms    803422ms    25010000 updates     468.6% slower
  - tiny-ecs       171ms    854570ms    25010000 updates     504.8% slower
  - nano-ecs       226ms   1132089ms    25010000 updates     701.2% slower
  - ape-ecs        491ms   2452598ms    25010000 updates    1635.8% slower

Suite Additions (100000 iterations)
  - goodluck         0ms     41138ms       0.0% fastest
  - bitecs           1ms     73384ms      78.4% slower
  - wolf-ecs         1ms     73985ms      79.8% slower
  - yagl-ecs         1ms     83629ms     103.3% slower
  - picoes           2ms    159775ms     288.4% slower
  - uecs             2ms    209381ms     409.0% slower
  - tiny-ecs         2ms    228498ms     455.4% slower
  - nano-ecs         2ms    229034ms     456.7% slower
  - geotic (v4)      3ms    301781ms     633.6% slower
  - perform-ecs      4ms    399270ms     870.6% slower
  - ape-ecs          6ms    559565ms    1260.2% slower

Suite Destroy (100000 iterations)
  - goodluck         0ms     26656ms       0.0% fastest
  - wolf-ecs         1ms     67645ms     153.8% slower
  - picoes           2ms    176077ms     560.5% slower
  - bitecs           3ms    260038ms     875.5% slower
  - uecs             3ms    277254ms     940.1% slower
  - tiny-ecs         3ms    283539ms     963.7% slower
  - nano-ecs         4ms    384070ms    1340.8% slower
  - perform-ecs      4ms    394230ms    1378.9% slower
  - geotic (v4)      7ms    705149ms    2545.3% slower
  - ape-ecs          9ms    940972ms    3430.0% slower
  - yagl-ecs        40ms   4020339ms   14982.1% slower

Suite Velocity (2000 iterations)
  - wolf-ecs         9ms     17441ms     2001000 updates       0.0% fastest
  - uecs            15ms     29591ms     2001000 updates      69.7% slower
  - perform-ecs     20ms     39400ms     2001000 updates     125.9% slower
  - tiny-ecs        23ms     45760ms     2001000 updates     162.4% slower
  - goodluck        23ms     45944ms     2001000 updates     163.4% slower
  - bitecs          28ms     56635ms     2001000 updates     224.7% slower
  - yagl-ecs        33ms     66710ms     2001000 updates     282.5% slower
  - picoes          50ms    100712ms     2001000 updates     477.4% slower
  - geotic (v4)     56ms    112415ms     2001000 updates     544.5% slower
  - nano-ecs        62ms    124342ms     2001000 updates     612.9% slower
  - ape-ecs        155ms    309112ms     2001000 updates    1672.3% slower
```
