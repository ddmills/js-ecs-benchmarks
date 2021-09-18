import {
    ECS,
    Component,
    makeComponent,
    System,
    EntityViewFactory,
} from 'perform-ecs';

class Position extends Component {
    x = 0;
    y = 0;

    reset() {
        this.x = 0;
        this.y = 0;
    }
}
class Velocity extends Component {
    dx = 1.2;
    dy = 1.7;

    reset() {
        this.dx = 1.2;
        this.dy = 1.7;
    }
}

makeComponent(Position);
makeComponent(Velocity);

class MovementSystem extends System {
    updateCount = 0;

    view = EntityViewFactory.createView({
        components: [Position, Velocity],
    });

    update() {
        this.view.entities.forEach((entity) => {
            entity.x += entity.dx;
            entity.y += entity.dy;
            this.updateCount++;
        });
    }
}

export default {
    name: 'perform-ecs',
    setup() {
        this.ecs = new ECS();
        this.movementSystem = new MovementSystem();

        this.ecs.registerSystem(this.movementSystem);
    },
    createEntity() {
        // for some reason, perform-ecs isn't picking up new entites
        // when these components are added later, so we add them now instead.
        return this.ecs.createEntity([
            { component: Position },
            { component: Velocity },
        ]);
    },
    addPositionComponent(entity) {
        // this doesn't seem to update in the system
        this.ecs.addComponentsToEntity(entity, [{ component: Position }]);
    },
    addVelocityComponent(entity) {
        // this doesn't seem to update in the system
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
        this.ecs.update();
    },
    getMovementSystemUpdateCount() {
        return this.movementSystem.updateCount;
    },
};
