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
  - fastecs          9ms     45655ms   15000 updates       0.0% fastest
  - bitecs          50ms    250621ms25015000 updates     448.9% slower
  - uecs            74ms    368737ms25010000 updates     707.7% slower
  - perform-ecs     82ms    409078ms25010000 updates     796.0% slower
  - geotic (v4)     89ms    445046ms25010000 updates     874.8% slower
  - yagl-ecs       199ms    992995ms25010000 updates    2075.0% slower
  - tiny-ecs       212ms   1060218ms25010000 updates    2222.2% slower
  - nano-ecs       259ms   1295044ms25010000 updates    2736.6% slower
  - ape-ecs        746ms   3727770ms25010000 updates    8065.1% slower
  - geotic (v3)   3160ms  15802148ms25010000 updates   34512.1% slower

Suite Additions (100000 iterations)
  - yagl-ecs         1ms     79220ms       0.0% fastest
  - bitecs           1ms    125279ms      58.1% slower
  - uecs             2ms    172337ms     117.5% slower
  - tiny-ecs         2ms    186806ms     135.8% slower
  - fastecs          3ms    257561ms     225.1% slower
  - nano-ecs         3ms    272198ms     243.6% slower
  - perform-ecs      4ms    371271ms     368.7% slower
  - geotic (v4)      4ms    377002ms     375.9% slower
  - ape-ecs          8ms    792867ms     900.8% slower
  - geotic (v3)     13ms   1324103ms    1571.4% slower

Suite Destroy (100000 iterations)
  - fastecs          2ms    205254ms       0.0% fastest
  - bitecs           2ms    217320ms       5.9% slower
  - tiny-ecs         2ms    228152ms      11.2% slower
  - uecs             2ms    244268ms      19.0% slower
  - nano-ecs         3ms    306693ms      49.4% slower
  - perform-ecs      3ms    327748ms      59.7% slower
  - geotic (v4)      5ms    534863ms     160.6% slower
  - ape-ecs          7ms    709703ms     245.8% slower
  - geotic (v3)     16ms   1614880ms     686.8% slower
  - yagl-ecs        36ms   3634787ms    1670.9% slower

Suite Velocity (2000 iterations)
  - fastecs         17ms     33226ms 2001000 updates       0.0% fastest
  - uecs            18ms     36153ms 2001000 updates       8.8% slower
  - perform-ecs     19ms     37042ms 2001000 updates      11.5% slower
  - tiny-ecs        24ms     47564ms 2001000 updates      43.2% slower
  - geotic (v4)     25ms     50660ms 2001000 updates      52.5% slower
  - nano-ecs        39ms     78651ms 2001000 updates     136.7% slower
  - yagl-ecs        39ms     78772ms 2001000 updates     137.1% slower
  - bitecs          47ms     93254ms 2001000 updates     180.7% slower
  - ape-ecs        144ms    288697ms 2001000 updates     768.9% slower
  - geotic (v3)    414ms    827821ms 2001000 updates    2391.5% slower
```
