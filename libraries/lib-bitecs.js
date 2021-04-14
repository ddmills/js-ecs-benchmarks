import World from 'bitecs';

let updateCount = 0;

export default {
    name: 'bitecs',
    setup() {
        this.world = World({ maxEntities: 3000000 });
        this.world.registerComponent('POSITION', {
            x: 'float32',
            y: 'float32',
        });
        this.world.registerComponent('VELOCITY', {
            vx: 'int8',
            vy: 'int8',
            speed: 'uint16',
        });
        this.world.registerSystem({
            name: 'MOVEMENT',
            components: ['POSITION', 'VELOCITY'],
            update: (POSITION, VELOCITY) => (entities) => {
                for (let i = 0; i < entities.length; i++) {
                    const eid = entities[i];
                    POSITION.x[eid] += VELOCITY.vx[eid] * VELOCITY.speed[eid];
                    POSITION.y[eid] += VELOCITY.vy[eid] * VELOCITY.speed[eid];
                    updateCount++;
                }
            },
        });
    },
    createEntity() {
        return this.world.addEntity();
    },
    addPositionComponent(entity) {
        this.world.addComponent('POSITION', entity, { x: 100, y: 100 });
    },
    addVelocityComponent(entity) {
        this.world.addComponent('VELOCITY', entity, {
            vx: 1,
            vy: -1,
            speed: 100,
        });
    },
    removePositionComponent(entity) {
        this.world.removeComponent('POSITION', entity);
    },
    removeVelocityComponent(entity) {
        this.world.removeComponent('VELOCITY', entity);
    },
    destroyEntity(entity) {
        this.world.removeEntity(entity);
    },
    cleanup() {
        updateCount = 0;
    },
    updateMovementSystem() {
        this.world.step();
    },
    geMovementSystemUpdateCount() {
        return updateCount;
    },
};
