import { Engine, Component } from 'geotic';

class Position extends Component {
    static properties = {
        x: 0,
        y: 0
    };
};
class Velocity extends Component {
    static properties = {
        dx: 1.2,
        dy: 1.7
    };
};

const engine = new Engine();

engine.registerComponent(Position);
engine.registerComponent(Velocity);

export default {
    name: 'geotic',
    setup() {
        this.world = engine.createWorld();

        this.movementQuery = this.world.createQuery({
            all: [Position, Velocity],
        });
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
        this.movementQuery.get().forEach((entity) => {
            entity.position.x += entity.velocity.dx;
            entity.position.y += entity.velocity.dy;
        });
    }
};
