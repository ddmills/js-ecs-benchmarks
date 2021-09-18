import ECS from 'yagl-ecs';

const Position = {
    name: 'position',
    defaults: {
        x: 0,
        y: 0,
    },
};

const Velocity = {
    name: 'velocity',
    defaults: {
        dx: 1.2,
        dy: 1.7,
    },
};

class MovementSystem extends ECS.System {
    updateCount = 0;

    test(entity) {
        return !!(entity.components.position && entity.components.velocity);
    }

    update(entity) {
        entity.components.position.x += entity.components.velocity.dx;
        entity.components.position.y += entity.components.velocity.dy;
        this.updateCount++;
    }
}

export default {
    name: 'yagl-ecs',
    setup() {
        this.ecs = new ECS();
        this.movementSystem = new MovementSystem();

        // need to create an entity so `Position` and `Velocity` are registered (?)
        new ECS.Entity(undefined, [Position, Velocity]);

        this.ecs.addSystem(this.movementSystem);
    },
    createEntity() {
        const entity = new ECS.Entity();

        this.ecs.addEntity(entity);

        return entity;
    },
    addPositionComponent(entity) {
        entity.addComponent('position');
    },
    addVelocityComponent(entity) {
        entity.addComponent('velocity');
    },
    removePositionComponent(entity) {
        entity.removeComponent('position');
    },
    removeVelocityComponent(entity) {
        entity.removeComponent('velocity');
    },
    destroyEntity(entity) {
        this.ecs.removeEntity(entity);
    },
    cleanup() {},
    updateMovementSystem() {
        this.ecs.update();
    },
    getMovementSystemUpdateCount() {
        return this.movementSystem.updateCount;
    },
};
