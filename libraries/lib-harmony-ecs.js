import { World, Schema, Entity, Query, formats } from 'harmony-ecs';

const Vector2 = { x: formats.float32, y: formats.float32 };

export default {
    name: 'harmony-ecs',
    setup() {
        this.updateCount = 0;
        this.world = World.make(1e6);
        this.Position = Schema.makeBinary(this.world, Vector2);
        this.Velocity = Schema.makeBinary(this.world, Vector2);
        this.query = Query.make(this.world, [this.Position, this.Velocity]);
    },

    createEntity() {
        return Entity.make(this.world);
    },

    addPositionComponent(id) {
        Entity.set(this.world, id, [this.Position], [{ x: 100, y: 100 }]);
    },

    addVelocityComponent(id) {
        Entity.set(this.world, id, [this.Velocity], [{ x: 1.2, y: 1.7 }]);
    },

    removePositionComponent(id) {
        Entity.unset(this.world, id, [this.Position]);
    },

    removeVelocityComponent(id) {
        Entity.unset(this.world, id, [this.Velocity]);
    },

    destroyEntity(id) {
        Entity.delete(this.world, id);
    },

    cleanup() {
        this.updateCount = 0;
    },

    updateMovementSystem() {
        for (let i = 0; i < this.query.length; i++) {
            const [e, [p, v]] = this.query[i];
            for (let j = 0; j < e.length; j++) {
                p.x[j] += v.x[j];
                p.y[j] += v.y[j];
                this.updateCount++;
            }
        }
    },

    getMovementSystemUpdateCount() {
        return this.updateCount;
    },
};
