import { Engine, Component } from 'geotic';

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

const engine = new Engine();

engine.registerComponent(Position);
engine.registerComponent(Velocity);

class MovementSystem {
    updateCount = 0;

    constructor(world) {
        this.query = world.createQuery({
            all: [Position, Velocity],
            immutableResult: false,
        });
    }

    update() {
        for (let entity of this.query.get()) {
            entity.position.x += entity.velocity.dx;
            entity.position.y += entity.velocity.dy;
            this.updateCount++;
        };
    }
}

export default {
    name: 'geotic',
    suites: ['Add/Remove', 'Destroy', 'Velocity'],
    setup() {
        this.world = engine.createWorld();

        this.movementSystem = new MovementSystem(this.world);
    },
    createEntity() {
        return this.world.createEntity();
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
        this.world.destroy();
        this.world = null;
    },
    updateMovementSystem() {
        this.movementSystem.update();
    },
    getMovementSystemUpdateCount() {
        return this.movementSystem.updateCount;
    },
};
