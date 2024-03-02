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
  - piecs           32ms    160964ms    25010000 updates       0.0% fastest
  - harmony-ecs     38ms    190127ms    25010000 updates      18.1% slower
  - wolf-ecs        42ms    208967ms    25010000 updates      29.8% slower
  - uecs            44ms    220170ms    25010000 updates      36.8% slower
  - perform-ecs     52ms    258500ms    25010000 updates      60.6% slower
  - bitecs          52ms    260959ms    25010000 updates      62.1% slower
  - javelin-ecs     61ms    302799ms    25010000 updates      88.1% slower
  - miniplex        66ms    332181ms    25010000 updates     106.4% slower
  - goodluck        95ms    475316ms    25010000 updates     195.3% slower
  - yagl-ecs       103ms    512644ms    25010000 updates     218.5% slower
  - tiny-ecs       121ms    605166ms    25010000 updates     276.0% slower
  - picoes         153ms    765603ms    25010000 updates     375.6% slower
  - nano-ecs       171ms    854997ms    25010000 updates     431.2% slower
  - geotic         251ms   1254544ms    25010000 updates     679.4% slower
  - ape-ecs        475ms   2375773ms    25010000 updates    1376.0% slower
  - ecsy          1831ms   9157038ms    25010000 updates    5588.9% slower

Suite Destroy (100000 iterations)
  - goodluck         0ms     17105ms       0.0% fastest
  - piecs            0ms     23574ms      37.8% slower
  - wolf-ecs         0ms     24390ms      42.6% slower
  - bitecs           1ms     88174ms     415.5% slower
  - uecs             1ms     95106ms     456.0% slower
  - miniplex         1ms    101520ms     493.5% slower
  - harmony-ecs      1ms    110036ms     543.3% slower
  - javelin-ecs      1ms    117501ms     586.9% slower
  - picoes           1ms    136197ms     696.2% slower
  - tiny-ecs         2ms    172166ms     906.5% slower
  - nano-ecs         2ms    220160ms    1187.1% slower
  - perform-ecs      2ms    231468ms    1253.2% slower
  - geotic           3ms    275307ms    1509.5% slower
  - ape-ecs          6ms    555421ms    3147.1% slower
  - yagl-ecs        16ms   1551402ms    8969.8% slower
  - ecsy            18ms   1810336ms   10483.5% slower

Suite Velocity (2000 iterations)
  - piecs            9ms     17715ms     2001000 updates       0.0% fastest
  - harmony-ecs     10ms     19220ms     2001000 updates       8.5% slower
  - uecs            11ms     21155ms     2001000 updates      19.4% slower
  - wolf-ecs        11ms     21406ms     2001000 updates      20.8% slower
  - bitecs          12ms     24346ms     2001000 updates      37.4% slower
  - geotic          14ms     27887ms     2001000 updates      57.4% slower
  - perform-ecs     15ms     29040ms     2001000 updates      63.9% slower
  - yagl-ecs        15ms     30627ms     2001000 updates      72.9% slower
  - goodluck        16ms     32466ms     2001000 updates      83.3% slower
  - javelin-ecs     18ms     35238ms     2001000 updates      98.9% slower
  - picoes          19ms     38281ms     2001000 updates     116.1% slower
  - miniplex        20ms     40951ms     2001000 updates     131.2% slower
  - tiny-ecs        26ms     51263ms     2001000 updates     189.4% slower
  - nano-ecs        42ms     84449ms     2001000 updates     376.7% slower
  - ape-ecs         90ms    180107ms     2001000 updates     916.7% slower
  - ecsy           399ms    797711ms     2001000 updates    4403.1% slower
```
