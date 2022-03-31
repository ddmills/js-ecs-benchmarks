import { World } from 'miniplex';

let updateCount = 0;

const movementSystem = (world) => {
    /* miniplex worlds expect us to register archetypes of entities that
       have a specific set of components. */
    const movingEntities = world.archetype('position', 'velocity');

    /* Return the system */
    return () => {
        /* Get the index for the archetype we created earlier. */
        const { entities } = movingEntities;
        const len = entities.length;

        /* Now apply the velocity to the position. */
        for (let i = 0; i < len; i++) {
            const { position, velocity } = entities[i];
            position.x += velocity.x;
            position.y += velocity.y;
            position.z += velocity.z;

            updateCount++;
        }
    };
};

export default {
    name: 'miniplex',
    setup() {
        this.world = new World();
        this.movementSystem = movementSystem(this.world);
    },
    createEntity() {
        return this.world.createEntity({});
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
        this.world.destroyEntity(entity);
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
