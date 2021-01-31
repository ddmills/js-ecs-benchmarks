import { ECS, Component, makeComponent, System, EntityViewFactory } from 'perform-ecs';

class Position extends Component {
    x = 0;
    y = 0;

    reset() {
        this.x = 0;
        this.y = 0;
    }
};
class Velocity extends Component {
    dx = 1.2;
    dy = 1.7;

    reset() {
        this.dx = 1.2;
        this.dy = 1.7;
    }
};

makeComponent(Position);
makeComponent(Velocity);

class MovementSystem extends System {
    constructor() {
        super();
        this.view = EntityViewFactory.createView({
            components: [Position, Velocity],
        })
    }

    update() {
        this.view.entities.forEach((entity) => {
            entity.x += entity.dx;
            entity.y += entity.dy;
        });
    }
};

export default {
    name: 'perform-ecs',
    setup() {
        this.ecs = new ECS();
        this.movementSystem = new MovementSystem();
    },
    createEntity() {
        return this.ecs.createEntity([]);
    },
    addPositionComponent(entity) {
        this.ecs.addComponentsToEntity(entity, [{ component: Position }]);
    },
    addVelocityComponent(entity) {
        this.ecs.addComponentsToEntity(entity, [{ component: Velocity }]);
    },
    removePositionComponent(entity) {
        this.ecs.removeComponentsFromEntity(entity, [Position]);
    },
    removeVelocityComponent(entity) {
        this.ecs.removeComponentsFromEntity(entity, [Velocity]);
    },
    destroyEntity(entity) {
        this.ecs.removeEntity(entity);
    },
    cleanup() {
        this.ecs = null;
    },
    updateMovementSystem() {
        this.movementSystem.update();
    }
};
