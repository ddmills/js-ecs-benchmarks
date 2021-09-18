import nano from 'nano-ecs';

function Position() {
    this.x = 0;
    this.y = 0;
}

function Velocity() {
    this.dx = 1.2;
    this.dy = 1.7;
}

class MovementSystem {
    updateCount = 0;

    constructor(world) {
        this.world = world;
    }

    update() {
        this.world.queryComponents([Position, Velocity]).forEach((entity) => {
            entity.position.x += entity.velocity.dx;
            entity.position.y += entity.velocity.dy;
            this.updateCount++;
        });
    }
}

export default {
    name: 'nano-ecs',
    setup() {
        this.world = nano();

        this.movementSystem = new MovementSystem(this.world);
    },
    createEntity() {
        return this.world.createEntity();
    },
    addPositionComponent(entity) {
        entity.addComponent(Position);
    },
    addVelocityComponent(entity) {
        entity.addComponent(Velocity);
    },
    removePositionComponent(entity) {
        entity.removeComponent(Position);
    },
    removeVelocityComponent(entity) {
        entity.removeComponent(Velocity);
    },
    destroyEntity(entity) {
        entity.remove();
    },
    cleanup() {
        this.world = null;
    },
    updateMovementSystem() {
        this.movementSystem.update();
    },
    getMovementSystemUpdateCount() {
        return this.movementSystem.updateCount;
    },
};
