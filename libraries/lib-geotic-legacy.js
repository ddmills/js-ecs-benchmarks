import { Engine, Component } from 'geotic-legacy';

class Position extends Component {
    static properties = {
        x: 0,
        y: 0,
    };
}
class Velocity extends Component {
    static properties = {
        dx: 1.2,
        dy: 1.7,
    };
}

class MovementSystem {
    updateCount = 0;

    constructor(engine) {
        this.query = engine.createQuery({
            all: [Position, Velocity],
        });
    }

    update() {
        Array.from(this.query.get()).forEach((entity) => {
            entity.position.x += entity.velocity.dx;
            entity.position.y += entity.velocity.dy;
            this.updateCount++;
        });
    }
}

export default {
    name: 'geotic (v3)',
    setup() {
        this.engine = new Engine();

        this.engine.registerComponent(Position);
        this.engine.registerComponent(Velocity);

        this.movementSystem = new MovementSystem(this.engine);
    },
    createEntity() {
        return this.engine.createEntity();
    },
    addPositionComponent(entity) {
        entity.add(Position);
    },
    addVelocityComponent(entity) {
        entity.add(Velocity);
    },
    removePositionComponent(entity) {
        entity.remove(entity.position);
    },
    removeVelocityComponent(entity) {
        entity.remove(entity.velocity);
    },
    destroyEntity(entity) {
        entity.destroy();
    },
    cleanup() {
        this.engine = null;
    },
    updateMovementSystem() {
        this.movementSystem.update();
    },
    getMovementSystemUpdateCount() {
        return this.movementSystem.updateCount;
    },
};
