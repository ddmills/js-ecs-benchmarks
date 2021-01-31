# JS ECS Benchmarks

Pull requests are welcome! This project uses `node v14.15.4`.

**NOTE**: [ecsy](https://ecsy.io/) is included in this benchmarking suite, but it is EXTREMELY slow (tens of thousands of times slower) and it chokes on larger datasets. It can be included by uncommenting it from `/libraries/index.js`;

```
Suite Add/Remove (5000 iterations)
  - perform-ecs    181ms    906347ms  25010000 updates       0.0% fastest
  - geotic (v4)    197ms    982705ms  25010000 updates       8.4% slower
  - tiny-ecs       304ms   1518925ms  25010000 updates      67.6% slower
  - nano-ecs       369ms   1845070ms  25010000 updates     103.6% slower
  - yagl-ecs       495ms   2472841ms  25010000 updates     172.8% slower
  - ape-ecs       1401ms   7006492ms  25010000 updates     673.0% slower
  - geotic (v3)   5915ms  29574016ms  25010000 updates    3163.0% slower

Suite Additions (100000 iterations)
  - yagl-ecs         1ms     81113ms       0.0% fastest
  - tiny-ecs         2ms    151974ms      87.4% slower
  - nano-ecs         3ms    298216ms     267.7% slower
  - perform-ecs      3ms    311515ms     284.1% slower
  - geotic (v4)      4ms    364342ms     349.2% slower
  - ape-ecs          8ms    799566ms     885.7% slower
  - geotic (v3)     16ms   1634481ms    1915.1% slower

Suite Destroy (100000 iterations)
  - tiny-ecs         2ms    215069ms       0.0% fastest
  - perform-ecs      3ms    312278ms      45.2% slower
  - nano-ecs         4ms    421515ms      96.0% slower
  - geotic (v4)      7ms    733938ms     241.3% slower
  - ape-ecs          8ms    799019ms     271.5% slower
  - geotic (v3)     28ms   2785019ms    1194.9% slower
  - yagl-ecs        51ms   5052805ms    2249.4% slower

Suite Velocity (2000 iterations)
  - geotic (v4)     27ms     53558ms 2001000 updates       0.0% fastest
  - perform-ecs     35ms     69108ms 2001000 updates      29.0% slower
  - yagl-ecs        54ms    108313ms 2001000 updates     102.2% slower
  - tiny-ecs        59ms    117424ms 2001000 updates     119.2% slower
  - nano-ecs        80ms    159768ms 2001000 updates     198.3% slower
  - ape-ecs        329ms    657376ms 2001000 updates    1127.4% slower
  - geotic (v3)    887ms   1773194ms 2001000 updates    3210.8% slower
```
