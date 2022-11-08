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
  - bitecs          42ms    210862ms    25010000 updates       0.0% fastest
  - piecs           43ms    215072ms    25010000 updates       2.0% slower
  - harmony-ecs     54ms    268781ms    25010000 updates      27.5% slower
  - wolf-ecs        55ms    273035ms    25010000 updates      29.5% slower
  - uecs            94ms    468609ms    25010000 updates     122.2% slower
  - perform-ecs    101ms    502508ms    25010000 updates     138.3% slower
  - geotic         139ms    696307ms    25010000 updates     230.2% slower
  - miniplex       156ms    781227ms    25010000 updates     270.5% slower
  - goodluck       169ms    845075ms    25010000 updates     300.8% slower
  - yagl-ecs       247ms   1235981ms    25010000 updates     486.2% slower
  - picoes         312ms   1560074ms    25010000 updates     639.9% slower
  - tiny-ecs       349ms   1747441ms    25010000 updates     728.7% slower
  - nano-ecs       441ms   2206514ms    25010000 updates     946.4% slower
  - ape-ecs        828ms   4139119ms    25010000 updates    1863.0% slower

Suite Additions (100000 iterations)
  - goodluck         0ms     43536ms       0.0% fastest
  - bitecs           1ms     70330ms      61.5% slower
  - piecs            1ms     74528ms      71.2% slower
  - yagl-ecs         1ms    117883ms     170.8% slower
  - wolf-ecs         1ms    120782ms     177.4% slower
  - picoes           3ms    266569ms     512.3% slower
  - harmony-ecs      3ms    271084ms     522.7% slower
  - uecs             3ms    288493ms     562.7% slower
  - tiny-ecs         3ms    293802ms     574.8% slower
  - nano-ecs         4ms    388781ms     793.0% slower
  - geotic           6ms    647658ms    1387.6% slower
  - miniplex         7ms    692973ms    1491.7% slower
  - perform-ecs     12ms   1242666ms    2754.3% slower
  - ape-ecs         13ms   1348180ms    2996.7% slower

Suite Destroy (100000 iterations)
  - goodluck         0ms     28621ms       0.0% fastest
  - wolf-ecs         1ms     93467ms     226.6% slower
  - piecs            1ms    102497ms     258.1% slower
  - harmony-ecs      2ms    225637ms     688.4% slower
  - picoes           3ms    281715ms     884.3% slower
  - tiny-ecs         5ms    482192ms    1584.8% slower
  - uecs             5ms    493357ms    1623.8% slower
  - nano-ecs         6ms    572447ms    1900.1% slower
  - perform-ecs      7ms    658582ms    2201.1% slower
  - bitecs           8ms    800976ms    2698.6% slower
  - miniplex         8ms    833728ms    2813.0% slower
  - geotic          10ms    978984ms    3320.5% slower
  - ape-ecs         14ms   1386148ms    4743.1% slower
  - yagl-ecs        63ms   6291804ms   21883.2% slower

Suite Velocity (2000 iterations)
  - wolf-ecs        16ms     32996ms     2001000 updates       0.0% fastest
  - harmony-ecs     17ms     33058ms     2001000 updates       0.2% slower
  - piecs           18ms     35207ms     2001000 updates       6.7% slower
  - bitecs          27ms     53407ms     2001000 updates      61.9% slower
  - uecs            33ms     66543ms     2001000 updates     101.7% slower
  - perform-ecs     34ms     68404ms     2001000 updates     107.3% slower
  - tiny-ecs        45ms     90375ms     2001000 updates     173.9% slower
  - yagl-ecs        55ms    109239ms     2001000 updates     231.1% slower
  - nano-ecs        94ms    187645ms     2001000 updates     468.7% slower
  - picoes         107ms    213445ms     2001000 updates     546.9% slower
  - miniplex       116ms    232106ms     2001000 updates     603.4% slower
  - goodluck       120ms    240495ms     2001000 updates     628.9% slower
  - geotic         212ms    423389ms     2001000 updates    1183.2% slower
  - ape-ecs        293ms    585957ms     2001000 updates    1675.8% slower
```
