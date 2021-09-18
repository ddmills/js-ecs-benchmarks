import ApeECS from 'ape-ecs';

class Position extends ApeECS.Component {
    static properties = {
        x: 0,
        y: 0,
    };
}

class Velocity extends ApeECS.Component {
    static properties = {
        dx: 1.2,
        dy: 1.7,
    };
}

let updateCount = 0;

class MovementSystem extends ApeECS.System {
    init() {
        this.query = this.createQuery()
            .fromAll('Position', 'Velocity')
            .persist();
    }

    update() {
        this.query.execute().forEach((entity) => {
            const position = entity.getOne('Position');
            const velocity = entity.getOne('Velocity');

            position.x += velocity.dx;
            position.y += velocity.dy;

            position.update();
            updateCount++;
        });
    }
}

export default {
    name: 'ape-ecs',
    setup() {
        this.world = new ApeECS.World();

        this.world.registerComponent(Position);
        this.world.registerComponent(Velocity);

        updateCount = 0;
        this.world.registerSystem('movement', MovementSystem);
    },
    createEntity() {
        return this.world.createEntity({});
    },
    addPositionComponent(entity) {
        entity.addComponent({ type: 'Position' });
    },
    addVelocityComponent(entity) {
        entity.addComponent({ type: 'Velocity' });
    },
    removePositionComponent(entity) {
        entity.removeComponent(entity.getOne('Position'));
    },
    removeVelocityComponent(entity) {
        entity.removeComponent(entity.getOne('Velocity'));
    },
    destroyEntity(entity) {
        entity.destroy();
    },
    cleanup() {
        this.world = null;
    },
    updateMovementSystem() {
        // this.world.tick();
        // this.world.updateIndexes();
        this.world.runSystems('movement');
    },
    getMovementSystemUpdateCount() {
        return updateCount;
    },
};
