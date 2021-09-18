import { World } from 'picoes';

class position {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

class velocity {
    constructor(dx = 1.2, dy = 1.7) {
        this.dx = dx;
        this.dy = dy;
    }
}

class MovementSystem {
    run() {
        this.world.each('position', 'velocity', ({ position, velocity }) => {
            position.x += velocity.dx;
            position.y += velocity.dy;
            ++this.state.updateCount;
        });
    }
}

export default {
    name: 'picoes',
    setup() {
        this.state = { updateCount: 0 };
        this.world = new World({
            components: { position, velocity },
            systems: [MovementSystem],
            context: { state: this.state },
        });
    },
    createEntity() {
        return this.world.entity();
    },
    addPositionComponent(entity) {
        entity.set('position');
    },
    addVelocityComponent(entity) {
        entity.set('velocity');
    },
    removePositionComponent(entity) {
        entity.remove('position');
    },
    removeVelocityComponent(entity) {
        entity.remove('velocity');
    },
    destroyEntity(entity) {
        entity.destroy();
    },
    cleanup() {
        this.world = null;
    },
    updateMovementSystem() {
        this.world.run();
    },
    getMovementSystemUpdateCount() {
        return this.state.updateCount;
    },
};
