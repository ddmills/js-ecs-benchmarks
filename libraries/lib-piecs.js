import { World, createEntitySystem } from 'piecs/dist/index.mjs';

let updateCount = 0;

export default {
    name: 'piecs',
    setup() {
        this.world = new World();
        this.pos = {
            id: this.world.createComponentId(),
            x: new Float32Array(1e6),
            y: new Float32Array(1e6),
        };
        this.vel = {
            id: this.world.createComponentId(),
            x: new Float32Array(1e6),
            y: new Float32Array(1e6),
        };
        this.world
            .registerSystem(
                createEntitySystem(
                    (entities, _) => {
                        const pos = this.pos;
                        const vel = this.vel;
                        for (let i = 0, l = entities.length; i < l; i++) {
                            const entity = entities[i];
                            pos.x[entity] += vel.x[entity];
                            pos.y[entity] += vel.y[entity];
                            updateCount++;
                        }
                    },
                    (q) => q.every(this.pos, this.vel)
                )
            )
            .initialize();
    },
    createEntity() {
        return this.world.createEntity();
    },
    addPositionComponent(entity) {
        this.world.addComponent(entity, this.pos);
        this.pos.x[entity] = 100;
        this.pos.y[entity] = 100;
    },
    addVelocityComponent(entity) {
        this.world.addComponent(entity, this.vel);
        this.vel.x[entity] = 1.2;
        this.vel.y[entity] = 1.7;
    },
    removePositionComponent(entity) {
        this.world.removeComponent(entity, this.pos);
    },
    removeVelocityComponent(entity) {
        this.world.removeComponent(entity, this.vel);
    },
    destroyEntity(entity) {
        this.world.deleteEntity(entity);
    },
    cleanup() {
        updateCount = 0;
    },
    updateMovementSystem() {
        this.world.update();
    },
    getMovementSystemUpdateCount() {
        return updateCount;
    },
};
