import { World, System, Component, TagComponent, Types } from 'ecsy';

class Position extends Component {}

Position.schema = {
    x: {
        type: Types.Number,
        default: 0,
    },
    y: {
        type: Types.Number,
        default: 0,
    },
};

class Velocity extends Component {}

Velocity.schema = {
    dx: {
        type: Types.Number,
        default: 1.2,
    },
    dy: {
        type: Types.Number,
        default: 1.7,
    },
};

let updateCount = 0;

class MovementSystem extends System {
    execute() {
        this.queries.movement.results.forEach((entity) => {
            const velocity = entity.getComponent(Velocity);
            const position = entity.getMutableComponent(Position);

            position.x += velocity.dx;
            position.y += velocity.dy;

            updateCount++;
        });
    }
}

MovementSystem.queries = {
    movement: {
        components: [Velocity, Position],
    },
};

let i = 0;
export default {
    name: 'ecsy',
    setup() {
        this.world = new World();

        this.world.registerComponent(Position);
        this.world.registerComponent(Velocity);

        updateCount = 0;
        this.world.registerSystem(MovementSystem);
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
        this.world.execute();
    },
    getMovementSystemUpdateCount() {
        return updateCount;
    },
};
