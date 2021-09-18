import { ECS, all, not, any, types as t } from 'wolf-ecs';

export default {
    name: 'wolf-ecs',
    setup() {
        this.updateCount = 0;
        this.ecs = new ECS(1e6);
        const vec = { x: t.f32, y: t.f32 };
        this.pos = this.ecs.defineComponent(vec);
        this.vel = this.ecs.defineComponent(vec);
        this.query = this.ecs.createQuery(this.pos, this.vel);

        this.sys = function () {
            const lpos = this.pos;
            const lvel = this.vel;
            for (let i = 0, l = this.query.archetypes.length; i < l; i++) {
                const arch = this.query.archetypes[i].entities;
                for (let j = 0, l = arch.length; j < l; j++) {
                    const id = arch[j];
                    lpos.x[id] += lvel.x[id];
                    lpos.y[id] += lvel.y[id];
                    this.updateCount++;
                }
            }
        };
    },

    createEntity() {
        return this.ecs.createEntity();
    },

    addPositionComponent(id) {
        this.ecs.addComponent(id, this.pos);
        this.pos.x[id] = 100;
        this.pos.y[id] = 100;
    },

    addVelocityComponent(id) {
        this.ecs.addComponent(id, this.vel);
        this.vel.x[id] = 1.2;
        this.vel.x[id] = 1.7;
    },

    removePositionComponent(id) {
        this.ecs.removeComponent(id, this.pos);
    },

    removeVelocityComponent(id) {
        this.ecs.removeComponent(id, this.vel);
    },

    destroyEntity(id) {
        this.ecs.destroyEntity(id);
    },

    cleanup() {
        this.updateCount = 0;
    },

    updateMovementSystem() {
        this.sys();
    },

    getMovementSystemUpdateCount() {
        return this.updateCount;
    },
};
