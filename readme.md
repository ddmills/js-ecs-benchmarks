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
-   [wolf-ecs](https://github.com/EnderShadow8/wolf-ecs)
-   [yagl-ecs](https://github.com/yagl/ecs)

Pull requests are welcome! This project uses `node v14.15.4`.

**NOTE**: [ecsy](https://ecsy.io/) is included in this benchmarking suite, but it is EXTREMELY slow (tens of thousands of times slower) and it chokes on larger datasets. It can be included by uncommenting it from `/libraries/index.js`;

```
Suite Add/Remove (5000 iterations)
  - fastecs         37ms    185522ms   15000 updates       0.0% fastest
  - wolf-ecs       106ms    532167ms25010000 updates     186.8% slower
  - bitecs         138ms    690383ms25010000 updates     272.1% slower
  - perform-ecs    202ms   1009431ms25010000 updates     444.1% slower
  - uecs           263ms   1314178ms25010000 updates     608.4% slower
  - geotic (v4)    281ms   1407350ms25010000 updates     658.6% slower
  - tiny-ecs       543ms   2716702ms25010000 updates    1364.4% slower
  - yagl-ecs       670ms   3347501ms25010000 updates    1704.4% slower
  - nano-ecs       967ms   4834511ms25010000 updates    2505.9% slower
  - ape-ecs       2742ms  13709605ms25010000 updates    7289.7% slower

Suite Additions (100000 iterations)
  - wolf-ecs         4ms    423641ms       0.0% fastest
  - yagl-ecs         5ms    490221ms      15.7% slower
  - bitecs           6ms    606964ms      43.3% slower
  - uecs             7ms    688536ms      62.5% slower
  - tiny-ecs         7ms    692329ms      63.4% slower
  - fastecs          9ms    891898ms     110.5% slower
  - nano-ecs        10ms    958823ms     126.3% slower
  - geotic (v4)     12ms   1165459ms     175.1% slower
  - perform-ecs     13ms   1298099ms     206.4% slower
  - ape-ecs         30ms   2952275ms     596.9% slower

Suite Destroy (100000 iterations)
  - wolf-ecs         4ms    424042ms       0.0% fastest
  - bitecs           8ms    827526ms      95.2% slower 
  - tiny-ecs        10ms    953715ms     124.9% slower 
  - uecs            10ms   1009898ms     138.2% slower 
  - nano-ecs        12ms   1157237ms     172.9% slower 
  - perform-ecs     12ms   1196294ms     182.1% slower 
  - fastecs         14ms   1426324ms     236.4% slower 
  - geotic (v4)     16ms   1628375ms     284.0% slower 
  - ape-ecs         27ms   2697122ms     536.1% slower 
  - yagl-ecs        92ms   9186462ms    2066.4% slower 

Suite Velocity (2000 iterations)
  - wolf-ecs        23ms     46579ms 2001000 updates       0.0% fastest
  - uecs            44ms     88875ms 2001000 updates      90.8% slower 
  - bitecs          70ms    139174ms 2001000 updates     198.8% slower
  - yagl-ecs        73ms    146691ms 2001000 updates     214.9% slower
  - tiny-ecs        76ms    152412ms 2001000 updates     227.2% slower
  - perform-ecs     84ms    168559ms 2001000 updates     261.9% slower
  - fastecs        103ms    206112ms 2001000 updates     342.5% slower
  - nano-ecs       184ms    368966ms 2001000 updates     692.1% slower
  - ape-ecs        365ms    730359ms 2001000 updates    1468.0% slower
  - geotic (v4)    390ms    779062ms 2001000 updates    1572.6% slower
```
