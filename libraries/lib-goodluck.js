import { WorldImpl } from 'goodluck';

const HAS_POSITION = 1 << 0;
const HAS_VELOCITY = 1 << 1;

class World extends WorldImpl {
    Position = [];
    Velocity = [];

    updateCount = 0;
}

function position(x, y) {
    return (world, entity) => {
        world.Signature[entity] |= HAS_POSITION;
        world.Position[entity] = { x, y };
    };
}

function velocity(dx, dy) {
    return (world, entity) => {
        world.Signature[entity] |= HAS_VELOCITY;
        world.Velocity[entity] = { dx, dy };
    };
}

const QUERY_MOVE = HAS_POSITION | HAS_VELOCITY;
function sys_move(world) {
    for (let entity = 0; entity < world.Signature.length; entity++) {
        if ((world.Signature[entity] & QUERY_MOVE) === QUERY_MOVE) {
            let entity_position = world.Position[entity];
            let entity_velocity = world.Velocity[entity];
            entity_position.x += entity_velocity.dx;
            entity_position.y += entity_velocity.dy;
            world.updateCount++;
        }
    }
}

export default {
    name: 'goodluck',
    setup() {
        this.world = new World();
    },
    createEntity() {
        return this.world.CreateEntity();
    },
    addPositionComponent(entity) {
        position(0, 0)(this.world, entity);
    },
    addVelocityComponent(entity) {
        velocity(1.2, 1.7)(this.world, entity);
    },
    removePositionComponent(entity) {
        this.world.Signature[entity] &= ~HAS_POSITION;
    },
    removeVelocityComponent(entity) {
        this.world.Signature[entity] &= ~HAS_VELOCITY;
    },
    destroyEntity(entity) {
        this.world.DestroyEntity(entity);
    },
    cleanup() {
        this.world = null;
    },
    updateMovementSystem() {
        sys_move(this.world);
    },
    getMovementSystemUpdateCount() {
        return this.world.updateCount;
    },
};
