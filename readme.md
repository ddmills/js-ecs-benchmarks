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
  - miniplex         5ms     26256ms       0.0% fastest
  - javelin-ecs     13ms     67406ms     156.7% slower
  - piecs           32ms    159245ms    25010000 updates     506.5% slower
  - harmony-ecs     37ms    187197ms    25010000 updates     613.0% slower
  - wolf-ecs        42ms    208203ms    25010000 updates     693.0% slower
  - uecs            45ms    225869ms    25010000 updates     760.3% slower
  - bitecs          48ms    241973ms    25010000 updates     821.6% slower
  - perform-ecs     62ms    312288ms    25010000 updates    1089.4% slower
  - yagl-ecs        79ms    394427ms    25010000 updates    1402.2% slower
  - goodluck       100ms    499164ms    25010000 updates    1801.1% slower
  - tiny-ecs       120ms    601690ms    25010000 updates    2191.6% slower
  - geotic         169ms    843262ms    25010000 updates    3111.7% slower
  - nano-ecs       171ms    856507ms    25010000 updates    3162.1% slower
  - picoes         173ms    867360ms    25010000 updates    3203.5% slower
  - ape-ecs        462ms   2311925ms    25010000 updates    8705.3% slower
  - ecsy          1850ms   9251254ms    25010000 updates   35134.8% slower

Suite Destroy (100000 iterations)
  - goodluck         0ms     11039ms       0.0% fastest
  - piecs            0ms     28270ms     156.1% slower
  - wolf-ecs         0ms     31402ms     184.5% slower
  - bitecs           1ms     74528ms     575.1% slower
  - javelin-ecs      1ms     92950ms     742.0% slower
  - uecs             1ms     96262ms     772.0% slower
  - harmony-ecs      1ms    105981ms     860.0% slower
  - picoes           1ms    125653ms    1038.2% slower
  - miniplex         2ms    160287ms    1352.0% slower
  - tiny-ecs         2ms    165510ms    1399.3% slower
  - nano-ecs         2ms    220141ms    1894.2% slower
  - perform-ecs      2ms    232974ms    2010.4% slower
  - geotic           3ms    300137ms    2618.8% slower
  - ape-ecs          4ms    449274ms    3969.8% slower
  - yagl-ecs        15ms   1547347ms   13916.8% slower
  - ecsy            18ms   1828075ms   16459.9% slower

Suite Velocity (2000 iterations)
  - miniplex         3ms      6134ms       0.0% fastest
  - javelin-ecs      3ms      6647ms       8.4% slower
  - piecs            9ms     17821ms     2001000 updates     190.5% slower
  - wolf-ecs        10ms     19674ms     2001000 updates     220.7% slower
  - harmony-ecs     10ms     19896ms     2001000 updates     224.3% slower
  - uecs            11ms     21246ms     2001000 updates     246.4% slower
  - bitecs          14ms     27645ms     2001000 updates     350.7% slower
  - perform-ecs     15ms     30218ms     2001000 updates     392.6% slower
  - yagl-ecs        16ms     31158ms     2001000 updates     408.0% slower
  - goodluck        16ms     32715ms     2001000 updates     433.3% slower
  - geotic          17ms     33002ms     2001000 updates     438.0% slower
  - picoes          18ms     35104ms     2001000 updates     472.3% slower
  - tiny-ecs        26ms     51905ms     2001000 updates     746.2% slower
  - nano-ecs        37ms     74173ms     2001000 updates    1109.2% slower
  - ape-ecs         89ms    178388ms     2001000 updates    2808.2% slower
  - ecsy           399ms    797486ms     2001000 updates   12901.0% slower
```
