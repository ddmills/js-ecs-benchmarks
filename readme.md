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
-   [yagl-ecs](https://github.com/yagl/ecs)

Pull requests are welcome! This project uses `node v14.15.4`.

**NOTE**: [ecsy](https://ecsy.io/) is included in this benchmarking suite, but it is EXTREMELY slow (tens of thousands of times slower) and it chokes on larger datasets. It can be included by uncommenting it from `/libraries/index.js`;

```
Suite Add/Remove (5000 iterations)
  - fastecs         12ms     58414ms   15000 updates       0.0% fastest
  - bitecs          26ms    130762ms25010000 updates     123.9% slower       
  - uecs            60ms    298397ms25010000 updates     410.8% slower       
  - geotic (v4)     65ms    323106ms25010000 updates     453.1% slower       
  - perform-ecs     70ms    352001ms25010000 updates     502.6% slower       
  - tiny-ecs       146ms    728251ms25010000 updates    1146.7% slower       
  - yagl-ecs       166ms    829415ms25010000 updates    1319.9% slower       
  - nano-ecs       226ms   1129940ms25010000 updates    1834.4% slower       
  - ape-ecs        468ms   2338441ms25010000 updates    3903.2% slower       
  - geotic (v3)   2368ms  11838450ms25010000 updates   20166.5% slower       

Suite Additions (100000 iterations)
  - bitecs           4ms    367036ms       0.0% fastest
  - yagl-ecs         4ms    408517ms      11.3% slower
  - uecs             5ms    502133ms      36.8% slower
  - tiny-ecs         5ms    504082ms      37.3% slower
  - fastecs          5ms    535749ms      46.0% slower
  - nano-ecs         6ms    551073ms      50.1% slower
  - perform-ecs      7ms    666837ms      81.7% slower
  - geotic (v4)      7ms    698764ms      90.4% slower
  - ape-ecs         10ms   1028666ms     180.3% slower
  - geotic (v3)     14ms   1429130ms     289.4% slower

Suite Destroy (100000 iterations)
  - bitecs           4ms    378292ms       0.0% fastest
  - fastecs          6ms    557217ms      47.3% slower
  - tiny-ecs         6ms    557675ms      47.4% slower
  - uecs             6ms    567944ms      50.1% slower
  - nano-ecs         6ms    632398ms      67.2% slower
  - perform-ecs      7ms    654627ms      73.0% slower
  - geotic (v4)      8ms    841428ms     122.4% slower
  - ape-ecs         13ms   1276946ms     237.6% slower
  - geotic (v3)     17ms   1691611ms     347.2% slower
  - yagl-ecs        28ms   2782902ms     635.6% slower

Suite Velocity (2000 iterations)
  - bitecs          13ms     26011ms 2001000 updates       0.0% fastest      
  - uecs            15ms     29825ms 2001000 updates      14.7% slower       
  - perform-ecs     17ms     34710ms 2001000 updates      33.4% slower       
  - tiny-ecs        19ms     37733ms 2001000 updates      45.1% slower       
  - geotic (v4)     19ms     37806ms 2001000 updates      45.3% slower       
  - fastecs         20ms     40715ms 2001000 updates      56.5% slower       
  - nano-ecs        24ms     48451ms 2001000 updates      86.3% slower       
  - yagl-ecs        35ms     70012ms 2001000 updates     169.2% slower       
  - ape-ecs        113ms    226979ms 2001000 updates     772.6% slower       
  - geotic (v3)    397ms    794807ms 2001000 updates    2955.7% slower       
```
