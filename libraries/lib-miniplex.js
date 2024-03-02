import { World } from 'miniplex';

let updateCount = 0;

const movementSystem = (world) => {
    let movingEntities;

    /* Return the system */
    return () => {
        movingEntities ||= world.with('position', 'velocity');

        /* Get the index for the archetype we created earlier. */
        const { entities } = movingEntities;

        /* Now apply the velocity to the position. */
        for (const { position, velocity } of entities) {
            position.x += velocity.x;
            position.y += velocity.y;
            position.z += velocity.z;

            updateCount++;
        }
    };
};

export default {
    name: 'miniplex',
    suites: ['Add/Remove', 'Destroy', 'Velocity'],
    setup() {
        this.world = new World();
        this.movementSystem = movementSystem(this.world);
    },
    createEntity() {
        return this.world.add({});
    },
    addPositionComponent(entity) {
        /* Entities are just JavaScript objects, and components just properties on
           those objects. In Typescript, you get full type checking of all your
           entities and components. TypeScript is great and you should use it! (But
           miniplex will happily work without it, too.) */
        this.world.addComponent(entity, {
            position: { x: 0, y: 0, z: 0 },
        });
    },
    addVelocityComponent(entity) {
        this.world.addComponent(entity, {
            velocity: { x: 1, y: 2, z: 3 },
        });
    },
    removePositionComponent(entity) {
        this.world.removeComponent(entity, 'position');
    },
    removeVelocityComponent(entity) {
        this.world.removeComponent(entity, 'velocity');
    },
    destroyEntity(entity) {
        this.world.remove(entity);
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
