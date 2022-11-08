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
  - piecs           29ms    142746ms    25010000 updates       0.0% fastest
  - bitecs          32ms    162494ms    25010000 updates      13.8% slower
  - harmony-ecs     36ms    178550ms    25010000 updates      25.1% slower
  - wolf-ecs        36ms    179115ms    25010000 updates      25.5% slower
  - uecs            58ms    287807ms    25010000 updates     101.6% slower
  - perform-ecs     61ms    303316ms    25010000 updates     112.5% slower
  - geotic (v4)    102ms    509643ms    25010000 updates     257.0% slower
  - goodluck       105ms    522839ms    25010000 updates     266.3% slower
  - miniplex       116ms    578369ms    25010000 updates     305.2% slower
  - yagl-ecs       132ms    660725ms    25010000 updates     362.9% slower
  - picoes         171ms    854829ms    25010000 updates     498.8% slower
  - tiny-ecs       192ms    958054ms    25010000 updates     571.2% slower
  - nano-ecs       270ms   1350397ms    25010000 updates     846.0% slower
  - ape-ecs        691ms   3452735ms    25010000 updates    2318.8% slower

Suite Additions (100000 iterations)
  - bitecs           0ms     24560ms       0.0% fastest
  - goodluck         1ms     55618ms     126.5% slower
  - piecs            1ms     68517ms     179.0% slower
  - wolf-ecs         1ms    107412ms     337.4% slower
  - yagl-ecs         1ms    135345ms     451.1% slower
  - harmony-ecs      3ms    259124ms     955.1% slower
  - picoes           3ms    264932ms     978.7% slower
  - nano-ecs         3ms    297598ms    1111.7% slower
  - tiny-ecs         4ms    358790ms    1360.9% slower
  - uecs             4ms    366160ms    1390.9% slower
  - geotic (v4)      4ms    376219ms    1431.9% slower
  - ape-ecs          8ms    778229ms    3068.7% slower
  - miniplex         8ms    801763ms    3164.6% slower
  - perform-ecs     10ms   1042124ms    4143.2% slower

Suite Destroy (100000 iterations)
  - goodluck         0ms     21652ms       0.0% fastest
  - piecs            0ms     46961ms     116.9% slower
  - wolf-ecs         1ms     70143ms     224.0% slower
  - harmony-ecs      2ms    159773ms     637.9% slower
  - picoes           2ms    199509ms     821.5% slower
  - uecs             4ms    354396ms    1536.8% slower
  - tiny-ecs         4ms    356819ms    1548.0% slower
  - nano-ecs         4ms    377326ms    1642.7% slower
  - perform-ecs      5ms    456749ms    2009.5% slower
  - miniplex         6ms    604828ms    2693.5% slower
  - bitecs           6ms    630789ms    2813.4% slower
  - geotic (v4)      8ms    763521ms    3426.4% slower
  - ape-ecs         14ms   1372441ms    6238.8% slower
  - yagl-ecs        50ms   5040929ms   23182.0% slower

Suite Velocity (2000 iterations)
  - wolf-ecs        13ms     25720ms     2001000 updates       0.0% fastest
  - piecs           13ms     26604ms     2001000 updates       3.4% slower
  - harmony-ecs     14ms     27533ms     2001000 updates       7.1% slower
  - uecs            21ms     42006ms     2001000 updates      63.3% slower
  - bitecs          25ms     49421ms     2001000 updates      92.2% slower
  - perform-ecs     26ms     51360ms     2001000 updates      99.7% slower
  - tiny-ecs        33ms     65498ms     2001000 updates     154.7% slower
  - yagl-ecs        34ms     68453ms     2001000 updates     166.2% slower
  - nano-ecs        64ms    128658ms     2001000 updates     400.2% slower
  - picoes          82ms    164684ms     2001000 updates     540.3% slower
  - goodluck        91ms    181725ms     2001000 updates     606.6% slower
  - miniplex       106ms    212326ms     2001000 updates     725.5% slower
  - geotic (v4)    149ms    298316ms     2001000 updates    1059.9% slower
  - ape-ecs        200ms    400898ms     2001000 updates    1458.7% slower
```
