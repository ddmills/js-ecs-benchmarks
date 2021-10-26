# JS ECS Benchmarks

Includes:

-   [Ape ECS](https://github.com/fritzy/ape-ecs)
-   [bitECS](https://github.com/NateTheGreatt/bitECS)
-   [ecsy](https://github.com/ecsyjs/ecsy)\*
-   [fastecs](https://github.com/octavetoast/fastecs)
-   [geotic](https://github.com/ddmills/geotic)
-   [goodluck](https://github.com/piesku/goodluck)
-   [harmony-ecs](https://github.com/3mcd/harmony-ecs)
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
  - piecs           14ms     71968ms    25010000 updates       0.0% fastest
  - bitecs          17ms     84746ms    25010000 updates      17.8% slower
  - harmony-ecs     17ms     86495ms    25010000 updates      20.2% slower
  - wolf-ecs        23ms    113042ms    25010000 updates      57.1% slower
  - perform-ecs     39ms    192871ms    25010000 updates     168.0% slower
  - uecs            40ms    198229ms    25010000 updates     175.4% slower
  - geotic (v4)     58ms    291495ms    25010000 updates     305.0% slower
  - goodluck        68ms    339004ms    25010000 updates     371.1% slower
  - yagl-ecs        69ms    342712ms    25010000 updates     376.2% slower
  - picoes         106ms    532021ms    25010000 updates     639.2% slower
  - tiny-ecs       117ms    586515ms    25010000 updates     715.0% slower
  - nano-ecs       156ms    781924ms    25010000 updates     986.5% slower
  - ape-ecs        335ms   1675963ms    25010000 updates    2228.8% slower

Suite Additions (100000 iterations)
  - bitecs           0ms     16230ms       0.0% fastest
  - goodluck         0ms     20996ms      29.4% slower
  - wolf-ecs         0ms     27706ms      70.7% slower
  - yagl-ecs         0ms     36289ms     123.6% slower
  - piecs            0ms     39417ms     142.9% slower
  - picoes           1ms     83357ms     413.6% slower
  - harmony-ecs      1ms     90800ms     459.5% slower
  - uecs             1ms     94242ms     480.7% slower
  - nano-ecs         1ms    120185ms     640.5% slower
  - geotic (v4)      2ms    188178ms    1059.5% slower
  - perform-ecs      2ms    212519ms    1209.4% slower
  - tiny-ecs         3ms    304099ms    1773.7% slower
  - ape-ecs          5ms    518898ms    3097.2% slower

Suite Destroy (100000 iterations)
  - goodluck         0ms      9183ms       0.0% fastest
  - piecs            0ms     15655ms      70.5% slower
  - wolf-ecs         0ms     23069ms     151.2% slower
  - harmony-ecs      1ms     74844ms     715.1% slower
  - picoes           1ms     91232ms     893.5% slower
  - bitecs           1ms    107783ms    1073.8% slower
  - tiny-ecs         1ms    137011ms    1392.1% slower
  - uecs             1ms    144825ms    1477.2% slower
  - nano-ecs         2ms    171021ms    1762.5% slower
  - perform-ecs      2ms    206078ms    2144.3% slower
  - ape-ecs          4ms    404518ms    4305.3% slower
  - geotic (v4)      5ms    511684ms    5472.4% slower
  - yagl-ecs        18ms   1756009ms   19023.4% slower

Suite Velocity (2000 iterations)
  - harmony-ecs      5ms      9433ms     2001000 updates       0.0% fastest
  - wolf-ecs         5ms     10773ms     2001000 updates      14.2% slower
  - piecs            6ms     11879ms     2001000 updates      25.9% slower
  - bitecs           8ms     15636ms     2001000 updates      65.7% slower
  - perform-ecs      8ms     16403ms     2001000 updates      73.9% slower
  - uecs             9ms     18086ms     2001000 updates      91.7% slower
  - tiny-ecs        12ms     24069ms     2001000 updates     155.1% slower
  - yagl-ecs        14ms     28956ms     2001000 updates     206.9% slower
  - nano-ecs        18ms     35913ms     2001000 updates     280.7% slower
  - goodluck        26ms     52284ms     2001000 updates     454.2% slower
  - picoes          28ms     56308ms     2001000 updates     496.9% slower
  - geotic (v4)     43ms     86331ms     2001000 updates     815.2% slower
  - ape-ecs         76ms    151416ms     2001000 updates    1505.1% slower
```
