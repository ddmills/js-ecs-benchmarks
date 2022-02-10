import { createECS } from "hmecs";

let updateCount = 0

const movementSystem = (world) => {
    /* hmecs worlds expect us to register archetypes of entities that
       have a specific set of components. */
    const movingEntities = world.archetype("position", "velocity")

    /* Return the system */
    return () => {
        /* Get the index for the archetype we created earlier. */
        const entities = world.get(movingEntities)

        /* Now apply the velocity to the position. */
        for (let i = 0; i < entities.length; i++) {
            const { position, velocity } = entities[0]
            position.x += velocity.x
            position.y += velocity.y
            position.z += velocity.z

            updateCount++
        }
    }
}

export default {
    name: 'hmecs',
    setup() {
        this.world = createECS()
        this.movementSystem = movementSystem(this.world)
    },
    createEntity() {
        /* hmecs provides immediate and non-immediate versions of its primary functions.
           Since we're in a benchmark and we want to actually benchmark stuff, let's
           bypass the command queue and use the immediate versions. */
        return this.world.immediately.addEntity({});
    },
    addPositionComponent(entity) {
        /* Entities are just JavaScript objects, and components just properties on
           those objects. In Typescript, you get full type checking of all your
           entities and components. TypeScript is great and you should use it! (But
           hmecs will happily work without it, too.) */
        this.world.immediately.addComponent(entity, { position: { x: 0, y: 0, z: 0 }});
    },
    addVelocityComponent(entity) {
        this.world.immediately.addComponent(entity, { velocity: { x: 1, y: 2, z: 3 }});
    },
    removePositionComponent(entity) {
        this.world.immediately.removeComponent(entity, "position");
    },
    removeVelocityComponent(entity) {
        this.world.immediately.removeComponent(entity, "velocity");
    },
    destroyEntity(entity) {
        this.world.immediately.removeEntity(entity)
    },
    cleanup() {
        updateCount = 0
        this.world = null
        this.movementSystem = null
    },
    updateMovementSystem() {
        this.movementSystem()
    },
    getMovementSystemUpdateCount() {
        return updateCount
    },
};
