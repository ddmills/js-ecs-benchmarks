# JS ECS Benchmarks

Pull requests are welcome! This project uses `node v14.15.4`.

**NOTE**: [ecsy](https://ecsy.io/) is included in this benchmarking suite, but it is EXTREMELY slow (tens of thousands of times slower) and it chokes on larger datasets. It can be included by uncommenting it from `/libraries/index.js`;

```
Suite Add/Remove (5000 iterations)
  - perform-ecs     64ms    318291ms  25010000 updates       0.0% fastest
  - uecs            66ms    328546ms  25010000 updates       3.2% slower
  - geotic (v4)     68ms    341473ms  25010000 updates       7.3% slower
  - yagl-ecs       142ms    707538ms  25010000 updates     122.3% slower
  - tiny-ecs       158ms    789408ms  25010000 updates     148.0% slower
  - nano-ecs       193ms    965761ms  25010000 updates     203.4% slower
  - ape-ecs        491ms   2456017ms  25010000 updates     671.6% slower
  - geotic (v3)   2373ms  11864955ms  25010000 updates    3627.7% slower

Suite Additions (100000 iterations)
  - yagl-ecs         1ms     75991ms       0.0% fastest
  - tiny-ecs         1ms    133518ms      75.7% slower
  - uecs             1ms    134372ms      76.8% slower
  - nano-ecs         2ms    172218ms     126.6% slower
  - perform-ecs      3ms    285350ms     275.5% slower
  - geotic (v4)      3ms    301703ms     297.0% slower
  - ape-ecs          5ms    525958ms     592.1% slower
  - geotic (v3)     11ms   1105976ms    1355.4% slower

Suite Destroy (100000 iterations)
  - tiny-ecs         2ms    183383ms       0.0% fastest
  - uecs             2ms    187951ms       2.5% slower
  - nano-ecs         3ms    252151ms      37.5% slower
  - perform-ecs      3ms    264102ms      44.0% slower
  - geotic (v4)      4ms    408021ms     122.5% slower
  - ape-ecs          6ms    633429ms     245.4% slower
  - geotic (v3)     13ms   1273478ms     594.4% slower
  - yagl-ecs        28ms   2764251ms    1407.4% slower

Suite Velocity (2000 iterations)
  - uecs            12ms     24330ms 2001000 updates       0.0% fastest
  - perform-ecs     14ms     28039ms 2001000 updates      15.2% slower
  - geotic (v4)     16ms     32880ms 2001000 updates      35.1% slower
  - yagl-ecs        28ms     56370ms 2001000 updates     131.7% slower
  - tiny-ecs        44ms     87638ms 2001000 updates     260.2% slower
  - nano-ecs        54ms    107031ms 2001000 updates     339.9% slower
  - ape-ecs        114ms    228994ms 2001000 updates     841.2% slower
  - geotic (v3)    413ms    826396ms 2001000 updates    3296.6% slower
```
