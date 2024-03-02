import pkg from '@javelin/ecs';
const { World, createWorld, createQuery, number } = pkg;

let updateCount = 0;

const movementSystem = (world) => {
    let movingEntities = createQuery(Position, Velocity);

    /* Return the system */
    return () => {
        /* Now apply the velocity to the position. */
        for (const [entities, [positions, velocities]] of movingEntities.bind(world)) {
            for (let i = 0; i < entities.length; i++) {
                positions[i].x += velocities[i].x;
                positions[i].y += velocities[i].y;
                positions[i].z += velocities[i].z;

                updateCount++;
            }
        }
    };
};

const Velocity = {
    x: number,
    y: number,
    z: number
}
const Position = {
    x: number,
    y: number,
    z: number
}

export default {
    name: 'javelin-ecs',
    suites: ['Add/Remove', 'Destroy', 'Velocity'],
    setup() {
        this.world = createWorld();
        this.movementSystem = movementSystem(this.world);
        this.world.addSystem(movementSystem);
    },
    createEntity() {
        return this.world.create();
    },
    addPositionComponent(entity) {
        this.world.attach(entity, { x: 0, y: 0, z: 0 }, Position);
    },
    addVelocityComponent(entity) {
        this.world.attach(entity, { x: 1, y: 2, z: 3 }, Velocity);
    },
    removePositionComponent(entity) {
        this.world.detach(entity, Position);
    },
    removeVelocityComponent(entity) {
        this.world.detach(entity, Velocity);
    },
    destroyEntity(entity) {
        this.world.destroy(entity);
    },
    cleanup() {
        updateCount = 0;
        this.world = null;
        this.movementSystem = null;
    },
    updateMovementSystem() {
        this.movementSystem();
    },
    getMovementSystemUpdateCount() {
        return updateCount;
    },
};
