import {
    createWorld,
    defineComponent,
    defineQuery,
    defineSystem,
    addComponent,
    removeComponent,
    addEntity,
    removeEntity,
    Types,
} from 'bitecs';

let updateCount = 0;

export default {
    name: 'bitecs',
    setup() {
        this.world = createWorld();

        const { f32, ui16 } = Types;
        const Vector2 = { x: f32, y: f32 };
        this.Position = defineComponent(Vector2);
        this.Velocity = defineComponent({ ...Vector2, speed: ui16 });

        this.query = defineQuery([this.Position, this.Velocity]);

        this.move = defineSystem((world) => {
            const ents = this.query(world);
            for (let i = 0; i < ents.length; i++) {
                const eid = ents[i];
                this.Position.x[eid] += this.Velocity.x[eid];
                this.Position.y[eid] += this.Velocity.y[eid];
                updateCount++;
            }
        });
    },
    createEntity() {
        return addEntity(this.world);
    },
    addPositionComponent(entity) {
        addComponent(this.world, this.Position, entity);
        this.Position.x[entity] = 100;
        this.Position.y[entity] = 100;
    },
    addVelocityComponent(entity) {
        addComponent(this.world, this.Velocity, entity);
        this.Velocity.x[entity] = 1.2;
        this.Velocity.x[entity] = 1.7;
    },
    removePositionComponent(entity) {
        removeComponent(this.world, this.Position, entity);
    },
    removeVelocityComponent(entity) {
        removeComponent(this.world, this.Velocity, entity);
    },
    destroyEntity(entity) {
        removeEntity(this.world, entity);
    },
    cleanup() {
        updateCount = 0;
    },
    updateMovementSystem() {
        this.move(this.world);
    },
    getMovementSystemUpdateCount() {
        return updateCount;
    },
};
