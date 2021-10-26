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
-   [piecs](https://github.com/sondresj/piecs)
-   [tiny-ecs](https://github.com/bvalosek/tiny-ecs)
-   [uecs](https://github.com/jprochazk/uecs)
-   [wolf-ecs](https://github.com/EnderShadow8/wolf-ecs)
-   [yagl-ecs](https://github.com/yagl/ecs)

Pull requests are welcome! This project uses `node v14.15.4`.

**NOTE**: [ecsy](https://ecsy.io/) is included in this benchmarking suite, but it is EXTREMELY slow (tens of thousands of times slower) and it chokes on larger datasets. It can be included by uncommenting it from `/libraries/index.js`;

```
Suite Add/Remove (5000 iterations)
  - piecs           17ms     85997ms    25010000 updates       0.0% fastest
  - bitecs          19ms     97479ms    25010000 updates      13.4% slower
  - wolf-ecs        24ms    118929ms    25010000 updates      38.3% slower
  - perform-ecs     49ms    242549ms    25010000 updates     182.0% slower
  - uecs            53ms    263894ms    25010000 updates     206.9% slower
  - geotic (v4)     69ms    346180ms    25010000 updates     302.5% slower
  - goodluck        88ms    439731ms    25010000 updates     411.3% slower
  - picoes         122ms    611264ms    25010000 updates     610.8% slower
  - yagl-ecs       126ms    631975ms    25010000 updates     634.9% slower
  - tiny-ecs       137ms    683664ms    25010000 updates     695.0% slower
  - nano-ecs       188ms    940590ms    25010000 updates     993.7% slower
  - ape-ecs        433ms   2166425ms    25010000 updates    2419.2% slower

Suite Additions (100000 iterations)
  - goodluck         0ms     33669ms       0.0% fastest
  - bitecs           0ms     39437ms      17.1% slower
  - piecs            0ms     40589ms      20.6% slower
  - wolf-ecs         0ms     48079ms      42.8% slower
  - yagl-ecs         1ms     60380ms      79.3% slower
  - picoes           1ms    103972ms     208.8% slower
  - uecs             1ms    118209ms     251.1% slower
  - tiny-ecs         1ms    123275ms     266.1% slower
  - nano-ecs         2ms    158318ms     370.2% slower
  - geotic (v4)      2ms    236220ms     601.6% slower
  - perform-ecs      3ms    254568ms     656.1% slower
  - ape-ecs          5ms    472577ms    1303.6% slower

Suite Destroy (100000 iterations)
  - goodluck         0ms     16580ms       0.0% fastest
  - piecs            0ms     29462ms      77.7% slower
  - wolf-ecs         0ms     34914ms     110.6% slower
  - bitecs           1ms     81781ms     393.2% slower
  - picoes           1ms    124334ms     649.9% slower
  - uecs             2ms    176154ms     962.4% slower
  - tiny-ecs         2ms    181783ms     996.4% slower
  - nano-ecs         2ms    236698ms    1327.6% slower
  - perform-ecs      2ms    248207ms    1397.0% slower
  - geotic (v4)      5ms    498395ms    2905.9% slower
  - ape-ecs          5ms    539826ms    3155.8% slower
  - yagl-ecs        19ms   1890954ms   11304.7% slower

Suite Velocity (2000 iterations)
  - wolf-ecs         5ms     10748ms     2001000 updates       0.0% fastest
  - piecs            6ms     12313ms     2001000 updates      14.6% slower
  - uecs            11ms     21940ms     2001000 updates     104.1% slower
  - perform-ecs     11ms     22200ms     2001000 updates     106.6% slower
  - goodluck        13ms     26993ms     2001000 updates     151.2% slower
  - tiny-ecs        14ms     28744ms     2001000 updates     167.4% slower
  - geotic (v4)     17ms     33644ms     2001000 updates     213.0% slower
  - nano-ecs        20ms     39010ms     2001000 updates     263.0% slower
  - yagl-ecs        24ms     47132ms     2001000 updates     338.5% slower
  - picoes          28ms     56641ms     2001000 updates     427.0% slower
  - bitecs          58ms    115608ms     2001000 updates     975.7% slower
  - ape-ecs         97ms    194574ms     2001000 updates    1710.4% slower
```
