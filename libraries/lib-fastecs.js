import { Component, World } from 'fastecs';

class PositionComponent extends Component {
    x = 0;
    y = 0;
}

class VelocityComponent extends Component {
    vx = 0;
    vy = 0;
}

class MovementSystem {
    updateCount = 0;

    constructor(world) {
        this.view = world.view(PositionComponent, VelocityComponent);
    }

    step() {
        this.view.each((entity, position, velocity) => {
            position.x += velocity.vx;
            position.y += velocity.vy;
            this.updateCount++;
        });
    }
}

export default {
    name: 'fastecs',
    setup() {
        this.world = new World({ maxEntities: 3000000 });
        this.world.registerComponent(PositionComponent);
        this.world.registerComponent(VelocityComponent);
        this.movement = new MovementSystem(this.world);
    },
    createEntity() {
        return this.world.createEntity();
    },
    addPositionComponent(entity) {
        this.world.addComponent(entity, PositionComponent);
    },
    addVelocityComponent(entity) {
        this.world.addComponent(entity, VelocityComponent);
    },
    removePositionComponent(entity) {
        this.world.removeComponent(entity, PositionComponent);
    },
    removeVelocityComponent(entity) {
        this.world.removeComponent(entity, VelocityComponent);
    },
    destroyEntity(entity) {
        this.world.destroyEntity(entity);
    },
    cleanup() {},
    updateMovementSystem() {
        this.movement.step();
    },
    getMovementSystemUpdateCount() {
        return this.movement.updateCount;
    },
};
