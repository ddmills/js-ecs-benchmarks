import { createECS } from "hmecs";

let updateCount = 0


const movementSystem = (world) => {
    const movingEntities = world.archetype("position", "velocity")

    return () => {
        const entities = world.get(movingEntities)

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
        return this.world.immediately.addEntity({});
    },
    addPositionComponent(entity) {
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
